import { createContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('Nguyen Huy Hoang')

  const updateUser = (newUserName) => {
    setUser(newUserName)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
