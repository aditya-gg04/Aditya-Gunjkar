import { useState } from 'react'
import Navbar1 from '../HomePage/navbar.jsx'
import viteLogo from '/vite.svg'
import './App.css'
import Video from '../HomePage/enspire.jsx'
import Sponcer from '../sponcers/sponsers.jsx'
import Info from '../Info/info.jsx'
import Events from '../events/events.jsx'
import Animation from '../HomePage/style.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const R=()=>{
    return(
        <BrowserRouter>
      
                
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/events'component='<Events />'/>
          <Route path='/sponcers'component='<Sponcer />'/>
          <Route path='/teams'component='<App />'/>
          <Route path='/gallery'component='<App />'/>
          <Route path='/contacts'component='<App />'/>


        </Routes>
</BrowserRouter>
    )
}
export default R;

                 