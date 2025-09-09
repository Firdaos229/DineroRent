import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import BlogStandardArea from "@/components/blog/blog-standard-area";


export const metadata: Metadata = {
    title: "Blog Sidebar Page - Housey",
}

export default function BlogGridPage() {
    return (
        <div>
            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="News & Insights" title="News & Insights" />
            {/* breadcrumb area end */}

            {/* blog sidebar area start */}
            <BlogStandardArea/>
            {/* blog sidebar area end */}
        </div>
    )
}
