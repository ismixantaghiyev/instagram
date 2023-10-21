import React, { useContext, useState } from 'react'
import "./StorySlider.css"
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { ContextData } from '../../App';
import Story from './Story';
import ClickStory from './ClickStory';
import Logo from '../../images/Default_pfp.jpg'


function StorySlider() {
    const { data, postDatas, dataStory } = useContext(ContextData)
    const [transform, setTransform] = useState(0)
    const [viewStory, setViewStory] = useState(false)
    const [story, setStory] = useState("")

    return (
        <>
            <div className="icons">
                <div onClick={() => setTransform(transform + 305)} style={{ color: "white", display: transform == 0 ? "none" : "block" }} className="iconLeft"><BsFillArrowLeftCircleFill style={{ fontSize: "20px" }} /></div>
                <div onClick={() => setTransform(transform - 305)} style={{ color: "white", display: transform < -500 ? "none" : "block" }} className="iconRight"><BsFillArrowRightCircleFill style={{ fontSize: "20px" }} /></div>
            </div>
            <div className='slider'>
                <div className="stories" style={{ transform: `translate(${transform}px)` }}>
                    {dataStory.map(item => <Story {...item} story={story} setStory={setStory} setViewStory={setViewStory}/>)}
                </div>
            </div>
            {viewStory && <ClickStory story={story} setStory={setStory} setViewStory={setViewStory} />}
        </>

    )
}

export default StorySlider