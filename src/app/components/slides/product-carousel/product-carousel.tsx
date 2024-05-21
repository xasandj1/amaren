import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getProductsVariant, ProductType } from '@/app/service/getProductVariant'
import dynamic from 'next/dynamic'
import { RetingStar } from '@/components/ui/RetingStar'


export const ProductCarousel = async () => {
    const productsVariant = await getProductsVariant()
    return (
        <div className="max-w-[740px] w-full">
            <Carousel className='ml-2'>
                <div className="relative flex items-center">
                    <div className="flex items-baseline gap-2">
                        <h2 className="font-bold text-3xl text-[#222] xs:text-xl md:text-2xl">Top Flash</h2>
                        <p className="font-light text-2xl text-[#222] xs:text-lg md:text-2xl">Deals</p>
                    </div>
                    <div className="flex items-center">
                        <CarouselPrevious className='left-[80%] top-[64%] xs:w-8 xs:top-[43%] xs:left-[75%]' />
                        <CarouselNext className='right-[0%] top-[64%] absolute xs:top-[43%]' />
                    </div>
                </div>
                <CarouselContent className='mt-8 ml-5 flex items-center h-[355px] xs:mt-5 md:mt-5 xxl:mt-5' >
                    {productsVariant.results.map((product: ProductType) => (
                        <CarouselItem key={product.id} className='bg-white rounded flex items-center relative py-5 pl-0 xs:mt-5'>
                            <div className="flex items-center gap-4 xs:flex-col md:flex-row xs:p-5 md:p-0 xs:items-center">
                                <img src={product?.images[0]?.image} alt="" className='max-w-[315px] w-full h-[315px] object-cover xs:h-[180px] md:h-[315px] xs:max-w-[160px] md:max-w-[315px]' />
                                <div className="flex flex-col xs:items-center md:items-start">
                                    <div className="flex items-start flex-col xs:items-center md:items-start">
                                        <h1 className='text-[#0066C0] text-base font-medium capitalize mb-3 xs:mb-1 md:mb-3'>{product.title}</h1>
                                        <RetingStar />
                                    </div>
                                    <div className="mt-2 xs:mt-0 flex items-center gap-1">
                                        <span className='text-black font-bold text-lg'>{product.price}</span>
                                        <span className='line-through text-[#A4A4A4] font-normal text-sm'>$45.00</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#444] text-sm font-normal max-w-[350px] w-full xs:text-center md:text-start" >{product.other_detail.slice(3, 100)}</p>
                                    </div>
                                    <h3 className="text-black font-bold text-lg mt-4">Hurry up! Special offer:</h3>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
