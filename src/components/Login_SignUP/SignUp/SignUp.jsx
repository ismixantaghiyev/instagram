import React, { useContext, useState } from 'react'
import "./SignUp.css"
import logo from "../../../images/logo.png"
import { GrFacebook } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import { app, firebase_entry } from '../../../service/firebase_entry';
import { ContextData } from '../../../App';
function SignUp({ changeAccount }) {
    const { setShowAccount } = useContext(ContextData)
    const [loginInputs, setLoginInputs] = useState({
        email: "",
        fullName: "",
        userName: "",
        password: ""
    })
    console.log(loginInputs, 'loginInputs');
    const database = getDatabase(app)
    const signUps = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, loginInputs.email, loginInputs.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                set(ref(database, "users/" + user.uid), {
                    userName: loginInputs.userName,
                    email: loginInputs.email,
                    fullName: loginInputs.fullName,
                    profileImg:"" 
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        if (loginInputs.email && loginInputs.userName && loginInputs.fullName && loginInputs.password) {
            setShowAccount(false);
        }
    }

    const [showSign, setShowSign] = useState(true)

    const inputChangeHandler = (identifier, e) => {
        setLoginInputs((prev) => {
            return { ...prev, [identifier]: e };
        });
    };

    return (
        <>
            <div className='signUp'>
                <div className="form">
                    <div className="logoInstaaa">
                        <div className='logoContainerrr'>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className='formText'><p>Sign up to see photos and videos from your friends.</p></div>
                    <div className='formButton'>
                        <div className='formFlex'>
                            <p><GrFacebook /></p>
                            <p>Log in with Facebook</p>
                        </div>
                    </div>
                    <div className='or'>
                        <div className='xett'></div>
                        <div className='orText'>OR</div>
                        <div className='xett'></div>
                    </div>
                    <div className='formSignUp'>
                        <form action="">
                            <input required className='inputSign1' value={loginInputs.email} onChange={(e) => { inputChangeHandler(e.target.name, e.target.value) }} name='email' type="text" placeholder='' />
                            <label className='labelSign1'>Mobile Number or Email</label>
                            <input required className='inputSign2' onChange={(e) => { inputChangeHandler(e.target.name, e.target.value) }} name='fullName' type="text" placeholder='' />
                            <label className='labelSign2'>Full Name</label>
                            <input required className='inputSign3' onChange={(e) => { inputChangeHandler(e.target.name, e.target.value) }} name='userName' type="text" placeholder='' />
                            <label className='labelSign3'>Username</label>
                            <input required className='inputSign4' onChange={(e) => { inputChangeHandler(e.target.name, e.target.value) }} name='password' type={showSign ? "password" : "text"} placeholder='' />
                            <label className='labelSign4'>Password</label>
                            <p style={{ display: loginInputs.password == "" && "none" }} className='showLogin' onClick={() => setShowSign(!showSign)}>{showSign ? "Show" : "Hide"}</p>
                        </form>
                    </div>
                    <div className='loginText'>
                        <p>People who use our service may have uploaded your contact information to Instagram. <span className='learnMore'> Learn More</span></p>
                    </div>
                    <div className='loginText'>
                        <p>By signing up, you agree to our <span> Terms , Privacy Policy and Cookies Policy .</span></p>
                    </div>
                    <div className='formButton'>
                        <div onClick={signUps} style={{ opacity: loginInputs.number == '' || loginInputs.fullName == '' || loginInputs.userName == '' || loginInputs.password == "" || loginInputs.password == '' ? ".5" : "1" }} className='formFlex'>
                            <p>Sign Up</p>
                        </div>
                    </div>
                </div>
                <div className="HaveAnAccount"><p>Have an account? <span onClick={changeAccount} >Log in</span></p></div>
                <div className="buttons">
                    <div><p>Get the app.</p></div>
                    <div className='gogMicFlex'>
                        <div className="google"><img alt="Get it on Google Play" className="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" /></div>
                        <div className="microsoft"><img alt="Get it from Microsoft" className="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" /></div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <ul>
                    <li>Meta</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Help</li>
                    <li>API</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Terms</li>
                    <li>Locations</li>
                    <li>Instagram Lite</li>
                    <li>Threads</li>
                    <li>Meta Verified</li>
                </ul>
                <p className='pppp'>English
                    English
                    © 2023 Instagram from Meta</p>
            </div>
        </>
    )
}

export default SignUp