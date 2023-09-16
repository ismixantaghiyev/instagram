import React from 'react'
import "./PostItemProfile.css"
import { FaComment } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';


function PostItemProfile({ img, like, comment }) {
    return (
        <div className="profilItems">
            <img src={img} />
            <div className="hover">
                <div style={{display:"flex", gap:"5px"}}>
                    <p><FcLike style={{fontSize:"18px"}}/></p>
                    <p>{like}</p>
                </div>
                <div style={{display:"flex", gap:"5px"}}>
                    <p><FaComment /></p>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default PostItemProfile