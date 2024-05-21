

import { Provider } from 'react-redux';
import './App.css';
import { createSvgIcon } from '@mui/material/utils';
import store from './redux/store';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import TryMe from './components/TryMe';
// import Album from './components/try';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import SignIn from '../src/componnent/signIn';
import SignUp from '../src/componnent/signUp';
import TopNav from './componnent/topNav';
import UserMenu from './componnent/userMenu';
// import Home from '../src/componnent/home';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      {/* <TryMe/> */}

      <Provider store={store}>
        <div id="div">
          <div id="div2">
            <TopNav/>
            <Routes>
            
              
              <Route path="/signIn" element={<SignIn/>} />
              <Route path="/signUp" element={<SignUp/>} />
              <Route path="/topNav" element={<TopNav/>} />
              <Route path="/userMenu" element={<UserMenu/>} />


              {/* <Route path="/home" element={<Home/>} /> */}

            </Routes>
             </div>
            </div>


      </Provider>

    </>

  );
}

export default App;
