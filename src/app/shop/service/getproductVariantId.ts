"use server";

export interface ProductType {
    id: number;
    is_available: boolean;
    title: string;
    images: { image: string, id: number }[];
    product: number;
    attribute_value: { id: number, }[];
    other_detail: string;
    price: string;
    price_with_discount: string | null;
    quantity: number;
}

export interface ProductListType {
    count: number;
    next: number | null;
    previous: number | null;
    results: ProductType[];
}

export const getProductsVariantId = async (categoryId: number | null): Promise<ProductListType> => {
    try {
        const response = await fetch(`http://135.181.108.207/product_variant/?product_category=${categoryId}`, {
            next: { revalidate: 200 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}