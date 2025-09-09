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

const apartmentsList = [
  "Ocean View Apartment",
  "City Center Loft",
  "Mountain Cabin",
  "Beachfront Condo",
  // Ajoute les appartements disponibles ici
];

export default function SearchFormApartments({ style_2 = '', defaultCheckin, defaultCheckout, defaultGuests }: IProps) {
  const [state, formAction] = useActionState(handleSearch, initialState);

  const [destination, setDestination] = useState('');
  const [filteredApartments, setFilteredApartments] = useState<string[]>([]);

  const [checkin, setCheckin] = useState<Date | null>(defaultCheckin ? new Date(defaultCheckin) : null);
  const [checkout, setCheckout] = useState<Date | null>(defaultCheckout ? new Date(defaultCheckout) : null);

  const [adultGuests, setAdultGuests] = useState<number>(defaultGuests ? defaultGuests : 1);
  const [childGuests, setChildGuests] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(1);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDestination(val);

    if (val.length > 0) {
      setFilteredApartments(
        apartmentsList.filter(appt => appt.toLowerCase().includes(val.toLowerCase()))
      );
    } else {
      setFilteredApartments([]);
    }
  };

  const selectApartment = (name: string) => {
    setDestination(name);
    setFilteredApartments([]);
  };

  return (
    <div className="tp-hero-search-form relative">
      <form action={formAction} autoComplete="off">
        <div className="tp-hero-quantity-wrap flex items-center gap-x-4 flex-nowrap">

          {/* Destination + autocomplete */}
          <div className="tp-hero-form-input relative min-w-[200px] flex-shrink-0">
            <p className="mb-1 text-sm font-medium">Destination (Apartment)</p>
            <input
              type="text"
              name="destination"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="Type apartment name"
              className={`w-full border rounded px-3 py-2 ${style_2}`}
              autoComplete="off"
              spellCheck={false}
            />
            {filteredApartments.length > 0 && (
              <ul className="absolute z-10 bg-white border rounded w-full max-h-40 overflow-auto mt-1 shadow">
                {filteredApartments.map(apt => (
                  <li
                    key={apt}
                    className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => selectApartment(apt)}
                  >
                    {apt}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Check-In */}
          <div className="tp-hero-form-input min-w-[150px] flex-shrink-0">
            <p className="mb-1 text-sm font-medium">Check-In</p>
            <div className="relative">
              <DatePicker
                date={checkin}
                setDate={setCheckin}
                cls={style_2}
                defaultValue={checkin ? checkin.toISOString().split('T')[0] : ''}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><Calender /></span>
            </div>
          </div>

          {/* Check-Out */}
          <div className="tp-hero-form-input min-w-[150px] flex-shrink-0">
            <p className="mb-1 text-sm font-medium">Check-Out</p>
            <div className="relative">
              <DatePicker
                date={checkout}
                setDate={setCheckout}
                minDate={checkin ? getNextDay(checkin) : undefined}
                cls={style_2}
                defaultValue={checkout ? checkout.toISOString().split('T')[0] : ''}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><Calender /></span>
            </div>
          </div>

          {/* GuestSelector (adultes, enfants, rooms) */}
          <div className="flex-shrink-0">
            <GuestSelector
              adultGuests={adultGuests}
              childGuests={childGuests}
              rooms={rooms}
              setAdultGuests={setAdultGuests}
              setChildGuests={setChildGuests}
              setRooms={setRooms}
              toggleCls={style_2}
            />
          </div>

          {/* Submit button */}
          <div className="tp-hero-submit-btn-wrap flex-shrink-0">
            <button
              disabled={!checkin || !checkout || !destination}
              className={`tp-hero-submit-btn ${style_2}`}
              type="submit"
            >
              Search
            </button>
          </div>

        </div>

        {/* Hidden inputs for form submission */}
        <input type="hidden" name="destination" value={destination} />
        <input type="hidden" name="checkin" value={checkin ? checkin.toISOString() : ""} />
        <input type="hidden" name="checkout" value={checkout ? checkout.toISOString() : ""} />
        <input type="hidden" name="adults" value={adultGuests} />
        <input type="hidden" name="children" value={childGuests} />
        <input type="hidden" name="rooms" value={rooms} />
      </form>
    </div>
  );
}
