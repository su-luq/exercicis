import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Home() {
  return (
    <div className='d-flex flex-column container fullscreen'>
      
      <Header></Header>      
      <main className='flex-grow-1'>
        <Outlet />
      </main>      
      <Footer ></Footer>
           
    </div>
  )
}
