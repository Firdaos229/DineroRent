import Image from "next/image";
import Link from "next/link";
import { ICarRental } from "@/types/car-d-t";
import Wishlist from "@/components/svg/wishlist";

type IProps = {
  item: ICarRental;
};

export default function CarCardTwo({ item }: IProps) {
  return (
    <div className="tp-room-wrap tp-room-wrap-2">
      <div className="tp-room-thumb">
        <Image
          className="w-full h-auto"
          src={item.imageUrl}
          alt={item.title}
          width={511}
          height={360}
        />
        <button type="button" className="tp-place-wishlist">
          <Wishlist />
        </button>
      </div>
      <div className="tp-room-content box-bg">
        <span className="tp-room-tag mb-15">{item.make}</span>
        <h4 className="tp-room-title mb-20">
          <Link href={`/car-details/${item.id}`}>{item.title}</Link>
        </h4>
        <div className="tp-room-meta mb-30">
          <ul>
            <li>
              <span>
                <strong>Mileage:</strong> {item.mileage} mi
              </span>
            </li>
            <li>
              <span>
                <strong>Fuel: </strong>
                {item.fuelType}
              </span>
            </li>
            <li>
              <span>
                <strong>Transmission:</strong> {item.transmission}
              </span>
            </li>
            <li>
              <span>
                <strong>Year: </strong>
                {item.year}
              </span>
            </li>
          </ul>
        </div>
        <div className="tp-room-btn-3">
          <Link className="tp-btn-square" href={`/car-details/${item.id}`}>
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
}
