from flask import  Flask
from Project.Routes.ApartmentRoutes import ApartmentRout
from Project.Routes.UserRoutes import UserRout
from Project.Routes.MessegeRoutes import MessegeRout

app = Flask(__name__)

app.register_blueprint(ApartmentRout, url_prefix='/api/apartments')


app.register_blueprint(UserRout, url_prefix='/api/users')


app.register_blueprint(MessegeRout, url_prefix='/api/messages')
if __name__ == '__main__':
    app.run(debug=True)




