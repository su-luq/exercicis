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
      {JSON.stringify(data)}
    </div>
  )
}
