import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function BreadcrumbDemo() {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-[#999] text-sm font-normal hover:text-primaryYellow transition duration-300">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <span className="text-[#999] text-sm font-normal">/</span>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/cart" className="text-[#999] text-sm font-normal hover:text-primaryYellow transition duration-300">Cart</BreadcrumbLink>
                </BreadcrumbItem>
                <span className="text-[#999] text-sm font-normal">/</span>
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#333] text-sm font-normal"> Digital</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
