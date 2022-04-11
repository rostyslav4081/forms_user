import React, { useEffect, useState } from "react";
import Axios from 'axios';
import './Register.css'

export default function Register() {

    const [firstnameReg, setfirstnameReg] = useState("");
    const [lastnameReg, setlastnameReg] = useState("");
    const [emailReg, setemailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            firstname: firstnameReg,
            lastname: lastnameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };
    return (
        <form>
            <h1>Register</h1>

            <div className="container">
                <div className="register-form">
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" onChange={(e) => {
                            setfirstnameReg(e.target.value);
                        }} className="form-control" placeholder="First name"/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text"  onChange={(e) => {
                            setlastnameReg(e.target.value);
                        }}
                               className="form-control" placeholder="Last name"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" onChange={(e) => {
                            setemailReg(e.target.value);
                        }}
                               className="form-control" placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                               className="form-control" placeholder="Enter password"/>
                    </div>

                    <button type="submit" onClick={register} className="btn btn-dark btn-lg btn-block">Register</button>
                </div>
            </div>
        </form>
    )
}