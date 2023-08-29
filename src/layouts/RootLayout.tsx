import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import Navbar from '../features/navbar/Navbar'

const RootLayout: React.FC = () => {
  return (
    <div className='min-h-screen text-white bg-slate-700'>
      <header className='flex items-center justify-between px-12 py-4 shadow-lg bg-slate-800'>
        <Link to='/' className='text-xl tracking-wider text-semibold'>
          Bookings
        </Link>
        <Navbar />
      </header>
      <main className='px-12 py-6'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
