from pytrends.request import TrendReq

def gt_data_extractor(kw_list_in = ['GAF'], timeframe_in = 'today 5-y', geo_in = 'US'):
    
    """Takes GT date and returns pandas DF out of them"""
    
    pytrends = TrendReq(hl='en-US', tz=360)
    pytrends.build_payload(kw_list = kw_list_in, cat = 0, timeframe = timeframe_in, geo = geo_in, gprop = '')
    keyword_dataframe = pytrends.interest_over_time()
    keyword_dataframe = keyword_dataframe.drop(columns=['isPartial'])
    return keyword_dataframe


