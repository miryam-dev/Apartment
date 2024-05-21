

export function get_all_apartments(apartments){
    return {type:'GET_ALL_APARTMENTS',payLoad:apartments}
}

export function delete_Apartment(id){
    return {type:'DELETE_APARTMENT' , payLoad: id}
}

export function create_Apartment(apartment){
    return {type:'CREATE_APARTMENT' , payLoad: apartment}
}

export function delete_message(id){
    return {type:'DELETE_MESSAGE', payLoad: id}
}

export function add_message(message){
    return {type:'ADD_MESSAGE', payLoad: message}
}

export function get_all_users(users){
    return {type:'GET_ALL_USERS',payLoad:users}
}

export function delete_user(mail){
    return {type:'DELETE_USER', payLoad: mail}
}

export function update_user(first_name, last_name, mail, phon){
    return {type:'UPDATE_USER', payLoad: {first_name, last_name, mail, phon}}
}

export function create_user(user){
    return {type:'CREATE_USER', payLoad: user}
}

