import React from 'react';
import config from './config';

import ValidationError from './ValidationError'
import AuthApiService from './services/AuthApiService';
import TokenService from './services/TokenServices';



class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: {
                value: '',
                touched: false
            },
            password: {
                value: '',
                touched: false
            },
            repeatPassword: {
                value: '',
                touched: false
            },
            LogInUserID: 0,
            isActive: true,
            params: {},
            formValidationError: ''
        }
    }

    changeUsername(userName) {
        this.setState({
            userName: { value: userName, touched: true }
        });
    }

    changePassword(password) {
        this.setState({
            password: { value: password, touched: true }
        });
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({ repeatPassword: { value: repeatPassword, touched: true } });
    }

    //get the imput from the user
    handleSubmit = (event) => {
        event.preventDefault();
        const { userName, password, repeatPassword } = event.target;
        console.log('username:', userName.value, 'password:', password.value);
        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: userName.value,
            password: password.value,
        })

            .then(response => {
                console.log('user:', response)
                userName.value = ''
                password.value = ''
                repeatPassword.value = ''
                TokenService.saveAuthToken(response.authToken)
                TokenService.saveUserId(response.id)
                window.location = '/landing'
            })

            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    validateUserName() {
        const userName = this.state.userName.value.trim();
        if (userName.length === 0) {
            return <p className='input-error'>Username is required</p>;
        } else if (userName.length < 2) {
            return <p className='input-error'>Username must be at least 2 characters long</p>;
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return <p className='input-error'>Password is required</p>;
        } else if (password.length < 6 || password.length > 72) {
            return <p className='input-error'>Password must be between 6 and 72 characters long</p>;
        } else if (!password.match(/[0-9]/)) {
            return <p className='input-error'>Password must contain at least one number</p>;
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        // this.setState({submitButtonDisabled: 'disabled'});
        if (repeatPassword != password) {
            return <p className='input-error'>Passwords do not match</p>;
        }
        // else {
        //     this.setState({submitButtonDisabled: ''});
        // }
    }

    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            showErrorOutput = <div className="alert alert-info">
                <i className="fas fa-info"></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }
        return (
            <section className="registration">

                {/* <div className="alert alert-success">
                    <i className="fas fa-check"></i> <strong>Success</strong> Account Activated Sucessfully!!
                </div>
    
                <div className="alert alert-warning">
                    <i className="fas fa-exclamation"></i> <strong>Warning</strong> Password does not meet complexity requirements!!
                </div>
    
                <div className="alert alert-failure">
                    <i className="fas fa-times"></i> <strong>Failure</strong> Registration Failed!! Please see System Adminstrator!!
                </div> */}

                <form className="registration-form" onSubmit={this.handleSubmit}>
                    {showErrorOutput}

                    <h1>DHR Registration</h1>

                    <div className="form-item">
                        <label htmlFor="register-email">Email</label>
                        <input name='userName' type="text" placeholder="email" id="register-email" onChange={e => this.changeUsername(e.target.value)} required />
                        {this.state.userName.touched && (<ValidationError message={this.validateUserName()} />)}
                    </div>

                    <div className="form-item">
                        <label htmlFor="register-password">Password</label>
                        <input name='password' type="text" placeholder="password" id="register-password" onChange={e => this.changePassword(e.target.value)} required />
                        {this.state.password.touched && (<ValidationError message={this.validatePassword()} />)}
                    </div>

                    <div className="form-item">
                        <label htmlFor="register-confirm-password">Confirm Password</label>
                        <input name='repeatPassword' type="text" placeholder="confirm-password" id="register-confirm-password" onChange={e => this.updateRepeatPassword(e.target.value)} required />
                        {this.state.repeatPassword.touched && (<ValidationError message={this.validateRepeatPassword()} />)}
                    </div>

                    <div className="form-item">
                        <button type='submit' className="myButton" disabled={this.state.submitButtonDisabled}>Register</button>
                        <p>Already have an account? <a href="/">Sign In</a></p>
                    </div>
                </form>
            </section>
        );
    }

}

export default Registration;
