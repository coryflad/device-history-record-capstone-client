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
            <header className='clearfix'>
                <h4>eDHR+</h4>
                {TokenService.hasAuthToken() ?
                    <nav className="nav">
                        <ul className='link'>
                            <li>
                                <Link to="/landing">
                                    <i className="fas fa-question-circle"></i>
                                    <span className='navlink-text'>Support Central</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dhr-report">
                                    <i className="fas fa-plus-circle"></i>
                                    <span className='navlink-text'>Create DHR</span>
                                </Link>
                            </li>
                            <li>

                                <Link to="/defect-log">
                                    <i className="fas fa-edit"></i>
                                    <span className='navlink-text'>Log Defect</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={this.logOutClick}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span className='navlink-text'>Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    : ''}
            </header>
        )
    }
}

export default navbar 