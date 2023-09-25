import React, { useContext } from 'react'
import "./Save.css"
import SaveItem from './SaveItem/SaveItem'
import { ContextData } from '../../../../App'

function Save() {
    const { saveBasket, setSaveBasket } = useContext(ContextData)

    return (
        <div className='save'>
            {saveBasket.map(item => <SaveItem {...item} />)}
        </div>
    )
}

export default Save