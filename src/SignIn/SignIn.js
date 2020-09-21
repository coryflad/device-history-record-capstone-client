import React from 'react';


function SignIn() {
    return (
        <section className="sign-in">
                <div className="alert alert-info">
                    <i className="fas fa-info"></i> <strong>Info</strong> Please enter username and password!
                </div>

                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Username or password incorrect!!
                </div>

                <form className="sign-in-form">
                    <h1>DHR Sign-In</h1>

                    <div className="form-item">
                        <label htmlFor="sign-in-email">Email</label>
                        <input type="text" placeholder="email" required="" id="sign-in-email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="sign-in-password">Password</label>
                        <input type="text" placeholder="password" required="" id="sign-in-password" />
                    </div>
                    <div className="form-item">
                        <a href="#" className="myButton">Sign-In</a>
                        <p>Need to create an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </section>
    )
}

export default SignIn