import redis


class Rediser:
    """
    Store monthly data into redis
    """

    def __init__(self, host, port, auth):
        self.host = host
        self.port = port
        self.auth = auth

    def _conn(self):
        rdb = redis.StrictRedis(host=self.host, port=self.port, password=self.auth, decode_responses=True)
        return rdb

    def store_redis(self, data, name):
        # Cache data with year&month
        self._conn().setex(name, 600, data)
        # self._conn().execute_command('JSON.SET', name, '.', data)
        # self._conn().execute_command('JSON.DEL', 'monthCache' + name)

    def extract_redis(self, name):
        return self._conn().get(name)
        # return self._conn().execute_command('JSON.GET', name)
