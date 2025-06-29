import React from 'react'
import {useState} from 'react'
import UserContext from './UserContext'

const userContextProvider =({children}) =>{
  const [user,setUser] = useState('')
  return (
    <UserContext.Provider value = {{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default userContextProvider;