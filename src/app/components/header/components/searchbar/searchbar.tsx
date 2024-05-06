import React from 'react'
import { Input } from "@/components/ui/input"


export const Searchbar = () => {
  return (
    <div>
        <Input className='w-full py-5 border border-[#FCB700] rounded-none outline-none focus:border-[#FCB700]' placeholder="Search Products..." />
    </div>
  )
}

