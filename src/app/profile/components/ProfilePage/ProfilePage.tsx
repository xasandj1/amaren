"use client"
import React from 'react'
import ProfileBanner from "../../../assets/images/ProfilImg.png"
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export const ProfilePage = () => {
    const session = useSession()
    console.log(session);


    const sigOut = () => {
        signOut()
    }
    const signInn = () => {
        signIn("google", { callbackUrl: "/" })
    }
    return (
        <div className='relative flex items-center flex-col justify-center'>
            <img src={ProfileBanner.src} alt="" />
            <div className="absolute top-[35%] flex items-center flex-col">
                <h2 className='text-7xl text-white font-normal'>My Account</h2>
                <div className="flex items-center mt-2">
                    <Link href={"/"} className='text-xs font-normal text-[#999] hover:text-black duration-700'>Home <span>/</span></Link>
                    <p className='text-xs font-normal text-white ml-1'>My Account</p>
                </div>
                <button onClick={signInn} className='text-white bg-[#ff7637] font-bold rounded py-2 px-3 mt-4'>
                    Sing Up
                </button>
            </div>
        </div>
    )
}
