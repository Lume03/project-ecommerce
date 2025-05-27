import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { ProductType } from "@/types/product";
import IconButton from "@/components/icon-button";
import {Expand, ShoppingCart} from "lucide-react";
import {router} from "next/client";
import {useRouter} from "next/navigation";

type ProductCardProps = {
    product: ProductType;
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props;
    const router =  useRouter();

    if (!product) {
        return null;
    }

    return (
        <Link
            href={`/products/${product.slug}`}
            // Estilos de la tarjeta principal (Link)
            className="relative block p-3 transition-all duration-200 rounded-xl group
                       bg-white dark:bg-neutral-800
                       shadow-sm hover:shadow-xl focus:outline-none focus:ring-2
                       focus:ring-indigo-500 dark:focus:ring-indigo-400
                       border border-neutral-200 dark:border-neutral-700
                       hover:border-indigo-300 dark:hover:border-indigo-600"
        >
            {product.images && product.images.length > 0 ? (
                <Carousel
                    opts={{
                        align: "start",
                        loop: product.images.length > 1,
                    }}
                    // El carrusel ocupa el ancho disponible, sin max-w propio
                    className="w-full overflow-hidden rounded-lg"
                >
                    <CarouselContent>
                        {product.images.map((image) => (
                            <CarouselItem key={image.id}>
                                <div className="aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-700 rounded-md">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                        alt={product.productName || 'Imagen del producto'}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute w-full px-6 transition duration-200
                            opacity-0 group-hover:opacity-100 bottom-5"
                                    >
                                        <div className="flex justify-center gap-x-6">
                                            <IconButton
                                                onClick={() =>
                                                    router.push(`/product/${product.attributes.slug}`)
                                                }
                                                icon={<Expand size={20} className="text-gray-600" />}
                                            />
                                            <IconButton
                                                onClick={() => console.log("product")}
                                                icon={<ShoppingCart size={20} className="text-gray-600" />}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            ) : (
                // Placeholder si no hay imágenes
                <div className="w-full aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                    <span className="text-neutral-500 dark:text-neutral-400 text-sm">Sin imagen</span>
                </div>
            )}

            {/* Información del producto */}
            <div className="mt-4">
                <h3
                    className="text-base font-semibold text-neutral-800 dark:text-neutral-100 truncate"
                    title={product.productName}
                >
                    {product.productName}
                </h3>
                <p className="text-sm font-medium text-black dark:text-white mt-1">
                    S/ {product.price.toFixed(2)}
                </p>
            </div>
        </Link>
    );
}



export default ProductCard;