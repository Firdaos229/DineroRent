"use client";

import { heroBanner } from "@/data/ads-data";
import SearchTwo from "../search/search-two";

export default function HeroBannerFive() {
  return (
    <div className="tp-hero-area p-relative">
      <div className="tp-hero-five-video-wrap tp-hero-five-bg p-relative fix">
        <div
          id="home-area"
          className="tp-hero-five-video youtube-bg"
          style={{
            backgroundImage: `url(/assets/img/hero/home3/bg.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <video src={heroBanner.videoUrl} loop autoPlay muted />
        </div>
      </div>
      <div className="tp-hero-five-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-11 col-12">
              <div className="tp-hero-five-content mb-40">
                <h2 className="tp-hero-five-title mb-5">{heroBanner.title}</h2>
                <p>{heroBanner.subtitle}</p>
              </div>
            </div>
          </div>
          <SearchTwo />
        </div>
      </div>
    </div>
  );
}
