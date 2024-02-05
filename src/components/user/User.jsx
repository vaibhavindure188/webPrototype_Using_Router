import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userName} = useParams();
  return (
    <div className='bg-orange-500 text-black text-center text-3xl py-5'>
      <h1>User : {userName}</h1>
    </div>
  )
}

export default User
