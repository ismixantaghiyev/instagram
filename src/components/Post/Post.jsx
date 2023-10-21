import React, { useContext, useState } from 'react'
import "./Post.css"
import PostItem from './PostItem';
import { ContextData } from '../../App';
import HashLoader from "react-spinners/HashLoader";

function Post() {
    const { postDatas, loader, darkClick } = useContext(ContextData);
    return (
        <div className='post'>
            {loader && <div style={{marginTop:"250px", marginLeft:"-50px"}}>
                {darkClick?<HashLoader
                    color={"white"}
                    loading={loader}
                    size={35}
                />:<HashLoader
                color={"black"}
                loading={loader}
                size={35}
            />}
            </div>}
            {postDatas.map(item=>item.map(item => <PostItem key={item.id} {...item} />))}
        </div>
    )
}

export default Post