import React from 'react'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='h-full w-full'>
      <NavBar/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default HomePage
