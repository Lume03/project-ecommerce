"use client";
import Link from "next/link";
import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";
import { useEffect, useState } from "react";

const ChooseCategory = () => {
    const { result, loading }: ResponseType = useGetCategories();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    if (loading) return <p>Cargando categorías...</p>;
    if (!result || result.length === 0) return <p>No hay categorías disponibles</p>;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8 text-center">
                Elige tu categoría favorita
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {result.map((category: CategoryType) => {
                    if (!category?.mainImage?.url) {
                        console.warn(`Categoría ${category.CategoryName} no tiene imagen`);
                        return null;
                    }

                    const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`;

                    return (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="max-w-xs overflow-hidden bg-no-repeat bg-cover rounded-lg"
                        >
                            <img
                                src={imageUrl}
                                alt={category.CategoryName || "Categoría"}
                                className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                onError={(e) => {
                                    console.error("Error loading image:", imageUrl);
                                    e.currentTarget.src = "/placeholder.png";
                                }}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseCategory;
