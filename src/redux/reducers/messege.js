import { act } from '@testing-library/react';
import {produce} from 'immer';
const initialState={
messegeList:[]    
}
export default produce((state,action)=>{
switch(action.type){
    case 'ADD_MESSAGE':
        {
            state.taskList.push(action.payLoad)
        }
        break;
    case 'DELETE_MESSAGE':
        { const index=state.messegeList.find(x=>x.id=action.payLoad)
            if(index!=-1){
            state.messegeList.splice(index,1)
            alert("ההודעה נמחקה בהצלחה")
            }
            else{
                alert("ההודעה לא נמחקה")
            }
        }
        break;
}
},initialState)