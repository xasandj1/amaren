import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { PiDotsNineBold } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { SelectCard } from '../Select/SelectCard';
import { SelectFilter } from '../Select/SelectFilter';

export const ChangesCard = () => {
    return (
        <div className='flex items-center justify-between border-b border-borderGray pb-4 mb-5'>
            <h3 className="text-xs font-normal text-black">Showing all 12 results</h3>
            <div className="flex items-center gap-2">
                <p className="text-xs font-normal text-black">Views</p>
                <button><PiCirclesFourFill fontSize={16} /></button>
                <button name='grid'><PiDotsNineBold fontSize={16} /></button>
                <button><FaListUl fontSize={14} /></button>
            </div>
            <div className="flex items-center gap-5">
                <SelectCard />
                <SelectFilter />
            </div>
        </div>
    )
}
