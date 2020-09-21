import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import Registration from './Registration/Registration'
import SignIn from './SignIn/SignIn'
import DhrReport from './DhrReport/DhrReport'
import DefectLog from './DefectLog/DefectLog'


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
