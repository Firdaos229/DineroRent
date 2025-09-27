import { carData } from "@/data/car-data";
import { ICarRental } from "@/types/car-d-t";

// MOCK version — pas de fetch
export async function getAllCars(): Promise<ICarRental[]> {
  return carData;
}

export async function getElectricCars(): Promise<ICarRental[]> {
  return carData.filter((car) => car.fuelType.toLowerCase() === "electric");
}

export async function getLuxuryCars(): Promise<ICarRental[]> {
  return carData.filter((car) => car.pricePerDay > 600);
}

export async function getCityCars(): Promise<ICarRental[]> {
  return carData.filter((car) =>
    ["Lagos", "Paris", "San Francisco"].includes(car.city)
  );
}

export async function getSingleCar(id: string): Promise<ICarRental | undefined> {
  return carData.find((car) => car.id === id);
}
