import Link from 'next/link'
import React from 'react'
import { images } from '@/constants/image'


export const Header = () => {
    return (
        <>
            <header className="p-4 border border-whitegray xr:hidden md:flex">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <p className='text-gray text-sm'>Welcome to Worldwide Electronics Store</p>
                        </div>
                        <ul className="flex items-center gap-[15px]">
                            <li className='border-r border-whitegray pr-[20px]'>
                                <Link href="#" className="text-gray">Checkout</Link>
                            </li>
                            <li className='border-r border-whitegray pr-[20px]'>
                                <Link href="#" className="text-gray">Shop</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray">Wishlist</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <header className="h-[110px] flex items-center">
                <div className="container flex items-center justify-between">
                    <Link href="/"><img src={images.Logo.src} alt="logo" className="max-w-[150px] w-full" /></Link>
                    <div className="flex items-center gap-2">
                        <img src={images.PhoneIcon.src} alt="" />
                        <div className="flex flex-col">
                            <p className="text-gray text-sm font-normal">Hotline Free:</p>
                            <Link className='text-darkBlack text-sm font-medium' href="tel:+998 88 033 00 70">+998 88 033 00 70</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
