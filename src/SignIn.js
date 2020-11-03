import React from 'react'


import AuthApiService from './services/AuthApiService' 
import TokenService from './services/TokenServices' 



class SignIn extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            userName: {
                value: ''
            },
            password: {
                value: ''
            },
            LogInUserID: 0,
            error: null,
            params: {},
            formValidationError: ''
        } 
    }

    changeUsername(userName) {
        this.setState({ userName: { value: userName } }) 
    }

    changePassword(password) {
        this.setState({ password: { value: password } }) 
    }

    handleSubmit = (event) => {
        event.preventDefault() 
        const { userName, password } = event.target
        console.log('username:', userName.value, 'password:', password.value) 
        AuthApiService.postLogin({
            user_name: userName.value,
            password: password.value,
        })

            .then(response => {
                console.log('response ID', response)
                userName.value = ''
                password.value = ''
                TokenService.saveAuthToken(response.authToken)
                TokenService.saveUserId(response.userId)
                window.location = '/landing'
            })
            .then(response => {
                console.log('response:', response)
            })
            .catch(err => {
                console.log(err) 
            }) 
    }


    render() {
        let showErrorOutput = ''
        if (this.state.formValidationError) {
            showErrorOutput = <div className='alert alert-info'>
                <i className='fas fa-info'></i>
                <strong>Info</strong>
                {this.state.formValidationError}
            </div>
        }
        return (
            <section className='sign-in'>

                <form className='sign-in-form' onSubmit={this.handleSubmit}>

                    {showErrorOutput}

                    <h1>DHR Sign-In</h1>

                    <div className='form-item'>
                        <label htmlFor='sign-in-email'>Email</label>
                        <input name='userName' type='text' placeholder='email' onChange={e => this.changeUsername(e.target.value)} required id='sign-in-email' />
                    </div>

                    <div className='form-item'>
                        <label htmlFor='sign-in-password'>Password</label>
                        <input name='password' type='text' placeholder='password' onChange={e => this.changePassword(e.target.value)} required id='sign-in-password' />
                    </div>

                    <div className='form-item'>
                        <button type='submit' className='myButton'>Sign-In</button>
                        <p>Need to create an account? <a href='/registration'>Register</a></p>
                    </div>

                </form>
            </section>
        )
    }
}

export default SignIn