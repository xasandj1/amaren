import { getProducts, Product } from "@/app/service/getProducts"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { RetingStar } from "@/components/ui/RetingStar"
import React from 'react'

export const RecentProduct = async () => {
    const products = await getProducts()
    return (
        <div className="max-w-[650px] w-full">
            <Carousel>
                <div className="relative flex items-center pl-10 xs:pl-0">
                    <div className="flex items-baseline gap-2">
                        <p className="font-bold text-3xl text-[#222] xs:text-xl md:text-2xl">Recent</p>
                        <p className="font-light text-2xl text-[#222] xs:text-lg md:text-2xl">Products</p>
                    </div>
                    <div className="flex items-center">
                        <CarouselPrevious className='left-[80%] top-[64%] xs:w-8 xs:top-[43%] xs:left-[75%]' />
                        <CarouselNext className='right-[0%] top-[64%] absolute xs:top-[43%]' />
                    </div>
                </div>
                <CarouselContent className="ml-2 mt-8 h-[350px]">
                    {Array.from({ length: 5 }).map((_,) => (
                        <>
                            {products.results.map((product: Product) => (
                                <CarouselItem key={product.id} className="pl-1 md:basis-1/3 lg:basis-1/3 sm:basis-1/3 ">
                                    <div key={product.id} className="">
                                        <CardContent className="flex w-[235px] xs:w-[350px] md:w-[235px] items-center">
                                            <div className="bg-white flex flex-col items-center p-3 h-[360px]">
                                                <img src={product.image} alt="" className="w-full h-[150px] object-cover" />
                                                <h3 className="text-[#999] text-xs font-normal text-center">{product.title}</h3>
                                                <p className="text-center text-[#0066C0] text-sm mt-1 mb-2">Recliner syntheti deck chair</p>
                                                <RetingStar />
                                                <p className="text-[#0066C0] text-sm font-bold mt-3">${product.price}</p>
                                            </div>
                                        </CardContent>
                                    </div>
                                </CarouselItem>
                            ))}
                        </>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
