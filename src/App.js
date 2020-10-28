import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Registration from './Registration'
import SignIn from './SignIn'
import DhrReport from './DhrReport'
import DefectLog from './DefectLog'
import Nav from './Nav'


function App() {
    return (
        <div className="App">

            <Nav />
         
            <Route path='/defect-log' component={DefectLog} />

            <Route path='/dhr-report' component={DhrReport} />

            <Route path='/landing' component={LandingPage} />
 
            <Route path='/registration' component={Registration} />

            <Route exact path='/' component={SignIn} />

        </div>
    )
}

export default App
