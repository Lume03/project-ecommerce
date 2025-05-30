/* eslint-disable @next/next/no-img-element */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

interface CarouselProductProps {
    images: {
        id: number;
        url: string;
    }[];
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props;

    if (!images || images.length === 0) {
        return (
            <div className="w-full aspect-square bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
        <span className="text-neutral-500 dark:text-neutral-400 text-sm">
          Sin imagen
        </span>
            </div>
        );
    }

    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt="Image product"
                                className="rounded-lg"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>


            </Carousel>
        </div>
    );
};

export default CarouselProduct;
