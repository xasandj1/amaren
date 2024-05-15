"use client"
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { BaseSyntheticEvent } from 'react'

interface ProductListType {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface ProductProps {
    count: number;
    next: number | null;
    previous: number | null;
    results: ProductListType[];
}
const SearchInput = () => {
    const [data, setData] = React.useState<ProductProps>({ count: 0, next: null, previous: null, results: [] });
    const [value, setValue] = React.useState<any>("")

    React.useEffect(() => {
        const fetchData = async (text: string | undefined) => {
            try {
                const res = await fetch(`http://135.181.108.207/product_variant/?search=${text}`, {
                    next: { revalidate: 10 }
                });
                const responseData = await res.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(value);

        return () => {
        };
    }, [value]);

    const changeValue = (e: BaseSyntheticEvent) => {
        if (e.target.value?.length > 1) {
            setValue(e.target.value)
        }
        if (e.target.value <= 1) {
            setValue("")
        }

    }
    return (
        <div className='relative'>
            <Input className='border border-[#FCB700]' placeholder='Search Products...' onChange={changeValue} />
            {
                value.length > 1 ?
                    <div className='absolute bg-white w-[550px] h-[500px] left-[-65%] z-50 overflow-y-auto max-h-100'>
                        {data?.results?.map((item: any) =>
                        (
                            <Link href={`/detail-page/${item.id}`}>
                                <div className='p-[20px] flex items-center gap-2 rounded'>
                                    <img className='w-[80px] h-[80px] rounded-[50%]' src={item.images[0].image} alt="" />
                                    <h2 className='z-50 text-black font-normal text-base'>{item.title}</h2>
                                </div>
                            </Link>
                        )
                        )}
                    </div>
                    : ""
            }
        </div>
    )
}

export default SearchInput