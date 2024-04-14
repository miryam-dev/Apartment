from flask import Blueprint, request, jsonify
import json
from pythonProject.Project.Action.ApartmentAct import ApartmentService
from pythonProject.Project.Models.ApartmentMod import ApartmentModel, ApartmentType

ApartmentRout = Blueprint('routesApartment', __name__)

@ApartmentRout.route('/',methods=['POST'])
def AddApartmentRoute():
 try:
    body = request.get_json()
    data = json.loads(body)
    apartment_model = ApartmentModel(
        data['neighborhood'],
        data['street'],
        data['num_build'],
        data['num_apartment'],
        data['num_rooms'],
        data['floor'],
        ApartmentType(data['apartmentType']),  # Convert to ApartmentType enum
        data['meters'],
        data['air_directions'],
        data['porch'],
        data['elevator'],
        data['yard'],
        data['furniture'],
        data['solar_heaters'],
        data['sukkah'],
        data['air_conditioner'],
        data['enter_date'],
        data['price'],
        data['flexible_price'],
        data['description'],
        data['start_hour'],
        data['end_hour'],
        data['takanon'],
        data['mail'],
    )
    if apartment_model:
        apartment = ApartmentService.add_apartment(apartment_model)
        if apartment is None:
            return jsonify({'error': 'apartment not added'}), 404
        return jsonify({'result': apartment})
    else:
        return jsonify({'error': 'apartment not added'}),404
 except (json.JSONDecodeError, KeyError) as e:
    print(f"Error parsing JSON or missing key: {e}")
    return jsonify({'error': 'apartment not added'}), 404


@ApartmentRout.route('/',methods=['PUT'])
def UpdateApartmentRoute():
    try:
        body = request.get_json()
        data = json.loads(body)
        apartment_model = ApartmentModel(
            data['neighborhood'],
            data['street'],
            data['num_build'],
            data['num_apartment'],
            data['num_rooms'],
            data['floor'],
            ApartmentType(data['apartmentType']),  # Convert to ApartmentType enum
            data['meters'],
            data['air_directions'],
            data['porch'],
            data['elevator'],
            data['yard'],
            data['furniture'],
            data['solar_heaters'],
            data['sukkah'],
            data['air_conditioner'],
            data['enter_date'],
            data['price'],
            data['flexible_price'],
            data['description'],
            data['start_hour'],
            data['end_hour'],
            data['takanon'],
            data['mail'],
        )
        if apartment_model:
            apartment = ApartmentService.update_apartment(apartment_model)
            if apartment is None:
                return jsonify({'error': 'apartment not updated'}), 404
            return jsonify({'result': apartment})
        else:
            return jsonify({'error': 'apartment not updated'}), 404
    except (json.JSONDecodeError, KeyError) as e:
        print(f"Error parsing JSON or missing key: {e}")
        return jsonify({'error': 'apartment not updated'}), 404



@ApartmentRout.route('/<int:apartment_id>', methods=['DELETE'])
def delete_apartment(apartment_id):
    apartment = ApartmentService.delete_apartment(apartment_id)
    if apartment is None:
        return jsonify({'error': 'apartment not found'}), 404
    return jsonify({'result': 'success'})



@ApartmentRout.route('/',methods=['GET'])
def getAllApartment():
    apartments = ApartmentService.get_all_apartments(self=ApartmentService);
    if apartments is None:
        return jsonify({'eror': 'no apartments found'}),404
    return jsonify({'result': apartments})


@ApartmentRout.route('/<string:mail>',methods=['GET'])
def getApartmentByUser(mail):
    apartments = ApartmentService.get_apartment_by_user(mail)
    if apartments is None:
        return jsonify({'eror': 'no apartments found'}),404
    return jsonify({'result': apartments})