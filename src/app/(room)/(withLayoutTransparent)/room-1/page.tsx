import { Metadata } from "next";
import { getAllHotelRooms } from "@/api/hotel";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import SearchThree from "@/components/search/search-three";
import RoomOneArea from "@/components/room/room-one-area";

import SearchLayout from "@/components/apartments/SearchLayout";
import HotelSidebar from "@/components/apartments/HotelSidebar";

export const metadata: Metadata = {
  title: "Apartments - DineroRent",
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

export default async function RoomOnePage({ searchParams }: IProps) {
  const { checkin, checkout, adults, children, searchTerm } =
    (await searchParams) || {};

  const hotelData = await getAllHotelRooms();

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
        sidebar={<HotelSidebar />}
        content={<RoomOneArea rooms={hotelData} />}
      />
    </>
  );
}
