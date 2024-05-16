import React from "react";
import banner1 from "@/app/assets/images/banner1.jpg";
import banner2 from "@/app/assets/images/banner2.jpg";
import banner3 from "@/app/assets/images/banner3.jpg";
import { ServiceItem } from "./components/service-item/service-item";
import { serviceData } from "../data/service-data";
import { SubcategoryCard } from "./components/subcategory-card/subcategory-card";
import { getSubcategories } from "./service/getSubcategories";
import { BannerCard } from "./components/slides/banner-card/banner-card";
import { SideMenu } from "./components/sidemenu/sidemenu";
import { ProductCarousel } from "./components/slides/product-carousel/product-carousel";
import { RecentProduct } from "./components/slides/recent-product/recent-product";
import { CiDesktopMouse2 } from "react-icons/ci";


const Home = async ({ index }: { index: number }) => {
  const subcategories = await getSubcategories();
  return (
    <>
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pt-[30px]">
        <div className="container">
          <div className=" w-full flex items-start justify-between gap-5 ">
            <SideMenu />
            <div className="w-full ml:min-w-[660px]">
              <BannerCard key={index} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pb-8 pt-5">
        <div className="container">
          <div className="bg-white dark:bg-[#141414] rounded-md py-[30px] flex flex-col gap-10 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-[10px]">
            {
              serviceData.map((service, index) => (
                <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} />
              ))
            }
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pt-4 pb-8">
        <div className="container">
          <div className="flex sm:w-full flex-col md:flex-row md:gap-4">
            <div className="w-full p-4">
              <img src={banner1.src} alt="" className="min-w-[300px] w-full  md:min-w-[auto] md:h-auto ml:w-[auto] lg:w-full  bg-cover bg-no-repeat bg-center min-h-[150px]" />
            </div>
            <div className="w-full p-4">
              <img src={banner2.src} alt="" className="min-w-[300px] w-full  md:min-w-[auto] md:h-auto ml:w-[auto] lg:w-full  bg-cover bg-no-repeat bg-center min-h-[150px]" />
            </div>
            <div className="w-full p-4">
              <img src={banner3.src} alt="" className="min-w-[300px] w-full  md:min-w-[auto] md:h-auto ml:w-[auto] lg:w-full  bg-cover bg-no-repeat bg-center min-h-[150px]" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pt-4 pb-8">
        <div className="container">
          <div className='border border-gray-300 flex flex-col rounded-sm bg-white dark:bg-[#141414]  sm:grid sm:grid-cols-2 sm:border-none md:grid-cols-3 ml:grid-cols-4 lg:grid-cols-5 '>
            {
              subcategories.results.map((subcategory) => (
                <SubcategoryCard href={`/shop/${subcategory.parent.id}/${subcategory.id}`} key={subcategory.id} title={subcategory.title} count={subcategories?.results?.length} image={subcategory.image} />
              ))
            }
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pt-4 pb-10 " >
        <div className="container flex items-center gap-5 xxl:flex-row lg2:flex-col sm:flex-col xs:flex-col ">
          <ProductCarousel />
          <RecentProduct />
        </div>
      </section>
      <button className="fixed bg-primaryYellow p-5 rounded-[50%] right-[10px] bottom-[5px] z-50 text-base">
        <CiDesktopMouse2 className="text-base text-black font-bold"/>
      </button>
    </>
  );
}

export default Home
