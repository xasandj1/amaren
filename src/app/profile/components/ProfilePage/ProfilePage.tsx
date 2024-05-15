import React from 'react'
import ProfileBanner from "../../../assets/images/ProfilImg.jpg"
import Link from 'next/link'

export const ProfilePage = () => {
    return (
        <div className='relative flex items-center flex-col justify-center'>
            <img src={ProfileBanner.src} alt="" />
            <div className="absolute top-[35%] flex items-center flex-col">
                <h2 className='text-7xl text-white font-normal'>My Account</h2>
                <div className="flex items-center mt-2">
                    <Link href={"/"} className='text-xs font-normal text-[#999] hover:text-black duration-700'>Home <span>/</span></Link>
                    <p className='text-xs font-normal text-white ml-1'>My Account</p>
                </div>
            </div>
        </div>
    )
}
