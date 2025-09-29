import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { carData } from "@/data/car-data";
import { ICarRental } from "@/types/car-d-t";
import { Button } from "@/components/ui/button";

export default function CarDetailsPage({ params }: { params: { id: string } }) {
  const car: ICarRental | undefined = carData.find((c) => c.id === params.id);

  if (!car) return notFound();

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      {/* 🔙 Back Button */}
      <div>
        <Link href="/dashboard/cars">
          <Button variant="outline" className="mb-4">
            ← Back to Cars
          </Button>
        </Link>
      </div>

      {/* 🚗 Title */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{car.title}</h1>
        <p className="text-muted-foreground text-sm">
          {car.make} {car.model} • {car.year}
        </p>
      </div>

      {/* 🖼️ Main Image */}
      {car.imageUrl && (
        <Image
          src={car.imageUrl}
          alt={car.title}
          width={800}
          height={400}
          className="rounded-sm w-full object-cover max-h-[400px]"
        />
      )}

      {/* 🖼️ Gallery */}
      {car.gallery?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {car.gallery.map((img, idx) => (
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

      {/* 💰 Pricing & Specs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold">Price per Day</p>
          <p>₦{car.pricePerDay.toLocaleString()}</p>
        </div>
        <div>
          <p className="font-semibold">Fuel Type</p>
          <p>{car.fuelType}</p>
        </div>
        <div>
          <p className="font-semibold">Transmission</p>
          <p>{car.transmission}</p>
        </div>
        <div>
          <p className="font-semibold">Condition</p>
          <p>{car.condition}</p>
        </div>
        <div>
          <p className="font-semibold">Drive</p>
          <p>{car.drive}</p>
        </div>
        <div>
          <p className="font-semibold">Mileage</p>
          <p>{car.mileage.toLocaleString()} km</p>
        </div>
      </div>

      {/* 🧾 Description */}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h2 className="text-sm font-semibold mb-1">Description</h2>
          <p className="text-muted-foreground">{car.description}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-1">Rating</h2>
          <p>
            ⭐ {car.rating} / 5 ({car.reviewCount} reviews)
          </p>
        </div>
      </div>

      {/* 🏙️ Location */}
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h2 className="text-sm font-semibold mb-1">City / Country</h2>
          <p>
            {car.city}, {car.country}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold mb-1">Coordinates</h2>
          <p>
            Latitude: {car.location.latitude}, Longitude:{" "}
            {car.location.longitude}
          </p>
        </div>
      </div>

      {/* 🛠️ Technical Info */}
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold">VIN</p>
          <p>{car.vin || "N/A"}</p>
        </div>
        <div>
          <p className="font-semibold">Horsepower</p>
          <p>{car.horsepower} HP</p>
        </div>
        <div>
          <p className="font-semibold">Warranty</p>
          <p>{car.warranty ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
}
