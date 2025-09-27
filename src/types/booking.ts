

export type Booking = {
  id: string;
  type: "apartment" | "shortlet" | "car" | "boat";
  date: string;
  price: number;
  status: "Confirmed" | "Pending" | "Cancelled";
};
