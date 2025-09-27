import { IBoatRental } from "@/types/boat-d-t";
import BoatDetailsGallerySlider from "./boat-details-gallery-slider";
import BoatDetailsInfoArea from "./boat-details-info-area";
import BoatDetailsReservation from "./boat-details-reservation";
import RoomDetailsReviewLists from "../room-details-2/room-details-review-lists";
import RoomDetailsWriteReviewArea from "../room-details-2/room-details-write-review-area";

type Props = {
  boat: IBoatRental;
};

export default function BoatDetailsArea({ boat }: Props) {
  return (
    <div className="tp-room-details-area pt-100 pb-80">
      <div className="container">
        <div className="row">
          {/* Main content */}
          <div className="col-lg-8">
            <div className="tp-room-details-wrapper mb-35">
              {/* Gallery */}
              <BoatDetailsGallerySlider
                thumbNailUrl={boat.imageUrl}
                galleryImages={boat.gallery}
              />

              {/* Description */}
              <div className="tp-room-about-content mb-45">
                <h2 className="tp-room-details-title mb-20">About This Boat</h2>
                <p>{boat.description}</p>
              </div>

              {/* Specs Section */}
              <div className="tp-room-about-feature mb-45">
                <h2 className="tp-room-details-title mb-20">Specifications</h2>
                <ul>
                  <li>
                    <span></span>Make: {boat.make}
                  </li>
                  <li>
                    <span></span>Model: {boat.engineModel}
                  </li>
                  <li>
                    <span></span>Length: {boat.length} ft
                  </li>
                  <li>
                    <span></span>Max Speed: {boat.maxSpeed} MPH
                  </li>
                  <li>
                    <span></span>Passenger Capacity: {boat.passengerCapacity}
                  </li>
                  <li>
                    <span></span>Beds: {boat.beds}
                  </li>
                  <li>
                    <span></span>Hull Material: {boat.hullMaterial}
                  </li>
                  <li>
                    <span></span>Draft: {boat.draft}
                  </li>
                  <li>
                    <span></span>Fuel Type: {boat.fuelType}
                  </li>
                  <li>
                    <span></span>Fuel Capacity: {boat.fuelCapacity}
                  </li>
                  <li>
                    <span></span>Gross Weight: {boat.grossWeight}
                  </li>
                  <li>
                    <span></span>Manufacturer: {boat.manufacturer}
                  </li>
                  <li>
                    <span></span>Category: {boat.category}
                  </li>
                </ul>
              </div>

              {/* Reviews */}
              <RoomDetailsReviewLists hotelId={boat.id} />
              <RoomDetailsWriteReviewArea hotelId={boat.id} />

              {/* Cancellation - placeholder */}
              <div className="tp-room-about-content">
                <h2 className="tp-room-details-title mb-20">Cancellation</h2>
                <p>
                  Please contact the rental agency for cancellation and refund
                  details.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <BoatDetailsInfoArea boatInfo={boat} />
            <BoatDetailsReservation boatId={boat.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
