import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CenterData.css';
export default function CenterData() {
    const navigate = useNavigate();
    const [centerData, setCenterData] = useState("")
    const [blood, setBlood] = useState("")
    const getCenterData = async () => {
        try {
            const res = await fetch("/centerhome", {
                method: "GET",

                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            setCenterData(data)
            setBlood(data.bloodGroup)
            console.log(data);
        } catch (error) {
            navigate("/")
            console.log(error);
        }
    }
    useEffect(() => {
        // eslint-disable-next-line
        getCenterData();
    }, [])
    return (
        <>
            
         < div className="container1">
         <div className="info">
         <h1 style={{fontSize:'100px'}}>{centerData.centerName}</h1>
            <table className='tab'  >
                <tr>
                    <td>
                        <table>
                            <tr>
                                <tr>
                                    <td>
                                        <label >A+ : </label></td>
                                        <td>
                                        <h2 className='input'>{blood.a_Plus}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label >B+ : </label></td>
                                        <td>
                                        <h2 className='input'>{blood.b_Plus}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label >O+ : </label></td>
                                        <td>
                                        <h2 className='input'>{blood.o_Plus}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label >AB+ :  </label></td>
                                        <td>
                                        <h2 className='input'>{blood.ab_Plus}</h2>
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
                                        <label >A- : </label></td>
                                        <td>
                                        <h2 className='input'>{blood.a_Minus}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label >B- : </label></td>
                                        <td>
                                        <h2 className='input'>{blood.b_Minus}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label >O- : </label></td>
                                        <td>
                                        <h2 className='input'>{blood.o_Minus}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label >AB- :  </label></td>
                                        <td><h2 className='input'>{blood.ab_Minus}</h2>
                                    </td>
                                </tr>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            </div>
            </div>
        </>
    )
}
