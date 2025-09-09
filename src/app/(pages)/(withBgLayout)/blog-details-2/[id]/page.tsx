import { all_blogs } from "@/data/blog-data";
import RelatedBlogs from "@/components/blog/details/related-blogs";
import BreadcrumbFive from "@/components/breadcrumb/breadcrumb-five";
import BlogDetailsAreaTwo from "@/components/blog/details/blog-details-area-2";

type IParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: IParams}) {
    const { id } = await params;
    const blog = all_blogs.find((item) => item.id == Number(id));
    return {
        title: blog?.title ? blog.title : "Blog Details",
    };
}

export default async function BlogDetailsPageTwo({ params }: { params: IParams}) {
    const { id } = await params;
    const blog = all_blogs.find((blog) => blog.id.toString() === id);
    return (
        <main>
            {blog ? (
                <>
                    {/* breadcrumb area start */}
                    <BreadcrumbFive title={blog.title} authorName={blog.authorName} date={blog.date} authorImg={blog.authorImg} />
                    {/* breadcrumb area end */}

                    {/* blog details area start */}
                    <BlogDetailsAreaTwo blog={blog} />
                    {/* blog details area end */}

                    {/* related blogs area start */}
                    <RelatedBlogs />
                    {/* related blogs area end */}
                </>
            ) : (
                <div className="text-center mt-100 mb-80">
                    No blog found with id: {id}
                </div>
            )}
        </main>
    );
}
