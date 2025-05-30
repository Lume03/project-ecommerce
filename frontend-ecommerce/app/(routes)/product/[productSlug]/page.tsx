"use client";

import { useParams } from "next/navigation";
import { useGetProductBySlug } from "@/api/getProductBySlug";
import SkeletonProduct from "@/app/(routes)/product/[productSlug]/components/skeleton-product";
import CarouselProduct from "@/app/(routes)/product/[productSlug]/components/carousel-product";
import InfoProduct from "@/app/(routes)/product/[productSlug]/components/info-product";
import { ProductType } from "@/types/product"; // Asegúrate de que esta importación sea correcta

export default function Page() {
    const params = useParams();
    const { productSlug } = params;

    const { result } /* : ResponseType */ = useGetProductBySlug(productSlug) as { result: ProductType[] | null };

    if (result === null || result.length === 0) {
        return <SkeletonProduct />;
    }

    const productData = result[0];

    // console.log(productData);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
            <div className="grid sm:grid-cols-2">
                <div>
                    {productData && productData.images && (
                        <CarouselProduct images={productData.images} />
                    )}
                </div>

                <div className="sm:px-12">
                    {productData && (
                        <InfoProduct product={productData} />
                    )}
                </div>
            </div>
        </div>
    );
}