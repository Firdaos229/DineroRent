import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import GalleryArea from "@/components/gallery/gallery-area";


export const metadata: Metadata = {
    title: "Gallery Page - Housey",
}

export default function GalleryPage() {
    return (
        <div>

            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="Unique Historical Charm" title="Luxury Hotel Gallery" />
            {/* breadcrumb area end */}

            {/* gallery area start */}
            <GalleryArea />
            {/* gallery area end */}
        </div>
    )
}
