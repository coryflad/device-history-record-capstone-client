import React from 'react'
import TokenService from './services/TokenServices'
import { Link } from 'react-router-dom'


class Error extends React.Component {

    logOutClick = () => {
        console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            console.log(id)
        }

        window.location = '/'
    }

    render() {
        return (
            <div className='error'>
                {TokenService.hasAuthToken() ?
                    <div>
                        <h6>Wrong path my man!</h6>
                    </div>
                    :
                    <div>
                        <h6>Please login!</h6>
                        <li>
                            <Link to="/">Back To Login</Link>
                        </li>
                    </div>}
            </div>
        )
    }
}


export default Error