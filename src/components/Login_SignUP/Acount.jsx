import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'

function Acount() {
const [showAccount,setShowAccount] = useState(false)

    const changeAccount = () =>{
        setShowAccount(!showAccount)
    }

    return (
        <div>
            {showAccount?<SignUp changeAccount={changeAccount} />:<LogIn changeAccount={changeAccount} />}
        </div>
    )
}

export default Acount