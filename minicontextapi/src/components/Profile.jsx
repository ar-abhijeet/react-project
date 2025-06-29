import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user}= useContext(UserContext)
  if (!user) return <return>Please Login</return>
  return (
    <div>Welcome {user.userName}</div>
  )
}

export default Profile