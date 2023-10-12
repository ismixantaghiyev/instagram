import React from 'react'
import './Notifications.css'
import { IoIosArrowForward } from 'react-icons/io';

function Notifications({ notify }) {
    return (
        <div className='notify' style={{ transform: notify ? "translate(3%)" : "translate(-60%)", zIndex: notify ? "1" : "-1" }}>
            <div className='notifyTop'>
                <h2>Notifications</h2>
                <div className='followTop'>
                    <div className="followImg"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="profil" /></div>
                    <div className="followText">
                        <p>Follow requests</p>
                        <span>jasmineBaku + 15 others</span>
                    </div>
                    <div className="followButton">
                        <div className='circleIcon'>
                            <div className='circle'></div>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
            <div className='notifyBottom'>
                <h4>Today</h4>
                <div className="todayFollow">
                    <div className="todayFollowImg"><img src="https://i.pinimg.com/564x/55/b3/0c/55b30ce58cc4ad74783215902af34c05.jpg" alt="pp" /></div>
                    <div className='todayFollowText'>
                        <p><span>bozqurd_vandam</span> started following you <span>1h</span></p>
                    </div>
                    <div className="todayFollowButton">
                        <button>Following</button>
                    </div>
                </div>
                <div className="todayFollow">
                    <div className="todayFollowImg"><img src="https://i.pinimg.com/564x/ae/72/61/ae7261114527edf8911671b8ab675c74.jpg" alt="pp" /></div>
                    <div className='todayFollowText text2'>
                        <p><span>mark_johnson</span> requested to follow you <span>6h</span></p>
                    </div>
                    <div className="todayFollowButton buttonFollow">
                        <button>Confirm</button>
                        <button>Delete</button>
                    </div>
                </div>
                <div className="todayFollow">
                    <div className="todayFollowImg"><img src="https://i.pinimg.com/564x/59/71/01/59710108236b9b54f49c3e57786ef45b.jpg" alt="pp" /></div>
                    <div className='todayFollowText'>
                        <p><span>barbie.oppenheimer</span> started following you <span>13h</span></p>
                    </div>
                    <div className="todayFollowButton">
                        <button>Following</button>
                    </div>
                </div>
                <div className="todayFollow">
                    <div className="todayFollowImg"><img src="https://imageproxy.wolt.com/venue/63d76e148dd4f5a411705d43/a91c744a-a3ac-11ed-8c30-4250b4e63f0f_aza_doner.jpg" alt="pp" /></div>
                    <div className='todayFollowText'>
                        <p><span>elsadin_qirgin_doneri</span> started following you <span>21h</span></p>
                    </div>
                    <div className="todayFollowButton">
                        <button>Following</button>
                    </div>
                </div>
            </div>
            <div className='notifyEnd'>
                <h4>This week</h4>
                <div className="todayFollow todayFollowStory">
                    <div className="todayFollowImg"><img src="https://i.pinimg.com/564x/61/42/d9/6142d9e762c96baaf0361635f7f9e0d7.jpg" alt="pp" /></div>
                    <div className='todayFollowText bbb'>
                        <p><span>blawnsh</span> liked your story. <span>1d</span></p>
                    </div>
                    <div className="todayFollowButton aaa">
                        <img src="https://i.pinimg.com/564x/29/b9/0b/29b90bcc3263d5031f995dae9ec34bdc.jpg" alt="" />
                    </div>
                </div>
                <div className="todayFollow">
                    <div className="todayFollowImg"><img src="https://azmiu.edu.az/external/ckfinder/userfiles/images/2013-12-12.jpg" alt="pp" /></div>
                    <div className='todayFollowText'>
                        <p><span>azmiu_biz</span> started following you <span>3d</span></p>
                    </div>
                    <div className="todayFollowButton">
                        <button>Following</button>
                    </div>
                </div>
                <div className="todayFollow">
                    <div className="todayFollowImg"><img src="https://i.pinimg.com/564x/3a/7b/1c/3a7b1ce6767b7713567d682b0e5748fd.jpg" alt="pp" /></div>
                    <div className='todayFollowText text2'>
                        <p><span>emily.1999</span> requested to follow you <span>4d</span></p>
                    </div>
                    <div className="todayFollowButton buttonFollow">
                        <button>Confirm</button>
                        <button>Delete</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Notifications
