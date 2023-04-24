import React, { useContext } from 'react'
import Card from './Card'
import UserContext from '../context/UserContext'

function UsersList() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h2>UsersList</h2>
      <Card>{user}</Card>
    </div>
  )
}

export default UsersList
