"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IHotelRoom } from "@/types/hotel-d-t";

type ApartmentFormProps = {
  onSave: (apartment: IHotelRoom) => void;
  defaultValue?: IHotelRoom;
};
type ApartmentFormData = {
  name: string;
  address: string;
  city: string;
  category: string;
  countryCode: string;
  highRate: string;
  lowRate: string;
  sqFt: string;
  beds: string;
  bathrooms: string;
  adults: string;
  children: string;
  shortDescription: string;
  overview: string;
  latitude: string;
  longitude: string;
  destinationName: string;
  destinationId: string;
  propertyCategory: string;
  thumbNailUrl: string;
  gallery: File[];
  video: File | null;
};

export function ApartmentForm({ onSave, defaultValue }: ApartmentFormProps) {
  const [formData, setFormData] = useState<ApartmentFormData>(() => ({
    name: defaultValue?.name || "",
    address: defaultValue?.address || "",
    city: defaultValue?.city || "",
    category: defaultValue?.category || "",
    countryCode: defaultValue?.countryCode || "",
    highRate: defaultValue?.highRate?.toString() || "",
    lowRate: defaultValue?.lowRate?.toString() || "",
    sqFt: defaultValue?.sqFt?.toString() || "",
    beds: defaultValue?.beds?.toString() || "",
    bathrooms: defaultValue?.bathrooms?.toString() || "",
    adults: defaultValue?.adults?.toString() || "",
    children: defaultValue?.children?.toString() || "",
    shortDescription: defaultValue?.shortDescription || "",
    overview: defaultValue?.overview || "",
    latitude: defaultValue?.location?.latitude?.toString() || "",
    longitude: defaultValue?.location?.longitude?.toString() || "",
    destinationName: defaultValue?.destination?.name || "",
    destinationId: defaultValue?.destination?._id || "",
    propertyCategory: defaultValue?.propertyCategory?.toString() || "",
    thumbNailUrl: defaultValue?.thumbNailUrl || "",
    gallery: [],
    video: null,
  }));

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (key === "gallery") {
      setFormData((prev) => ({ ...prev, gallery: Array.from(files) }));
    } else if (key === "video") {
      setFormData((prev) => ({ ...prev, video: files[0] }));
    } else if (key === "thumbNailUrl") {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          thumbNailUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = () => {
    const newApartment: IHotelRoom = {
      id: defaultValue?.id || crypto.randomUUID(),
      name: formData.name,
      address: formData.address,
      city: formData.city,
      category: formData.category,
      countryCode: formData.countryCode,
      highRate: parseFloat(formData.highRate),
      lowRate: parseFloat(formData.lowRate),
      sqFt: parseInt(formData.sqFt),
      beds: parseInt(formData.beds),
      bathrooms: parseInt(formData.bathrooms),
      adults: parseInt(formData.adults),
      children: parseInt(formData.children),
      shortDescription: formData.shortDescription,
      overview: formData.overview,
      propertyCategory: parseInt(formData.propertyCategory),
      thumbNailUrl: formData.thumbNailUrl,
      gallery: [],
      video: null,
      location: {
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
      },
      destination: {
        _id: formData.destinationId,
        name: formData.destinationName,
      },
      amenities: [],
    };

    onSave(newApartment);
  };

  return (
    <div className="grid gap-6 px-4 py-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" onChange={handleInputChange} value={formData.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            onChange={handleInputChange}
            value={formData.address}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" onChange={handleInputChange} value={formData.city} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            onChange={handleInputChange}
            value={formData.category}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="countryCode">Country Code</Label>
          <Input
            id="countryCode"
            onChange={handleInputChange}
            value={formData.countryCode}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="propertyCategory">Property Category</Label>
          <Input
            id="propertyCategory"
            type="number"
            onChange={handleInputChange}
            value={formData.propertyCategory}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="lowRate">Low Rate</Label>
          <Input
            id="lowRate"
            type="number"
            onChange={handleInputChange}
            value={formData.lowRate}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="highRate">High Rate</Label>
          <Input
            id="highRate"
            type="number"
            onChange={handleInputChange}
            value={formData.highRate}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sqFt">Square Feet</Label>
          <Input
            id="sqFt"
            type="number"
            onChange={handleInputChange}
            value={formData.sqFt}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="beds">Beds</Label>
          <Input
            id="beds"
            type="number"
            onChange={handleInputChange}
            value={formData.beds}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Input
            id="bathrooms"
            type="number"
            onChange={handleInputChange}
            value={formData.bathrooms}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adults">Adults</Label>
          <Input
            id="adults"
            type="number"
            onChange={handleInputChange}
            value={formData.adults}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="children">Children</Label>
          <Input
            id="children"
            type="number"
            onChange={handleInputChange}
            value={formData.children}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          onChange={handleInputChange}
          value={formData.overview}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="shortDescription">Short Description</Label>
        <Textarea
          id="shortDescription"
          onChange={handleInputChange}
          value={formData.shortDescription}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            id="latitude"
            onChange={handleInputChange}
            value={formData.latitude}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            id="longitude"
            onChange={handleInputChange}
            value={formData.longitude}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="destinationId">Destination ID</Label>
          <Input
            id="destinationId"
            onChange={handleInputChange}
            value={formData.destinationId}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="destinationName">Destination Name</Label>
          <Input
            id="destinationName"
            onChange={handleInputChange}
            value={formData.destinationName}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="thumbNailUrl">Thumbnail URL</Label>
        <Input
          id="thumbNailUrl"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "thumbNailUrl")}
        />
        {/* Optionnel : Aperçu de l’image actuelle */}
        {formData.thumbNailUrl && (
          <img
            src={formData.thumbNailUrl}
            alt="Thumbnail Preview"
            className="mt-2 max-h-32 object-cover rounded"
          />
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gallery">Gallery Images</Label>
        <Input
          id="gallery"
          type="file"
          multiple
          onChange={(e) => handleFileChange(e, "gallery")}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="video">Video Upload</Label>
        <Input
          id="video"
          type="file"
          accept="video/*"
          onChange={(e) => handleFileChange(e, "video")}
        />
      </div>

      <div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
