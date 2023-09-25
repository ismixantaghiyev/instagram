import React from 'react'
import "./SaveItem.css"

function SaveItem({img}) {
    return (
        <div className='saveItem'>
            <img src={img} alt="" />
        </div>
    )
}

export default SaveItem