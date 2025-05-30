'use client'
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ProductType } from "@/types/product";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import SkeletonSchema from "@/components/skeletonSchema";
import { Card, CardContent } from "@/components/ui/card";
import {Expand, ShoppingCart} from "lucide-react";
import IconButton from "@/components/icon-button";
import {useRouter} from "next/navigation";
import {useCart} from "@/hooks/use-cart";

const FeaturedProducts = () => {
    const { loading, result, error } = useGetFeaturedProducts();
    const  router = useRouter();
    const {addItem , items  } = useCart();

   // console.log(items);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <SkeletonSchema grid={3} />}
                    {error && (
                        <CarouselItem className="basis-full">
                            <div className="p-1">
                                <Card>
                                    <CardContent>
                                        Error al cargar productos: {String(error)}
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    )}
                    {result && Array.isArray(result) && result.length > 0 ? (
                        result.map((product: ProductType) => {
                            if (!product) return null;
                            const { id, productName, images, categoria } = product;
                            const imageUrl =
                                images && images.length > 0
                                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`
                                    : "/placeholder.png";

                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="flex justify-center items-center h-full">
                                        <Card className="w-74 h-75 flex flex-col justify-between items-center border border-gray-200 shadow-none">
                                            <CardContent className="flex flex-col items-center justify-between flex-grow py-6">
                                                <div className="w-32 h-32 flex items-center justify-center mb-4">
                                                    <img
                                                        src={imageUrl}
                                                        alt={productName || "Producto destacado"}
                                                        className="object-contain w-full h-full rounded-lg"
                                                    />
                                                </div>

                                                {/* Nombre del producto */}
                                                <h3 className="text-lg font-bold truncate w-full text-center mb-4">
                                                    {productName}
                                                </h3>

                                                {/* Botones abajo */}
                                                <div className="flex justify-center gap-x-6">
                                                    <IconButton
                                                        onClick={() => router.push(`/product/${product.slug}`)}
                                                        icon={<Expand size={14} />}
                                                        className="text-gray-600"
                                                    />
                                                    <IconButton
                                                        onClick={() => addItem (product)}
                                                        icon={<ShoppingCart size={14} />}
                                                        className="text-gray-600"
                                                    />
                                                </div>
                                            </CardContent>
                                            
                                        </Card>
                                    </div>
                                </CarouselItem>
                            );
                        })
                    ) : (
                        !loading && !error && (
                            <CarouselItem className="basis-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent>
                                            No hay productos destacados disponibles
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    )}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="Hidden sm:flex"/>
            </Carousel>
        </div>
    );
};

export default FeaturedProducts;
