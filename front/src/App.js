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
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/centerRegister" element={<CenterRegister />} />
          <Route path="/CenterHome" element={<CenterHome />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;