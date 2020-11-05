import React, { Component } from 'react'
import TokenService from './services/TokenServices'
import { Link } from 'react-router-dom'


class navbar extends Component {

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
            <header>
                <h4>eDHR+</h4>
                {TokenService.hasAuthToken() ?
                    <nav className="nav">
                        <ul className='link'>
                            <li>
                                <Link to="/landing">Support Central</Link>
                            </li>
                            <li>
                                <li>
                                    <Link to="/dhr-report">Create DHR</Link>
                                </li>

                                <Link to="/defect-log">Log Defect</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logOutClick}>Log Out</Link>
                            </li>
                        </ul>
                    </nav>
                    : ''}
            </header>
        )
    }
}

export default navbar 