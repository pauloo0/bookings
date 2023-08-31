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
    },
  ],
}

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    createClient(state, action) {
      state.clients.push(action.payload)
    },
  },
})

export const { createClient } = clientsSlice.actions

export const selectAllClients = (state: RootState) => state.clients.clients
export const selectClientById = (state: RootState, clientId: number) =>
  state.clients.clients.find((client) => client.id === clientId)
export const selectMaxClientId = (state: RootState) => {
  const maxId = state.clients.clients.reduce(
    (maxId, client) => Math.max(client.id, maxId),
    0
  )
  return maxId
}

export default clientsSlice.reducer
