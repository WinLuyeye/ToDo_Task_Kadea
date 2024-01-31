import React, { useContext } from 'react'
import { ProfilContext } from './TeamContext'

const UserFirstName = () => {

  const {firstName} = useContext(ProfilContext);

  

  return (
    <div>{firstName} </div>
  )
}

export default UserFirstName