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
  // Déclarer tous les états à la racine du composant
  const isHero = props.type === "hero";

  const [heroFormData, setHeroFormData] = useState<IHeroBanner>(
    props.type === "hero"
      ? props.defaultValue
      : { videoUrl: "", title: "", subtitle: "" }
  );

  const [offerFormData, setOfferFormData] = useState<IOfferAd>(() => ({
    id:
      props.type === "offer"
        ? props.defaultValue?.id || Date.now()
        : Date.now(),
    imgSrc: props.type === "offer" ? props.defaultValue?.imgSrc || "" : "",
    preLabel: props.type === "offer" ? props.defaultValue?.preLabel || "" : "",
    title: props.type === "offer" ? props.defaultValue?.title || "" : "",
    discount: props.type === "offer" ? props.defaultValue?.discount || "" : "",
    delay: props.type === "offer" ? props.defaultValue?.delay || ".3s" : ".3s",
  }));

  const [preview, setPreview] = useState<string>(
    props.type === "offer" ? props.defaultValue?.imgSrc || "" : ""
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setOfferFormData((prev) => ({ ...prev, imgSrc: url }));
    }
  };

  // Affichage du formulaire HERO
  if (isHero) {
    return (
      <div className="grid gap-6 px-4 py-6">
        <Label htmlFor="videoUrl">Video URL</Label>
        <Input
          id="videoUrl"
          value={heroFormData.videoUrl}
          onChange={(e) =>
            setHeroFormData({ ...heroFormData, videoUrl: e.target.value })
          }
        />

        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={heroFormData.title}
          onChange={(e) =>
            setHeroFormData({ ...heroFormData, title: e.target.value })
          }
        />

        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          value={heroFormData.subtitle}
          onChange={(e) =>
            setHeroFormData({ ...heroFormData, subtitle: e.target.value })
          }
        />

        <Button onClick={() => props.onSave(heroFormData)}>
          Save Hero Banner
        </Button>
      </div>
    );
  }

  // Affichage du formulaire OFFER
  return (
    <div className="grid gap-6 px-4 py-6">
      <Label htmlFor="preLabel">Pre Label</Label>
      <Input
        id="preLabel"
        value={offerFormData.preLabel}
        onChange={(e) =>
          setOfferFormData((prev) => ({
            ...prev,
            preLabel: e.target.value,
          }))
        }
      />

      <Label htmlFor="title">Title (HTML allowed)</Label>
      <Textarea
        id="title"
        value={offerFormData.title}
        onChange={(e) =>
          setOfferFormData((prev) => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />

      <Label htmlFor="discount">Discount</Label>
      <Input
        id="discount"
        value={offerFormData.discount}
        onChange={(e) =>
          setOfferFormData((prev) => ({
            ...prev,
            discount: e.target.value,
          }))
        }
      />

      <Label htmlFor="imgUpload">Image</Label>
      <Input type="file" accept="image/*" onChange={handleImageUpload} />
      {preview && <img src={preview} alt="preview" className="w-32 mt-2" />}

      <Button onClick={() => props.onSave(offerFormData)}>Save Offer</Button>
    </div>
  );
}
