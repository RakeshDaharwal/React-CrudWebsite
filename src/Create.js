import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';


const Create = () =>{

    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const nav = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post("https://6375d37bb5f0e1eb85fa58db.mockapi.io/database",
            {
                name: name,
                salary: salary,

            }).then(() => {
                nav("/read")
            });
    };

    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between mt-3'>
                    <h1>Create</h1>
                    <NavLink to="/read">
                        <button className='btn-success p-2'>Show Data</button>
                    </NavLink>
                </div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">salary</label>
                        <input type="text" className="form-control" onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
};

export default Create;
