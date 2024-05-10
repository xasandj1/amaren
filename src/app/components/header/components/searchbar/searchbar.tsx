import React, { BaseSyntheticEvent } from 'react'
import { Input } from "@/components/ui/input"

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

export const Searchbar = () => {
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
    <div>
      <Input className='w-full py-5 border border-[#FCB700] rounded-none outline-none focus:border-[#FCB700]' placeholder="Search Products..." />
    </div>
  )
}

