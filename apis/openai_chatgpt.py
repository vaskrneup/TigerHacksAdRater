from apis.manager import APIManager


class OpenAIChatGptAPI(APIManager):
    def __init__(self):
        super().__init__()

    def get_api_key_identifier(self) -> str:
        pass
