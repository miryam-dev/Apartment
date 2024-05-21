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

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        </Typography>
    );
}

function mapStateToProps(state) {
    return {
        usersList: state.user.userList
    };
}
const defaultTheme = createTheme();

export default connect(mapStateToProps)(function SignUp(props) {

    const newNavigate = useNavigate()
    const { dispatch, usersList } = props;
    const firstName = useRef('');
    const lastName = useRef(0);
    const mail = useRef('');
    const phon = useRef('');
    const password = useRef(0);
    const checkPassword = useRef(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = usersList.find(x => x.mail == mail.current.value)
        if (user == null) {
            if (password.current.value == checkPassword.current.value) { 
            insertUser();
            const data = new FormData(event.currentTarget);
           
            alert(`שלום ל ${firstName.current.value}`)
            return newNavigate('/home', { state: { mail: mail.current.value } })

           }
           else{
            alert("סיסמא לא נכונה")
           }
        }
        else{
            alert("משתמש קיים")
            return newNavigate('/signIn')

        }


    };


    const insertUser = (async () => {
        try {
            const response = await axios.post('http://localhost:5000/users/', {
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                mail: mail.current.value,
                phon: phon.current.value,
                password: password.current.value,

            });
            console.log("respon", response.data);
            if (response.status == 200) {
                dispatch(create_user({
                    firstName: firstName.current.value,
                    lastName: lastName.current.value,
                    mail: mail.current.value,
                    phon: phon.current.value,
                    password: password.current.value,
                }));

                // console.log('con2',contactList);
            }
        }
        catch (error) {
            console.error(error)
        }
    })
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

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="firsName"
                                    inputRef={firstName}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="lastName"
                                    name="lastName"
                                    autoComplete="family-name"
                                    inputRef={lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="mail"
                                    label="mail"
                                    name="mail"
                                    autoComplete="email"
                                    inputRef={mail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="phone"
                                    label="Phone"
                                    type="phone"
                                    id="phone"
                                    autoComplete="new-password"
                                    inputRef={phon}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    label="password"
                                    name="passord"
                                    autoComplete="password"
                                    inputRef={password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="checkPassword"
                                    label="checkPassword"
                                    name="checkPassword"
                                    autoComplete="checkPassword"
                                    inputRef={checkPassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}


                        >
                            להרשמה
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
})