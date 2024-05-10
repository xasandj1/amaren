import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getCategories } from '@/app/service/getCategories'
import Link from 'next/link';

export const SideMenu = async () => {
    const categories = await getCategories();
    return (
        <div className="ml:min-w-[230px]  max-h-[600px] overflow-y-auto hidden border h-full ml:block">
            <Accordion type="single" collapsible className="px-3 dark:bg-[#141414]">
                {categories.results.map((category, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={category.id}>
                        <AccordionTrigger className="text-start">{category.title}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3">
                            {category.children.map((child, index) => (
                                <Link key={index} className="border-t border-[#E7E2E2] hover:text-[#FCB700] py-1" href={`/shop/${child.id}`}>
                                    {child.title}
                                </Link>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
