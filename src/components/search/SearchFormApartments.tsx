"use client";

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
  message: "",
};

const locationsList = [
  "Lagos, Nigeria",
  "Abuja, Nigeria",
  "Cotonou, Benin",
  "Porto-Novo, Benin",
  "Lomé, Togo",
  "Kara, Togo",
  "Abidjan, Côte d'Ivoire",
  "Yamoussoukro, Côte d'Ivoire",
  "Dakar, Senegal",
  "Saint-Louis, Senegal",
  "Accra, Ghana",
  "Kumasi, Ghana",
  "Douala, Cameroon",
  "Yaoundé, Cameroon",
  "Kinshasa, DR Congo",
  "Lubumbashi, DR Congo",
  "Nairobi, Kenya",
  "Mombasa, Kenya",
  "Kampala, Uganda",
  "Addis Ababa, Ethiopia",
  "Tunis, Tunisia",
  "Algiers, Algeria",
  "Casablanca, Morocco",
  "Marrakech, Morocco",
  "Cape Town, South Africa",
  "Johannesburg, South Africa",
  "Zanzibar, Tanzania",
  "Antananarivo, Madagascar",
  "Paris, France",
  "New York, USA",
  "Tokyo, Japan",
  "Barcelona, Spain",
  "Rome, Italy",
  "Lisbon, Portugal",
  "London, UK",
  "Bangkok, Thailand",
  "Berlin, Germany",
];

export default function SearchFormApartments({
  style_2 = "",
  defaultCheckin,
  defaultCheckout,
  defaultGuests,
}: IProps) {
  const [state, formAction] = useActionState(handleSearch, initialState);
  const [destination, setDestination] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [checkin, setCheckin] = useState<Date | null>(
    defaultCheckin ? new Date(defaultCheckin) : null
  );
  const [checkout, setCheckout] = useState<Date | null>(
    defaultCheckout ? new Date(defaultCheckout) : null
  );
  const [adultGuests, setAdultGuests] = useState<number>(defaultGuests || 1);
  const [childGuests, setChildGuests] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(1);

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDestination(val);
    setFilteredLocations(
      val.length > 0
        ? locationsList.filter((loc) =>
            loc.toLowerCase().includes(val.toLowerCase())
          )
        : []
    );
  };

  const selectLocation = (name: string) => {
    setDestination(name);
    setFilteredLocations([]);
  };

  return (
    <div className="tp-hero-search-form relative max-w-4xl mx-auto">
      <form action={formAction} autoComplete="off" className="space-y-4">
        {/* Row 1: Destination & Guests */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Destination */}
          <div className="tp-hero-form-input ">
            <p className="mb-1 text-sm font-medium">Destination</p>
            <input
              type="text"
              name="destination"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="Type city or country"
              className={`w-full border rounded px-3 py-2 ${style_2}`}
              autoComplete="off"
              spellCheck={false}
            />
            {filteredLocations.length > 0 && (
              <ul className="absolute z-10 bg-white border rounded w-full max-h-40 overflow-auto mt-1 shadow">
                {filteredLocations.map((loc) => (
                  <li
                    key={loc}
                    className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                    onClick={() => selectLocation(loc)}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Guests */}
          <div className="">
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
        </div>

        {/* Row 2: Check-in & Check-out */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="tp-hero-form-input pb-20 mr-10">
            <p>Check-In</p>
            <div className="p-relative">
              <DatePicker
                date={checkin}
                setDate={setCheckin}
                cls={style_2}
                defaultValue={
                  checkin ? checkin.toISOString()?.split("T")[0] : ""
                }
              />
              <span>
                <Calender />
              </span>
            </div>
          </div>
          <div className="tp-hero-form-input pb-20 mr-10">
            <p>Check-Out</p>
            <div className="p-relative">
              <DatePicker
                date={checkout}
                setDate={setCheckout}
                minDate={getNextDay(checkin)}
                cls={style_2}
                defaultValue={
                  checkout ? checkout.toISOString()?.split("T")[0] : ""
                }
              />
              <span>
                <Calender />
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button Centered */}
        <div className="text-center pt-2">
          <button
            disabled={!checkin || !checkout || !destination}
            className={`tp-hero-submit-btn ${style_2} px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition`}
            type="submit"
          >
            Search
          </button>
        </div>

        {/* Hidden Inputs */}
        <input type="hidden" name="destination" value={destination} />
        <input
          type="hidden"
          name="checkin"
          value={checkin ? checkin.toISOString() : ""}
        />
        <input
          type="hidden"
          name="checkout"
          value={checkout ? checkout.toISOString() : ""}
        />
        <input type="hidden" name="adults" value={adultGuests} />
        <input type="hidden" name="children" value={childGuests} />
        <input type="hidden" name="rooms" value={rooms} />
      </form>
    </div>
  );
}
