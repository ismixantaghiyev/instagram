import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import "./Explore.css"
import { ContextData } from '../../App'

function Explore() {
    const { data } = useContext(ContextData)
    useEffect(()=> window.scrollTo(0,0))
    
    return (
        <div className='exploreAll'>
            <div className='explore'>
                {data.map(item => {
                    return <div className="exploreItem">
                        <img src={item.img} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Explore