import { Metadata } from "next";
import OfferArea from "@/components/offer/offer-area";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";


export const metadata: Metadata = {
    title: "Offer Page - Housey",
};


export default function OfferPage() {
    return (
        <>

            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="Offers/Promotions" title="Exclusive offers" />
            {/* breadcrumb area end */}

            {/* offer area start */}
            <OfferArea allOffers={true} />
            {/* offer area end */}

        </>
    )
}
