import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
  return (
    <main className='min-h-screen text-white bg-slate-800'>
      <Outlet />
    </main>
  )
}

export default RootLayout
