import React, { useEffect, useState } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../App.css"
import Loader from "react-loader-spinner";


export default function Table() {

    const [users, setUsers] = useState(null)
    const [loading, isLoading] = useState(false)
    
    useEffect(() => {
        isLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(response => {
            setUsers(response)
            isLoading(false)
        })

    }, [])


    return (
        <>

            <table className="container">
                <thead>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>ZipCode</th>
                    <th>Website</th>
                    <th>Company</th> 
                </thead>

                <tbody>
                    {
                        users ? users.map(item => 
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.zipcode}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                            </tr>
                        ) 
                        : ''

                    }                  
            
                </tbody>
            </table>
            {loading ?  <Loader type="Oval" height="50px" className="loader" color="#3080a8" /> : ''}

            
        </>
    )
}
