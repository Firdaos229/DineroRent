// import Image from "next/image";
// import { all_blogs } from "@/data/blog-data";
// import BreadcrumbFour from "@/components/breadcrumb/breadcrumb-four";
// import big_img from "@/assets/img/blog/blog-details/bg.jpg";
// import BlogDetailsArea from "@/components/blog/details/blog-details-area";
// import RelatedBlogs from "@/components/blog/details/related-blogs";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// // ✅ Fonction metadata (optionnelle, mais bien typée)
// export async function generateMetadata({ params }: PageProps) {
//   const blog = all_blogs.find((item) => item.id === Number(params.id));
//   return {
//     title: blog?.title ?? "Blog Details",
//   };
// }

// // ✅ Composant de page principale — OK avec App Router
// export default async function BlogDetailsPage({ params }: PageProps) {
//   const blog = all_blogs.find((blog) => blog.id.toString() === params.id);

//   return (
//     <main>
//       {blog ? (
//         <>
//           {/* Breadcrumb */}
//           <BreadcrumbFour
//             title={blog.title}
//             authorName={blog.authorName}
//             date={blog.date}
//             authorImg={blog.authorImg}
//           />

//           {/* Image principale */}
//           <div className="tp-postbox-big-thumb jarallax fix p-relative">
//             <Image
//               className="w-100 jarallax-img"
//               src={big_img}
//               alt="thumb"
//               style={{ height: "auto" }}
//             />
//           </div>

//           {/* Détails du blog */}
//           <BlogDetailsArea blog={blog} />

//           {/* Articles similaires */}
//           <RelatedBlogs />
//         </>
//       ) : (
//         <div className="text-center mt-100 mb-80">
//           No blog found with id: {params.id}
//         </div>
//       )}
//     </main>
//   );
// }
// src/app/blog-details/[id]/page.tsx

export default function BlogDetailsPage() {
  return (
    <main>
      <h1>Blog ID: bgid</h1>
      <p>This is a simple blog details page.</p>
    </main>
  );
}
