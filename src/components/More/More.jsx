import React, { useContext, useEffect, useState } from 'react'
import "./More.css"
import { Link } from 'react-router-dom'
import { ContextData } from '../../App'

function More({ moreShow }) {
    const { theme, setTheme, darkClick, setDarkClick, hover, setHover } = useContext(ContextData)

    const [darkMode, setDarkMode] = useState(false)

    const dark = () => {
        setDarkMode(true)
    }

    const hoverColor = (index) => {
        theme.bgColor == "#000000" && setHover(index)
    }
    const handleMouseLeave = () => {
        setHover(null)
    }

    const darkClickbutton = () => {
        setDarkClick(!darkClick)
        setTheme(darkClick ? {
            color: "#000000",
            bgColor: "#fefff9",
            bgPopup: "white"


        } : {
            color: "#fefff9",
            bgColor: "#000000",
            bgPopup: "#262626"
        })
    }

    const logOut = () => {
        localStorage.setItem("user", false)
        window.location.reload()
    }
    return (
        <div style={{ display: moreShow == true ? "block" : "none", height: darkMode ? "15vh" : "50vh", color: theme.color, backgroundColor: theme.bgColor }} className='more'>
            <div className="morePadding">
                <ul style={{ display: darkMode ? "none" : "block" }}>
                    <li onMouseEnter={() => hoverColor(11)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 11 && "#1a1a1a", transition: '.5s' }}>
                        <div><svg aria-label="Settings" className="x1lliihq x1n2onr6" color={theme.color} fill={theme.color} height="18" role="img" viewBox="0 0 24 24" width="18"><title>Settings</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg><span style={{ color: theme.color }}>Settings</span></div>
                    </li>
                    <li onMouseEnter={() => hoverColor(12)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 12 && "#1a1a1a", transition: '.5s' }}>
                        <div><svg aria-label="Your activity" className="x1lliihq x1n2onr6" color={theme.color} fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Your activity</title><path d="M12 1.505a10.5 10.5 0 1 1-7.424 17.924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline fill="none" points="8.893 15.108 12 12 12.012 12.012 12.012 5.793" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><circle cx="7.24" cy="2.651" r="1.125"></circle><circle cx="3.515" cy="5.83" r="1.125"></circle><circle cx="1.636" cy="10.353" r="1.125"></circle><circle cx="2.01" cy="15.235" r="1.125"></circle></svg><span style={{ color: theme.color }}>Your activity</span></div>
                    </li>
                    <Link to="save">
                        <li onMouseEnter={() => hoverColor(13)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 13 && "#1a1a1a", transition: '.5s' }}>
                            <div><svg aria-label="Saved" className="x1lliihq x1n2onr6" color={theme.color} fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Saved</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg><span style={{ color: theme.color }}>Saved</span></div>
                        </li>
                    </Link>
                    <li onMouseEnter={() => hoverColor(14)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 14 && "#1a1a1a", transition: '.5s' }} onClick={dark}>
                        <div>{darkClick?<svg aria-label="Theme icon" class="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Theme icon</title><path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path></svg>:<svg aria-label="Theme icon" className="x1lliihq x1n2onr6" color={theme.color} fill={theme.color} height="18" role="img" viewBox="0 0 24 24" width="18"><title>Theme icon</title><path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path></svg>}<span style={{ color: theme.color }}>Switch appearance</span></div>
                    </li>
                    <li onMouseEnter={() => hoverColor(15)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 15 && "#1a1a1a", transition: '.5s' }}>
                        <div><svg aria-label="Report a problem" className="x1lliihq x1n2onr6" color={theme.color} fill={theme.color} height="18" role="img" viewBox="0 0 24 24" width="18"><title>Report a problem</title><path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path></svg><span style={{ color: theme.color }}>Report a problem</span></div>
                    </li>
                </ul>
                <div style={{ display: darkMode ? "block" : "none" }} className='salammm'>
                    <div className='darkFlexTop'>
                        <div onClick={() => setDarkMode(false)}>
                            <div><svg aria-label="Back" class="x1lliihq x1n2onr6" color={theme.color} fill={theme.color} height="12" role="img" viewBox="0 0 24 24" width="12"><title>Back</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg></div>
                        </div>
                        <div>
                            <p style={{ color: theme.color }}>Switch appearance</p>
                        </div>
                        <div>{darkClick ? <svg aria-label="Theme icon" class="x1lliihq x1n2onr6" color={theme.color} fill="rgb(245, 245, 245)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Theme icon</title><path d="M11.502,22.99805A11.4313,11.4313,0,0,1,.49512,14.83691a.99889.99889,0,0,1,.251-.998,1.01148,1.01148,0,0,1,.99707-.249,9.43041,9.43041,0,0,0,2.75879.40821A9.5082,9.5082,0,0,0,13.5957,1.74023a1.00039,1.00039,0,0,1,1.24707-1.248A11.501,11.501,0,0,1,11.502,22.99805ZM3.08984,15.91211A9.49991,9.49991,0,0,0,21.002,11.498,9.57875,9.57875,0,0,0,15.916,3.08594,11.5083,11.5083,0,0,1,3.08984,15.91211Z"></path></svg> : <svg aria-label="Theme icon" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Theme icon</title><path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path></svg>}</div>
                    </div>
                    <div onMouseEnter={() => hoverColor(16)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 16 && "#1a1a1a", transition: '.5s' }} className='darkFlexBottom'>
                        <div><p>Dark mode</p></div>
                        <div>
                            <label class="switch">
                                <input type="checkbox" />
                                <span onClick={darkClickbutton} class="sliderdark round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: darkMode ? "none" : "block" }} className="morePaddingCenter"></div>
            <div className="morePaddingBottom">
                <ul style={{ display: darkMode ? "none" : "block" }}>
                    <li onMouseEnter={() => hoverColor(17)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 17 && "#1a1a1a", transition: '.5s' }}>
                        <div><span style={{ color: theme.color }}>Switch accounts</span></div>
                    </li>
                    <li onMouseEnter={() => hoverColor(18)} onMouseLeave={() => handleMouseLeave(null)} style={{ backgroundColor: hover == 18 && "#1a1a1a", transition: '.5s' }} onClick={logOut}>
                        <div><span style={{ color: theme.color }}>Log out</span></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default More