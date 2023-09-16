import React from 'react'
import './Search.css'
function Search({ show }) {
    return (
        <div className='search' style={{ transform: show ? "translate(3%)" : "translate(-60%)", zIndex: show ? "1" : "-1" }}>
            <div className='searchTop'>
                <h2>Search</h2>
                <div>
                    <input type="search" />
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
