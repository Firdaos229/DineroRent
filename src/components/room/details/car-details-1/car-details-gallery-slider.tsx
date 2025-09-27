"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";

type Props = {
  galleryImages: string[];
  thumbNailUrl: string;
};

export default function CarDetailsGallerySlider({
  galleryImages,
  thumbNailUrl,
}: Props) {
  const allImages = [thumbNailUrl, ...galleryImages];
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="tp-room-details-slider mb-90">
      <Swiper
        spaceBetween={0}
        navigation={{
          nextEl: ".tp-room-details-slide-next",
          prevEl: ".tp-room-details-slide-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-container tp-room-details-slide-active"
      >
        {allImages.map((imgSrc, i) => (
          <SwiperSlide key={i}>
            <div className="tp-room-details-thumb">
              <Image
                className="w-100"
                src={imgSrc}
                alt={`car-${i}`}
                width={792}
                height={430}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="tp-room-slider-navigation">
          <button className="tp-room-details-slide-next">
            <i className="fa-sharp fa-solid fa-angle-right"></i>
          </button>
          <button className="tp-room-details-slide-prev">
            <i className="fa-sharp fa-solid fa-angle-left"></i>
          </button>
        </div>
      </Swiper>

      <div className="row justify-content-center">
        <div className="col-lg-12">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-container tp-room-details-thumb-active p-relative"
          >
            {allImages.map((imgSrc, i) => (
              <SwiperSlide key={i}>
                <div className="tp-room-details-thumb">
                  <Image
                    className="w-100"
                    src={imgSrc}
                    alt={`thumb-${i}`}
                    width={120}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
