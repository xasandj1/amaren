"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface Props {
    title: string;
    count: number;
    image: string;
    href: string
}

export const SubcategoryCard: React.FC<Props> = ({ title, href, count, image }) => {
    return (
        <Link href={href}>
            <div className='flex items-center border-b border-b-gray-300 xs:max-h-[215px] justify-between sm:border sm:border-gray-300 pl-5 py-[10px] pr-[10px]'>
                <div>
                    <h2 className='text-[#333] text-sm font-normal capitalize'>{title}</h2>
                    <h3 className='text-[#999] text-xs font-normal mt-1'>({count} items)</h3>
                </div>
                <div className=' max-w-[170px] sm:max-w-[90px] md:max-w-[85px]'>
                    <img className='w-[85px]  h-[85px] object-cover' src={image} alt={title} />
                </div>
            </div>
        </Link>
    )
}
