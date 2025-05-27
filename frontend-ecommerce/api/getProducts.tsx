// api/getProducts.ts
import { useEffect, useState } from "react";
import { CategoryType } from "@/types/category";

export function useGetCategories() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=mainImage`;
    const [result, setResult] = useState<CategoryType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error('Error fetching categories');
                const json = await res.json();
                setResult(json.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [url]);

    return { loading, result, error };
}