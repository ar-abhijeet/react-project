import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams();
  return (
    <div className = 'bg-amber-800 text-3xl text-white text-center p-4 mx-120 my-5'>
      Username = {userid.toUpperCase()}
    </div>
  )
}

export default User