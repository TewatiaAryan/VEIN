import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function CenterData() {
    const navigate = useNavigate();
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
            setCenterData(data)
            console.log(data.bloodGroup.a_Plus);
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
            <h1>{centerData.centerName}</h1>
            <h1>{centerData.bloodGroup.a_Plus}</h1>
        </>
    )
}
