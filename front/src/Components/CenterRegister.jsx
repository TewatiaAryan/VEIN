import React, { useState } from 'react';
import Nav from './Nav';
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
        <Nav/>
        <h1>Center Register</h1>
            <form>
                <input type="text" placeholder='Center Name' name='centerName' onChange={handleData} />
                <input type="text" placeholder='Address' name='address' onChange={handleData} />
                <input type="number" placeholder='Number' name='number' onChange={handleData} />
                <input type="text" placeholder='password' name='password' onChange={handleData} />
                <button onClick={postData}>Submit</button>
            </form>
        </>
    )
}
export default CenterRegister