"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ICarRental } from "@/types/car-d-t";

type Props = {
  onSave: (car: ICarRental) => void;
  defaultValue?: ICarRental;
};

export function CarForm({ onSave, defaultValue }: Props) {
  const [formData, setFormData] = useState<ICarRental>(() => ({
    id: defaultValue?.id || crypto.randomUUID(),
    title: defaultValue?.title || "",
    description: defaultValue?.description || "",
    rating: defaultValue?.rating || 0,
    reviewCount: defaultValue?.reviewCount || 0,
    city: defaultValue?.city || "",
    country: defaultValue?.country || "",
    location: defaultValue?.location || { latitude: 0, longitude: 0 },
    isWishlisted: defaultValue?.isWishlisted || false,
    pricePerDay: defaultValue?.pricePerDay || 0,
    mileage: defaultValue?.mileage || 0,
    fuelType: defaultValue?.fuelType || "Petrol",
    transmission: defaultValue?.transmission || "Automatic",
    year: defaultValue?.year || new Date().getFullYear(),
    make: defaultValue?.make || "",
    model: defaultValue?.model || "",
    version: defaultValue?.version || "",
    horsepower: defaultValue?.horsepower || 0,
    vin: defaultValue?.vin || "",
    condition: defaultValue?.condition || "Used",
    drive: defaultValue?.drive || "Front",
    warranty: defaultValue?.warranty || false,
    imageUrl: defaultValue?.imageUrl || "",
    gallery: defaultValue?.gallery || [],
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
      [id]:
        id === "pricePerDay" ||
        id === "mileage" ||
        id === "horsepower" ||
        id === "year"
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
          <Label htmlFor="title">Car name</Label>
          <Input id="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="make">Make</Label>
          <Input id="make" value={formData.make} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input id="model" value={formData.model} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="version">Version</Label>
          <Input
            id="version"
            value={formData.version}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input
            type="number"
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="pricePerDay">Price/Day</Label>
          <Input
            type="number"
            id="pricePerDay"
            value={formData.pricePerDay}
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
          <Label htmlFor="transmission">Transmission</Label>
          <Input
            id="transmission"
            value={formData.transmission}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
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
          <Label htmlFor="horsepower">Horsepower</Label>
          <Input
            type="number"
            id="horsepower"
            value={formData.horsepower}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="mileage">Mileage</Label>
          <Input
            type="number"
            id="mileage"
            value={formData.mileage}
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
        {formData.gallery.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-2">
            {formData.gallery.map((url, idx) => (
              <img
                key={idx}
                src={url}
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
