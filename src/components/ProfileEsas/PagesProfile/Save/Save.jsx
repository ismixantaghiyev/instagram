import React, { useContext } from 'react'
import "./Save.css"
import SaveItem from './SaveItem/SaveItem'
import { ContextData } from '../../../../App'

function Save() {
    const { saveBasket, setSaveBasket } = useContext(ContextData)

    return (
        <div className='save'>
            <div className='saveFlex'>
                <div className='firstP'>Only you can see what you've saved</div>
                <div className='lastP'>+ New Collection</div>
            </div>
            {saveBasket.map(item => <SaveItem {...item} />)}
        </div>
    )
}

export default Save