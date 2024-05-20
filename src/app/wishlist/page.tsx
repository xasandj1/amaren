"use client"
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading/Loading'
import { add, remove, toggleAnmount } from '@/redux/reducer/cart'
import { addLikeItem, removeLikeItem } from '@/redux/reducer/like'
import { FaRegTrashCan } from 'react-icons/fa6'
import Link from 'next/link'

interface ProductImage {
  image: string;
  image_id: number;
}

interface Product {
  attribute_value: number;
  id: number;
  images: ProductImage[];
  is_available: boolean;
  other_detail: string;
  price: string;
  price_with_discount: string | null;
  product: number;
  quantity: number;
  title: string;
  userCount: number;
  userPrice: number;
}

export interface ProductState {
  products: Product[];
  totalPrice: number;
}

const Wishlist: NextPage = (data) => {
  const dispatch = useDispatch();
  const { likeItem } = useSelector((state: any) => state.like);
  const addShop = useDispatch()


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const deleteProduct = (id: number) => {
    dispatch(removeLikeItem({ id }));
  };

  if (loading) {
    return <Loading />;
  }
  const handleBuyNow = () => {
    try {
      const processedData = add(data);
      addShop(processedData);
    } catch (error) {
      console.error("Error in handleBuyNow:", error);
    }
  };
  return (
    <section className="my-3">
      <div className="container bg-white p-3 border flex gap-3 xs:flex-col xxl:flex-row">
        <div className="border-primaryYellow w-full">
          <h1 className='text-3xl font-bold text-primaryYellow'>Like Card</h1>
          <div className="mt-3 ">
            {!likeItem ? <div>
              <div className="max-w-[300px] w-full">
                <p className="">This card is empty</p>
                <Link href={`/shop/40`} className='text-sm font-normal text-white bg-primaryYellow rounded p-1 flex items-center justify-center'>Go Shop</Link>
              </div>
            </div> : likeItem?.map((product: Product) => (
              <div key={product.id} className='flex items-center mb-3 border border-primaryYellow justify-between p-4 xs:flex-col md:flex-row'>
                <img src={product.images[0].image} alt="produtc images" className='max-w-24 w-full' />
                <div className="ml-5 xs:flex xs:flex-col xs:items-center md:flex-col md:items-start xs:ml-0 md:ml-5">
                  <div className="flex items-end flex-col mt-2 gap-2">
                    <h3 className='text-xl font-medium text-black capitalize'>{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <button className='text-sm font-normal text-white bg-red-500 rounded p-1 flex items-center justify-center' onClick={() => deleteProduct(product.id)}><FaRegTrashCan /></button>
                      <Link href={`/shop/${product.id}`} className='text-sm font-normal text-white bg-primaryYellow rounded p-1 flex items-center justify-center'>Go Shop</Link>
                      <p className="text-sm font-normal text-black">{product.price} $</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wishlist