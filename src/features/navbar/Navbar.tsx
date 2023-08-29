import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-center space-x-6 tracking-wider'>
      <NavLink to='/users'>Users</NavLink>
      <NavLink to='/clients'>Clients</NavLink>
      <NavLink to='/services'>Services</NavLink>
      <NavLink to='/appointments'>Appointments</NavLink>
    </nav>
  )
}

export default Navbar
