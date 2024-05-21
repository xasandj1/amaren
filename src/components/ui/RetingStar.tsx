import React from 'react'
import { MdOutlineStarBorder } from 'react-icons/md'

export const RetingStar = (data: any) => {
    return (
        <button className="flex items-center mt-2 xs:mt-0 md:mt-2">
            <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
            <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
            <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
            <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
            <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
        </button>
    )
}
