import React from 'react';
import CenterRegister from "./Components/CenterRegister.jsx";
import Login from './Components/Login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CenterHome from './Components/CenterHome.jsx';
import Logout from "./Components/LogoutUser.jsx";
import './Components/NavStyle.css';
import './Components/Login.css';
import Home from './Components/Home.jsx';
import Nav from './Components/Nav.jsx';
import LogoutUser from './Components/LogoutUser.jsx';
import CenterData from './Components/CenterData.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/centerregister" element={<CenterRegister />} />
          <Route path="/centerHome" element={<CenterHome />} />
          {/* <Route path="/addBlood" element={<AddBloodCenter />} /> */}
          <Route path="/logout" element={<LogoutUser />} />
          <Route path='/centerdata' element={<CenterData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;