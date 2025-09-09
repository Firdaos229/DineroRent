import { Metadata } from "next";
import BlogCategory from "@/components/blog/blog-category";
import BlogGridArea from "@/components/blog/blog-grid-area";
import BreadcrumbThree from "@/components/breadcrumb/breadcrumb-three";


export const metadata: Metadata = {
    title: "Blog Grid Page - Housey",
}

export default function BlogGridPage() {
    return (
        <div>
            {/* breadcrumb area start */}
            <BreadcrumbThree title="News & Insights" subtitle="We update our blog every week to stay up to date with all short-term rental owners, management and guest trends. Here we share newsworthy articles about Airbnb in Australia along with tips and tricks to help you set up your Airbnb for success." />
            {/* breadcrumb area end */}

            {/* blog category area start */}
            <BlogCategory/>
            {/* blog category area end */}

            {/* blog area start */}
            <BlogGridArea/>
            {/* blog area end */}
        </div>
    )
}
