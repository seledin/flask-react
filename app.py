from flask import Flask, request, jsonify
from flask_cors import CORS

# set the project root directory as the static folder, you can set others.
# app = Flask(__name__,
#             static_url_path='',
#             static_folder='client/build')
app = Flask(__name__, static_folder='client/build')


# CORS(app)

# @app.route('/')
# def root():
#     return app.send_static_file('index.html')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

        
@app.route('/users/ping')
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })



if __name__ == '__main__':
    app.run()
