import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <ul className='list-group list-group-horizontal'>
            <li className='list-group-item gx-5 border-0'><Link to="/clientes">Clientes</Link></li>
            <li className='list-group-item gx-5 border-0'><Link to="/productos">Productos</Link></li>
            <li className='list-group-item gx-5 border-0'><Link to="/facturas">Facturas</Link></li>
            <li className='list-group-item gx-5 border-0'><Link to="/eth">Eth</Link></li>
        </ul>
    </header>
  )
}
