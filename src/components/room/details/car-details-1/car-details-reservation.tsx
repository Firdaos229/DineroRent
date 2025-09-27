"use client";
import { useFormStatus } from "react-dom";
import React, { useActionState, useEffect, useState } from "react";
import DatePicker from "@/components/ui/date-picker";
import { getNextDay } from "@/utils/date";
import { handleCheckBooking } from "@/actions/search";

type CarBookingResult = {
  data: {
    isBooked: boolean;
  };
  message?: string;
};

export default function CarDetailsReservation({ carId }: { carId: string }) {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(handleCheckBooking, null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const isBooked = state?.data?.isBooked;

  useEffect(() => {
    if (isBooked) state.data.isBooked = false;
  }, [startDate, endDate, state?.data]);

  const isDisabled = !startDate || !endDate || pending || isBooked;

  return (
    <div className="tp-room-details-info-wrap box-bg mb-35">
      <h3 className="tp-room-details-info-title mb-25">Car Reservation</h3>
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
        <input type="hidden" name="carId" value={carId} />
      </form>
    </div>
  );
}
