from flask import Flask, request, jsonify
from flask_cors import CORS
from methods import keyword_forecaster_v1
import pandas as pd
import json

# set the project root directory as the static folder, you can set others.
app = Flask(__name__,
            static_url_path='',
            static_folder='client/build')
# app = Flask(__name__, static_folder='client/build')


CORS(app)

@app.route('/')
def root():
    return app.send_static_file('index.html')

# Serve React App
# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def serve(path):
#     if path != "" and os.path.exists(app.static_folder + '/' + path):
#         return send_from_directory(app.static_folder, path)
#     else:
#         return send_from_directory(app.static_folder, 'index.html')


@app.route('/users/ping')
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })

@app.route('/new', methods=['POST'])
def echo_new():
    keywords = request.json['keywords']
    state = request.json['region_state']

    print("$$$$")
    print(state)
    d = keyword_forecaster_v1(kw_list_in=keywords, region_state=state)

    dictionary = {}

    for keyword in keywords:
        dictionary[keyword] = d[keyword].to_dict()
        k = keyword + "F"
        dictionary[k] = d[k].to_dict()

    dictionary["projected_growth_result"] = d["projected_growth_result"].to_dict()
    dictionary["growth_rate_result"] = d["growth_rate_result"].to_dict()

    result = pd.DataFrame.from_dict(dictionary)

    # return json.loads(result.to_json(orient='columns', date_format='iso'))
    return (result.to_json(orient='columns', date_format='iso'))

    

if __name__ == '__main__':
    app.run()
