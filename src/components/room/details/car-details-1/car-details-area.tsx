import { ICarRental } from "@/types/car-d-t";
import RoomDetailsReviewLists from "../room-details-2/room-details-review-lists";
import RoomDetailsWriteReviewArea from "../room-details-2/room-details-write-review-area";
import CarDetailsGallerySlider from "./car-details-gallery-slider";
import CarDetailsInfoArea from "./car-details-info-area";
import CarDetailsReservation from "./car-details-reservation";

type Props = {
  car: ICarRental;
};

export default function CarDetailsArea({ car }: Props) {
  return (
    <div className="tp-room-details-area pt-100 pb-80">
      <div className="container">
        <div className="row">
          {/* Main content */}
          <div className="col-lg-8">
            <div className="tp-room-details-wrapper mb-35">
              {/* Gallery */}
              <CarDetailsGallerySlider
                thumbNailUrl={car.imageUrl}
                galleryImages={car.gallery}
              />

              {/* Description */}
              <div className="tp-room-about-content mb-45">
                <h2 className="tp-room-details-title mb-20">About This Car</h2>
                <p>{car.description}</p>
              </div>

              {/* Specifications */}
              <div className="tp-room-about-feature mb-45">
                <h2 className="tp-room-details-title mb-20">Specifications</h2>
                <ul>
                  <li>
                    <span></span>Make: {car.make}
                  </li>
                  <li>
                    <span></span>Model: {car.model}
                  </li>
                  <li>
                    <span></span>Version: {car.version}
                  </li>
                  <li>
                    <span></span>Year: {car.year}
                  </li>
                  <li>
                    <span></span>Horsepower: {car.horsepower} HP
                  </li>
                  <li>
                    <span></span>Mileage: {car.mileage} km
                  </li>
                  <li>
                    <span></span>Fuel Type: {car.fuelType}
                  </li>
                  <li>
                    <span></span>Transmission: {car.transmission}
                  </li>
                  <li>
                    <span></span>Drive: {car.drive} wheel
                  </li>
                  <li>
                    <span></span>Condition: {car.condition}
                  </li>
                  <li>
                    <span></span>Warranty: {car.warranty ? "Yes" : "No"}
                  </li>
                  <li>
                    <span></span>VIN: {car.vin}
                  </li>
                </ul>
              </div>

              {/* Reviews */}
              <RoomDetailsReviewLists hotelId={car.id} />
              <RoomDetailsWriteReviewArea hotelId={car.id} />

              {/* Cancellation */}
              <div className="tp-room-about-content">
                <h2 className="tp-room-details-title mb-20">Cancellation</h2>
                <p>
                  Please contact the rental provider for cancellation policies
                  and fees.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <CarDetailsInfoArea carInfo={car} />
            <CarDetailsReservation carId={car.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
