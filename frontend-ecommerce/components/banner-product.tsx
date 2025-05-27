import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";

const BannerProduct = () => {
    return (
        <>

    <div className="mt-4 text-center">
    <p>Experiencia Unica </p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">Componentes de ultimo modelo</h4>
        <p className="my-2 text-lg">Juega y trabaja de manera eficiente y veloz</p>
        <Link href="#" className={buttonVariants()}>Comprar</Link>
    </div>
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/teslatechh.png')] bg-center mt-5" />
        </>
    );
}

export default BannerProduct;