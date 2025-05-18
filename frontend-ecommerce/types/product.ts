// Procesador
export type CategoriaProcesador = {
    __component: "categoria.procesador";
    Marca: string;
    Socket: string;
    GraficosIntegrados: boolean;
    Nucleos: string;
    Hilos: string;
};

// Tarjeta Gráfica
export type CategoriaTarjetaGrafica = {
    __component: "categoria.tarjeta-grafica";
    Modelo: string;
    Marca: string;
    VRAM: string;
};

// Fuente de Poder
export type CategoriaFuentedePoder = {
    __component: "categoria.fuente-de-poder";
    Marca: string;
    Certificacion: string;
    Tamano: string;
    Potencia: string;
};

// Memoria RAM
export type CategoriaMemoriaRam = {
    __component: "categoria.memoria-ram";
    Marca: string;
    RAM: string;
    Formato: string;
    Capacidad: string;
    Velocidad: string;
};

// Placa Madre
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

// Almacenamiento
export type CategoriaAlmacenamiento = {
    __component: "categoria.almacenamiento";
    Tipo: string;
    Marca: string;
    Capacidad: string;
    Velocidad: string;
};

// Refrigeración
export type CategoriaRefrigeracion = {
    __component: "categoria.refrigeracion";
    Tipo: string;
    Marca: string;
    Tamano: string;
    Iluminacion: string;
    Ruido: string;
};

// Definición de ProductSpecs como unión de todos los posibles tipos de componentes
export type ProductSpecs =
    | CategoriaProcesador
    | CategoriaTarjetaGrafica
    | CategoriaFuentedePoder
    | CategoriaMemoriaRam
    | CategoriaPlacaMadre
    | CategoriaAlmacenamiento
    | CategoriaRefrigeracion;

// Definición completa del tipo de producto
export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        slug: string;
        description: string;
        active: boolean;
        isFeature: boolean;
        price: number;
        images: {
            data: {
                id: number;
                attributes: {
                    url: string;
                };
            }[];
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                };
            };
        };
        specs: ProductSpecs[];  // Dynamic Zone definida como unión de todos los tipos posibles
    };
};