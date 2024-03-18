from flask import Blueprint, request, jsonify
import json
from Project.Action.UserAct import UserService
from Project.Models.UserMod import UserModel

UserRout = Blueprint('routesUser', __name__)


@UserRout.route('/', methods=['POST'])
def AaddUser():
    try:
        body = request.get_json()
        data = json.loads(body)
        user_model = UserModel(
            data['first_name'], data['last_name'], data['mail'], data['phon'], data['password'], data['messages']
        )
        if user_model:
            user = UserService.add_user(user_model)
            if user is None:
                return jsonify({'error': 'user not added'}), 404
            return jsonify({'result': user})
        else:
            return jsonify({'error': 'user not added'}), 404
    except (json.JSONDecodeError, KeyError) as e:
        print(f"Error parsing JSON or missing key: {e}")
        return jsonify({'error': 'uesr not added'}), 404


@UserRout.route('/', methods=['PUT'])
def UpdateUser():
    try:
        body = request.get_json()
        data = json.loads(body)
        user_model = UserModel(
            data['first_name'], data['last_name'], data['mail'], data['phon'], data['password'], data['messages']
        )
        if user_model:
            user = UserService.update_user(user_model)
            if user is None:
                return jsonify({'error': 'user not updated'}), 404
            return jsonify({'result': user})
        else:
            return jsonify({'error': 'user not updated'}), 404
    except (json.JSONDecodeError, KeyError) as e:
        print(f"Error parsing JSON or missing key: {e}")
        return jsonify({'error': 'uesr not updated'}), 404

@UserRout.route('/<string:mail>', methods=['DELETE'])
def delete_user(mail):
    user = UserService.delete_user(mail)
    if user is None:
        return jsonify({'error': 'user not found'}), 404
    return jsonify({'result': 'success'})


@UserRout.route('/', methods=['GET'])
def getAllUser():
    users = UserService.get_all_users(self=UserService)
    if users is None:
        return jsonify({'eror': 'no users found'}), 404
    return jsonify({'result': users})


@UserRout.route('/<string:mail>', methods=['GET'])
def getUserByMail(mail):
    users = UserService.get_user_by_mail(mail)
    if users is None:
        return jsonify({'eror': 'no user found'}), 404
    return jsonify({'result': users})