"use client";

import { useState } from "react";
import { ILegalDocument } from "@/types/legal-d-t";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  defaultValue?: ILegalDocument;
  onSave: (doc: ILegalDocument) => void;
};

const categories: ILegalDocument["category"][] = [
  "Privacy",
  "Terms",
  "Refund",
  "Vendor",
  "Compliance",
  "Disclaimer",
  "Other",
];

export function LegalForm({ defaultValue, onSave }: Props) {
  const [formData, setFormData] = useState<ILegalDocument>(() => ({
    id: defaultValue?.id || Date.now(),
    title: defaultValue?.title || "",
    content: defaultValue?.content || "",
    category: defaultValue?.category || "Other",
    lastUpdated: new Date().toISOString().split("T")[0],
  }));

  const handleSubmit = () => {
    onSave({ ...formData });
  };

  return (
    <div className="grid gap-4 px-4 py-6">
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <Label htmlFor="category">Category</Label>
      <Select
        value={formData.category}
        onValueChange={(value: ILegalDocument["category"]) =>
          setFormData((prev) => ({ ...prev, category: value }))
        }
      >
        <SelectTrigger id="category">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        value={formData.content}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, content: e.target.value }))
        }
        rows={10}
        placeholder="Write your legal text here. HTML or Markdown allowed."
      />

      <Button onClick={handleSubmit}>Save</Button>
    </div>
  );
}
