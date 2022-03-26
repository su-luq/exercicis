import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div className='d-flex flex-column justify-content-between container fullscreen'>
      
      <header>
          capçalera
          <ul><Link to="/clientes">Clientes</Link></ul>
          <ul><Link to="/productos">Productos</Link></ul>
          <ul><Link to="/facturas">Facturas</Link></ul>
      </header>
      
      <main className='flex-grow-1'>
        <Outlet />
      </main>
      
      <footer className='d-flex'>
        <div className='d-flex flex-columns'>Peu</div>
      </footer>
    </div>
  )
}
