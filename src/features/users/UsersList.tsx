import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { User } from './usersSlice'

const UsersList: React.FC = () => {
  const users: User[] = useAppSelector((state) => state.users.users)

  const renderedUsers = users.map((user) => (
    <li key={user.id}>{user.firstName}</li>
  ))

  return (
    <div>
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </div>
  )
}

export default UsersList
