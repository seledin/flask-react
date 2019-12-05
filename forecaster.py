import pandas as pd
from fbprophet import Prophet
# import matplotlib.pyplot as plt


# pd.plotting.register_matplotlib_converters()

def gt_dataframe_forecaster(big_keywords_dataframe, timeframe_in='today 5-y', geo_in = 'US'):

    
    for keyword in big_keywords_dataframe.columns:

        tmp_dataframe = big_keywords_dataframe[[keyword]]
        tmp_dataframe.to_csv("Datasets/Historical Keyword: {} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in))
        tmp_dataframe = pd.read_csv("Datasets/Historical Keyword: {} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in), index_col=0)
        tmp_dataframe = tmp_dataframe.reset_index()
        tmp_dataframe.columns = ['ds', 'y']
        
        model = Prophet(daily_seasonality=False,
                        weekly_seasonality=False,
                        yearly_seasonality=True,
                        seasonality_mode='multiplicative')

        model.fit(tmp_dataframe)

        future = model.make_future_dataframe(periods=52, freq='W')
        forecast = model.predict(future)
        
        result = forecast[['ds', 'yhat']]
        
        result.columns = ['date', keyword]
        result.to_csv("Datasets/Forecasted Keyword:{} ||Timeframe: {} || Location: {}.csv".format(keyword, timeframe_in, geo_in))
