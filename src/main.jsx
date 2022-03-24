import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './componentes/Home'
import Clientes from './componentes/Clientes'
import Facturas from './componentes/Facturas'
import Productos from './componentes/Productos'

ReactDOM.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={ <Home></Home>} />
      <Route path="/facturas" element={ <Facturas></Facturas>} />
      <Route path="/clientes" element={ <Clientes></Clientes>} />
      <Route path="/productos" element={ <Productos></Productos>} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
