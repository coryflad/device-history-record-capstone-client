import React from 'react';


function Registration() {
    return (
        <section className="registration">

            <div className="alert alert-success">
                <i className="fas fa-check"></i> <strong>Success</strong> Account Activated Sucessfully!!
            </div>

            <div className="alert alert-warning">
                <i className="fas fa-exclamation"></i> <strong>Warning</strong> Password does not meet complexity requirements!!
            </div>

            <div className="alert alert-failure">
                <i className="fas fa-times"></i> <strong>Failure</strong> Registration Failed!! Please see System Adminstrator!!
            </div>

            <form className="registration-form">
                <h1>DHR Registration</h1>
                <div className="form-item">
                    <label htmlFor="register-email">Email</label>
                    <input type="text" placeholder="email" required="" id="register-email" />
                </div>
                <div className="form-item">
                    <label htmlFor="register-password">Password</label>
                    <input type="text" placeholder="password" required="" id="register-password" />
                </div>
                <div className="form-item">
                    <label htmlFor="register-confirm-password">Confirm Password</label>
                    <input type="text" placeholder="confirm-password" required="" id="register-confirm-password" />
                </div>
                <div className="form-item">
                    <a href="#" className="myButton">Register</a>
                    <p>Already have an account? <a href="#">Sign In</a></p>
                </div>
            </form>
        </section>
    );
}

export default Registration;
