import React, { useContext, useEffect, useRef, useState } from 'react'
import "./ProfilEsas.css"
import { Outlet } from 'react-router-dom'
import NavProfile from './PagesProfile/NavProfile/NavProfile'
import Logo from "../../images/Default_pfp.jpg"
import { ContextData } from '../../App'

function ProfilEsas() {
    const { userInfo, activeUser } = useContext(ContextData)
    const inputRefProfil = useRef()
    useEffect(() => window.scrollTo(0, 0))
    const [profileImg, setProfileImg] = useState('')

    const changeProfile = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result) {
                setProfileImg(reader.result);
            }
        };
        if (file) {
            reader.readAsDataURL(file)
        }
        // Kullanıcının verilerini alın
        fetch(`https://instagram-152c4-default-rtdb.firebaseio.com/users/${activeUser}.json`)
            .then((response) => response.json())
            .then((userData) => {
                // Mevcut kullanıcı verilerini alın
                let currentUserData = userData || {};

                // Yeni profil fotoğrafını güncelleyin
                currentUserData.profileImg = reader.result;

                // Güncellenmiş kullanıcı verilerini kaydedin
                fetch(`https://instagram-152c4-default-rtdb.firebaseio.com/users/${activeUser}.json`, {
                    method: "PUT", // Kullanıcı verilerini güncellemek için PUT metodunu kullanabilirsiniz
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUserData),
                });

            })
    }



    const profilePhotoChange = () => {
        inputRefProfil.current.click();
    }

    const { darkClick, setDarkClick, theme } = useContext(ContextData)

    return (
        <>
            <div className='profilEsas'>
                <div className="containerProfile">
                    <div className="profilTop">
                        <div className="profilImgB" onClick={profilePhotoChange}>
                            <img src={userInfo?.profileImg ? userInfo?.profileImg : Logo} alt="Profile" />
                        </div>
                        <input style={{ display: "none" }} ref={inputRefProfil} onChange={changeProfile} type="file" name='file' />
                        <div className="profileTextT">
                            <div className='profileLeftTop'>
                                <div><p>{userInfo?.userName}</p></div>
                                <div style={{backgroundColor:darkClick?"#363635":"#EFEFEF"}} className='profileBtn'>Edit profile</div>
                                <div style={{backgroundColor:darkClick?"#363635":"#EFEFEF"}} className='profileBtn'>View Archive</div>
                                <div style={{backgroundColor:darkClick?"#363635":"#EFEFEF"}} className='profileBtn'>Add tools</div>
                                <div><svg aria-label="Options" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h-1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v-1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            </div>
                            <div className="follow">
                                <div><p><span>6</span> posts</p></div>
                                <div><p><span>34</span> followers</p></div>
                                <div><p><span>100</span> following</p></div>
                            </div>
                            <div className='fontWeight'>{userInfo?.fullName}</div>
                            <div>
                                <p>Azmiu</p>
                            </div>
                        </div>
                    </div>
                    <div className="profilCenter">
                        <div style={{backgroundColor:darkClick?"#121212":"white"}} className="profilCenterItem">
                            {darkClick?<svg aria-label="Plus icon" class="x1lliihq x1n2onr6" color="rgb(115, 115, 115)" fill="rgb(115, 115, 115)" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Plus icon</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>:<svg aria-label="Plus icon" class="x1lliihq x1n2onr6" color="rgb(199, 199, 199)" fill="rgb(199, 199, 199)" height="44" role="img" viewBox="0 0 24 24" width="44"><title>Plus icon</title><path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path></svg>}
                        </div>
                        <div><p>New</p></div>
                    </div>
                    <div className="profilBottom">
                    </div>
                    <NavProfile />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default ProfilEsas
