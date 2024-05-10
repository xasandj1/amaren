"use server";

interface Category {
    id: number;
    title: string;
    image: string;
    children: Category[];
}

interface CategoryResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Category[];
}

export const getCategoryChildren = async (): Promise<CategoryResponse> => {
    try {
        const response = await fetch('http://135.181.108.207/category/', {
            next: { revalidate: 300 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}
