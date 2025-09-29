// app/dashboard/faqs/FaqForm.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IFaq } from "@/types/faq-d-t";

type FaqFormProps = {
  onSave: (faq: IFaq & { category: string }) => void;
  defaultValue?: IFaq & { category: string };
};

export function FaqForm({ onSave, defaultValue }: FaqFormProps) {
  const [title, setTitle] = useState(defaultValue?.title || "");
  const [content, setContent] = useState(defaultValue?.content || "");
  const [category, setCategory] = useState(defaultValue?.category || "");

  const handleSubmit = () => {
    const newFaq: IFaq & { category: string } = {
      id: defaultValue?.id || Date.now(),
      title,
      content,
      target: defaultValue?.target || "",
      parentId: defaultValue?.parentId || "",
      isExpanded: defaultValue?.isExpanded || false,
      category,
    };

    onSave(newFaq);
  };

  return (
    <div className="space-y-4 px-4 py-6">
      <div className="grid gap-2">
        <Label htmlFor="title">Question</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="content">Answer</Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
