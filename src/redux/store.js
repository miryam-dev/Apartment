import{combineReducers, createStore} from 'redux'
import user from './reducers/user'
import apartment from './reducers/apartment' 
import messege from './reducers/messege' 

const reducer= combineReducers({user,apartment,messege});
const store = createStore(reducer);
window.store=store;
export default store;