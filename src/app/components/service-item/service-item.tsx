"use client"

import Image, { StaticImageData } from 'next/image';
import React from 'react'
interface Props {
    title: string;
    description: string;
    icon: StaticImageData
    key: number
}

export const ServiceItem: React.FC<Props> = ({ title, key, description, icon }) => {
    return (
        <div className='flex items-center border-r' key={key}>
            <img width={50} height={50} src={icon.src} alt={title} />
            <div className="flex flex-col ml-3">
                <h3 className='text-[14px] text-[#222] dark:text-[#ffffffd9] font-semibold'>{title}</h3>
                <p className='text-xs text-[#666] dark:text-[#ffffffd4] font-normal'>{description}</p>
            </div>
        </div>
    )
}
