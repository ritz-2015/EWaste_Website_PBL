import React, {useState,useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Routes,Route,BrowserRouter } from 'react-router-dom';
import SignInPage from './registration/SignInPage';
import Signup  from './registration/Signup';
import Map from './E-facilites/Map';
import Booking from './components/Booking';
import UserContext from './utils/UserContext';
import Profile from './components/Profile';
import ContactUs from './components/ContactUs';
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore';
import AboutUs from './components/AboutUs';
import SucessPage from './components/SucessPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootComponent= ()=>{
  const [user,setUser] = useState({name:'not_signed_int',email: "sign@gmail.com", points: 0, id:-1});

  // console.log(" User after settingup ",user)
    return(
    <Provider store={appStore}>
      <UserContext.Provider value={{user,setUser}}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<SignInPage />} />
            <Route path="/signIn/home" element={<App />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/map" element={<Map />} />
            <Route path='/booking' element ={<Booking/>}/>
            <Route path= '/profile' element= {<Profile/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/success' element={<SucessPage/>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
    )
}

root.render(<RootComponent />);