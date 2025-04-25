import type { Schema, Struct } from '@strapi/strapi';

export interface CategoriaAlmacenamiento extends Struct.ComponentSchema {
  collectionName: 'components_categoria_almacenamientos';
  info: {
    displayName: 'Almacenamiento';
  };
  attributes: {
    Capacidad: Schema.Attribute.Enumeration<
      ['120gb', '256gb', '512gb', '1tb', '2tb']
    >;
    Marca: Schema.Attribute.Enumeration<
      ['Samsung', 'Western Digital', 'Crucial', 'Seagate']
    >;
    Tipo: Schema.Attribute.Enumeration<['HDD', 'SSD', 'NVMe.2']>;
    Velocidad: Schema.Attribute.Enumeration<
      ['150MB/s', '550MB/s', '3500MB/s', '6000MB/s', '7000MB/s']
    >;
  };
}

export interface CategoriaFuenteDePoder extends Struct.ComponentSchema {
  collectionName: 'components_categoria_fuente_de_poders';
  info: {
    displayName: 'Fuente de Poder';
  };
  attributes: {
    Certificacion: Schema.Attribute.Enumeration<
      ['80 plus bronze', '80 plus silver', '80 plus gold', '80 plus platinum']
    >;
    Marca: Schema.Attribute.Enumeration<
      ['Corsair', 'EVGA', 'Antec', 'GigaByte', 'Asus', 'XPG', 'Cooler Master']
    >;
    Potencia: Schema.Attribute.Enumeration<
      ['500w', '600w', '750w', '800w', '1000w']
    >;
    tamano: Schema.Attribute.Enumeration<['ATX', 'SFX', 'TFX']>;
  };
}

export interface CategoriaMemoriaRam extends Struct.ComponentSchema {
  collectionName: 'components_categoria_memoria-rams';
  info: {
    description: '';
    displayName: 'Memoria Ram';
  };
  attributes: {
    Capacidad: Schema.Attribute.Enumeration<
      ['4gb', '8gb', '16gb', '24gb', '32gb', '48gb']
    >;
    Formato: Schema.Attribute.Enumeration<['DIMM']>;
    Marca: Schema.Attribute.Enumeration<
      ['Corsair', 'G.Skill', 'Kingston', 'Crucial']
    >;
    RAM: Schema.Attribute.Enumeration<['DDR4', 'DDR5']>;
    Velocidad: Schema.Attribute.Enumeration<
      ['2400MHz', '3200MHz', '5200MHz', '6000MHz']
    >;
  };
}

export interface CategoriaPlacaMadre extends Struct.ComponentSchema {
  collectionName: 'components_categoria_placa_madres';
  info: {
    description: '';
    displayName: 'Placa Madre';
  };
  attributes: {
    ARGBcompatible: Schema.Attribute.Boolean;
    Bluetooth: Schema.Attribute.Boolean;
    Marca: Schema.Attribute.Enumeration<['Asus', 'GigaByte', 'AsRock', 'MSI']>;
    Socket: Schema.Attribute.Enumeration<
      ['AM4', 'AM5', 'LGA1700', 'LGA1851', '8gb']
    >;
    Tipo: Schema.Attribute.Enumeration<['Intel', 'AMD']>;
    Tipo_Ram: Schema.Attribute.Enumeration<['DDR4', 'DDR5']>;
    Wifi: Schema.Attribute.Boolean;
  };
}

export interface CategoriaProcesador extends Struct.ComponentSchema {
  collectionName: 'components_categoria_procesadors';
  info: {
    description: '';
    displayName: 'Procesador';
  };
  attributes: {
    GraficosIntegrados: Schema.Attribute.Boolean;
    Hilos: Schema.Attribute.Enumeration<['12', '16', '20', '24', '28', '32']>;
    Marca: Schema.Attribute.Enumeration<['Intel', 'AMD']>;
    Nucleos: Schema.Attribute.Enumeration<
      ['6', '8', '10', '12', '14', '16', '20', '24']
    >;
    Socket: Schema.Attribute.Enumeration<['AM4', 'AM5', 'LGA1700', 'LGA1851']>;
  };
}

export interface CategoriaRefrigeracion extends Struct.ComponentSchema {
  collectionName: 'components_categoria_refrigeracions';
  info: {
    displayName: 'Refrigeracion';
  };
  attributes: {
    Iluminacion: Schema.Attribute.Enumeration<['RGB', 'ARGB']>;
    Marca: Schema.Attribute.Enumeration<
      ['Noctua', 'Corsair', 'NZXT', 'Cooler Masater']
    >;
    Ruido: Schema.Attribute.Enumeration<['15db', '20db', '25db', '30db']>;
    Tamano: Schema.Attribute.Enumeration<['120mm', '240mm', '360mm']>;
    Tipo: Schema.Attribute.Enumeration<['Aire', 'Liquido']>;
  };
}

export interface CategoriaTarjetaGrafica extends Struct.ComponentSchema {
  collectionName: 'components_categoria_tarjeta_graficas';
  info: {
    displayName: 'Tarjeta Grafica';
  };
  attributes: {
    Marca: Schema.Attribute.Enumeration<['ASUS', 'MSI', 'GigaByte']>;
    Modelo: Schema.Attribute.Enumeration<['Nvidia', 'AMD']>;
    VRAM: Schema.Attribute.Enumeration<['8gb', '12gb', '16gb', '24gb', '32gb']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'categoria.almacenamiento': CategoriaAlmacenamiento;
      'categoria.fuente-de-poder': CategoriaFuenteDePoder;
      'categoria.memoria-ram': CategoriaMemoriaRam;
      'categoria.placa-madre': CategoriaPlacaMadre;
      'categoria.procesador': CategoriaProcesador;
      'categoria.refrigeracion': CategoriaRefrigeracion;
      'categoria.tarjeta-grafica': CategoriaTarjetaGrafica;
    }
  }
}
