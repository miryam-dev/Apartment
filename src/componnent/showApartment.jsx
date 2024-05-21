import React, { useState } from "react";
import { connect } from "react-redux";
import { removTask, updateTask } from "../redux/action";
import PrevNext from "./prevnext";
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { display } from "@mui/system";
import axios from 'axios'

export default connect()(function ShowApartment(props){
    const{apartment,typeList,dispatch,setShow}=props;
    // const[done,setDone]=useState(task.done);

    function remove(){
      dispatch(deleateApartment(apartment.id));
      setShow(0)
    }
    const update=async()=>{
      try{
      
        const response=await axios.put('http://localhost:5000/tasks/',{
          taskId:task.taskId,
          done:true
        })
        console.log("respon",response.data);
        if(response.status==200)
        {
          dispatch(updateTask(task.taskId))
          setDone(true);
    
        }
      }
        catch(error){
          console.error(error)
        }

   

    }

    return(<>
      <h1>שם המשימה:{task.taskName}</h1>
      <h2>סוג המשימה:{typeList.find(x=>x.taskTypeId==task.taskTypeId).taskTypeName}</h2>
      <h3>מבצע המשימה:{task.contactName}</h3>
      <h4> האם המשימה נעשתה?:{String(done)}</h4>


      <Button variant="outlined"  onClick={()=>remove()}>למחיקת המשימה<DeleteIcon /></Button>
      <Button variant="outlined"  onClick={()=>update()}> לעדכון ביצוע המשימה</Button>
      <Button variant="outlined"  onClick={()=>setShow(0)}> חזור</Button>
      


    </>)
})