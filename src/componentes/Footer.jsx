import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='d-flex justify-content-around mb-5'>
    <div className='d-flex flex-column'>
      <Link to="/Personas">Facebook</Link>
      <Link to="/Personas">Instagram</Link>
      <Link to="/Personas">Linkedin</Link>
    </div>
    <div className='d-flex flex-column'>
      <Link to="/Personas">Contactar</Link>
      <Link to="/Personas">Terminos y condiciones</Link>
      <Link to="/Personas">Seguridad</Link>
    </div>
  </footer>
  )
}
