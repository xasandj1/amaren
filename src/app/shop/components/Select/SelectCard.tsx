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

export function SelectCard() {
    return (
        <Select>
            <SelectTrigger className="border-none p-0 z-30">
                <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className="bg-white w-[250px] p-0">
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple" className="text-black font-normal text-xs">Sort by popularity</SelectItem>
                    <SelectItem value="banana" className="text-black font-normal text-xs">Sort by average rating</SelectItem>
                    <SelectItem value="blueberry" className="text-black font-normal text-xs">Sort by latest</SelectItem>
                    <SelectItem value="grapes" className="text-black font-normal text-xs">Sort by price: low to high</SelectItem>
                    <SelectItem value="pineapple" className="text-black font-normal text-xs">Sort by price: high to low</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
