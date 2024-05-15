"use client"
import { BsChevronDown } from "react-icons/bs";

import React, { useState } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { menuData } from "./data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";



export const HeaderMenubar = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsSticky(scrollTop > 180);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`border-t hidden ml:block border-t-[#e7e2e2] py-2 ${isSticky ? 'fixed top-0 w-full z-50 left-0 right-0 bg-white dark:bg-[#141414] shadow-lg' : ''}`}>
      <div className="container">
        <div className='flex items-center hid justify-end lg:justify-between'>
          <Menubar className='border-none hidden lg:flex shadow-none'>
            {
              menuData.map((item) => (
                <MenubarMenu key={item.id}>
                  <MenubarTrigger className="hover:text-[#FCB700] cursor-pointer ">
                    {
                      item.path ? <Link className="flex items-center justify-center gap-1" href={item.path}>{item.title} {item.links && <BsChevronDown />}</Link> : <span className="flex items-center justify-center gap-1">{item.title} {item.links && <BsChevronDown />}</span>
                    }
                  </MenubarTrigger>
                  {item.links && (
                    <MenubarContent className="bg-white">
                      {item?.links?.map((link) => (
                        <MenubarItem key={link.name}><Link href={link.link}>{link.name}</Link></MenubarItem>
                      ))}
                    </MenubarContent>
                  )}
                </MenubarMenu>
              ))
            }
          </Menubar>
          <div className="flex items-center gap-5">
            <Select>
              <SelectTrigger className="max-w-[180px] border-[#c4c4c4b7] ">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                <SelectItem value="light">US Dollar</SelectItem>
                <SelectItem value="dark">Euro</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="max-w-[180px] border-[#c4c4c4b7] ">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-white border-none">
                <SelectItem value="light">English</SelectItem>
                <SelectItem value="dark">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>

  )
}
