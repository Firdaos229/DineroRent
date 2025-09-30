"use client";

import { useState } from "react";
import { ReusableDataTable } from "@/components/ui/reusable-data-table";
import { ReusableSheet } from "@/components/ui/reusable-sheet";
import { blog_grid_data } from "@/data/blog-data";
import { blogColumns } from "@/features/columns/blog.columns";
import { IBlog } from "@/types/blog-d-t";
import { BlogForm } from "./BlogForm";
import { useDeleteHandler } from "@/hooks/useDeleteHandler";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>(blog_grid_data);
  const [editBlog, setEditBlog] = useState<IBlog | null>(null);
  const router = useRouter();
  const { handleDelete } = useDeleteHandler<IBlog>(blogs);

  const handleSaveBlog = (blog: IBlog) => {
    if (editBlog) {
      setBlogs((prev) => prev.map((b) => (b.id === blog.id ? blog : b)));
      setEditBlog(null);
    } else {
      setBlogs((prev) => [...prev, blog]);
    }
    setIsSheetOpen(false);
  };

  return (
    <>
      <ReusableDataTable
        data={blogs}
        columns={blogColumns}
        addLabel="Add Blog"
        onAdd={() => setIsSheetOpen(true)}
        onEdit={(row) => {
          setEditBlog(row);
          setIsSheetOpen(true);
        }}
        onDelete={handleDelete}
        onView={(row) => router.push(`/dashboard/blogs/${row.id}`)}
      />

      <ReusableSheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) setEditBlog(null);
        }}
        title={editBlog ? "Edit Blog" : "Add Blog"}
        description={
          editBlog
            ? "Update the blog post details below."
            : "Fill in the blog details below."
        }
      >
        <BlogForm
          onSave={handleSaveBlog}
          defaultValue={editBlog || undefined}
        />
      </ReusableSheet>
    </>
  );
}
