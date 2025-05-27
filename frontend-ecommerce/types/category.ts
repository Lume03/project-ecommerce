// types/category.ts
export type CategoryType = {
    id: number;
    documentId: string;
    CategoryName: string;
    slug: string;
    mainImage: {
        id: number;
        name: string;
        url: string;
        width: number;
        height: number;
        alternativeText?: string;
        caption?: string;
        formats?: {
            thumbnail?: {
                url: string;
                width: number;
                height: number;
            }
        }
    }
    product: Array<{
        id: number;
        productName: string;
        slug: string;
        description: string;
        price: number;
        active: boolean;
        isFeature: boolean;
    }>
}