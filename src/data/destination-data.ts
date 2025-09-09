import { IDestination } from "@/types/destination-d-t";

export const destinationData: IDestination[] = [
  {
    id: "dest-1",
    name: "Paris",
    description: "The city of lights.",
    image: "/images/destinations/paris.jpg",
    hotels: [],            // ajouter cette propriété vide pour respecter le type
    avgPropertyCategory: null, // ajouter aussi pour respecter le type
  },
  {
    id: "dest-2",
    name: "New York",
    description: "The city that never sleeps.",
    image: "/images/destinations/newyork.jpg",
    hotels: [],
    avgPropertyCategory: null,
  },
  // Ajoute autant que tu veux
];
