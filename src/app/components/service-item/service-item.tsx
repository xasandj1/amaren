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
        <div key={key}>
            <div className='flex items-start gap-3'>
                <div>
                    <img width={50} height={50} src={icon.src} alt={title} />
                </div>
                <div>
                    <h3 className='text-[13px] text-[#222] dark:text-[#ffffffd9] mb-1 font-semibold'>{title}</h3>
                    <p className='text-[13px] text-[#666] dark:text-[#ffffffd4] font-medium'>{description}</p>
                </div>
            </div>
        </div>
    )
}
