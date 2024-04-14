# from Project.DB.ApartmentDB import  apartmentdb # Assuming Apartmentdb is in a folder named "db"
from ..Models.ApartmentMod import Apartment
from ..app import session

class ApartmentService:
    def add_apartment(self,id ,neighborhood ,street ,num_apartment,num_rooms ,floor , apartmentType , meters,air_directions
                      , porch , elevator , yard , furniture, solar_heaters, sukkah ,air_conditioner,enter_date,price
                      ,flexible_price ,description,start_hour , end_hour,takanon,user_mail ):
    def delete_apartment(self, apartmentId):
        pass

    def get_all_apartments(self):
        # Implement logic to retrieve all apartments from the database
        # (specific implementation depends on your database library)
        pass

    def get_apartment_by_user(self):
        # Implement logic to retrieve apartments based on user information
        # (specific implementation depends on your requirements)
        pass

# import pythonProject.Project.app as app_module
# db = app_module.db
#
# from pythonProject.Project.Models.ApartmentMod import Apartment
#
# def create_apartment(title, description, price):
#     new_apartment = Apartment(title=title, description=description, price=price)
#     db.session.add(new_apartment)
#     db.session.commit()


