
import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/images/logo.png'
import { BiHeart, BiMenu, BiShoppingBag, BiSupport, BiUser } from "react-icons/bi";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import { Searchbar } from './components/searchbar/searchbar';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import { Navigation } from './components/navigation/navigation';
import { Searchbox } from './components/searchbox/searchbox';
import { Badge } from '@/components/ui/badge';
import { HeaderMenubar } from './components/menubar/menubar';
import { ModeToggle } from '@/components/mode-toggle';

export const Header = () => {
    return (
        <div className='shadow-md' id='header'>
            <div className='hidden sm:block border-b border-b-[#e7e2e2] py-4'>
                <div className="container">
                    <div className='flex sm:flex-col md:flex-row items-center md:justify-between'>
                        <p className='text-[#666] dark:text-[#ffffffd6] text-[14px] text-center mb-4 md:mb-0'>Welcome to Worldwide Electronics Store</p>
                        <ul className='flex items-center justify-center gap-5 text-[14px] text-[#666] dark:text-[#ffffffd6]'>
                            <li>
                                <Link href={'/profile'}>
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link href={'/checkout'}>
                                    Checkout
                                </Link>
                            </li>
                            <li>
                                <Link href={'/shop'}>
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link href={'/wishlist'}>
                                    Wishlist
                                </Link>
                            </li>
                            <li className='hidden ml:block'>
                                <ModeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className='py-5 flex items-center justify-between'>
                        <div className='w-[130px]'>
                            <Link href={'/'}>
                                <Image className='max-sm:w-[130px]' src={logo} alt="logo" />
                            </Link>
                        </div>
                        <a href="tel:+998880330070" className='hidden gap-2 items-center xs:hidden sm:hidden md:hidden ml:hidden lg:hidden lg2:flex'>
                            <BiSupport size={44} />
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-[14px] text-[#6666] dark:text-[#ffffffd7]'>Hotline Free:</p>
                                <p className='text-[14px] text-[#333] dark:text-[#ffffffd3]' >
                                    +998-88-033-00-70
                                </p>
                            </div>
                        </a>
                        <div className='xs:hidden hidden ml:block'>
                            <Searchbox />
                        </div>
                        <div className='xs:hidden hidden sm:hidden md:hidden ml:block'>
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
                                        <Badge className='bg-[#FCB700] absolute top-[50%] translate-y-[-55%] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">0</Badge>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='flex relative gap-1 flex-col items-center text-[14px] text-[#666] dark:text-[#ffffffd8]' href="/profile">
                                        <BiShoppingBag size={33} />
                                        My Cart
                                        <Badge className='bg-[#FCB700] absolute top-[50%] translate-y-[-55%] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">0</Badge>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='ml:hidden'>
                            <Drawer direction='left'>
                                <DrawerTrigger asChild>
                                    <Button className='p-2' variant="link"><BiMenu size={30} /></Button>
                                </DrawerTrigger>
                                <DrawerContent className='h-full bg-white dark:bg-[#121212] rounded-none overflow-y-auto w-[300px]'>
                                    <div className='pb-5 pl-4'>
                                        <ModeToggle />
                                    </div>
                                    <div className='py-3 px-3 '>
                                        <Searchbar />
                                    </div>
                                    <div>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem className='px-3' value="item-1">
                                                <AccordionTrigger className='no-underline text-[#fcb700]'>HOME</AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className='pl-3 flex flex-col gap-4'>
                                                        <li>Home 1</li>
                                                        <li>Home 2</li>
                                                        <li>Home 3</li>
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem className='px-3' value="item-2">
                                                <AccordionTrigger className='no-underline '>SHOP</AccordionTrigger>
                                                <AccordionContent>
                                                    Yes. It adheres to the WAI-ARIA design pattern.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem className='px-3' value="item-3">
                                                <AccordionTrigger className='no-underline '>BLOG</AccordionTrigger>
                                                <AccordionContent>
                                                    Yes. It adheres to the WAI-ARIA design pattern.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem className='px-3' value="item-4">
                                                <AccordionTrigger className='no-underline '>PORTFOLIO</AccordionTrigger>
                                                <AccordionContent>
                                                    Yes. It adheres to the WAI-ARIA design pattern.
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem className='px-3' value="item-5">
                                                <AccordionTrigger className='no-underline '>PAGE</AccordionTrigger>
                                                <AccordionContent>
                                                    Yes. It adheres to the WAI-ARIA design pattern.
                                                </AccordionContent>
                                            </AccordionItem>

                                        </Accordion>

                                    </div>

                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderMenubar />
            <div className='ml:hidden'>
                <Navigation />
            </div>
        </div>
    )
}
