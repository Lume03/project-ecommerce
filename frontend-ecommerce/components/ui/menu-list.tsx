"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const  MenuList = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            TeslaTech
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Somos una empresa que vende equipos electronicos
                                            de computacion y accesorios para gamers.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Tienda">
                                Podras armar la computadora de tus sueños.
                            </ListItem>
                            <ListItem href="/offers" title="Ofertas">
                                Descubre las mejores promociones y descuentos especiales.
                            </ListItem>
                            <ListItem href="/" title="Perifericos">
                                Productos complementarios para tu setup gamer.
                            </ListItem>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/accesories" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Accesorios
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MenuList

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Procesadores",
        href: "/docs/primitives/alert-dialog",
        description:
            "Aqui encontraras procesadores Intel o AMD.",
    },
    {
        title: "Tarjetas de video",
        href: "/docs/primitives/hover-card",
        description:
            "Aque encontraras tarjetas de video Nvidia o AMD.",
    },
    {
        title: "Placa Madre",
        href: "/docs/primitives/progress.",
        description:
            "Aqui encontraras placas madre para tu procesador ya sea Intel o AMD.",
    },
    {
        title: "Almacenamiento",
        href: "/docs/primitives/scroll-area",
        description: "Aqui encontraras almacenamiento SSD,HDD y NVMe.2.",
    },
    {
        title: "Memoria RAM",
        href: "/docs/primitives/tabs",
        description:
            "Aqui encontraras memorias ram DDR4 y DDR5.",
    },
    {
        title: "Fuentes de poder",
        href: "/docs/primitives/tooltip",
        description:
            "Aqui encontraras fuentes de poder Bronce , Silver y Gold.",
    },
]

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


