import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import rakt from './blood.png'
import './CenterHome.css'
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
    // eslint-disable-next-line
    getCenterData();
  }, [])

  return (
    <>
      <div className="container1">
        <div className='info'>
          <table className='tab'>
            <tr>
              <td>
                <table>
                  <tr>
                    <tr>
                      <td>
                        <label for="input-A+">A+ </label>
                        <input type="number" id="input-A+" placeholder='A+' className='input' name='a_Plus' onChange={handleBlood} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="input-B+">B+ </label>
                        <input type="number" id="input-B+" placeholder='B+' className='input' name='b_Plus' onChange={handleBlood} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="input-O+">O+ </label>
                        <input type="number" id="input-O+" className='input' placeholder='O+' name='o_Plus' onChange={handleBlood} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="input-AB+">AB+ </label>
                        <input type="number" id="input-AB+" placeholder='AB+' className='input' name='ab_Plus' onChange={handleBlood} />
                      </td>
                    </tr>
                  </tr>
                </table>
              </td>
              <td>
                <table>
                  <tr>
                    <tr>
                      <td>
                        <label for="input-A-">A- </label>
                        <input type="number" id="input-A-" className='input' placeholder='A-' name='a_Minus' onChange={handleBlood} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="input-B-">B- </label>
                        <input type="number" id="input-B-" className='input' placeholder='B-' name='b_Minus' onChange={handleBlood} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="input-O-">O- </label>
                        <input type="number" id="input-O-" className='input' placeholder='O-' name='o_Minus' onChange={handleBlood} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="input-AB-">AB- </label>
                        <input type="number" id="input-AB-" className='input' placeholder='AB-' name='ab_Minus' onChange={handleBlood} />
                      </td>
                    </tr>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <button onClick={PostBlood} style={{border:"2px solid red",cursor:"pointer"}}>Add Data</button>
        </div>
        {/* <div className="photo">
          <img src={rakt} alt="" />
        </div> */}
      </div>
    </>
  )
}