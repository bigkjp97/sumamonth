from flask import Flask, make_response, request
from flask_cors import cross_origin

from utils import *

app = Flask(__name__)


@app.route('/')
def index():
    return "Hello World"


@app.route('/api/<year>/<month>', methods=['POST'])
@cross_origin()
# @TODO(code): fix this long code...
def api(year, month):
    T = controller.Translate('translation.json', 'digits')
    D = controller.Display(request)
    data = db.Monger('init.yaml', T.translate(year), T.translate(month)).index_data()
    # Get form content
    D.sort_display(data, 'sort_times')
    res = D.page_display(data, 'cPage', 'pSize')
    if (request.form.get('group') or request.form.get('operators')) is not None:
        if len(request.form.get('group')) > 0 or len(request.form.get('operators')) > 0:
            res = D.page_display(D.search_display(data, ['group', 'operators']), 'cPage', 'pSize')
    apiValue = {
        'status': 'success',
        'totals': len(data),
        'data': res
    }
    response = make_response(apiValue)
    return response


if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True)
