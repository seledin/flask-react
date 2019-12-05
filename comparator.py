# import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from datetime import date
import datetime as DT
# from matplotlib import pyplot as pl


def BB_evaluator(time_series, keyword, span_manual):

    time_series['{} Day STD'.format(span_manual)] = time_series[keyword].rolling(
        window=span_manual).std()
    time_series['{} Day MA'.format(span_manual)] = time_series[keyword].rolling(
        window=span_manual).mean()
    time_series['Upper Band'] = time_series['{} Day MA'.format(
        span_manual)] + (time_series['{} Day STD'.format(span_manual)] * 2)
    time_series['Lower Band'] = time_series['{} Day MA'.format(
        span_manual)] - (time_series['{} Day STD'.format(span_manual)] * 2)

    return time_series

def gt_forecast_comparator_v11(kw_list_in=['GAF'], timeframe_in='today 5-y', geo_in='US', span_in=10, delay_in=7, combined=False):

    today = date.today()
    current_day = today.strftime("%Y-%m-%d")
    two_week_ago = today - DT.timedelta(days=delay_in)
    span_manual = span_in

    i = 0
    color_list = ["C0", "C3", "C1", "C2", "C4"]
    current_linestyle = '-'

    dictionary = {}
    result = []

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

        forecasted_keyword = BB_evaluator(
            forecasted_keyword, keyword, span_manual)

        forecasted_keyword = forecasted_keyword[(
            forecasted_keyword['date'] > two_week_ago)]

        forecasted_keyword = forecasted_keyword.set_index(
            forecasted_keyword['date'])
        forecasted_keyword = forecasted_keyword.drop(['date'], axis=1)

        historical_keyword = BB_evaluator(
            historical_keyword, keyword, span_manual)

        historical = historical_keyword[(
            historical_keyword.index < current_day)]


        
        if combined == True:
            frames = [historical_keyword, forecasted_keyword]
            result = pd.concat(frames)
            result.to_json("Outputs/Forecasts/{} keyword.json".format(keyword))
        else:
            dictionary[keyword] = historical_keyword
            dictionary[keyword+"F"] = forecasted_keyword
            historical_keyword.to_json("Outputs/Forecasts/Historical {} keyword.json".format(keyword))
            forecasted_keyword.to_json("Outputs/Forecasts/Forecasted {} keyword.json".format(keyword))

            historical_keyword.to_json("Outputs/Forecasts/{}.json".format(keyword))
            forecasted_keyword.to_json("Outputs/Forecasts/{}F.json".format(keyword))
        i += 1
    return dictionary