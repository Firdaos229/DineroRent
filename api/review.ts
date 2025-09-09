// import { IDBResponseDT } from "@/types/db-response";
// import { IResReview } from "@/types/review-d-t";

// // get all reviews
// export async function getReviewById(hotelId: string) {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/${hotelId}`,{
//     next:{
//         tags: ['reviews']
//     }
//   });
//   const res: IDBResponseDT<IResReview[]> = await response.json();
//   if(!res.success) return [];
//   return res.data;
// }


import { IResReview } from "@/types/review-d-t";

const mockReviews: IResReview[] = [
  {
    id: "r1",
    hotelId: "hotel1",
    comment: "Super séjour !",
    ratings: {
      staff: 5,
      cleanliness: 5,
      checkIn: 4,
    },
    username: "Alice",
    avgRating: "4.7",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "r2",
    hotelId: "hotel2",
    comment: "Hôtel très confortable.",
    ratings: {
      staff: 4,
      cleanliness: 4,
      checkIn: 4,
    },
    username: "Bob",
    avgRating: "4.0",
    createdAt: "2024-02-20T14:30:00Z"
  },
  {
    id: "r3",
    hotelId: "hotel1",
    comment: "Personnel sympathique et bon service.",
    ratings: {
      staff: 5,
      cleanliness: 4,
      checkIn: 5,
    },
    username: "Claire",
    avgRating: "4.7",
    createdAt: "2024-03-05T08:15:00Z"
  }
];

export async function getReviewById(hotelId: string): Promise<IResReview[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredReviews = mockReviews.filter(review => review.hotelId === hotelId);
      resolve(filteredReviews);
    }, 300); 
  });
}
