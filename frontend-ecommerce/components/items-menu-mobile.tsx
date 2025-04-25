import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";  // Asegúrate de importar Link

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/procesadores" className="block">Procesadores</Link>
                <Link href="/categories/tarjeta-grafica" className="block">Tarjeta Gráfica</Link>
                <Link href="/categories/almacenamiento" className="block">Almacenamiento</Link>
                <Link href="/categories/placa-madre" className="block">Placa Madre</Link>
                <Link href="/categories/fuente-de-poder" className="block">Fuente de Poder</Link>
                <Link href="/categories/memoria-ram" className="block">Memoria Ram</Link>
                <Link href="/categories/refrigeracion" className="block">Refrigeración</Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;
