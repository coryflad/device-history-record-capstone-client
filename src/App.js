import React from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Registration from './Registration'
import SignIn from './SignIn'
import DhrReport from './DhrReport'
// import DefectLog from './DefectLog'


function App() {
    return (
        <div className="App">
         
            {/* <DefectLog /> */}
            <Route exact path='/' component={SignIn} />

            <Route path='/registration' component={Registration} />

            <Route path='/landing' component={LandingPage} />

            <Route path='/dhr-report/show/:documentId' component={DhrReport} />

            {/* <Route path='/dhr-report/show-all' component={DhrReport} /> */}
        </div>
    )
}

export default App
