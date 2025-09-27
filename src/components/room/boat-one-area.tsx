"use client";

import { useState } from "react";
import { IBoatRental } from "@/types/boat-d-t";
import { ENUM_BOAT_CATEGORY } from "@/types/enums";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import BoatCard from "../hotel/single/boat-card-2";

const tab_btns = ["All Boats", ...Object.values(ENUM_BOAT_CATEGORY)];

type IProps = {
  boats: IBoatRental[];
};

export default function BoatOneArea({ boats }: IProps) {
  const [activeTab, setActiveTab] = useState(tab_btns[0]);
  const per_page = 4;
  const [filteredBoats, setFilteredBoats] = useState<IBoatRental[]>(boats);
  const { currentItems, handlePageClick, pageCount } = usePagination(
    filteredBoats,
    per_page
  );

  function handleActiveTab(tab: string) {
    setActiveTab(tab);
    if (tab === "All Boats") {
      setFilteredBoats(boats);
    } else {
      setFilteredBoats(boats.filter((boat) => boat.category === tab));
    }
  }

  return (
    <div className="tp-room-masonary pt-140 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-room-tab-btn-list mb-50 masonary-menu filter-button-group text-center">
              {tab_btns.map((tab) => (
                <button
                  key={tab}
                  className={`tp-room-tab-btn mb-10 ${
                    activeTab === tab ? "active" : ""
                  }`}
                  onClick={() => handleActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Boat Cards Grid */}
        <div className="row tp-gx-25 grid">
          {currentItems &&
            currentItems.map((item) => (
              <div key={item.id} className="col-md-6 grid-item cat4 cat2 mb-25">
                <BoatCard item={item} />
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-12">
            <div className="tp-pagenation text-center pt-35">
              <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
