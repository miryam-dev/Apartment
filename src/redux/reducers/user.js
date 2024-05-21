import { act } from '@testing-library/react';
import {produce} from 'immer';

const initialState={
userList:[]   
}

export default produce((state,action)=>{
switch(action.type){
    case 'CREATE_USER':
        {
            state.userList.push(action.payLoad)
        } 
        break;
    case 'DELETE_USER':
        {
            const index=state.userList.findIndex(x=>x.mail==action.payLoad)
            state.taskList.splice(index,1)
        }
        break;
    case 'UPDATE_USER':
    {
      const user=state.userList.find(x=>x.mail==action.payLoad.mail)
      user.firsName=action.payLoad.firsName; 
      user.lastNane=action.payLoad.lastName; 
      user.phone=action.payLoad.phone; 
    }

    break;
    case 'GET_ALL_USERS':
        {
           state.userList=action.payLoad;
        }
        break;
}
},initialState)