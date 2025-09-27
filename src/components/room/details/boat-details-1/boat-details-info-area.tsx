import { formatPrice } from "@/lib/format-price";
import { IBoatRental } from "@/types/boat-d-t";
import { UserThree, BedsFour } from "@/components/svg";

type IProps = {
  boatInfo: IBoatRental;
};

export default function BoatDetailsInfoArea({ boatInfo }: IProps) {
  return (
    <div className="tp-room-details-info-wrap box-bg mb-35">
      <div className="tp-room-type-attributes">
        <h3 className="tp-room-details-info-title mb-25">Boat Info</h3>
        <div className="row row-cols-2 tp-gx-15 mb-5">
          <div className="col">
            <div className="tp-room-type-capacity mb-20">
              <div className="tp-room-type-icon">
                <BedsFour />
              </div>
              <h5 className="tp-room-type-title">{boatInfo.engineModel}</h5>
            </div>
          </div>
          <div className="col">
            <div className="tp-room-type-capacity mb-20">
              <div className="tp-room-type-icon">
                <UserThree />
              </div>
              <h5 className="tp-room-type-title">
                {boatInfo.fuelCapacity} People
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-room-regular-price-wrap mb-30 tp-room-regular-price-border d-flex justify-content-between">
        <span className="tp-room-regular-price-title">Per Day:</span>
        <span className="tp-room-regular-price">
          {formatPrice(boatInfo.pricePerDay)}
        </span>
      </div>
    </div>
  );
}
