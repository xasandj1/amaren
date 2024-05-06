import React from 'react'
import { getBanners } from '@/app/service/getBanners'
import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../../banner/banner'), { ssr: false })
export const BannerCard = async () => {
    const banners = await getBanners()
    return (
        <div>
            <Banner>
                {
                    banners.results.map((banner) => (
                        <div key={banner.id} className={`w-full`} >
                            <img src={banner.image} className="w-full min-h-[300px] xs:min-h-[300px] sm:h-[500px] ml:h-[600px] object-cover bg-center" alt="" />
                            <div className="absolute w-full z-100 top-0 p-10" >
                                <h1 className="text-white text-[30px] ]" >{banner.title}</h1>
                                <h2 className="w-[200px] text-white" dangerouslySetInnerHTML={{ __html: banner.description }}></h2>
                            </div>
                        </div>
                    ))
                }
            </Banner>
        </div>
    )
}
