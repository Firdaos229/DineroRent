"use client";

import { useState } from "react";
import { ICarRental } from "@/types/car-d-t";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import CarCardTwo from "../hotel/single/car-card-2";

const tab_btns = ["All Cars", "Audi", "Toyota", "BMW", "Tesla"];

type IProps = {
  cars: ICarRental[];
};

export default function CarOneArea({ cars }: IProps) {
  const [activeTab, setActiveTab] = useState(tab_btns[0]);
  const per_page = 6;
  const [filteredCars, setFilteredCars] = useState<ICarRental[]>(cars);
  const { currentItems, handlePageClick, pageCount } = usePagination(
    filteredCars,
    per_page
  );

  function handleActiveTab(tab: string) {
    setActiveTab(tab);
    if (tab === "All Cars") {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter((car) => car.make === tab));
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

        <div className="row tp-gx-25 grid">
          {currentItems.map((item) => (
            <div key={item.id} className="col-md-6 grid-item mb-25">
              <CarCardTwo item={item} />
            </div>
          ))}
        </div>

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
