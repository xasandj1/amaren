"use client"
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiHeart, BiShoppingBag, BiUser } from 'react-icons/bi'
import { useSelector } from 'react-redux'

export const HeaderLinks = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { count, likes } = useSelector((state: any) => state.product);
    const { likeCount } = useSelector((state: any) => state.like);
    console.log(likeCount);
        
    

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // or return a placeholder if necessary
    }

    return (
        <ul className='flex items-center gap-7'>
            <li>
                <Link className='flex relative gap-1 flex-col items-center text-[14px] text-[#666] dark:text-[#ffffffd8]' href="/profile">
                    <BiUser size={33} />
                    Profile
                </Link>
            </li>
            <li>
                <Link className='flex relative gap-1 flex-col items-center text-[14px] text-[#666] dark:text-[#ffffffd8]' href="/wishlist">
                    <BiHeart size={33} />
                    Favorites
                    <Badge className='bg-[#FCB700] absolute top-[50%] translate-y-[-55%] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">{likeCount}</Badge>
                </Link>
            </li>
            <li>
                <Link className='flex relative gap-1 flex-col items-center text-[14px] text-[#666] dark:text-[#ffffffd8]' href="/shop">
                    <BiShoppingBag size={33} />
                    My Cart
                    <Badge className='bg-[#FCB700] absolute top-[50%] translate-y-[-55%] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">{count}</Badge>
                </Link>
            </li>
        </ul>
    )
}

