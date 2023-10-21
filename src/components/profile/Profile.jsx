import React, { useContext } from 'react'
import "./Profile.css"
import Logo from "../../images/Default_pfp.jpg"
import { ContextData } from '../../App'



function Profile() {
  const { userInfo,darkClick } = useContext(ContextData)
  return (
    <div className='profil'>
      <div className="profilContainer">
        <div className="profilItem">
          <div className="profilLeft">
            <div className="profileimg"><img src={userInfo?.profileImg ? userInfo?.profileImg : Logo} /></div>
            <div className="profiletextAll">
              <div><p>{userInfo?.userName}</p></div>
              <div style={{ fontSize: "13px", color: "#676464" }}>{userInfo?.fullName}</div>
            </div>
          </div>
          <div className="profilRight">Switch</div>
        </div>
        <div className="texttext">
          <div style={{ fontSize: "14px", fontWeight: "500", color: "#676464" }}>Suggested for you</div>
          <div style={{ fontSize: "12px", fontWeight: "500", cursor: 'pointer' }}>See All</div>
        </div>
        <div className="profilItem">
          <div className="profilLeft">
            <div className="profileimg"><img src="https://i.pinimg.com/236x/d4/8c/3e/d48c3ea557f732be6e84d179dd69c991.jpg" /></div>
            <div className="profiletextAll">
              <div><p>ariana.prvt_18</p></div>
              <div style={{ fontSize: "13px", color: "#676464" }}>Suggested for you</div>
            </div>
          </div>
          <div className="profilRight">Follow</div>
        </div>
        <div className="profilItem">
          <div className="profilLeft">
            <div className="profileimg"><img src="https://i.pinimg.com/236x/a8/49/2b/a8492bf7334789b5e2f0344ca8463cef.jpg" /></div>
            <div className="profiletextAll">
              <div><p>mentor_villa</p></div>
              <div style={{ fontSize: "13px", color: "#676464" }}>Suggested for you</div>
            </div>
          </div>
          <div className="profilRight">Follow</div>
        </div>
        <div className="profilItem">
          <div className="profilLeft">
            <div className="profileimg"><img src="https://i.pinimg.com/236x/51/66/f0/5166f050efb0e29fee060dca294f619e.jpg" /></div>
            <div className="profiletextAll">
              <div><p>animals_home</p></div>
              <div style={{ fontSize: "13px", color: "#676464" }}>Suggested for you</div>
            </div>
          </div>
          <div className="profilRight">Follow</div>
        </div>
        <div className="profilItem">
          <div className="profilLeft">
            <div className="profileimg"><img src="https://i.pinimg.com/236x/2a/00/86/2a0086e355d8198c69f06fb72ad032d3.jpg" /></div>
            <div className="profiletextAll">
              <div><p>Webkit</p></div>
              <div style={{ fontSize: "13px", color: "#676464" }}>Suggested for you</div>
            </div>
          </div>
          <div className="profilRight">Follow</div>
        </div>
        {/* <div className="profilItem">
          <div className="profilLeft">
            <div className="profileimg"><img src="https://i.pinimg.com/236x/38/ba/35/38ba35c985363afa088c96b82a6d5f2a.jpg" /></div>
            <div className="profiletextAll">
              <div><p>andiran_pric </p></div>
              <div style={{ fontSize: "13px", color: "#676464" }}>Suggested for you</div>
            </div>
          </div>
          <div className="profilRight">Follow</div>
        </div> */}
        <div style={{color: darkClick? "#676464":"#c0c0c0" }} className='profilNav'>
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Press</li>
            <li>API</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
            <li>Language</li>
            <li>Meta Verified</li>
          </ul>
          <p>© 2023 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
