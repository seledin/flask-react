import numpy as np
import pandas as pd
import math
from datetime import date
import datetime as DT



def keyword_growth_rate_ranker(kw_list_in=['GAF'], timeframe_in='today 5-y', geo_in='US', span_in=10, delay_in=14):

    today = date.today()
    current_day = today.strftime("%Y-%m-%d")
    two_week_ago = today - DT.timedelta(days=delay_in)
    span_manual = span_in

    cols = ['Keyword', 'Growth_Rate_0_1', 'Growth_Rate_0_2', 'Growth_Rate_0_3', 'Growth_Rate_1_2', 'Growth_Rate_2_3']
    lst = []
    
    
    for keyword in kw_list_in.columns:
        historical_keyword = pd.read_csv(
            "Datasets/Historical Keyword: {} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in), index_col=0)
        historical_keyword[keyword] = pd.Series.ewm(
            historical_keyword[keyword], span=span_manual).mean()
        historical_keyword = historical_keyword.reset_index()
        historical_keyword['date'] = pd.to_datetime(historical_keyword['date'])
        historical_keyword = historical_keyword.set_index('date')

        forecasted_keyword = pd.read_csv(
            "Datasets/Forecasted Keyword:{} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in), index_col=1)
        forecasted_keyword = forecasted_keyword.drop(['Unnamed: 0'], axis=1)
        forecasted_keyword = forecasted_keyword.reset_index()
        forecasted_keyword['date'] = pd.to_datetime(forecasted_keyword['date'])

        forecasted_keyword = forecasted_keyword[(
            forecasted_keyword['date'] >= two_week_ago)]

        forecasted_keyword = forecasted_keyword.set_index(
            forecasted_keyword['date'])
        forecasted_keyword = forecasted_keyword.drop(['date'], axis=1)



        historical = historical_keyword[(
            historical_keyword.index <= current_day)]

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
        
        ranking_output = [keyword, Growth_Rate_0_1, Growth_Rate_0_2, Growth_Rate_0_3, Growth_Rate_1_2, Growth_Rate_2_3]
        lst.append(ranking_output)
    projected_growth_result = pd.DataFrame(lst, columns=cols)

    return projected_growth_result


def keyword_projected_growth_ranker(kw_list_in=['GAF'], timeframe_in='today 5-y', geo_in='US', span_in=10, delay_in=14, forecast_time_lead=5):

    today = date.today()
    current_day = today.strftime("%Y-%m-%d")
    two_week_ago = today - DT.timedelta(days=delay_in)
    span_manual = span_in

    cols = ['Keyword', 'Projected growth in 5 weeks for {} (for all keywords) [%]'.format(geo_in),
            'Projected growth in 5 weeks for {} (for one keyword) [%]'.format(geo_in)]
    lst = []
    
    
    for keyword in kw_list_in.columns:
        historical_keyword = pd.read_csv(
            "Datasets/Historical Keyword: {} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in), index_col=0)
        historical_keyword[keyword] = pd.Series.ewm(
            historical_keyword[keyword], span=span_manual).mean()
        historical_keyword = historical_keyword.reset_index()
        historical_keyword['date'] = pd.to_datetime(historical_keyword['date'])
        historical_keyword = historical_keyword.set_index('date')

        forecasted_keyword = pd.read_csv(
            "Datasets/Forecasted Keyword:{} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in), index_col=1)
        forecasted_keyword = forecasted_keyword.drop(['Unnamed: 0'], axis=1)
        forecasted_keyword = forecasted_keyword.reset_index()
        forecasted_keyword['date'] = pd.to_datetime(forecasted_keyword['date'])

        forecasted_keyword = forecasted_keyword[(
            forecasted_keyword['date'] >= two_week_ago)]

        forecasted_keyword = forecasted_keyword.set_index(
            forecasted_keyword['date'])
        forecasted_keyword = forecasted_keyword.drop(['date'], axis=1)

       # forecasted = forecasted_keyword

        historical = historical_keyword[(
            historical_keyword.index <= current_day)]

       # actual = historical_keyword
        
        difference_growth_all = round(forecasted_keyword[keyword][forecast_time_lead] - historical_keyword[keyword][-2], 2)
        
        difference_growth_single = round(100 * (forecasted_keyword[keyword][forecast_time_lead] - historical_keyword[keyword][-2]) / historical_keyword[keyword][-2], 2)
        
        ranking_output = [keyword,  difference_growth_all, difference_growth_single]
        lst.append([keyword, difference_growth_all, difference_growth_single] )
        
    projected_growth_result = pd.DataFrame(lst, columns=cols)
    projected_growth_result = projected_growth_result.reset_index(drop=True)
    projected_growth_result.index = projected_growth_result.index + 1
    
    return projected_growth_result