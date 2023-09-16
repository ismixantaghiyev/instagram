import React, { useContext } from 'react'
import "./Posts.css"
import PostItemProfile from './PostItemProfile/PostItemProfile'
import { ContextData } from '../../../../App'

function Posts() {
    const { data, loader } = useContext(ContextData)
    console.log(data);
    return (
        <div className='posts'>
            {data.slice(0,6).map(item=><PostItemProfile {...item}/>)}
        </div>
    )
}

export default Posts