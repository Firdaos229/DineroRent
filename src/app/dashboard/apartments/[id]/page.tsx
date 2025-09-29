import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IAmenities } from "@/types/amenities-d-t";
import { IHotelRoom } from "@/types/hotel-d-t";
import { hotelData } from "@/data/hotel-data";
import { Button } from "@/components/ui/button";

export default function ApartmentDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const apartment: IHotelRoom | undefined = hotelData.find(
    (apt) => apt.id === params.id
  );

  if (!apartment) return notFound();

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      {/* 🔙 Back Button */}
      <div>
        <Link href="/dashboard/apartments">
          <Button variant="outline" className="mb-4">
            ← Back to Apartments
          </Button>
        </Link>
      </div>

      {/* 🏠 Title & Address */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{apartment.name}</h1>
        <p className="text-muted-foreground text-sm">
          {apartment.address}, {apartment.city}, {apartment.countryCode}
        </p>
      </div>

      {/* 🖼️ Thumbnail */}
      {apartment.thumbNailUrl && (
        <Image
          src={apartment.thumbNailUrl}
          alt={apartment.name}
          width={800}
          height={400}
          className="rounded-sm w-full object-cover max-h-[400px]"
        />
      )}

      {/* 🖼️ Gallery */}
      {apartment.gallery?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {apartment.gallery.map((img, idx) => (
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

      {/* 💰 Pricing & 📐 Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold">Price</p>
          <p>
            ₦{apartment.lowRate.toLocaleString()} - ₦
            {apartment.highRate.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="font-semibold">Category</p>
          <p>{apartment.category}</p>
        </div>
        <div>
          <p className="font-semibold">Size</p>
          <p>{apartment.sqFt} sq ft</p>
        </div>
      </div>

      {/* 📄 Overview & Short Description */}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h2 className="text-sm font-semibold mb-1">Overview</h2>
          <p className="text-muted-foreground">{apartment.overview}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-1">Short Description</h2>
          <p className="text-muted-foreground">{apartment.shortDescription}</p>
        </div>
      </div>

      {/* 🛏️ Room Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>🛏️ Beds: {apartment.beds}</div>
        <div>🛁 Bathrooms: {apartment.bathrooms}</div>
        <div>👨‍👩‍👧‍👦 Adults: {apartment.adults}</div>
        <div>🧒 Children: {apartment.children}</div>
      </div>

      {/* ✅ Amenities */}
      <div>
        <h2 className="text-sm font-semibold mb-2">Amenities</h2>
        {apartment.amenities.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {apartment.amenities.map((a: IAmenities, idx) => (
              <li key={idx}>{a.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No amenities listed.</p>
        )}
      </div>

      {/* 📍 Destination & Location */}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h2 className="text-sm font-semibold mb-1">Destination</h2>
          <p>{apartment.destination?.name ?? "Not specified"}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-1">Location</h2>
          <p>
            Latitude: {apartment.location?.latitude ?? "N/A"}, Longitude:{" "}
            {apartment.location?.longitude ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
