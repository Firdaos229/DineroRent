"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IBoatRental } from "@/types/boat-d-t";

type Props = {
  onSave: (boat: IBoatRental) => void;
  defaultValue?: IBoatRental;
};

export function BoatForm({ onSave, defaultValue }: Props) {
  const [formData, setFormData] = useState<IBoatRental>(() => ({
    id: defaultValue?.id || crypto.randomUUID(),
    title: defaultValue?.title || "",
    description: defaultValue?.description || "",
    rating: defaultValue?.rating || 0,
    reviewCount: defaultValue?.reviewCount || 0,
    city: defaultValue?.city || "",
    country: defaultValue?.country || "",
    location: defaultValue?.location || { latitude: 0, longitude: 0 },
    isWishlisted: defaultValue?.isWishlisted || false,

    length: defaultValue?.length || 0,
    maxSpeed: defaultValue?.maxSpeed || 0,
    passengerCapacity: defaultValue?.passengerCapacity || 0,
    beds: defaultValue?.beds || 0,
    make: defaultValue?.make || "",
    engineModel: defaultValue?.engineModel || "",
    grossWeight: defaultValue?.grossWeight || "",
    hullMaterial: defaultValue?.hullMaterial || "",
    draft: defaultValue?.draft || "",
    fuelCapacity: defaultValue?.fuelCapacity || "",
    fuelType: defaultValue?.fuelType || "",
    manufacturer: defaultValue?.manufacturer || "",
    pricePerDay: defaultValue?.pricePerDay || 0,

    imageUrl: defaultValue?.imageUrl || "",
    gallery: defaultValue?.gallery || [],

    category: defaultValue?.category || "Boat",
  }));

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "imageUrl" | "gallery"
  ) => {
    const files = e.target.files;
    if (!files) return;

    if (field === "imageUrl") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData((prev) => ({ ...prev, imageUrl }));
      }
    }

    if (field === "gallery") {
      const galleryUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData((prev) => ({ ...prev, gallery: galleryUrls }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: [
        "pricePerDay",
        "length",
        "maxSpeed",
        "passengerCapacity",
        "beds",
        "rating",
        "reviewCount",
      ].includes(id)
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="grid gap-6 px-4 py-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Boat Name</Label>
          <Input id="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="make">Make</Label>
          <Input id="make" value={formData.make} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="engineModel">Engine Model</Label>
          <Input
            id="engineModel"
            value={formData.engineModel}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="manufacturer">Manufacturer</Label>
          <Input
            id="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Input
            id="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="hullMaterial">Hull Material</Label>
          <Input
            id="hullMaterial"
            value={formData.hullMaterial}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="pricePerDay">Price Per Day</Label>
          <Input
            type="number"
            id="pricePerDay"
            value={formData.pricePerDay}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="passengerCapacity">Passenger Capacity</Label>
          <Input
            type="number"
            id="passengerCapacity"
            value={formData.passengerCapacity}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="beds">Beds</Label>
          <Input
            type="number"
            id="beds"
            value={formData.beds}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="length">Length (ft)</Label>
          <Input
            type="number"
            id="length"
            value={formData.length}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="maxSpeed">Max Speed (MPH)</Label>
          <Input
            type="number"
            id="maxSpeed"
            value={formData.maxSpeed}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="grossWeight">Gross Weight</Label>
          <Input
            id="grossWeight"
            value={formData.grossWeight}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="fuelCapacity">Fuel Capacity</Label>
          <Input
            id="fuelCapacity"
            value={formData.fuelCapacity}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="draft">Draft</Label>
          <Input id="draft" value={formData.draft} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={formData.city} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            type="number"
            id="latitude"
            value={formData.location.latitude}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                location: {
                  ...prev.location,
                  latitude: parseFloat(e.target.value),
                },
              }))
            }
          />
        </div>
        <div>
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            type="number"
            id="longitude"
            value={formData.location.longitude}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                location: {
                  ...prev.location,
                  longitude: parseFloat(e.target.value),
                },
              }))
            }
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="imageUrl">Image</Label>
        <Input
          id="imageUrl"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "imageUrl")}
        />
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt="Preview"
            className="mt-2 max-h-32 rounded object-cover"
          />
        )}
      </div>

      <div>
        <Label htmlFor="gallery">Gallery Images</Label>
        <Input
          id="gallery"
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileChange(e, "gallery")}
        />
        {formData.gallery.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {formData.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="max-h-24 object-cover rounded"
              />
            ))}
          </div>
        )}
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}
