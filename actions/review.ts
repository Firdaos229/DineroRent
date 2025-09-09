"use server";
import { ISaveReview } from "@/types/review-d-t";
import { revalidateTag } from "next/cache";
import { notFound } from "next/navigation";

export async function saveReview(data: ISaveReview) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Failed to save review");
    }

    // Revalidate the cache tag for reviews
    revalidateTag("reviews");

    // Parse the response body as JSON
    const review = await res.json();
    if (!review) {
      notFound();
    }

    return review;
  } catch (error) {
    console.error("Error in saveReview:", error);
    throw error;
  }
}
