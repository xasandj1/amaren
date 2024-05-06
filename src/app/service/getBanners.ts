"use server";
export interface BannerType {
    id: number;
    title: string;
    image: string;
    description: string;
}

export interface BannersType {
    count: number;
    next: number | null;
    previous: number | null;
    results: BannerType[];
}

export const getBanners = async (): Promise<BannersType> => {
    try {
        const response = await fetch('http://135.181.108.207/banner/', {
            next: { revalidate: 300 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}
