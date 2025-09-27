"use client";

import { useFormStatus } from "react-dom";
import React, { useActionState, useEffect, useState } from "react";
import DatePicker from "@/components/ui/date-picker";
import GuestSelector from "@/components/search/guest-selector";
import { getNextDay } from "@/utils/date";
import { handleCheckBooking } from "@/actions/search";

// Type du résultat de l'action
type BoatBookingResult = {
  data: {
    isBooked: boolean;
  };
  message?: string;
};

export default function BoatDetailsReservation({ boatId }: { boatId: string }) {
  const { pending } = useFormStatus();

  const [state, formAction] = useActionState<
    BoatBookingResult | null,
    FormData
  >(handleCheckBooking, null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const isBooked = state?.data?.isBooked;
  const isDisabled = !startDate || !endDate || pending || isBooked;

  return (
    <div className="tp-room-details-info-wrap box-bg mb-35">
      <h3 className="tp-room-details-info-title mb-25">Boat Reservation</h3>
      <form className="reservation-form" action={formAction}>
        <p>
          <label>Start Date *</label>
          <br />
          <DatePicker date={startDate} setDate={setStartDate} />
        </p>
        <p>
          <label>End Date *</label>
          <br />
          <DatePicker
            date={endDate}
            setDate={setEndDate}
            minDate={getNextDay(startDate)}
          />
        </p>

        <GuestSelector
          adultGuests={adults}
          childGuests={children}
          setAdultGuests={setAdults}
          setChildGuests={setChildren}
          topCls="details-reservation"
        />

        <div className="tp-purches-btn mt-20">
          <button
            type="submit"
            disabled={isDisabled}
            className="tp-btn-falured"
          >
            {isBooked ? "Unavailable" : "Book Now"}
          </button>
        </div>

        {isBooked && (
          <p className="text-danger mt-10">Already booked, try another date</p>
        )}

        <input
          type="hidden"
          name="startDate"
          value={startDate ? startDate.toISOString() : ""}
        />
        <input
          type="hidden"
          name="endDate"
          value={endDate ? endDate.toISOString() : ""}
        />
        <input type="hidden" name="boatId" value={boatId} />
        <input type="hidden" name="adults" value={adults} />
        <input type="hidden" name="children" value={children} />
      </form>
    </div>
  );
}
