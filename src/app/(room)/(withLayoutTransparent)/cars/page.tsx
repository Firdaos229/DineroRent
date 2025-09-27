// src/app/cars/page.tsx (ou autre chemin selon ton projet)

import { Metadata } from "next";
import { getAllCars } from "@/api/car";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import SearchThree from "@/components/search/search-three";
import SearchLayout from "@/components/apartments/SearchLayout";
import CarSidebar from "@/components/cars/CarSidebar";
import CarOneArea from "@/components/room/car-one-area";

export const metadata: Metadata = {
  title: "Cars - DineroRent",
};

type IParams = Promise<{
  checkin: string;
  checkout: string;
  adults: string;
  children: string;
  searchTerm: string;
}>;

type IProps = {
  searchParams: IParams;
};

export default async function CarsPage({ searchParams }: IProps) {
  const { checkin, checkout, adults, children, searchTerm } =
    (await searchParams) || {};

  const carData = await getAllCars();

  return (
    <>
      {/* breadcrumb area */}
      <BreadcrumbArea />

      {/* search area */}
      <SearchThree
        defaultCheckin={checkin}
        defaultCheckout={checkout}
        defaultAdults={Number(adults)}
        defaultChildren={Number(children)}
      />

      {/* search layout (sidebar + results) */}
      <SearchLayout
        sidebar={<CarSidebar />}
        content={<CarOneArea cars={carData} />}
      />
    </>
  );
}
