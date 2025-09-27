import { Booking } from "@/types/booking";


export const bookings: Booking[] = [
  {
    id: "B001",
    type: "apartment",
    date: "2025-09-26",
    price: 120,
    status: "Confirmed",
  },
  {
    id: "B002",
    type: "car",
    date: "2025-09-25",
    price: 80,
    status: "Pending",
  },
  {
    id: "B003",
    type: "boat",
    date: "2025-09-24",
    price: 250,
    status: "Cancelled",
  },
];
