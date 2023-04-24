import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function NewUser() {
  const [newUser, setNewUser] = useState('')

  const { updateUser } = useContext(UserContext)

  const setUser = (e) => {
    e.preventDefault()
    updateUser(newUser)
  }

  return (
    <form onSubmit={setUser}>
      <input
        type='text'
        placeholder='new user'
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <input type='submit' value='Update User' />
    </form>
  )
}

export default NewUser
