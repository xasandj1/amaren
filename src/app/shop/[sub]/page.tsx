import { NextPage } from 'next';
import { getProductsVariantId } from '../service/getproductVariantId';
import { BreadcrumbDemo } from '@/app/components/brandcamp/BrandCamp';
import { AccordionMenu } from '@/app/components/accardonMenu/accardonMenu';
import { Slider } from "@/components/ui/slider"
import { ChangesCard } from '../components/ChangesCard';
import { ProductShop } from '../components/ProductCards/ProductCards';

const SubId: NextPage<{ params: { categoryId: number } }> = async ({ params }) => {
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
                    <ProductShop params={{ categoryId: params.categoryId }} key={params.categoryId} />
                </div>
            </div >
        </section >
    );
};

export default SubId;