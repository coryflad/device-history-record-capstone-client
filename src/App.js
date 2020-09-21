import React from 'react'
import LandingPage from './LandingPage'
import Registration from './Registration'
import SignIn from './SignIn'
import DhrReport from './DhrReport'
import DefectLog from './DefectLog'


function App() {
    return (
        <div className="App">
            <Registration />
            <SignIn />
            <LandingPage />
            <DhrReport />
            <DefectLog />     
        </div>
    )
}

export default App
