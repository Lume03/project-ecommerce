"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductType, ProductSpecs } from "@/types/product";
import { Heart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";

export type InfoProductProps = {
    product: ProductType;
};

const InfoProduct = ({ product }: InfoProductProps) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { addItem: addItemToCart } = useCart();
    const { lovedItems, addLoveItem, removeLovedItem } = useLovedProducts();

    const isLoved = isClient && product ? lovedItems.some((item) => item.id === product.id) : false;

    const handleLoveToggle = () => {
        if (!isClient || !product) return;
        if (isLoved) {
            removeLovedItem(product.id);
        } else {
            addLoveItem(product);
        }
    };

    const specs: ProductSpecs | undefined = product.categoria?.[0];

    const renderSpecs = (specs: ProductSpecs) => {
        switch (specs.__component) {
            case "categoria.procesador":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Marca: {specs.Marca}</li>
                        <li>Socket: {specs.Socket}</li>
                        <li>Núcleos: {specs.Nucleos}</li>
                        <li>Hilos: {specs.Hilos}</li>
                        <li>Gráficos Integrados: {specs.GraficosIntegrados ? "Sí" : "No"}</li>
                    </ul>
                );
            case "categoria.tarjeta-grafica":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Modelo: {specs.Modelo}</li>
                        <li>Marca: {specs.Marca}</li>
                        <li>VRAM: {specs.VRAM}</li>
                    </ul>
                );
            case "categoria.fuente-de-poder":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Marca: {specs.Marca}</li>
                        <li>Certificación: {specs.Certificacion}</li>
                        <li>Tamaño: {specs.Tamano}</li>
                        <li>Potencia: {specs.Potencia}</li>
                    </ul>
                );
            case "categoria.memoria-ram":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Marca: {specs.Marca}</li>
                        <li>RAM: {specs.RAM}</li>
                        <li>Formato: {specs.Formato}</li>
                        <li>Capacidad: {specs.Capacidad}</li>
                        <li>Velocidad: {specs.Velocidad}</li>
                    </ul>
                );
            case "categoria.placa-madre":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Tipo: {specs.Tipo}</li>
                        <li>Socket: {specs.Socket}</li>
                        <li>ARGB Compatible: {specs.ARGBcompatible ? "Sí" : "No"}</li>
                        <li>Marca: {specs.Marca}</li>
                        <li>Tipo RAM: {specs.Tipo_Ram}</li>
                        <li>Wifi: {specs.Wifi ? "Sí" : "No"}</li>
                        <li>Bluetooth: {specs.Bluetooth ? "Sí" : "No"}</li>
                    </ul>
                );
            case "categoria.almacenamiento":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Tipo: {specs.Tipo}</li>
                        <li>Marca: {specs.Marca}</li>
                        <li>Capacidad: {specs.Capacidad}</li>
                        <li>Velocidad: {specs.Velocidad}</li>
                    </ul>
                );
            case "categoria.refrigeracion":
                return (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Tipo: {specs.Tipo}</li>
                        <li>Marca: {specs.Marca}</li>
                        <li>Tamaño: {specs.Tamano}</li>
                        <li>Iluminación: {specs.Iluminacion}</li>
                        <li>Ruido: {specs.Ruido}</li>
                    </ul>
                );
            default:
                return null;
        }
    };

    // Placeholder mientras !isClient o !product
    if (!isClient || !product) {
        return (
            <div className="px-6 animate-pulse">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
                <Separator className="my-4" />
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                <Separator className="my-4" />
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

                <div className="mt-2">
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li className="h-3.5 bg-gray-300 dark:bg-gray-700 rounded w-3/5"></li>
                        <li className="h-3.5 bg-gray-300 dark:bg-gray-700 rounded w-4/5"></li>
                        <li className="h-3.5 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></li>
                        <li className="h-3.5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></li>
                    </ul>
                </div>

                <Separator className="my-4" />
                <div className="flex items-center gap-x-4">
                    <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                    <div className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
                        <Heart size={24} className="text-gray-400 dark:text-gray-500" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="px-6 pb-8">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{product.productName}</h1>
            </div>
            <Separator className="my-4" />
            <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">{formatPrice(product.price)}</p>

            {specs ? (
                renderSpecs(specs)
            ) : (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">No hay especificaciones adicionales disponibles.</p>
            )}

            <Separator className="my-4" />
            <div className="flex items-center gap-x-4 mt-6">
                <Button
                    className="w-full py-3 text-base"
                    onClick={() => addItemToCart(product)}
                    aria-label={`Comprar ${product.productName}`}
                >
                    Comprar
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleLoveToggle}
                    aria-label={isLoved ? `Quitar ${product.productName} de favoritos` : `Añadir ${product.productName} a favoritos`}
                    className={cn(
                        "p-2 rounded-full transition-colors duration-200 ease-in-out",
                        "hover:bg-red-100 dark:hover:bg-red-800/30",
                        isLoved
                            ? "text-red-500 dark:text-red-400 border-red-300 dark:border-red-500 bg-red-50 dark:bg-red-900/20"
                            : "text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600"
                    )}
                >
                    <Heart
                        size={24}
                        className={cn(
                            "transition-all duration-200 ease-in-out",
                            isLoved ? "fill-red-500 dark:fill-red-400 stroke-red-500 dark:stroke-red-400" : "fill-transparent stroke-current"
                        )}
                        aria-hidden="true"
                    />
                </Button>
            </div>
        </div>
    );
};

export default InfoProduct;