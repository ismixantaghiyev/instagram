import React, { useContext } from 'react'
import "./Posts.css"
import PostItemProfile from './PostItemProfile/PostItemProfile'
import { ContextData } from '../../../../App'

function Posts() {
    const { data, loader } = useContext(ContextData)
    return (
        <div className='posts'>
            {data.map(item=><PostItemProfile {...item}/>)}
        </div>
    )
}

export default Posts