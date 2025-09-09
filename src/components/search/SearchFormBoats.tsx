'use client';
import { useActionState, useState } from "react";
import { Calender } from "../svg";
import DatePicker from "../ui/date-picker";
import GuestSelector from "./guest-selector";
import { getNextDay } from "@/utils/date";
import { handleSearch } from "../../../actions/search";

type IProps = {
  style_2?: string;
  defaultCheckin?: string | null;
  defaultCheckout?: string | null;
  defaultGuests?: number | null;
};

const initialState = {
  message: '',
};

export default function SearchFormBoats({ style_2 = '', defaultCheckin, defaultCheckout, defaultGuests }: IProps) {
  const [state, formAction] = useActionState(handleSearch, initialState);
  const [location, setLocation] = useState('');
  const [checkin, setCheckin] = useState<Date | null>(defaultCheckin ? new Date(defaultCheckin) : null);
  const [checkout, setCheckout] = useState<Date | null>(defaultCheckout ? new Date(defaultCheckout) : null);
  const [adultGuests, setAdultGuests] = useState<number>(defaultGuests ? defaultGuests : 1);
  const [childGuests, setChildGuests] = useState<number>(0);
  const [boatType, setBoatType] = useState<string>('yacht');

  return (
    <div className="tp-hero-search-form">
      <form action={formAction}>
        <div className="tp-hero-quantity-wrap flex flex-wrap gap-4">
          {/* Location */}
          <div className="tp-hero-form-input pb-4 flex-grow min-w-[200px]">
            <p>Location</p>
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder="Enter location"
              className={`w-full border rounded px-3 py-2 ${style_2}`}
            />
          </div>

          {/* Check-In */}
          <div className="tp-hero-form-input pb-4 min-w-[150px]">
            <p>Check-In</p>
            <div className="relative">
              <DatePicker
                date={checkin}
                setDate={setCheckin}
                cls={style_2}
                defaultValue={checkin ? checkin.toISOString()?.split('T')[0] : ''}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><Calender /></span>
            </div>
          </div>

          {/* Check-Out */}
          <div className="tp-hero-form-input pb-4 min-w-[150px]">
            <p>Check-Out</p>
            <div className="relative">
              <DatePicker
                date={checkout}
                setDate={setCheckout}
                minDate={getNextDay(checkin)}
                cls={style_2}
                defaultValue={checkout ? checkout.toISOString()?.split('T')[0] : ''}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><Calender /></span>
            </div>
          </div>

          {/* GuestSelector simple */}
          <GuestSelector
            adultGuests={adultGuests}
            childGuests={childGuests}
            setAdultGuests={setAdultGuests}
            setChildGuests={setChildGuests}
            toggleCls={style_2}
          />

          {/* Boat Type */}
          <div className="tp-hero-form-input pb-4 flex items-center space-x-6 min-w-[200px]">
            <p>Boat Type:</p>
            <select
              name="boatType"
              value={boatType}
              onChange={e => setBoatType(e.target.value)}
              className={`border rounded px-3 py-2 ${style_2}`}
            >
              <option value="yacht">Yacht</option>
              <option value="sailboat">Sailboat</option>
              <option value="catamaran">Catamaran</option>
              <option value="motorboat">Motorboat</option>
            </select>
          </div>

          {/* Bouton submit */}
          <div className="tp-hero-submit-btn-wrap mb-4">
            <button
              disabled={!checkin || !checkout || !location}
              className={`tp-hero-submit-btn ${style_2}`}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>

        {/* Hidden inputs */}
        <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
        <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
        <input type="hidden" name="adults" value={adultGuests} />
        <input type="hidden" name="children" value={childGuests} />
        <input type="hidden" name="boatType" value={boatType} />
        <input type="hidden" name="location" value={location} />
      </form>
    </div>
  );
}
