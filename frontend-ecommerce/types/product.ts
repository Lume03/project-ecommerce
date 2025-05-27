// Tipos de Dynamic Zone
export type CategoriaProcesador = {
    __component: "categoria.procesador";
    Marca: string;
    Socket: string;
    GraficosIntegrados: boolean | null;
    Nucleos: string;
    Hilos: string;
};

export type CategoriaTarjetaGrafica = {
    __component: "categoria.tarjeta-grafica";
    Modelo: string;
    Marca: string;
    VRAM: string;
};

export type CategoriaFuentedePoder = {
    __component: "categoria.fuente-de-poder";
    Marca: string;
    Certificacion: string;
    Tamano: string;
    Potencia: string;
};

export type CategoriaMemoriaRam = {
    __component: "categoria.memoria-ram";
    Marca: string;
    RAM: string;
    Formato: string;
    Capacidad: string;
    Velocidad: string;
};

export type CategoriaPlacaMadre = {
    __component: "categoria.placa-madre";
    Tipo: string;
    Socket: string;
    ARGBcompatible: boolean;
    Marca: string;
    Tipo_Ram: string;
    Wifi: boolean;
    Bluetooth: boolean;
};

export type CategoriaAlmacenamiento = {
    __component: "categoria.almacenamiento";
    Tipo: string;
    Marca: string;
    Capacidad: string;
    Velocidad: string;
};

export type CategoriaRefrigeracion = {
    __component: "categoria.refrigeracion";
    Tipo: string;
    Marca: string;
    Tamano: string;
    Iluminacion: string;
    Ruido: string;
};

export type ProductSpecs =
    | CategoriaProcesador
    | CategoriaTarjetaGrafica
    | CategoriaFuentedePoder
    | CategoriaMemoriaRam
    | CategoriaPlacaMadre
    | CategoriaAlmacenamiento
    | CategoriaRefrigeracion;

// Tipo de producto ajustado a tu API real
export type ProductType = {
    id: number;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeature: boolean;
    price: number;
    images: {
        id: number;
        url: string;
    }[];
    categoria: ProductSpecs[];
    category?: {
        id: number;
        name: string;
        slug: string;
    };
};
