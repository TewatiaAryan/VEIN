import React from 'react'
import { NavLink } from 'react-router-dom'
import vein from './vein logo.png'
export default function Nav() {
    return (
        <>
            <nav>
                <NavLink to="/"><img className='logo' src={vein} alt="" /></NavLink>
                <div id='navbar'>
                    <ul>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/centerRegister" >CenterRegister</NavLink></li>
                        {/* <li><NavLink to="/Contact">Contact</NavLink></li> */}
                        <li><NavLink to="/Login">Login</NavLink></li>
                        {/* <li><NavLink to="/centerdata">Center Data</NavLink></li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}
