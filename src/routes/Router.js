import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contactus from '../pages/Contactus';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Doctors from '../pages/Doctors/Doctors';
import Doctordetails from '../pages/Doctors/Doctordetails';
 
import {Routes,Route } from 'react-router-dom'

const Router=()=> {
  return (
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contactus/>}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/doctors' element={<Doctors/>}/>
            <Route path='/doctors/1' element={<Doctordetails/>}/>
            
          </Routes>

        );
}
export default Router