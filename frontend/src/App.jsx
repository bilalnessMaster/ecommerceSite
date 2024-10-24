import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { useCarteStore } from './Stores/useCarteStore'

function App() {
  const {cartITtems}= useCarteStore()

  useEffect(()=>{
      

  } , [cartITtems])
  return (
    <>
    <NavBar />
    <Toaster position="bottom-right "/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
