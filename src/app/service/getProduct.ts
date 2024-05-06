"use server";

interface ProductType {
    id: number;
    title: string;
    image: string;
    price: string;
    is_available: boolean;
    category: number;
    is_new: boolean;
}

export interface ProductListType {
    count: number;
    next: number | null;
    previous: number | null;
    results: ProductType[];
}

export const getProducts = async (): Promise<ProductListType> => {
    try {
        const response = await fetch('http://135.181.108.207/product/', {
            next: { revalidate: 200 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}