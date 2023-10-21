import React, { useContext } from 'react'
import "./Save.css"
import SaveItem from './SaveItem/SaveItem'
import { ContextData } from '../../../../App'

function Save() {
    const { saveBasket, darkClick } = useContext(ContextData)

    return (
        <div className='save'>
            <div className='saveFlex'>
                <div className='firstP'>Only you can see what you've saved</div>
                <div className='lastP'>+ New Collection</div>
            </div>
            {saveBasket.map(item => <SaveItem {...item} />)}
            <div className='saveNavbar'>
                <ul>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Help</li>
                    <li>API</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Locations</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>Contact Uploading & Non-Users</li>
                    <li>Meta Verified</li>
                </ul>
                <div className='selectSave'>
                    <select style={{ background: darkClick && "black" }} name="" id="">
                        <option value="">English</option>
                        <option value="">Türkçe</option>
                        <option value="">Polski</option>
                        <option value="">Afrikaans</option>
                        <option value="">magyar</option>
                    </select>
                    <p>
                        English
                        © 2023 Instagram from Meta
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Save