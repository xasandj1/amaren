import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getProducts } from '@/app/service/getProduct'

export const ProductCarousel = async () => {
    const products = await getProducts()
    console.log(products);
    return (
        <div className="max-w-[740px] w-full">
            <Carousel>
                <div className="">
                    <div className="flex items-baseline gap-2">
                        <p className="font-bold text-3xl text-[#222]">Top Flash</p>
                        <p className="font-light text-2xl text-[#222]">Deals</p>
                    </div>
                    <div className="flex items-center">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className='mt-8 flex' >
                    {products.results.map((product) => (
                        <CarouselItem key={product.id} className='fle items-center'>
                            <div className="flex items-center">
                                <img src={product.image} alt="" className='max-w-[315px] w-full h-[315px] object-contain' />
                                <h1>{product.title}</h1>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
