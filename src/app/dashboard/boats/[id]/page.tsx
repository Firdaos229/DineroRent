"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { boatData } from "@/data/boat-data";
import { IBoatRental } from "@/types/boat-d-t";
import { Button } from "@/components/ui/button";
import { use } from "react";

export default function BoatDetailsPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(paramsPromise);

  const boat: IBoatRental | undefined = boatData.find((b) => b.id === id);

  if (!boat) return notFound();

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <div>
        <Link href="/dashboard/boats">
          <Button variant="outline">← Back to Boats</Button>
        </Link>
      </div>

      {/* 🛥️ Title & Location */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{boat.title}</h1>
        <p className="text-muted-foreground text-sm">
          {boat.city}, {boat.country}
        </p>
      </div>

      {/* 🖼️ Thumbnail */}
      {boat.imageUrl && (
        <Image
          src={boat.imageUrl}
          alt={boat.title}
          width={800}
          height={400}
          className="rounded-md w-full object-cover max-h-[400px]"
        />
      )}

      {/* 🖼️ Gallery */}
      {boat.gallery?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {boat.gallery.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`Gallery image ${idx + 1}`}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-40"
            />
          ))}
        </div>
      )}

      {/* 💰 Pricing & 📐 Category */}
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold">Price Per Day</p>
          <p>${boat.pricePerDay.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Category</p>
          <p>{boat.category}</p>
        </div>
        <div>
          <p className="font-semibold">Rating</p>
          <p>
            ⭐ {boat.rating} ({boat.reviewCount ?? 0} reviews)
          </p>
        </div>
      </div>

      {/* 📄 Description */}
      <div>
        <h2 className="text-sm font-semibold mb-1">Description</h2>
        <p className="text-muted-foreground text-sm">{boat.description}</p>
      </div>

      {/* ⚙️ Specs */}
      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h2 className="text-sm font-semibold mb-2">Specifications</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Length: {boat.length} ft</li>
            <li>Max Speed: {boat.maxSpeed} MPH</li>
            <li>Passenger Capacity: {boat.passengerCapacity}</li>
            <li>Beds: {boat.beds}</li>
            <li>Make: {boat.make}</li>
            <li>Engine Model: {boat.engineModel}</li>
            <li>Manufacturer: {boat.manufacturer}</li>
            <li>Hull Material: {boat.hullMaterial}</li>
            <li>Gross Weight: {boat.grossWeight}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-2">Technical Details</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Fuel Type: {boat.fuelType}</li>
            <li>Fuel Capacity: {boat.fuelCapacity}</li>
            <li>Draft: {boat.draft}</li>
            <li>Wishlisted: {boat.isWishlisted ? "Yes" : "No"}</li>
            <li>
              Location: Latitude {boat.location.latitude}, Longitude{" "}
              {boat.location.longitude}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
