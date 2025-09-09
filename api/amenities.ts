// import { IAmenities } from "@/types/amenities-d-t";
// import { IDBResponseDT } from "@/types/db-response";

// export async function getAmenities() {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/amenities`);
//     const data:IDBResponseDT<IAmenities[]> = await response.json();
//     return data.data;
// }


import { amenities } from "@/data/amenities"; // ou le chemin exact vers ton fichier

export async function getAmenities() {
  return amenities;
}
