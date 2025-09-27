import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import { getSingleCar } from "@/api/car";
import CarDetailsArea from "@/components/room/details/car-details-1/car-details-area";

export const metadata: Metadata = {
  title: "Car Details - DineroRent",
};

export default async function CarDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const car = await getSingleCar(params.id);

  // Check si la voiture existe
  if (!car) {
    return (
      <div className="container py-50">
        <h2>Car not found</h2>
        <p>The car you're looking for doesn't exist or was removed.</p>
      </div>
    );
  }

  return (
    <>
      <BreadcrumbArea />
      <CarDetailsArea car={car} />
    </>
  );
}
