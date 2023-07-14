import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://6375d37bb5f0e1eb85fa58db.mockapi.io/database")
            .then((res) => {
                console.log(res);
                setData(res.data);
            });

    };

    // ARROW FUNCTION ME ERROR AAYA 

    function handleDelete(id) {
        axios.delete(`https://6375d37bb5f0e1eb85fa58db.mockapi.io/database/${id}`)
            .then(() => {
                getData()
            })
    };

    function setToLocalStore(id, name, salary) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("salary", salary);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between mt-3'>
                    <h1>Database</h1>
                    <NavLink to="/">
                        <button className='btn-primary p-2'>Create</button>
                    </NavLink>
                </div>
                <table class="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {data.map((val) => {
                        return <>
                            <tbody>
                                <tr>
                                    <th scope="row">{val.id}</th>
                                    <td>{val.name}</td>
                                    <td>{val.salary}</td>
                                    <td>
                                        <NavLink to="/update">
                                            <button className='btn-success px-2' onClick={() => setToLocalStore(val.id, val.name, val.salary)}>Edit</button>
                                        </NavLink>
                                    </td>
                                    <td><button className='btn-danger px-2' onClick={() => handleDelete(val.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    })
                    }
                </table>
            </div>
        </>
    )
}

export default Read;
