import { NextPage } from 'next';
import { getProductsVariantId } from '../service/getproductVariantId';
import { BreadcrumbDemo } from '@/app/components/brandcamp/BrandCamp';
import { AccordionMenu } from '@/app/components/accardonMenu/accardonMenu';
import { Slider } from "@/components/ui/slider"
import { Button } from '@/components/ui/button';

const SubId: NextPage<{ params: { categoryId: number } }> = async ({ params }) => {
    console.log(params);

    const subid = await getProductsVariantId(params.categoryId);

    return (
        <section className="">
            <div className="container">
                <div className="my-5">
                    <BreadcrumbDemo />
                </div>
                <div className="flex items-center justify-between">
                    <div className="mb-5">
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
                    <div className="">
                        xaaxaxax
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubId;
{/* <img src={item.images[0].image} alt="" /> */ }