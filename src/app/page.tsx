import React from "react";
import banner1 from "@/app/assets/images/banner1.jpg";
import banner2 from "@/app/assets/images/banner2.jpg";
import banner3 from "@/app/assets/images/banner3.jpg";
import trending from "@/app/assets/images/trending.png"
import accssories from "@/app/assets/images/accessories.png"
import Desktop from "@/app/assets/images/desktop.png"
import { ServiceItem } from "./components/service-item/service-item";
import { serviceData } from "../data/service-data";
import { SubcategoryCard } from "./components/subcategory-card/subcategory-card";
import { getSubcategories } from "./service/getSubcategories";
import { BannerCard } from "./components/slides/banner-card/banner-card";
import { SideMenu } from "./components/sidemenu/sidemenu";
import { ProductCarousel } from "./components/slides/product-carousel/product-carousel";
import { RecentProduct } from "./components/slides/recent-product/recent-product";
import { CiDesktopMouse2 } from "react-icons/ci";
import "@/app/globals.css";
import Link from "next/link";
import { CampyuterDesktop } from "./components/campyuter-desktop/campyuter-desktop";

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
      <section className="mt-[30px]">
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
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pt-4 pb-10 xs:pb-0 md:pb-8 xxl:pb-10">
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
      <section className="bg-[#F5F6F9] dark:bg-[#202020e4] pt-4 pb-10 xs:pb-0 md:pb-6 xxl:pb-10 " >
        <div className="container flex items-center gap-5 xxl:flex-row lg2:flex-col sm:flex-col xs:flex-col ">
          <ProductCarousel />
          <RecentProduct />
        </div>
      </section>
      <section className="mt-16 xs:mt-2 md:mt-8 xxl:mt-0">
        <div className="container flex items-center justify-center gap-5 xs:flex-col xxl:flex-row ">
          <img src={trending.src} alt="" />
          <img src={accssories.src} alt="" />
        </div>
      </section>
      <section className="mt-12">
        <div className="container flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-[#222] text-2xl font-medium xs:text-base md:text-xl">Computer & Desktop</h2>
              <h3 className="text-[#222] text-2xl font-normal xs:text-base md:text-xl"> Products</h3>
            </div>
            <ul className="flex items-center gap-5 xs:hidden md:flex md:gap-2">
              <Link href={""} className="text-[#222] font-normal text-sm capitalize">Digital</Link>
              <Link href={""} className="text-[#666] font-normal text-sm capitalize">Game & Toy</Link>
              <Link href={""} className="text-[#666] font-normal text-sm capitalize">Smart Phones</Link>
            </ul>
          </div>
          <div className="flex items-center my-8 xs:justify-center">
            <img src={Desktop.src} alt="" className="xs:hidden xxl:flex"/>
            <CampyuterDesktop />
          </div>
        </div>
      </section>
      <button className="fixed bg-primaryYellow p-5 rounded-[50%] right-[10px] bottom-[5px] z-50 text-base">
        <CiDesktopMouse2 className="text-base text-black font-bold" />
      </button>
    </>
  );
}

export default Home
