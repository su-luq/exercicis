import React from 'react'
import {QueryClient, QueryClientProvider } from 'react-query'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='container d-flex flex-column container fullscreen'>
        
        <Header></Header>      
        <main className='flex-grow-1'>
          <Outlet />
        </main>      
        <Footer ></Footer>
            
      </div>
    </QueryClientProvider>
  )
}
