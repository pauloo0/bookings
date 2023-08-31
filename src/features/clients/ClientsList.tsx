import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Client } from './clientsSlice'

const ClientsList: React.FC = () => {
  const clients: Client[] = useAppSelector((state) => state.clients.clients)

  const renderedClients = clients.map((client) => (
    <li key={client.id}>{client.firstName}</li>
  ))

  return (
    <div>
      <h2>Clients</h2>
      <ul>{renderedClients}</ul>
    </div>
  )
}

export default ClientsList