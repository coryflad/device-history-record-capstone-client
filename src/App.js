import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from './LandingPage'
import Registration from './Registration'
import SignIn from './SignIn'
import DhrReport from './DhrReport'
import DefectLog from './DefectLog'
import Nav from './Nav'
import Error from './Error'




function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* un-routed component */}
                <Nav />
                <Switch>
                    {/* statis routes */}
                    <Route exact path='/' component={SignIn} />
                    <Route path='/landing' component={LandingPage} />
                    <Route path='/dhr-report' component={DhrReport} />
                    <Route path='/defect-log' component={DefectLog} />
                    <Route path='/registration' component={Registration} />
                    {/* error route */}
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>


        </div>
    )
}

export default App
