import React, { useEffect, useState } from 'react'
import './Search.css';
export default function Search() {
    const [data, setdata] = useState([])
    const allData = async () => {
        try {
            const res = await fetch("/openData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            setdata(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        allData();
    }, [])
    return (
        <>
            <div className="container2">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Center Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">A+</th>
                            <th scope="col">A-</th>
                            <th scope="col">B+</th>
                            <th scope="col">B-</th>
                            <th scope="col">AB+</th>
                            <th scope="col">AB-</th>
                            <th scope="col">O+</th>
                            <th scope="col">O-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((curr, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{curr.centerName}</td>
                                            <td>{curr.number}</td>
                                            <td>{curr.a_Plus}</td>
                                            <td>{curr.a_Minus}</td>
                                            <td>{curr.b_Plus}</td>
                                            <td>{curr.b_Minus}</td>
                                            <td>{curr.ab_Plus}</td>
                                            <td>{curr.ab_Minus}</td>
                                            <td>{curr.o_Plus}</td>
                                            <td>{curr.o_Minus}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
