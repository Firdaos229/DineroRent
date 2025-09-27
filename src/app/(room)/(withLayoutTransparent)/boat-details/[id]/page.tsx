import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import { getSingleBoat } from "@/api/boat";
import BoatDetailsArea from "@/components/room/details/boat-details-1/boat-details-area";

export const metadata: Metadata = {
  title: "Boat Details - DineroRent",
};

export default async function BoatDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const boat = await getSingleBoat(params.id);
  if (!boat) {
    return (
      <div className="container py-50">
        <h2>Boat not found</h2>
        <p>The car you're looking for doesn't exist or was removed.</p>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbArea />
      <BoatDetailsArea boat={boat} />
    </>
  );
}
