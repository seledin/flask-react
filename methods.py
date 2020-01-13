import datetime as DT
from datetime import date
import numpy as np
from fbprophet import Prophet
import pandas as pd
from pytrends.request import TrendReq
import math

# External inputs:
KEYWORDS = ['GAF', 'Owens', 'Roof repair']
GEO_IN = 'US'


def gt_data_extractor(kw_list_in=['GAF'], timeframe_in='today 5-y', geo_in='US'):
    """Takes GT date and returns pandas DF out of them"""

    pytrends = TrendReq(hl='en-US', tz=360)
    pytrends.build_payload(kw_list=kw_list_in, cat=0,
                           timeframe=timeframe_in, geo=geo_in, gprop='')
    keyword_dataframe = pytrends.interest_over_time()
    keyword_dataframe = keyword_dataframe.drop(columns=['isPartial'])
    return keyword_dataframe


def BB_evaluator(time_series, keyword, span_manual):

    time_series['{} Day STD for {}'.format(span_manual, keyword)] = time_series[keyword].rolling(
        window=span_manual).std()
    time_series['{} Day MA for {}'.format(span_manual, keyword)] = time_series[keyword].rolling(
        window=span_manual).mean()
    time_series['Upper Band for {}'.format(keyword)] = time_series['{} Day MA for {}'.format(
        span_manual, keyword)] + (time_series['{} Day STD for {}'.format(span_manual, keyword)] * 2)
    time_series['Lower Band for {}'.format(keyword)] = time_series['{} Day MA for {}'.format(
        span_manual, keyword)] - (time_series['{} Day STD for {}'.format(span_manual, keyword)] * 2)
    return time_series

def BB_evaluator2(time_series, keyword, span_manual):

    time_series['{} Day STD'.format(span_manual)] = time_series[keyword].rolling(
        window=span_manual).std()
    time_series['{} Day MA'.format(span_manual)] = time_series[keyword].rolling(
        window=span_manual).mean()
    time_series['Upper Band'] = time_series['{} Day MA'.format(
        span_manual)] + (time_series['{} Day STD'.format(span_manual)] * 2)
    time_series['Lower Band'] = time_series['{} Day MA'.format(
        span_manual)] - (time_series['{} Day STD'.format(span_manual)] * 2)

    return time_series


# def keyword_forecaster_v1(big_keywords_dataframe=gt_data_extractor(kw_list_in=KEYWORDS, geo_in=GEO_IN),
#                           timeframe_in='today 5-y',
#                           geo_in='US',
#                           span_manual=5,
#                           gt_delay=7,
#                           forecast_time_lead=5):
def keyword_forecaster_v1(kw_list_in, region_state=GEO_IN):

    big_keywords_dataframe=gt_data_extractor(kw_list_in, geo_in=region_state)
    timeframe_in='today 5-y'
    geo_in='US'
    span_manual=5
    gt_delay=7
    forecast_time_lead=4

    cols_p = ['Keyword', 'Projected growth in 5 weeks for {} (for all keywords) [%]'.format(geo_in),
              'Projected growth in 5 weeks for {} (for one keyword) [%]'.format(geo_in)]
    lst_p = []

    cols_g = ['Keyword', 'Growth_Rate_0_1', 'Growth_Rate_0_2',
              'Growth_Rate_0_3', 'Growth_Rate_1_2', 'Growth_Rate_2_3']
    lst_g = []

    today = date.today()
    current_day = today.strftime("%Y-%m-%d")
    two_week_ago = today - DT.timedelta(days=gt_delay)

    counter = 0
    dictionary = {}

    for keyword in big_keywords_dataframe.columns:

        MA = '{} Day MA for {}'.format(span_manual, keyword)

        tmp_dataframe = big_keywords_dataframe[[keyword]]
        historical_keyword = big_keywords_dataframe[[keyword]]
        tmp_dataframe = tmp_dataframe.reset_index()
        tmp_dataframe.columns = ['ds', 'y']

        model = Prophet(daily_seasonality=False,
                        weekly_seasonality=False,
                        yearly_seasonality=True,
                        seasonality_mode='multiplicative')
        model.fit(tmp_dataframe)

        future = model.make_future_dataframe(periods=52, freq='W')
        forecast = model.predict(future)
        forecasted_keyword = forecast[['ds', 'yhat']]

        forecasted_keyword.columns = ['date', keyword]
        forecasted_keyword = forecasted_keyword.set_index('date')

        forecasted_keyword = BB_evaluator(
            forecasted_keyword, keyword, span_manual)
        historical_keyword = BB_evaluator(
            historical_keyword, keyword, span_manual)

        forecasted_keyword = forecasted_keyword[(
            forecasted_keyword.index > current_day)]
        historical_keyword = historical_keyword[(
            historical_keyword.index < current_day)]

        if counter == 0:
            final_dataframe_historical = historical_keyword
            final_dataframe_forecasted = forecasted_keyword
        else:
            final_dataframe_historical = pd.merge(
                final_dataframe_historical, historical_keyword, on='date')
            final_dataframe_forecasted = pd.merge(
                final_dataframe_forecasted, forecasted_keyword, on='date')


        dictionary[keyword] = final_dataframe_historical
        dictionary[keyword+"F"] = final_dataframe_forecasted

        counter += 1

        ### rankers embedding build ###

        difference_growth_all = round(
            forecasted_keyword[keyword][forecast_time_lead] - historical_keyword[MA][-2], 2)

        difference_growth_single = round(
            100 * (forecasted_keyword[keyword][forecast_time_lead] - historical_keyword[MA][-2]) / historical_keyword[MA][-2], 2)

        ranking_output = [keyword,  difference_growth_all,
                          difference_growth_single]
        lst_p.append([keyword, difference_growth_all,
                      difference_growth_single])

        Growth_Rate_0_1 = round(
            math.log(forecasted_keyword[keyword][1]/historical_keyword[keyword][-1]), 2)
        Growth_Rate_0_2 = round(
            math.log(forecasted_keyword[keyword][2]/historical_keyword[keyword][-1]), 2)
        Growth_Rate_0_3 = round(
            math.log(forecasted_keyword[keyword][3]/historical_keyword[keyword][-1]), 2)
        Growth_Rate_1_2 = round(
            math.log(forecasted_keyword[keyword][2]/forecasted_keyword[keyword][1]), 2)
        Growth_Rate_2_3 = round(
            math.log(forecasted_keyword[keyword][3]/forecasted_keyword[keyword][2]), 2)

        ranking_output = [keyword, Growth_Rate_0_1, Growth_Rate_0_2,
                          Growth_Rate_0_3, Growth_Rate_1_2, Growth_Rate_2_3]
        lst_g.append(ranking_output)

    growth_rate_result = pd.DataFrame(lst_g, columns=cols_g)

    projected_growth_result = pd.DataFrame(lst_p, columns=cols_p)
    projected_growth_result = projected_growth_result.reset_index(drop=True)
    projected_growth_result.index = projected_growth_result.index + 1

    dictionary["projected_growth_result"] = projected_growth_result
    dictionary["growth_rate_result"] = growth_rate_result

    # final_dataframe_forecasted.to_json('output_f.json')
    # final_dataframe_historical.to_json('output_h.json')

    # return final_dataframe_historical, final_dataframe_forecasted, projected_growth_result, growth_rate_result
    # return projected_growth_result
    # return final_dataframe_historical
    return dictionary
