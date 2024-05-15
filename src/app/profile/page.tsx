import { NextPage } from 'next'
import React from 'react'
import { ProfilePage } from './components/ProfilePage/ProfilePage'
import { FormProfile } from './components/FormProfile/FormProfile'

const Profile: NextPage = () => {
  return (
    <div className=''>
      <div className="">
        <ProfilePage />
        <FormProfile />
      </div>
    </div>
  )
}

export default Profile