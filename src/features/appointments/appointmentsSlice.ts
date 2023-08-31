import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface Appointment {
  id: number
  clientId: number
  serviceId: number
  date: string
  time: string
  notes: string
}

interface AppointmentsState {
  appointments: Appointment[]
}

const initialState: AppointmentsState = {
  appointments: [
    {
      id: 1,
      clientId: 1,
      serviceId: 1,
      date: '2021-01-01',
      time: '10:00',
      notes: 'Test appointment',
    },
    {
      id: 2,
      clientId: 2,
      serviceId: 2,
      date: '2021-01-01',
      time: '11:00',
      notes: 'Test appointment',
    },
  ],
}

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
})

export const selectAllAppointments = (state: RootState) =>
  state.appointments.appointments

export default appointmentsSlice.reducer
