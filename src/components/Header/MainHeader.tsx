"use client"
import React from 'react'
import { Shop } from '@/assets/icons/Shop'
import { Star } from '@/assets/icons/Star'
import { User } from '@/assets/icons/User'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/Select'
import { images } from '@/constants/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

export const MainHeader = () => {
    return (
        <header className="h-[110px] xr:h-full py-5 flex items-center border-b border-whitegray">
            <div className="container flex flex-col ">
                <div className="flex items-center justify-between">
                    <Link href="/"><img src={images.Logo.src} alt="logo" className="max-w-[150px] w-full xr:max-w-[130px] xr:w-full" /></Link>
                    <button className="hidden xr:flex lg:hidden">
                        <IoMenu fontSize={30} />
                    </button>
                    <div className="flex items-center gap-2 xr:hidden lg:flex">
                        <img src={images.PhoneIcon.src} alt="" />
                        <div className="flex items-center gap-[86px]">
                            <div className="flex flex-col xr:hidden md:flex">
                                <p className="text-gray text-sm font-normal">Hotline Free:</p>
                                <Link className='text-darkBlack text-sm font-medium' href="tel:+998 88 033 00 70">
                                    +998 88 033 00 70
                                </Link>

                            </div>
                            <form className="border border-yellow rounded-[30px] py-2 px-2 flex items-center xr:hidden md:flex">
                                <Select>
                                    <SelectTrigger className="w-[300px] border-r border-wihtegray">
                                        <SelectValue className='text-dark text-sm font-normal' placeholder="All categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup className='outline-none'>
                                            <SelectLabel>All categories</SelectLabel>
                                            <SelectItem value="apple">Home 1</SelectItem>
                                            <SelectItem value="banana">Home 2</SelectItem>
                                            <SelectItem value="blueberry">Home 3</SelectItem>
                                            <SelectItem value="grapes">Home 4</SelectItem>
                                            <SelectItem value="pineapple">Home 5</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Input placeholder='Search Products…' className='max-w-[640px] w-full' />
                                <div className="">
                                    <Button className='bg-yellow rounded-none rounded-r-lg py-[13px]  hover:bg-yellow text-dark'>Search</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex items-center gap-[40px] xr:hidden lg:flex">
                        <div className="">
                            <Link href="#" className='flex items-center flex-col text-gray text-sm font-normal'><User />Profile</Link>
                        </div>
                        <div className="">
                            <Link href="#" className='flex items-center flex-col text-gray text-sm font-normal'><Star />Favorites</Link>
                        </div>
                        <div className="">
                            <Link href="#" className='flex items-center flex-col text-gray text-sm font-normal'><Shop />My Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
