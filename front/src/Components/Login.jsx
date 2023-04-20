import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Nav from './Nav';
import gif from './giphy.gif';
export default function Login() {
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        centerName: "",
        password: ""
    })
    const handleData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({ ...registerData, [name]: value })
        console.log(registerData);
    }
    const postData = async (e) => {
        e.preventDefault();
        console.log("helo");
        const { centerName, password } = registerData
        const res = await fetch("/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                centerName, password
            })
        })
        await res.json();
        if (res.status === 400) {
            alert("Invalid Data")
        }
        else if (res.status === 401) {
            alert("Data Empty")
        }
        else {
            alert("Login Success")
            navigate("/centerHome")
        }
    }
    return (
        <>
            <main>
                <section className="section-login">
                    <div className="section-main">
                        <div className="section-login-1">
                            <div className="section-login-1-main">
                                <h1 className="section-login-1-title">Vein</h1>
                                <p className="section-login-1-text">Be a life  saver of someone.</p>
                                <div className="section-login-1-img">
                                    <img src={gif} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="section-login-2">
                            <div className="section-login-2-main">

                                <h1 className="section-login-2-title">Login</h1>
                                <form className="section-login-2-form">
                                    <div class="login-form-2">
                                        <label for="input-name">UserName</label>
                                        <input type="text" id="input-name" required />
                                    </div>
                                    <div className="login-form-3">
                                        <label for="input-password">Password</label>
                                        <input type="password" id="input-password" required />
                                    </div>
                                    <div className="login-form-submit-btn">
                                        <button>Login</button>
                                    </div>
                                    <div className="login-form-5">
                                        <p>Create Account <a href="#">Sign Up</a></p>
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
