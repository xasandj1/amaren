import { images } from '@/constants/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center'>
        <img src={images.NotFound.src} alt="" />
    </div>
  )
}

export default NotFound