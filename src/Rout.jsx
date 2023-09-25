import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import MainLayout from './components/mainLayout/MainLayout';
import Explore from './components/Explore/Explore';
import ProfilEsas from './components/ProfileEsas/ProfilEsas';
import Save from './components/ProfileEsas/PagesProfile/Save/Save';
import Tagges from './components/ProfileEsas/PagesProfile/Tagges/Tagges';
import Posts from './components/ProfileEsas/PagesProfile/Posts/Posts';
import LogIn from './components/Login_SignUP/LogIn/LogIn';
import SignUp from './components/Login_SignUP/SignUp/SignUp';

function Rout({signTrue, setLoginTrue}) {
  const navigate = useNavigate();

  useEffect(() => {
    if(signTrue==true){
      navigate('/login');
    }
    else{
      navigate("/signup")
    }
  }, [signTrue]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<MainLayout />} />
          <Route path='explore' element={<Explore />} />
          <Route path='/' element={<ProfilEsas />}>
            <Route index path='profile' element={<Posts />} />
            <Route path='save' element={<Save />} />
            <Route path='tagges' element={<Tagges />} />
          </Route>
        </Route>
          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Rout;
