import React from 'react'
import axios from 'axios';

import { useState } from 'react';
import Navbar from './Navbar';
import { useEffect } from 'react';

const EmployeeHome = () => {
    let [employeeList, setEmployeeList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(
        ()=>{
            getData();
        }, []
    )

    const getData = ()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(
            (response)=>{
                console.log(response.data);
                setEmployeeList(response.data);
                setIsLoading(false);
            }
        )
        .catch()
    }
  return (
    <div className="container">
        <Navbar />
        <div className="row">
            <div className="co col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">UserID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      </tr>
                  </thead>
                    {
                      employeeList.map((value, key)=>{
                        return  <tbody>
                        <tr>
                        <th scope="row">{value.id}</th>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        </tr>
                    </tbody>
                      })
                    }
                  </table>
            </div>
        </div>
    </div>
  )
}

export default EmployeeHome