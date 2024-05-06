"use server";
export interface BannerType {
    id: number;
    title: string;
    image: string;
    children: [];
}

export interface BannersType {
    count: number;
    next: number | null;
    previous: number | null;
    results: BannerType[];
}

export const getCategories = async (): Promise<BannersType> => {
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
