import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios' // 
import { useNavigate } from 'react-router-dom';

function Signup() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate(); 

    const handlesubmit =  (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register",{name,email,password})
            .then((res) => {
                console.log(res.data);
                navigate("/login"); 
                alert("Registration successful");
            })
            .catch((err) => {
                console.error(err);
                alert("Registration failed");
            });
        }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            <strong>Username</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="username"
                            autoComplete="off"
                            placeholder="Enter username"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            className="form-control rounded-0"
                            id="email"
                            autoComplete="off"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-0"
                            id="password"
                            autoComplete="off"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already have an account</p>
                <Link to="/login" type="button" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;