// "use server"

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { getCategories } from '@/app/service/getCategories'


export const Searchbox = async () => {
    const categories = await getCategories();
    
    return (
        <div className='flex items-center justify-center'>
            <Select>
                <SelectTrigger className="w-[180px] border border-[#FCB700] border-r-0 rounded-l-full">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className='bg-white'>
                    {categories.results.map((category) => (
                        <SelectItem key={category.id} value={category.title}>{category.title}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input className='border border-[#FCB700]' placeholder='Search Products...'/>
            <Button variant='outline' className='rounded-r-full bg-[#FCB700] border border-[#FCB700] border-l-0'>Search</Button>
        </div>
    )
}
