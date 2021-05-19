import json
import os
import re

import yaml
from flask import Flask, jsonify, make_response, request
from flask_cors import cross_origin

from utils import Monger

app = Flask(__name__)

with open(os.path.join(os.path.dirname(__file__), 'translation.json'), encoding='utf-8') as configFile:
    words = json.load(configFile)
    translation = words['locale']

with open('init.yaml') as f:
    params = yaml.load(f, Loader=yaml.FullLoader)
    paramM = params['mongodb'][0]
    paramR = params['redis'][0]
    url, port, auth, dbname, collection, case, utc = paramM['url'], paramM['port'], paramM['auth'], paramM['dbname'], \
                                                     paramM['collection'], paramM['case'], paramM['utc']
    hostR, portR, authR = paramR['host'], paramR['port'], paramR['auth']


@app.route('/')
def index():
    return "Hello World"


@app.route('/api/<year>/<month>', methods=['POST'])
@cross_origin()
# @TODO(code): fix this long code...
def api(year, month):
    data = Monger(url, port, dbname, auth, collection, case, utc, hostR, portR, authR, translation[year],
                  translation[month]).index_data()

    # Get form content

    def sort_display(arr, req, name):
        reverse = None
        if req.form.get(name) == 'DESC':
            reverse = True
        elif req.form.get(name) == 'ASC':
            reverse = False
        if reverse is not None:
            arr.sort(key=lambda x: x[name[5:]], reverse=reverse)

    def search_display(arr, cases, attr):
        # store search cases
        cTemp = []
        aTemp = []
        for i in range(len(cases)):
            if len(cases[i]) > 0:
                cTemp.append(cases[i])
                aTemp.append(attr[i])
        temp = []
        resTemp = []
        # @TODO(code):rubbish
        if len(cTemp) > 1:
            for c in range(len(cTemp)):
                if c == 0:
                    for a in arr:
                        if re.search(cTemp[c], a[aTemp[c]]):
                            temp.append(a)
                elif len(cTemp) > 1:
                    for t in temp:
                        if re.search(cTemp[c], t[aTemp[c]]):
                            resTemp.append(t)
            return resTemp
        else:
            for a in arr:
                if re.search(cTemp[0], a[aTemp[0]]):
                    temp.append(a)
            return temp

    sort_display(data, request, 'sort_times')
    cPage = int(request.form.get('cPage'))
    pSize = int(request.form.get('pSize'))
    res = data[(cPage - 1) * pSize: cPage * pSize]
    if (request.form.get('group') or request.form.get('operators')) is not None:
        if len(request.form.get('group')) > 0 or len(request.form.get('operators')) > 0:
            search = [request.form.get('group'), request.form.get('operators')]
            attribute = ['group', 'operators']
            res = search_display(data, search, attribute)[(cPage - 1) * pSize: cPage * pSize]
    apiValue = {
        'status': 'success',
        'totals': len(data),
        'data': res
    }
    response = make_response(apiValue)
    return response


if __name__ == '__main__':
    app.run('172.31.30.21', 5000, debug=True)
