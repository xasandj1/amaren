import React from 'react'
import { footerData } from './footer-data'
import Link from 'next/link'

export const Footer = () => {
    return (
        <div className='xs:pb-[60px] sm:pb-[60px] md:pb-[60px] ml:pb-0 relative'>
            <div className='bg-[#394150] pt-[70px] pb-[50px]'>
                <div className="container">
                    <div className='flex flex-wrap xs:gap-7 sm:gap-[40px] items-start justify-between'>
                        {
                            footerData.map((title) => (
                                <div className='max-sm:w-full sm:w-auto' key={title.title}>
                                    <h2 className='text-[16px] font-medium text-white mb-6'>{title.title}</h2>
                                    {title.links.map((link) => {
                                        return (
                                            <ul key={link.link} className='flex flex-col gap-3'>
                                                <li className='text-[#bcc0c7] hover:text-[#fcb700] transition-all duration-300 text-[14px]'>
                                                    <Link href={link.link}>
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='bg-[#202935] py-[30px]'>
                <div className="container">
                    <p className='text-center text-[#bcc0c7] text-[14px]'>
                        Copyright © 2024 amera Created by Damirbek
                    </p>
                </div>
            </div>
        </div>
    )
}

