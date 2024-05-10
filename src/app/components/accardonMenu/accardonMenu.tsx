import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { getSubMenu } from "./server/getSubMenu"
import Link from "next/link";
import { getCategoryChildren } from "./server/getCategoryChildren";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export async function AccordionMenu() {
    const subCategory = await getSubMenu()
    const childrencount = await getCategoryChildren()

    return (
        <div className="mt-5 mb-[30px]">
            <h3 className="font-bold text-[#222] text-base">Product Categories</h3>
            <div className="w-[300px]">
                <ScrollArea className="h-[300px] mb-3">
                    {subCategory.results.map((category, index) => (
                        <div className="" key={index}>
                            <Accordion type="single" collapsible className="w-full" key={index}>
                                <AccordionItem value="item-1" key={index} className="pb-0">
                                    <AccordionTrigger className="text-[#999] text-sm font-bold pb-1">{category.title}</AccordionTrigger>
                                    <AccordionContent className="pb-0 pl-3">
                                        <Link href={"#"} className="text-[#999] text-sm font-normal">{category.parent.title}</Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}

                </ScrollArea>
            </div>
        </div >
    )
}
