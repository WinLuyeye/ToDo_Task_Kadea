import React from 'react'
import UserName from './userName'
import UserDescription from './UserDescription'
import Avatar from './Avatar'

const Profile = () => {
  return (
    <div>
        <Avatar/>
        <UserName/>
        <UserDescription/>
    </div>
  )
}

export default Profile