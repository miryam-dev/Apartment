import {get_all_users} from "../redux/action"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import { create_user } from '../redux/action'
import { Redirect, Navigate,useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
function mapStateToProps(state) {
    return {
        usersList: state.user.userList
    };
}

export default connect(mapStateToProps)(function ApartmentsCart(props) {
    return(<><p>עגלת קניות!!!!!!!!!!!!</p></>)
})