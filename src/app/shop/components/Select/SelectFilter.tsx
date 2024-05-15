import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function SelectFilter() {
    return (
        <Select>
            <SelectTrigger className="w-[150px] border-none shadow-none p-0 z-30">
                <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="mt-0 bg-white mr-12 w-[1050px]">
                <SelectGroup className="bg-white p-3 mt-0 pt-0">
                    <div className="max-w-[250px] w-full">
                        <div className="mt-5 mb-[30px]">
                            <h3 className='text-[#222] font-bold text-[14px] mb-5'>Filter by price</h3>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className='bg-primaryYellow py-[15px] px-[25px] rounded-[3px] text-xs font-normal text-black'>Filter</button>
                            Price: <span className="text-sm font-normal text-black">$0</span> — <span className="text-sm font-normal text-black">$150</span>
                        </div>
                    </div>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
