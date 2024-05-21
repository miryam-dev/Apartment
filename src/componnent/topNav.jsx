
import { Provider } from 'react-redux';
import '../App.css';
import { createSvgIcon } from '@mui/material/utils';
// import store from '..reducers/store';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { connect } from 'react-redux'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";


import React,{useState} from "react"
import UserMenu from './userMenu';
import Apartment from '../redux/reducers/apartment';
import ApartmentsCart from './apartmentsCart';


function mapStateToProps(state) {
    return {
        usersList: state.user.userList
    };
}
export default connect(mapStateToProps)(function TopNav(props) {
    const[flagShowMenu,setFlagShowMenu]=useState(false);
    const[flagShowCart,setFlagShowCart]=useState(false);

    return (<>
        <nav>
            <Stack direction="row" spacing={3.5}>
                
            <Button variant="outlined" onClick={()=>setFlagShowMenu(!flagShowMenu)} ><PermIdentityIcon /></Button>
            <Button variant="outlined" onClick={()=>setFlagShowCart(!flagShowCart)} ><AddShoppingCartIcon /></Button>

            <Link to="/Home"> דף הבית</Link>
            <Link to="/About"> אודותינו</Link>
            <Link to={{pathname: '/showAllApartment',state:{isBuy:false}}}>דירות להשכרה</Link>
            <Link to={{pathname: '/showAllApartment',state:{isBuy:true}}}>דירות למכירה</Link>
            <Link to="/addApartment">לפרסום דירה</Link>


            </Stack>
            {flagShowMenu&&<UserMenu/>}
            {flagShowCart&&<ApartmentsCart/>}

            <br />
        </nav></>)
})