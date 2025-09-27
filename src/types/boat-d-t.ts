// src/types/boat-d-t.ts

export type IBoatRental = {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  city: string;
  country: string;
  location: {
    latitude: number;
    longitude: number;
  };
  isWishlisted: boolean;

  // Specs
  length: number; // en pieds
  maxSpeed: number; // en MPH
  passengerCapacity: number;
  beds: number;
  make: string;
  engineModel: string;
  grossWeight: string;
  hullMaterial: string;
  draft: string;
  fuelCapacity: string;
  fuelType: string;
  manufacturer: string;
  pricePerDay: number;
  // Média
  imageUrl: string;
  gallery: string[];

  // for filtre
  category: "Boat" | "Canoe" | "Sailboat" | "Yacht";
};
