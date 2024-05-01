import Link from 'next/link'
import React from 'react'
import { MainHeader } from './MainHeader'
import { HeaderLinks } from './HeaderLinks'


export const Header = () => {
    return (
        <>
            <header className="p-4 border border-whitegray xr:hidden md:flex">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <p className='text-gray text-sm font-normal'>Welcome to Worldwide Electronics Store</p>
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
            <MainHeader />
            <HeaderLinks />
        </>
    )
}
