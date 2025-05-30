"use client";

import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice"; // Asegúrate que esta ruta sea correcta
import { Button } from "@/components/ui/button";   // Para el botón con ícono
import { X } from "lucide-react";                 // El ícono X

interface CartItemProps {
    product: ProductType;
}

const CartItem = (props: CartItemProps) => {
    const { product } = props;
    const { removeItem } = useCart();
    const router = useRouter();

    // Lógica para construir la URL de la imagen (sin cambios)
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

    const handleRemoveItem = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeItem(product.id);
    };

    return (
        <li className="relative flex items-start py-6 pr-10 border-b last:border-b-0 sm:pr-12 sm:items-center">
            <div
                onClick={() => router.push(`/product/${product.slug}`)}
                className="flex-shrink-0 cursor-pointer group"
            >
                <img
                    src={finalImageUrl}
                    alt={product.productName || 'Imagen del Producto'}
                    className="w-24 h-24 overflow-hidden rounded-md sm:w-32 sm:h-32 object-cover transition-opacity duration-300 group-hover:opacity-80"
                    onError={() => console.warn(`Error al cargar imagen: ${finalImageUrl} para producto ${product.productName}`)}
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                {/* Nombre del producto */}
                <h3
                    onClick={() => router.push(`/product/${product.slug}`)}
                    className="text-base font-semibold text-gray-900 dark:text-gray-100 cursor-pointer hover:underline"
                >
                    {product.productName || `Producto ID: ${product.id}`}
                </h3>

                {/* Precio */}
                <div className="mt-1 text-sm"> {/* `mt-1` para un pequeño espacio, `text-sm` para el tamaño de fuente */}
                    <p className="font-medium text-gray-900 dark:text-gray-100"> {/* Estilo del texto del precio */}
                        {formatPrice(product.price)}
                    </p>
                </div>

            </div>

            {/* Botón X  */}
            <Button
                variant="ghost"
                size="icon"
                onClick={handleRemoveItem}
                className="absolute top-4 right-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 sm:top-6 sm:right-4"
                aria-label={`Eliminar ${product.productName || 'producto'} del carrito`}
            >
                <X size={20} />
            </Button>
        </li>
    );
};

export default CartItem;