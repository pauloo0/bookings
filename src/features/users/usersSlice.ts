import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface User {
  id: number
  username: string
  password: string
  firstName: string
  lastName: string
  email?: string
  phone?: string
  role?: 'Admin' | 'User'
}

interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  users: [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      role: 'Admin',
    },
    {
      id: 2,
      username: 'user',
      password: 'user',
      firstName: 'Normal',
      lastName: 'User',
      role: 'User',
    },
  ],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state: RootState) => state.users.users

export default usersSlice.reducer
