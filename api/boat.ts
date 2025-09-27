import { boatData } from "@/data/boat-data";
import { IBoatRental } from "@/types/boat-d-t";

// MOCK version — pas de fetch
export async function getAllBoats(): Promise<IBoatRental[]> {
  return boatData;
}

export async function getLuxuryBoats(): Promise<IBoatRental[]> {
  return boatData.filter((boat) => boat.category === "Yacht");
}

export async function getSailboats(): Promise<IBoatRental[]> {
  return boatData.filter((boat) => boat.category === "Sailboat");
}

export async function getSingleBoat(id: string): Promise<IBoatRental | undefined> {
  return boatData.find((boat) => boat.id === id);
}
