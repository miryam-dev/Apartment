import React ,{useEffect,useState}from 'react'
import { connect } from "react-redux";
import ShowTask from "./showTask"
import AddTask from './addTask';
import {useLocation} from 'react-router-dom'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";
import {useNavigate} from 'react-router-dom';
import {getTaskList} from "../redux/action"
import axios from 'axios'

function mapStateToProps(state){
  console.log();
    return {ApartmentList:state.Apartment.ApartmentList}
}
export default connect(mapStateToProps) (function showAllApartments(props){
const newNavigate=useNavigate()
const location=useLocation();
const id=location.state&&location.state.id;
const{ApartmentList,dispatch}=props;
const [ApartmentToShow,setApartmentToShow]=useState('');
const [show,setShow]=useState(0);
// useEffect(function(){
// },[])
function goToShowApartment(element){
    setApartmentToShow(element)
    setShow(1);

}
const getAllApartments=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/apartments/')
      if(response.status==200)
      {
        // console.log("u",response.data);
        dispatch(getAllApartment(response.data))
      }
    }
      catch(error){
        console.error(error)
      }
}
useEffect(()=>{
    getAllApartments()
},[])

return(<>
{show===1&&<ShowApartment />}


{show===0&& <><br></br>
    <Button variant="outlined" onClick={()=> setShow(2) }>להוספת דירה<LibraryAddIcon/></Button>
<div>
<ul>
    <b/><br/>
  {
    taskList.map(element => (

      element.id==id&&<><li>* {element.name}
      </li>
      <Button variant="outlined" onClick={()=>goToShowApartment(element)}>להצגת הדירה</Button>
      </>
))}

</ul>
</div>

{/* <Button variant="outlined" onClick={exsit}>יציאה</Button> */}
</>
}

{show===2&&<AddApartmetn setShow={setShow}/>}
</>)

})