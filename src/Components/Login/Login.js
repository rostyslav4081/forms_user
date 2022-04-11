import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './Login.css'
export default function Login() {
    return (
        <form >

            <h1>Log in</h1>
            <div className = "container">
                <div className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"/>
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <div className="custom-control custom-checkbox">*/}
                    {/*        <input type="checkbox" className="custom-control-input" id="customCheck1"/>*/}
                    {/*        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                </div>
            </div>

        </form>
    )
}