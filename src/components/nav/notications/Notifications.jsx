import React from 'react'
import './Notifications.css'
function Notifications({notify}) {
    return (
        <div className='notify' style={{ transform: notify ? "translate(3%)" : "translate(-60%)", zIndex: notify ? "1" : "-1" }}>
            <div className='notifyTop'>
                <h2>Notifications</h2>
                <div>
                    <input type="search" />
                </div>
            </div>
            <div className='notifyBottom'>
                <h3>Recent</h3>
                <div className='notifyBos'><p>No resent searches.</p></div>
            </div>
        </div>
    )
}

export default Notifications
