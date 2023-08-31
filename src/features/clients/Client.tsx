import React from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../app/hooks'
import { Client } from './clientsSlice'

import { selectClientById } from './clientsSlice'

const Client: React.FC = () => {
  const { clientId } = useParams<{ clientId: string }>()

  const client: Client | undefined = useAppSelector((state) =>
    selectClientById(state, Number(clientId))
  )

  if (!client || !clientId) return <h2>Client not found!</h2>

  return <div>{client.firstName}</div>
}

export default Client
