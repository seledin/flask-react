from flask import Flask, request, jsonify
from pytrends.request import TrendReq
from flask_cors import CORS, cross_origin

import json


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/keywords', methods=['POST'])
@cross_origin()
def keywords():
    keywords = request.json['keywords']
    region_state = request.json['region_state'].upper()
    time_frame = request.json['time_frame']

    pytrend = TrendReq()
    pytrend.build_payload(kw_list=keywords, timeframe=time_frame, geo=region_state)
    
    interest_over_time_df = pytrend.interest_over_time()

    return json.loads(interest_over_time_df.to_json(orient='columns', date_format='iso'))


@app.route('/', methods=['POST'])
def echo2():
    # x =  '{ "name":"John", "age":30, "city":"New York"}'
    # keywords = ["k1","k2"]
    keywords = request.json['keywords']
    geo_in='US'
    demo_keywords = gt_data_extractor(kw_list_in=keywords, geo_in=geo_in)
    gt_dataframe_forecaster(demo_keywords, geo_in=geo_in)
    h= gt_forecast_comparator_v11(demo_keywords,geo_in=geo_in,span_in=5)


    dictionary = {}

    for keyword in keywords:
        dictionary[keyword] = h[keyword].to_dict()
        k = keyword + "F"
        dictionary[k] = h[k].to_dict()

    result = pd.DataFrame.from_dict(dictionary)


    return json.loads(result.to_json(orient='columns', date_format='iso'))

if __name__ == '__main__':
    app.run()