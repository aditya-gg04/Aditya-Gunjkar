import { useState } from 'react'
import Navbar1 from '../HomePage/navbar.jsx'
import viteLogo from '/vite.svg'
import './App.css'
import Video from '../HomePage/enspire.jsx'
import Sponcer from '../sponcers/sponsors.jsx'
import Info from '../Info/info.jsx'
import Events from '../events/events.jsx'
import Animation from '../HomePage/style.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../footer/footer.jsx'
function App() {


  return (
    <>
      <div className=' flex-col'>
        <div className='absolute'>
          <div className=' h-screen w-screen bg-black border-white'>

          </div>
          
          <div className=' absolute top-20 ml-80  text-white w-1/2' >


           
            <div>
              <Animation />
            </div>
          </div>
          <div >
            <Video />
          </div>
          <div >
            <Sponcer />
          </div>
          <div>
            <Info />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>






    </>
  )
}

export default App
