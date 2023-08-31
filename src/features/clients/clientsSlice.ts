import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface Client {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  joinDate: string
  status: string
  nextPayday: string
}

interface ClientsState {
  clients: Client[]
}

const initialState: ClientsState = {
  clients: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '555-555-5555',
      address: '123 Main St',
      city: 'Anytown',
      state: 'FL',
      zip: '12345',
      joinDate: '2021-01-01',
      status: 'Active',
      nextPayday: '2021-01-01',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@email.com',
      phone: '555-555-6666',
      address: '123 Main St',
      city: 'Anytown',
      state: 'FL',
      zip: '12345',
      joinDate: '2021-01-01',
      status: 'Active',
      nextPayday: '2021-01-01',
    },
  ],
}

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
})

export const selectAllClients = (state: RootState) => state.clients.clients
export const selectClientById = (state: RootState, clientId: number) =>
  state.clients.clients.find((client) => client.id === clientId)

export default clientsSlice.reducer
