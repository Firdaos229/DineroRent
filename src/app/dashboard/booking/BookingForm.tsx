"use client";

export function BookingForm() {
  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium">Type</span>
        <select className="mt-1 w-full border rounded px-3 py-2 text-sm">
          <option value="apartment">Apartment</option>
          <option value="shortlet">Shortlet</option>
          <option value="car">Car</option>
          <option value="boat">Boat</option>
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-medium">Date</span>
        <input
          type="date"
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium">Price</span>
        <input
          type="number"
          className="mt-1 w-full border rounded px-3 py-2 text-sm"
        />
      </label>
    </div>
  );
}
