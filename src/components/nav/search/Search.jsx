import React, { useContext } from 'react'
import './Search.css'
import { ContextData } from '../../../App'
function Search({ show }) {

    const { theme } = useContext(ContextData)

    return (
        <div className='search' style={{ transform: show ? "translate(3%)" : "translate(-60%)", zIndex: show ? "1" : "-1" , color:theme.color, backgroundColor:theme.bgColor}}>
            <div className='searchTop'>
                <h2>Search</h2>
                <div>
                    <input style={{backgroundColor:theme.bgColor, border:`1px solid ${theme.color}` }} type="search" />
                </div>
            </div>
            <div className='searchBottom'>
                <h3>Recent</h3>
                <div className='bos'><p>No resent searches.</p></div>
            </div>
        </div>
    )
}

export default Search
