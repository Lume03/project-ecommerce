"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {CarouselContent} from "@/components/ui/carousel";

export const dataCarouselTop = [
    {
        id: 1,
        tittle: "Envio en 24/48 horas",
        description: "Como cliente VIP, tus envíos en 12/24 horas",
        link: "#",
    },
    {
        id: 2,
        tittle: "Promociones exclusivas",
        description: "Como cliente VIP, podrás acceder a promociones exclusivas",
        link: "#",
    },
    {
        id: 3,
        tittle: "Armado de PC",
        description: "Como cliente VIP, tendrás a tu disposición un armador de PC",
        link: "#",
    },
];

const CarouselTextBanner = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel
                className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2500 //esta en milisegundos
                    }),
                ]}
            >
                <CarouselContent>
                    {dataCarouselTop.map(({ id, tittle, link, description }) => (
                        <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                        <p className="sm:text-lg text-wrap dark:text-secondary">{tittle}</p>
                                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default CarouselTextBanner;
