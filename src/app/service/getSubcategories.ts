"use server";
interface SubcategoryType {
    count: number,   
    next: number | null
    previous: number | null
    results : {
        title: string;
        image: string;
        id: number;
        parent: { id: number; title: string; };
    }[]
}

export const getSubcategories = async (): Promise<SubcategoryType> => {
    try {
        const response = await fetch('http://135.181.108.207/api/subcategory/?limit=10', {
            next: { revalidate: 300 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}
