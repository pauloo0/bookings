import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Appointment } from './appointmentsSlice'

const AppointmentsList: React.FC = () => {
  const appointments: Appointment[] = useAppSelector(
    (state) => state.appointments.appointments
  )

  const renderedAppointments = appointments.map((appointment) => (
    <li key={appointment.id}>
      Service: {appointment.serviceId} on {appointment.date} at{' '}
      {appointment.time} for client {appointment.clientId}
    </li>
  ))

  return (
    <div>
      <h2>Appointments</h2>
      <ul>{renderedAppointments}</ul>
    </div>
  )
}

export default AppointmentsList
