import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import PricingPackageArea from "@/components/packages/pricing-package-area";
import FaqAreaTwo from "@/components/faq/faq-area-two";


export const metadata: Metadata = {
    title: "Pricing Page - Housey",
}

export default function PricingPage() {
    return (
        <div>

            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="Unique Pricing Plan" title="Flexible pricing Plan" />
            {/* breadcrumb area end */}

            {/* pricing package area start */}
            <PricingPackageArea/>
            {/* pricing package area end */}

            {/* faq area start */}
            <FaqAreaTwo/>
            {/* faq area end */}
        </div>
    )
}
