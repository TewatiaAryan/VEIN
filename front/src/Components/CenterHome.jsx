import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function CenterHome() {
  const navigate = useNavigate()
  const [centerData, setCenterData] = useState("")
  const getCenterData = async () => {
    try {
      const res = await fetch("/centerhome", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      console.log(data);

      setCenterData(data)

    } catch (error) {
      navigate("/")
      console.log(error);
    }
  }

  const [blood, setBlood] = useState({
    a_Plus: "", a_Minus: "", b_Plus: "", b_Minus: "", ab_Plus: "", ab_Minus: "", o_Plus: "", o_Minus: ""
  })


  const handleBlood = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBlood({ ...blood, [name]: value })
  }
  const PostBlood = async (e) => {
    e.preventDefault()
    const { a_Plus, a_Minus, b_Plus, b_Minus, ab_Plus, ab_Minus, o_Plus, o_Minus } = blood
    const res = await fetch("/addblood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        a_Plus, a_Minus, b_Plus, b_Minus, ab_Plus, ab_Minus, o_Plus, o_Minus
      })
    })
    await res.json();
    if (res.status === 200) {
      alert("Add Success")
    }
    else if (res.status === 401) {
      alert("Data Empty")
    }
  }
  useEffect(() => {
    getCenterData();
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <h1>CenterHome</h1>
      <h1>{centerData.centerName}</h1>

      <form method="post">
        <input type="number" placeholder='A+' name='a_Plus' onChange={handleBlood} />
        <input type="number" placeholder='A-' name='a_Minus' onChange={handleBlood} />
        <input type="number" placeholder='B+' name='b_Plus' onChange={handleBlood} />
        <input type="number" placeholder='B-' name='b_Minus' onChange={handleBlood} />
        <input type="number" placeholder='AB+' name='ab_Plus' onChange={handleBlood} />
        <input type="number" placeholder='AB-' name='ab_Minus' onChange={handleBlood} />
        <input type="number" placeholder='O+' name='o_Plus' onChange={handleBlood} />
        <input type="number" placeholder='O-' name='o_Minus' onChange={handleBlood} />
      </form>
      <button onClick={PostBlood}>Add Data</button>
    </>
  )
}
