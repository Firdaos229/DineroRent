import { Metadata } from "next";
import { getSingleHotel } from "@/api/hotel";
import RoomDetailsThreeBreadcrumb from "@/components/room/details/room-details-3/room-details-3-breadcrumb";
import RoomDetailsThreeGalleryArea from "@/components/room/details/room-details-3/room-details-3-gallery-area";
import RoomDetailsThreeInfoArea from "@/components/room/details/room-details-3/room-details-3-info-area";


export const metadata: Metadata = {
    title: "Room Details  - Housey",
};

type IParams = Promise<{ id: string }>;

export default async function RoomDetailsThreePage({ params }: { params: IParams }) {
    const { id } = await params;
    const hotel = await getSingleHotel(id);
    return (
        <>

            {/* breadcrumb area start */}
            <RoomDetailsThreeBreadcrumb hotelRoom={hotel} />
            {/* breadcrumb area end */}

            {/* gallery area start */}
            <RoomDetailsThreeGalleryArea gallery={hotel.gallery} />
            {/* gallery area end */}

            {/* room details area start */}
            <RoomDetailsThreeInfoArea hotelInfo={hotel} />
            {/* room details area end */}
        </>
    )
}
