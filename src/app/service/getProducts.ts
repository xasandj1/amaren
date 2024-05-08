"use server";

export interface Product {
    id: number;
    image: string;
    title: string;
    price: string;
    is_available: boolean;
    category: number;
    is_new: boolean;
}
interface ProductResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Product[];
}

export const getProducts = async (): Promise<ProductResponse> => {
    try {
        const response = await fetch('http://135.181.108.207/product/', {
            next: { revalidate: 300 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}