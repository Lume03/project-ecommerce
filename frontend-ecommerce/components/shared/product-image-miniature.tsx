/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
    slug: string;
    url: string;
}

const ProductImageMinuature = (props: ProductImageMiniatureProps) => {
    const { slug, url } = props;
    const router = useRouter();

    // Si no hay URL o es la imagen placeholder, mostrar placeholder
    if (!url || url === "/placeholder-image.png") {
        return (
            <div
                onClick={() => router.push(`/product/${slug}`)}
                className="cursor-pointer flex items-center justify-center bg-gray-200 dark:bg-gray-700 w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
            >
        <span className="text-gray-500 dark:text-gray-400 text-xs text-center">
          Sin imagen
        </span>
            </div>
        );
    }

    return (
        <div
            onClick={() => router.push(`/product/${slug}`)}
            className="cursor-pointer"
        >
            <img
                src={url}
                alt="Product"
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
                onError={(e) => {
                    console.warn(`Error al cargar imagen: ${url}`);
                    // Mostrar placeholder en caso de error
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `
              <div class="flex items-center justify-center bg-gray-200 dark:bg-gray-700 w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32">
                <span class="text-gray-500 dark:text-gray-400 text-xs text-center">Sin imagen</span>
              </div>
            `;
                    }
                }}
            />
        </div>
    );
};

export default ProductImageMinuature;