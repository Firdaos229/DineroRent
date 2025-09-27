"use client";

import Image from "next/image";
import Link from "next/link";
import { IBoatRental } from "@/types/boat-d-t";
import Wishlist from "@/components/svg/wishlist";

type IProps = {
  item: IBoatRental;
};

export default function BoatCard({ item }: IProps) {
  return (
    <div className="tp-room-wrap tp-room-wrap-2">
      <div className="tp-room-thumb">
        <Image
          className="w-100 rounded-xl"
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
        <span className="tp-room-tag mb-15">{item.category}</span>
        <h4 className="tp-room-title mb-20">
          <Link href={`/boat-details/${item.id}`}>{item.title}</Link>
        </h4>
        <div className="tp-room-meta mb-25">
          <ul>
            <li>
              <span>
                <strong>Passengers:</strong> {item.passengerCapacity}
              </span>
            </li>
            <li>
              <span>
                {" "}
                <strong>Length: </strong>
                {item.length} ft
              </span>
            </li>
            <li>
              <span>
                {" "}
                <strong>Speed: </strong>
                {item.maxSpeed} MPH
              </span>
            </li>
            <li>
              <span>
                <strong>
                  {item.city}, {item.country}
                </strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="tp-room-btn-3">
          <Link className="tp-btn-square" href={`/boat-details/${item.id}`}>
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
