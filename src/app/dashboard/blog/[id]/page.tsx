"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { all_blogs } from "@/data/blog-data";
import { IBlog } from "@/types/blog-d-t";

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog: IBlog | undefined = all_blogs.find(
    (item) => item.id === parseInt(params.id)
  );

  if (!blog) return notFound();

  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      {/* 🔙 Back Button */}
      <div>
        <Link href="/dashboard/blogs">
          <Button variant="outline">← Back to Blogs</Button>
        </Link>
      </div>

      {/* 📝 Title and Metadata */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-sm text-muted-foreground">
          {blog.date} · By {blog.authorName} · {blog.readTime}
        </p>
      </div>

      {/* 📸 Main Image */}
      {blog.imgSrc && (
        <Image
          src={blog.imgSrc}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-md object-cover w-full max-h-[400px]"
        />
      )}

      {/* 🧑‍🎨 Author Info */}
      <div className="flex items-center gap-3 mt-4">
        {blog.authorImg && (
          <Image
            src={blog.authorImg}
            alt={blog.authorName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        )}
        <span className="text-sm text-muted-foreground">{blog.authorName}</span>
      </div>

      {/* 📝 Description */}
      <div>
        <p className="text-sm text-muted-foreground whitespace-pre-line">
          {blog.description}
        </p>
      </div>

      {/* 🎥 YouTube Video (optional) */}
      {blog.video_id && (
        <div className="aspect-video mt-6">
          <iframe
            className="w-full h-full rounded-md"
            src={`https://www.youtube.com/embed/${blog.video_id}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* 🖼️ Image Slider (optional) */}
      {blog.image_slider && blog.image_slider.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {blog.image_slider.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-40"
            />
          ))}
        </div>
      )}
    </div>
  );
}
