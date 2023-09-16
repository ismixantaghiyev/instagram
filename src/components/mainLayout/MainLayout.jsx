import React from 'react'
import Main from '../main/Main'
import Profile from '../profile/Profile'
import "./MainLayout.css"
function MainLayout() {
    return (
        <div className='mainLayout'>
            <Main />
            <Profile />
        </div>
    )
}

export default MainLayout
