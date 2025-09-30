"use client";

import { useState } from "react";
import { IHeroBanner, IOfferAd } from "@/types/ads-d-t";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Props =
  | {
      type: "hero";
      defaultValue: IHeroBanner;
      onSave: (hero: IHeroBanner) => void;
    }
  | {
      type: "offer";
      defaultValue?: IOfferAd;
      onSave: (offer: IOfferAd) => void;
    };

export function AdsForm(props: Props) {
  if (props.type === "hero") {
    const [formData, setFormData] = useState<IHeroBanner>(props.defaultValue);

    return (
      <div className="grid gap-6 px-4 py-6">
        <Label htmlFor="videoUrl">Video URL</Label>
        <Input
          id="videoUrl"
          value={formData.videoUrl}
          onChange={(e) =>
            setFormData({ ...formData, videoUrl: e.target.value })
          }
        />

        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />

        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
        />

        <Button onClick={() => props.onSave(formData)}>Save Hero Banner</Button>
      </div>
    );
  }

  // OFFER AD FORM
  const [formData, setFormData] = useState<IOfferAd>(() => ({
    id: props.defaultValue?.id || Date.now(),
    imgSrc: props.defaultValue?.imgSrc || "",
    preLabel: props.defaultValue?.preLabel || "",
    title: props.defaultValue?.title || "",
    discount: props.defaultValue?.discount || "",
    delay: props.defaultValue?.delay || ".3s",
  }));

  const [preview, setPreview] = useState<string>(formData.imgSrc);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setFormData((prev) => ({ ...prev, imgSrc: url }));
    }
  };

  return (
    <div className="grid gap-6 px-4 py-6">
      <Label htmlFor="preLabel">Pre Label</Label>
      <Input
        id="preLabel"
        value={formData.preLabel}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, preLabel: e.target.value }))
        }
      />

      <Label htmlFor="title">Title (HTML allowed)</Label>
      <Textarea
        id="title"
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <Label htmlFor="discount">Discount</Label>
      <Input
        id="discount"
        value={formData.discount}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, discount: e.target.value }))
        }
      />

      <Label htmlFor="imgUpload">Image</Label>
      <Input type="file" accept="image/*" onChange={handleImageUpload} />
      {preview && <img src={preview} alt="preview" className="w-32 mt-2" />}

      <Button onClick={() => props.onSave(formData)}>Save Offer</Button>
    </div>
  );
}
