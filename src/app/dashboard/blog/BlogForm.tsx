"use client";

import { useState } from "react";
import { IBlog } from "@/types/blog-d-t";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type BlogFormProps = {
  onSave: (blog: IBlog) => void;
  defaultValue?: IBlog;
};

export function BlogForm({ onSave, defaultValue }: BlogFormProps) {
  const [formData, setFormData] = useState<IBlog>(() => ({
    id: defaultValue?.id || Date.now(),
    title: defaultValue?.title || "",
    description: defaultValue?.description || "",
    date: defaultValue?.date || new Date().toISOString().slice(0, 10),
    imgSrc: defaultValue?.imgSrc || "",
    authorImg: defaultValue?.authorImg || "",
    authorName: defaultValue?.authorName || "",
    readTime: defaultValue?.readTime || "",
    video_id: defaultValue?.video_id || "",
    image_slider: defaultValue?.image_slider || [],
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="grid gap-6 px-4 py-6">
      <Label htmlFor="title">Title</Label>
      <Input id="title" value={formData.title} onChange={handleChange} />

      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        value={formData.description}
        onChange={handleChange}
      />

      <Label htmlFor="date">Date</Label>
      <Input
        id="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
      />

      <Label htmlFor="imgSrc">Main Image URL</Label>
      <Input id="imgSrc" value={formData.imgSrc} onChange={handleChange} />

      <Label htmlFor="authorImg">Author Image URL</Label>
      <Input
        id="authorImg"
        value={formData.authorImg}
        onChange={handleChange}
      />

      <Label htmlFor="authorName">Author Name</Label>
      <Input
        id="authorName"
        value={formData.authorName}
        onChange={handleChange}
      />

      <Label htmlFor="readTime">Read Time</Label>
      <Input id="readTime" value={formData.readTime} onChange={handleChange} />

      <Label htmlFor="video_id">YouTube Video ID (optional)</Label>
      <Input id="video_id" value={formData.video_id} onChange={handleChange} />

      <Label htmlFor="image_slider">Image Slider (comma-separated URLs)</Label>
      <Input
        id="image_slider"
        value={(formData.image_slider || []).join(",")}
        onChange={(e) =>
          setFormData({ ...formData, image_slider: e.target.value.split(",") })
        }
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
