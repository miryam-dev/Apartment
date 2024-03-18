# from Project.DB.UsersDB import userdb
from Project.Models.UserMod import UserModel
from typing import List

class UserService:


    def add_user(self, user: UserModel):
        # Added type hint for clarity
        pass

    def update_user(self, user_model: UserModel):  # Added type hint
        pass # Renamed for consistency

    def delete_user(self, mail: str):  # Added type hint
      pass
    def get_user_by_mail(self, mail: str) -> UserModel:  # Type hint for return
       pass # Assumed to return a UserModel

    def get_all_users(self) -> List[UserModel]:  # Type hint for return
        pass  # Assumed to return a list of UserModel
