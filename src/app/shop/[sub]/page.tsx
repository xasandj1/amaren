import { NextPage } from 'next';
import { getProductsVariantId } from '../service/getproductVariantId';
import { BreadcrumbDemo } from '@/app/components/brandcamp/BrandCamp';
import { AccordionMenu } from '@/app/components/accardonMenu/accardonMenu';
import { Slider } from "@/components/ui/slider"
import { ChangesCard } from '../components/ChangesCard';
import Link from 'next/link';
import { MdOutlineStarBorder } from "react-icons/md";

const SubId: NextPage<{ params: { categoryId: number } }> = async ({ params }) => {
    console.log(params);

    const productCategoryariant = await getProductsVariantId(params.categoryId);
    console.log(productCategoryariant);

    return (
        <section className="my-5 ">
            <div className="container flex justify-between">
                <div className="flex flex-col max-w-[300px] w-full">
                    <BreadcrumbDemo />
                    <div>
                        <AccordionMenu />
                        <div className="mt-5 mb-[30px]">
                            <h3 className='text-[#222] font-bold text-[24px] mb-5'>Filter by price</h3>
                            <Slider defaultValue={[33]} max={100} step={1} />
                        </div>
                        <div className="flex items-center gap-3">
                            <button className='bg-primaryYellow py-[15px] px-[25px] rounded-[3px] text-sm font-normal text-black'>Filter</button>
                            Price: <span >$0</span> — <span>$150</span>
                        </div>
                    </div>

                </div>
                <div className="max-w-[1050px] w-full">
                    <ChangesCard />
                    <div className="flex items-center flex-wrap gap-2">
                        {productCategoryariant?.results?.map((data, index) => (
                            <Link href={"#"} className="flex items-center flex-col transform transition-all hover:scale-110 hover:shadow-xl p-3" key={index}>
                                <img src={data.images[0].image} alt="" className='max-w-[150px] h-[200px] w-full object-cover' />
                                <h1 className='text-[10px] text-[#999] font-normal mt-2'>{data.title}</h1>
                                <button className="mt-1 text-[#0066c0] text-base font-normal">Buy Now</button>
                                <p className="text-[12px] font-bold text-[#999] mt-1">quantity:{data.quantity}</p>
                                <div className="flex items-center mt-2">
                                    <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                                    <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                                    <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                                    <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                                    <MdOutlineStarBorder className='text-primaryYellow text-base font-normal' />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default SubId;