//קישור לכניסה והרשמה חשבון  הודעות פרטי חשבון וכו


import { Provider } from 'react-redux';
import '../App.css';
import { createSvgIcon } from '@mui/material/utils';
// import store from '..reducers/store';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect } from 'react-redux'
import { Redirect, Navigate,useNavigate } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";


import React, { useState } from "react"
import { Icon } from '@mui/material';

function mapStateToProps(state) {
    return {
        usersList: state.user.userList
    };
}
export default connect(mapStateToProps)(function UserMenu(props) {
    const newNavigate=useNavigate();
    return (<>

  
       <nav>
            <Stack direction="row" spacing={3.5}>
                <br/>  
                             
                <Button variant="outlined" onClick={()=>newNavigate('/signIn')} >לכניסה<AccountCircleIcon /></Button>
                <Button variant="outlined" onClick={()=>newNavigate("/signUp")} >להרשמה<AddCircleIcon /></Button>
            </Stack>
            <br />
        </nav>
        </>)
})