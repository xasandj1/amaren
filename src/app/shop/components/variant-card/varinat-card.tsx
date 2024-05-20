"use client"
import Link from 'next/link'
import React from 'react'
import { MdOutlineStarBorder } from 'react-icons/md'
import { ProductType } from '@/app/service/getProductVariant'
import { useDispatch } from 'react-redux'
import { addLikeItem, likeReducer } from '@/redux/reducer/like'
import { add } from '@/redux/reducer/cart'

export const VarinatCard: React.FC<ProductType> = (data) => {
    const addShop = useDispatch()
    const addLike = useDispatch()

    return (
        <div className="flex items-center flex-col transform transition-all hover:scale-110 hover:shadow-xl p-3">
            <Link href={"#"} className="flex items-center flex-col">
                <img src={data.images[0].image} alt="" className='max-w-[150px] h-[200px] w-full object-contain' />
                <h1 className='text-[10px] text-[#999] font-normal mt-2'>{data.title}</h1>
                <p className="text-[12px] font-bold text-[#999] mt-1">quantity:{data.quantity}</p>
            </Link>
            <button className="flex items-center mt-2" onClick={() => addLike(addLikeItem(data))}>
                <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
            </button>
            <button className="mt-1 text-[#0066c0] text-base font-normal" onClick={() => addShop(add(data))} >Buy Now</button>
        </div>
    )
}

