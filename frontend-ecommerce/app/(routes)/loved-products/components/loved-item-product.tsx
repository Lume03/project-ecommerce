/* eslint-disable @next/next/no-img-element */
import ProductImageMinuature from "@/components/shared/product-image-miniature";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { Heart, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props;
    const router = useRouter();
    const { removeLovedItem } = useLovedProducts();
    const { addItem } = useCart();

    // CORREGIDO: Solo añadir al carrito, NO eliminar de favoritos
    const handleAddToCart = () => {
        addItem(product);
    };

    const handleRemoveFromLoved = () => {
        removeLovedItem(product.id);
    };

    // CORREGIDO: Construir URL de imagen igual que en CartItem
    const firstImageObject = product.images && product.images.length > 0 ? product.images[0] : null;
    const imagePathFromBackend = firstImageObject ? firstImageObject.url : null;

    let finalImageUrl = "/placeholder-image.png"; // Imagen por defecto

    if (imagePathFromBackend) {
        if (imagePathFromBackend.startsWith('http://') || imagePathFromBackend.startsWith('https://') || imagePathFromBackend.startsWith('//')) {
            finalImageUrl = imagePathFromBackend;
        } else {
            const backendUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "").replace(/\/$/, '');
            const imagePath = imagePathFromBackend.replace(/^\//, '');
            finalImageUrl = `${backendUrl}/${imagePath}`;
        }
    }

    return (
        <li className="flex flex-col p-4 border-b sm:flex-row sm:p-6">
            <ProductImageMinuature
                slug={product.slug || ''}
                url={finalImageUrl}
            />

            {/* Contenido del Producto y Acciones */}
            <div className="flex flex-col justify-between flex-1 mt-4 sm:mt-0 sm:px-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {product.productName || "Nombre no disponible"}
                    </h2>
                    <p className="mt-1 font-semibold text-gray-800 dark:text-gray-200">
                        {product.price !== undefined ? formatPrice(product.price) : "Precio no disponible"}
                    </p>
                </div>

                <div className="flex items-center gap-x-3 mt-5">
                    {/* CORREGIDO: Solo añadir al carrito */}
                    <Button
                        className="flex-grow rounded-full sm:flex-grow-0"
                        onClick={handleAddToCart}
                    >
                        Añadir al carrito
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="p-2 rounded-full text-red-500 border-red-400 hover:bg-red-50 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-900/30"
                        onClick={handleRemoveFromLoved}
                        aria-label="Quitar de favoritos"
                    >
                        <Heart size={20} className="stroke-current fill-red-500" />
                    </Button>
                </div>
            </div>

            <div>
                <button
                    className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}
                    onClick={() => removeLovedItem(product.id)}
                >
                    <X size={20} />
                </button>
            </div>
        </li>
    );
};

export default LovedItemProduct;