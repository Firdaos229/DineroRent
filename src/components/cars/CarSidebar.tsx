"use client";

import { useState } from "react";
import PriceRangeSlider from "../PriceRangeSlider";

export default function CarSidebar() {
  type RangeValues = {
    min: number;
    max: number;
  };

  const [rangeValues, setRangeValues] = useState<RangeValues>({
    min: 0,
    max: 100,
  });

  const handleRangeChange = (values: RangeValues) => {
    setRangeValues(values);
  };

  return (
    <div className="tp-faq-sidebar-wrap mb-50 w-64 bg-white rounded-2xl shadow-md p-5 space-y-8">
      <h4 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
        Filter by:
      </h4>
      <hr />

      {/* Location filter */}
      <div className="tp-faq-sidebar-box mb-3">
        <h5 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 border-b border-gray-200">
          Location
        </h5>
        <div className="space-y-3 text-gray-700 gap-2 row">
          {["Lagos", "Abuja", "Accra", "Nairobi"].map((loc, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <input
                type="radio"
                name="location"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              {loc}
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="tp-faq-sidebar-box mb-3">
        <h4 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 border-b border-gray-200 mb-3">
          Price
        </h4>
        <PriceRangeSlider min={200} max={1000} onChange={handleRangeChange} />
      </div>

      {/* Categories filter */}
      <div className="tp-faq-sidebar-box mb-3">
        <h4 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 border-b border-gray-200 mb-3">
          Categories
        </h4>
        <div className="space-y-3 text-gray-700 gap-2 row">
          {["Convertibles", "SUV", "Coupes", "Sedan"].map((category, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <input
                type="checkbox"
                name="category"
                value={category}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Availability filter */}
      <div className="tp-faq-sidebar-box mb-3">
        <h4 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 border-b border-gray-200">
          Availability
        </h4>
        <div className="space-y-3 text-gray-700 gap-2 row">
          {["Available", "Not Available"].map((status, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <input
                type="radio"
                name="availability"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              {status}
            </label>
          ))}
        </div>
      </div>

      {/* Ratings filter */}
      <div className="tp-faq-sidebar-box mb-3">
        <h4 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 border-b border-gray-200">
          Ratings
        </h4>
        <div className="space-y-3 text-gray-700 row">
          {[5, 4, 3, 2, 1].map((stars) => (
            <label
              key={stars}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <input
                type="radio"
                name="ratings"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              {"⭐".repeat(stars)} {stars} Star
            </label>
          ))}
        </div>
      </div>

      {/* Vendor Verification filter */}
      <div className="tp-faq-sidebar-box">
        <h4 className="tp-faq-sidebar-title text-base font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
          Vendor Verification
        </h4>
        <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600 text-gray-700">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Verified Vendor Only
        </label>
      </div>
    </div>
  );
}
