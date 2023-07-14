import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setSalary(localStorage.getItem("salary"));
    }, []);

    function handleUpdate(e) {
        e.preventDefault();
        axios.put(`https://6375d37bb5f0e1eb85fa58db.mockapi.io/database/${id}`,
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
                <h1 className='text-center mt-3'>Update Data</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">salary</label>
                        <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
                    <NavLink to="/read">
                        <button className='btn btn-secondary mx-2'>Back</button>
                    </NavLink>
                </form>
            </div>
        </>
    )
};

export default Update;
