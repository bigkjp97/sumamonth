import re


class Display:
    """
    Use post content to display data
    """

    def __init__(self, req):
        self.req = req

    def page_display(self, arr, page, size):
        p = int(self.req.form.get(page))
        s = int(self.req.form.get(size))
        return arr[(p - 1) * s: p * s]

    def sort_display(self, arr, name):
        reverse = None
        if self.req.form.get(name) == 'DESC':
            reverse = True
        elif self.req.form.get(name) == 'ASC':
            reverse = False
        if reverse is not None:
            arr.sort(key=lambda x: x[name[5:]], reverse=reverse)

    def search_display(self, arr, name):
        cases = []
        # store search cases
        for n in name:
            cases.append(self.req.form.get(n))
        cTemp = []
        aTemp = []
        for i in range(len(cases)):
            if len(cases[i]) > 0:
                cTemp.append(cases[i])
                aTemp.append(name[i])
        temp = []
        resTemp = []
        for a in arr:
            if re.search(cTemp[0], a[aTemp[0]]):
                temp.append(a)
        if len(cTemp) > 1:
            for c in range(1, len(cTemp)):
                for t in temp:
                    if re.search(cTemp[c], t[aTemp[c]]):
                        resTemp.append(t)
            return resTemp
        else:
            return temp
