import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import MainLayout from './components/mainLayout/MainLayout'
import Explore from './components/Explore/Explore'
import ProfilEsas from './components/ProfileEsas/ProfilEsas'
import Save from './components/ProfileEsas/PagesProfile/Save/Save'
import Tagges from './components/ProfileEsas/PagesProfile/Tagges/Tagges'
import Posts from './components/ProfileEsas/PagesProfile/Posts/Posts'

function Rout() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<MainLayout />} />
          <Route path='explore' element={<Explore />} />
          <Route path='/profile' element={<ProfilEsas />}>
            <Route index element={<Posts />} />
            <Route path='save' element={<Save />} />
            <Route path='tagges' element={<Tagges />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default Rout
