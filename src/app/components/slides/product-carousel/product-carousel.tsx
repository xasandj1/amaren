import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getProductsVariant, ProductType } from '@/app/service/getProductVariant'
import RatingStars from '@/components/ui/RetingStar'
import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('../../banner/banner'), { ssr: false })

export const ProductCarousel = async () => {
    const productsVariant = await getProductsVariant()
    return (
        <div className="max-w-[740px] w-full">
            <Carousel className='ml-2'>
                <div className="relative flex items-center">
                    <div className="flex items-baseline gap-2">
                        <p className="font-bold text-3xl text-[#222]">Top Flash</p>
                        <p className="font-light text-2xl text-[#222]">Deals</p>
                    </div>
                    <div className="flex items-center">
                        <CarouselPrevious className='left-[80%] top-[64%]' />
                        <CarouselNext className='right-[0%] top-[64%] absolute' />
                    </div>
                </div>
                <CarouselContent className='mt-8 ml-5 flex items-center h-[355px]' >
                    {productsVariant.results.map((product: ProductType) => (
                        <CarouselItem key={product.id} className='bg-white rounded flex items-center relative py-5 pl-0'>
                            <div className="flex items-center gap-4">
                                <img src={product?.images[0]?.image} alt="" className='max-w-[315px] w-full h-[315px] object-cover' />
                                <div className="flex flex-col ">
                                    <div className="flex items-start flex-col">
                                        <h1 className='text-[#0066C0] text-base font-medium capitalize mb-3'>{product.title}</h1>
                                        <RatingStars rating={1} />
                                    </div>
                                    <div className="mt-2 flex items-center gap-1">
                                        <span className='text-black font-bold text-lg'>{product.price}</span>
                                        <span className='line-through text-[#A4A4A4] font-normal text-sm'>$45.00</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="text-[#444] text-sm font-normal max-w-[350px] w-full" dangerouslySetInnerHTML={{ __html: product.other_detail.slice(0, 100) }} ></div>
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
