import React from 'react';
// afegim yarn add axios
import axios from 'axios';
import { useQuery } from 'react-query';

const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getProductos() {
  return axios.get(`${URL_API}/sql?sql=select * from Products order by Product_name`);
}

export default function ListaProductos() {
  const { isLoading, data } = useQuery('products', getProductos)
  
  if (isLoading) {
    return <div>Is loading...</div>
  }
  return (
    <div>
      {/*JSON.stringify(data.data[0])*/}
      <h1>Productos Actuales</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(producto => (
            <tr key={producto.product_id}>
              <td className='text-center'>{producto.product_id}</td>
              <td>{producto.product_name}</td>
              <td className='text-end'>{producto.unit_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
