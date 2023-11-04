from utils import env


class APIManager:
    def __init__(self):
        self._api_key: str = ""

        self.__set_api_key()

    def __set_api_key(self):
        self._api_key = env.get(self.__get_api_key_identifier())

    def __get_api_key_identifier(self) -> str:
        raise NotImplementedError(f"Please return the key used to store the api key for `{self}`")
