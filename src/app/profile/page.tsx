"use client"
import { NextPage } from 'next'
import React from 'react'
import { ProfilePage } from './components/ProfilePage/ProfilePage'

const Profile: NextPage = () => {
  return (
    <div className=''>
      <div className="">
        <ProfilePage />
      </div>
    </div>
  )
}

export default Profile