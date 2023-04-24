import React, { useState } from 'react';
import gif from './giphy.gif';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function CenterRegister() {
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        centerName: "",
        address: "",
        number: "",
        password: ""
    })
    const handleData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({ ...registerData, [name]: value })
        console.log(registerData);
    }
    const postData = async (e) => {
        e.preventDefault()
        const { centerName, address, number, password } = registerData
        const res = await fetch("/centerregister", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                centerName, address, number, password
            })
        })
        await res.json();
        if (res.status === 400) {
            alert("Data Present")
        }
        else if (res.status === 401) {
            alert("Data Empty")
        }
        else {
            alert("Registration Success")
            navigate("/")
        }
    }
    return (
        <>
            <main>
                <section className="section-login">
                    <div className="section-main">
                        <div className="section-login-1">
                            <div className="section-login-1-main">
                                <div className='hlo'><h1 className="section-login-1-title">Vein</h1><br/>
                                    <p className="section-login-1-text">Be a life  saver of someone.</p></div>
                                <div className="section-login-1-img">
                                    <img src={gif} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="section-login-2">
                            <div className="section-login-2-main">
                                <h1 className="section-login-2-title">Sign Up</h1>
                                <form className="section-login-2-form">
                                    <div class="login-form-2">
                                        <label for="input-name">Center Name</label>
                                        <input type="text" id="input-name" required placeholder='Center Name' name='centerName' onChange={handleData} />
                                    </div>
                                    <div className="login-form-2">
                                        <label for="input-password">Address</label>
                                        <input type="password" id="input-password" required placeholder='Address' name='address' onChange={handleData} />
                                    </div>
                                    <div className="login-form-2">
                                        <label for="input-password">Mobile </label>
                                        <input type="password" id="input-password" required placeholder='Number' name='number' onChange={handleData} />
                                    </div>
                                    <div className="login-form-3">
                                        <label for="input-password">Password</label>
                                        <input type="password" id="input-password" required placeholder='password' name='password' onChange={handleData} />
                                    </div>
                                    <div className="login-form-submit-btn">
                                        <button onClick={postData}>Sign Up</button>
                                    </div>
                                    <div className="login-form-5">
                                        <p>Already Have An Account <NavLink to='/Login' >Sign In</NavLink></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default CenterRegister