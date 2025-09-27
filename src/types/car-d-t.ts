// types/car-d-t.ts
export type ICarRental = {
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
  pricePerDay: number;
  mileage: number;
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic";
  year: number;
  make: string;
  model: string;
  version: string;
  horsepower: number;
  vin: string;
  condition: "New" | "Used";
  drive: "Front" | "Rear" | "All";
  warranty: boolean;
  imageUrl: string;
  gallery: string[];
};
