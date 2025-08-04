import React from 'react'
import { useParams } from 'react-router'

const User = () => {
        const params= useParams();
        console.log("params",params);
        
  return (
    
    <div>
      <h1>you name is {params.username}</h1>
    </div>
  )
}

export default User
