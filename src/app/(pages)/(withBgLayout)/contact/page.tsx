
import { Metadata } from "next";
import ContactArea from "@/components/contact/contact-area";
import ContactItemArea from "@/components/contact/contact-item-area";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";


export const metadata: Metadata = {
    title: "Contact Page - DineroRent",
};


export default function ContactPage() {
    return (
        <>
            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="Contact Us" title="Contact Our Team" />
            {/* breadcrumb area end */}

            {/* contact area start */}
            <ContactArea />
            {/* contact area end */}

            {/* contact item area start */}
            <ContactItemArea />
            {/* contact item area end */}

        </>
    )
}
