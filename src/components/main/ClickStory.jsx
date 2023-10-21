import React, { useContext, useEffect, useState } from 'react'
import "./ClickStory.css"
import { ContextData } from '../../App'
import { BsThreeDots } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Logo from '../../images/Default_pfp.jpg'


function ClickStory({ story, setStory, setViewStory }) {
    const { data,dataStory } = useContext(ContextData)

    const next = dataStory.find(item => item.id == story?.id + 1)
    const left = dataStory.find(item => item.id == story?.id - 1)

    const storyLeftClick = () => {
        setStory(left)
        setTime(0)
    }

    const storyRightClick = () => {
        setStory(next)
        setTime(0)
    }

    const [time, setTime] = useState(0)
    useEffect(() => {
        if (time < 100) {
            const timer = setTimeout(() => {
                setTime(time + 0.17);
            }, 7);
            return () => clearTimeout(timer);
        }
        next ? storyRightClick() : setViewStory(false)
    }, [time, story]);

    return (
        <>
            <div onClick={() => setViewStory(false)} className="closeStory">
                <IoMdClose />
            </div>
            <div className='clickStory' >
                <div className="storyAbout">
                    <div className="time" style={{ width: `${time}%`, height: "3px", backgroundColor: "white" }}></div>
                    <div className="storyHeader">
                        <div className="leftHeader">
                            <div className="storyHeaderImg"><img src={story?.img} /></div>
                            <div className="storyHeaderText">{story?.name}</div>
                        </div>
                        <div className="rightHearder"><BsThreeDots /></div>
                    </div>
                    <div className="storyImg"><img src={story?.img} /></div>
                    <div className="storyFooter">
                        <div className="footerLeft"><input type="text" placeholder='Reply to ...' /></div>
                        <div className="footerRight">
                            <svg aria-label="Like" className="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                            <svg aria-label="Direct" className="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Direct</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                        </div>
                    </div>
                    <div className="iconsStory">
                        {left && <div className="storyIconLeft" onClick={storyLeftClick} ><BsFillArrowLeftCircleFill /></div>}
                        {next && <div className="storyIconRight" onClick={storyRightClick}><BsFillArrowRightCircleFill /></div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClickStory