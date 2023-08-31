import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectMaxClientId, createClient } from './clientsSlice'

const AddClient: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const newId: number = useAppSelector(selectMaxClientId) + 1

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const onSaveClientClicked = () => {
    console.log({
      id: newId,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zip,
    })

    // dispatch(
    //   createClient({
    //     id: newId,
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber,
    //     address,
    //     city,
    //     state,
    //     zip,
    //   })
    // )

    //navigate('/clients')
  }

  return (
    <section>
      <h2>New client</h2>
      <form className='text-black' onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone Number:</label>
          <input
            type='text'
            name='phone'
            id='phone'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='state'>State:</label>
          <input
            type='text'
            name='state'
            id='state'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='zip'>Zip Code:</label>
          <input
            type='text'
            name='zip'
            id='zip'
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <button onClick={onSaveClientClicked}>Save</button>
      </form>
    </section>
  )
}

export default AddClient
