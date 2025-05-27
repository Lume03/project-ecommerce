import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";

const BannerDiscount = ()  => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primery">Consigue un -15% </h2>
            <h3 className="mt-3 font-semibold">-10% al comprar mas de 4 compontentes y un 15% al comprar una computadora completa</h3>

            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Mas informacion</Link>

            </div>

        </div>
    )
}
export default BannerDiscount;