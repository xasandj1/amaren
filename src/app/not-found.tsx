import Image from 'next/image'
import React from 'react'
import NotFoundImage from '@/app/assets/images/404.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <div className='pt-[100px] flex flex-col items-center justify-center pb-[100px]'>
                <Image src={NotFoundImage} alt='Not Found Image' />
                <h1 className='text-[30px] text-[#222] font-semibold text-center mt-3'>Oops! Page Not Found.</h1>
                <p className='text-[#9da3af] text-[14px] text-center mt-4'>It looks like nothing was found at this location. Maybe try one of the links below or a search?</p>
            </div>
        </div>
    )
}

export default NotFound