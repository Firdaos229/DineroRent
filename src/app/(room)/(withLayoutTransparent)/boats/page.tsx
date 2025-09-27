import { Metadata } from "next";
import { getAllBoats } from "@/api/boat";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import SearchThree from "@/components/search/search-three";
import SearchLayout from "@/components/apartments/SearchLayout";
import BoatSidebar from "@/components/boats/BoatSidebar";
import BoatOneArea from "@/components/room/boat-one-area";

export const metadata: Metadata = {
  title: "Boats - DineroRent",
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

export default async function BoatsPage({ searchParams }: IProps) {
  const { checkin, checkout, adults, children, searchTerm } =
    (await searchParams) || {};

  const boatData = await getAllBoats();

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
        sidebar={<BoatSidebar />}
        content={<BoatOneArea boats={boatData} />}
      />
    </>
  );
}
