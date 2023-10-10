import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import { ContextData } from '../../App'

function Acount() {
    const { showAccount, setShowAccount } = useContext(ContextData)

    const changeAccount = () => {
        setShowAccount(!showAccount)
    }

    return (
        <div>
            {showAccount ? <SignUp changeAccount={changeAccount} /> : <LogIn changeAccount={changeAccount} />}
        </div>
    )
}

export default Acount