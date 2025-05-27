"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { useParams } from "next/navigation";
import { ResponseType } from "@/types/response";
import {Separator} from "@/components/ui/separator";
import FiltersControlsCategory from "@/app/(routes)/category/[categorySlug]/components/filters-controls-category";

export default function Page() {
    const params = useParams();
    const { categorySlug } = params;

    const { result, loading, error }: ResponseType = useGetCategoryProduct(categorySlug);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error al cargar productos: {String(error)}</p>;
    }

    if (!result || result.length === 0) {
        return <p>No hay productos para esta categoría.</p>;
    }

    const categoryName = result[0]?.category?.CategoryName;

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {categoryName ? (
                <h1 className="text-3xl font-medium">{categoryName}</h1>
            ) : (
                <p>No se encontró el nombre de la categoría.</p>
            )}
            <Separator/>
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory/>
            </div>
        </div>
    );
}
