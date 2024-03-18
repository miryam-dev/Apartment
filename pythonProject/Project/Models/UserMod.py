from typing import List  # For type hinting (optional)
from Project.Models.MessegeMod import MessegeModel


class UserModel:
    def __init__(self, first_name: str, last_name: str, mail: str, phon: str, password: str):
        self.first_name = first_name
        self.last_name = last_name
        self.mail = mail
        self.phon = phon
        self.password = password
        self.messages: List[MessegeModel] = []  # List of MessegeModel objects

