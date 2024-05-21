import axios from "axios";
import React, { useState,useEffect,useRef } from "react";
import {get_all_users} from "../redux/action"
import { Redirect, Navigate,useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { connect } from "react-redux";
import Stack from '@mui/material/Stack';




function mapStateToProps(state) {
    return { usersList: state.user.userList }
}
export default connect(mapStateToProps)(function SignIn(props) {
    const { userList, dispatch } = props;
    let password = useRef('');
    let mail = useRef('');
    let [flag, setFlag] = useState(true);
    const newNavigate = useNavigate()

    const getAllUser = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users/')
            console.log(response.data);
            if (response.status == 200) {
                console.log(response.data);
                dispatch(get_all_users(response.data))
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllUser()
    }, [])

    function enter() {
        const user = userList.find(x => x.mail == mail.current.value);
        if (user != null) {
            if (user.password == password.current.value) {
                alert(`שלום`)
                return newNavigate('/home', { state: { mail: mail.current.value } })
            }
            else {
                alert("הסיסמא שגויה")
            }
        }
        else {
            alert("אופסס שגיאה")
            return newNavigate("/signUp")
        }

    }
    function remove(){

    }
    const resetPassword = async () => {
        const user = userList.find(x => x.mail == mail.current.value);
        if (user == null) {
            alert("הכנס מייל תקין")
        }
        else {
            alert("מייל לאיפוס סיסמא נשלח")
            try {

                const response = await axios.get(`http://localhost:5000/users/reset_password/?mail=${mail.current.value}`);

                if (response.status == 200) {
                    console.log("המייל נשלח..");
                    setFlag(false)
                }
            }
            catch (error) {
                console.error(error)
            }
        } 
     
    }
   
    return (<>
        {flag && <Stack spacing={3} alignItems="center" ><br /><br /><br /><br />
            <TextField inputRef={mail} id="outlined-basic" label="מייל" variant="outlined" />
            <TextField inputRef={password} id="outlined-basic" label="סיסמא" variant="outlined" />
            <Button onClick={resetPassword} variant="outlined"  >שכחתי סיסמא </Button>


            <Stack direction="row" spacing={3.5}>
                <Button onClick={enter} variant="outlined"  >לכניסה</Button>
                <Button onClick={remove} variant="outlined">להסרה</Button></Stack></Stack>
        }
        {!flag&&<>
        <h1>נשלח מייל לאיפוס סיסמא ,פעל בהתאם..</h1>
        </>}
        </>)
})