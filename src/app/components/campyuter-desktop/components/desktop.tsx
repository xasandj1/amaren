import React from 'react'
import { getSubItems } from '../server/getSubItems'

export const Desktop = async () => {
    const desktopData = await getSubItems()
    return (
        <div className='flex flex-wrap items-center gap-3 xs:justify-center'>
            {desktopData.results.map((data) => (
                <div className="flex items-center max-w-[389px] w-full bg-white gap-3 p-2">
                    <img src={data.image} alt="" className='max-w-[130px] w-full h-[130px] object-contain' />
                    <div className="flex items-start flex-col">
                        <h1 className='text-[#999] text-xs font-normal'>{data.title}</h1>
                        <p className="text-[#0066C0] text-sm font-normal mt-1">{data.parent.title}</p>
                        <span className="text-[#222] text-lg font-medium">{data.parent.id} $</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
