import React, { useContext, useState } from 'react'
import "./Post.css"
import PostItem from './PostItem';
import { ContextData } from '../../App';
import HashLoader from "react-spinners/HashLoader";

function Post() {
    const { postDatas, loader } = useContext(ContextData);
    return (
        <div className='post'>
            {loader && <div style={{marginTop:"250px", marginLeft:"-50px"}}>
                <HashLoader
                    color={"black"}
                    loading={loader}
                    size={35}
                />
            </div>}
            {postDatas.map(item => <PostItem key={item.id} {...item} />)}
        </div>
    )
}

export default Post