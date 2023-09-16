import React, { useContext } from 'react'
import "./Post.css"
import PostItem from './PostItem';
import { ContextData } from '../../App';
import HashLoader from "react-spinners/HashLoader";

function Post() {
    const { postDatas, setPostDatas, loader } = useContext(ContextData)
    return (
        <div className='post'>
            {loader && <div style={{marginTop:"250px", marginLeft:"-50px"}}>
                <HashLoader
                    color={"black"}
                    loading={loader}
                    size={35}
                />
            </div>}
            {postDatas.reverse().map(item => <PostItem {...item} />)}
        </div>
    )
}

export default Post