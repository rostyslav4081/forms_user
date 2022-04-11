import React from 'react'
import './Form.css'
export default function Form() {
    return (
        <form>
            <h1>Form</h1>
            <div className="container">
                <div className="forma">
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Enquiry</label>
                        <input type="text" className="form-control" placeholder="Enquiry"/>
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </div>
            </div>
        </form>
    )
}