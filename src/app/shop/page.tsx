"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading/Loading';
import { FaRegTrashCan, FaPlus, FaMinus } from "react-icons/fa6";
import { remove, toggleAnmount } from '@/redux/reducer/cart';
import { addLikeItem } from '@/redux/reducer/like';

// Interfaces
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

interface ProductState {
    products: Product[];
    totalPrice: number;
}

interface ReduxState {
    product: ProductState;
}

const Shop: React.FC = () => {
    const dispatch = useDispatch();
    const { products, totalPrice } = useSelector((state: ReduxState) => state.product);

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
        dispatch(remove({ id }));
    };

    const plusCount = (id: number) => {
        dispatch(toggleAnmount({ id, type: "add" }));
    };

    const minusCount = (id: number, userCount: number) => {
        if (userCount > 0) {
            dispatch(toggleAnmount({ id, type: "remove" }));
        }
    };

    const toFavorite = (product: Product) => {
        dispatch(addLikeItem(product));
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="my-3">
            <div className="container bg-white p-3 border flex gap-3 xs:flex-col xxl:flex-row">
                <div className="border-primaryYellow max-w-[900px] w-full">
                    <h1 className='text-3xl font-bold text-primaryYellow'>This is your Shop</h1>
                    <div className="mt-3 ">
                        {!products ? <Loading /> : products.map((product: Product) => (
                            <div key={product.id} className='flex items-center mb-3 border border-primaryYellow justify-between p-4 xs:flex-col md:flex-row'>
                                <img src={product.images[0].image} alt="" className='max-w-24 w-full' />
                                <div className="ml-5 xs:flex xs:flex-col xs:items-center md:flex-col md:items-start xs:ml-0 md:ml-5">
                                    <h3 className='text-xl font-medium text-black capitalize'>{product.title}</h3>
                                    <div className="flex items-center mt-2 gap-2">
                                        <button className='text-sm font-normal text-white bg-primaryYellow rounded p-1 flex items-center justify-center' onClick={() => toFavorite(product)}>Save in Wishlist</button>
                                        <button className='text-sm font-normal text-white bg-red-500 rounded p-1 flex items-center justify-center' onClick={() => deleteProduct(product.id)}><FaRegTrashCan /></button>
                                    </div>
                                </div>
                                <div className="ml-5 flex items-center xs:ml-0 xs:mt-3">
                                    <button className='px-4 py-1.5 bg-green-800 text-white border-none rounded cursor-pointer text-lg flex justify-center items-center' onClick={() => plusCount(product.id)}><FaPlus /></button>
                                    <span className='mx-2 w-20 border border-gray-300 text-lg font-bold text-center rounded p-1.5'>{product.userCount}</span>
                                    <button className='px-4 py-1.5 bg-[#dd0404] text-white border-none rounded cursor-pointer text-lg flex justify-center items-center' onClick={() => minusCount(product.id, product.userCount)} disabled={product.userCount === 0}><FaMinus /></button>
                                </div>
                                <p className="text-sm font-normal text-black">{product.price} $</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-[650px] w-full" >
                    <h1 className='text-3xl font-bold text-primaryYellow'>All Price</h1>
                    <h2 className='text-2xl font-bold mt-3'>Total Price: ${totalPrice}</h2>
                </div>
            </div>
        </section>
    );
};

export default Shop;