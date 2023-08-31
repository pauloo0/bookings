import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface Service {
  id: number
  name: string
  description: string
  price: number
  isPackage: boolean
  packageServices?: number[]
}

interface ServicesState {
  services: Service[]
}

const initialState: ServicesState = {
  services: [
    {
      id: 1,
      name: 'Haircut',
      description: 'A simple haircut',
      price: 20,
      isPackage: false,
    },
    {
      id: 2,
      name: 'Shave',
      description: 'A simple shave',
      price: 15,
      isPackage: false,
    },
    {
      id: 3,
      name: 'Haircut and Shave',
      description: 'A simple haircut and shave',
      price: 30,
      isPackage: true,
      packageServices: [1, 2],
    },
  ],
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
})

export const selectAllServices = (state: RootState) => state.services.services

export default servicesSlice.reducer
