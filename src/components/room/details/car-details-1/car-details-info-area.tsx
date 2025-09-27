import { ICarRental } from "@/types/car-d-t";
import { formatPrice } from "@/lib/format-price";

type Props = {
  carInfo: ICarRental;
};

export default function CarDetailsInfoArea({ carInfo }: Props) {
  return (
    <div className="tp-room-details-info-wrap box-bg mb-35">
      <h3 className="tp-room-details-info-title mb-25">Car Information</h3>
      <div className="row row-cols-2 tp-gx-15 mb-5">
        <div className="col">
          <p>
            <strong>Make:</strong> {carInfo.make}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Model:</strong> {carInfo.model}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Year:</strong> {carInfo.year}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Fuel Type:</strong> {carInfo.fuelType}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Transmission:</strong> {carInfo.transmission}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Mileage:</strong> {carInfo.mileage} km
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Drive:</strong> {carInfo.drive}
          </p>
        </div>
        <div className="col">
          <p>
            <strong>Condition:</strong> {carInfo.condition}
          </p>
        </div>
      </div>

      <div className="tp-room-regular-price-wrap mb-30 tp-room-regular-price-border d-flex justify-content-between">
        <span className="tp-room-regular-price-title">Per Day:</span>
        <span className="tp-room-regular-price">
          {formatPrice(carInfo.pricePerDay)}
        </span>
      </div>
    </div>
  );
}
