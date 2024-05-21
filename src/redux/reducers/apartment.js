import {produce} from 'immer';

const initialState={
ApartmentList:[]
}


export default produce((state,action)=>{
    switch(action.type){
        case 'GET_ALL_APARTMENTS':
            {
                state.ApartmentList=action.payLoad;
            }
            break;
        case 'DELETE_APARTMENT':
            {const index=state.ApartmentList.findIndex(x=>x.id==action.payLoad);
                if(index!==-1)
                {
                  state.contactList.splice(index,1)
                  alert("הדירה הוסרה בהצלחה")
                }
                else
                alert("דירה זו לא נמצאה במאגר הדירות")
              }
            break;
        case 'CREATE_APARTMENT':
        {
            state.ApartmentList.push(action.payLoad)
        }
    
        break;
        
    }
    },initialState)