"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

// internal
import { blog_postbox_data } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import { ClockSvg, UpArrow, VideoSvgTwo } from "../svg";
import BlogSidebar from "./blog-sidebar";
import VideoProvider from "../provider/video-provider";
import Link from "next/link";

const thumbSliderSetting: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".tp-postbox-slider-button-next",
    prevEl: ".tp-postbox-slider-button-prev",
  },
};
export default function BlogStandardArea() {
  const { currentItems, handlePageClick, pageCount } = usePagination(
    blog_postbox_data,
    3
  );
  return (
    <div className="tp-postbox-area pt-110 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pb-50">
            <div className="tp-postbox-wrapper">
              {currentItems.map((item) => (
                <article key={item.id} className="tp-postbox-item mb-70">
                  {item.image_slider ? (
                    <Swiper
                      {...thumbSliderSetting}
                      modules={[Navigation]}
                      className="tp-postbox-thumb p-relative tp-postbox-slider swiper-container mb-30"
                    >
                      {item.image_slider.map((img, i) => (
                        <SwiperSlide key={i} className="tp-postbox-slider-item">
                          <Image
                            className="w-100"
                            src={img}
                            alt="thumb"
                            width={792}
                            height={400}
                          />
                        </SwiperSlide>
                      ))}
                      <div className="tp-postbox-nav">
                        <button className="tp-postbox-slider-button-prev">
                          <i className="fa-regular fa-angle-left"></i>
                        </button>
                        <button className="tp-postbox-slider-button-next">
                          <i className="fa-regular fa-angle-right"></i>
                        </button>
                      </div>
                    </Swiper>
                  ) : (
                    <div className={`tp-postbox-thumb ${item.video_id ? "p-relative" : ""} mb-30`}>
                      <Link href={`/blog-details/${item.id}`}>
                        <Image
                          className="w-100"
                          src={item.imgSrc}
                          alt="thumb"
                          width={792}
                          height={400}
                        />
                      </Link>
                      {item.video_id && (
                        <VideoProvider
                          videoId={item.video_id}
                          cls="play-btn position pulse-btn"
                        >
                          <VideoSvgTwo />
                        </VideoProvider>
                      )}
                    </div>
                  )}
                  <div className="tp-postbox-content">
                    <div className="tp-postbox-meta mb-10">
                      <span>
                        <a href="#">
                          <Image
                            src={item.authorImg}
                            alt="user"
                            width={30}
                            height={30}
                          />
                          {item.authorName}
                        </a>
                      </span>
                      <span className="dvdr"></span>
                      <span>
                        <ClockSvg /> {item.readTime}
                      </span>
                    </div>
                    <h2 className="tp-postbox-title mb-20">
                      <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                    </h2>
                    <div className="tp-postbox-text mb-35">
                      <p>{item.description}[…]</p>
                    </div>
                    <div className="tp-postbox-read-more">
                      <Link
                        className="tp-btn-square tp-btn-square-yellow"
                        href={`/blog-details/${item.id}`}
                      >
                        Read More
                        <span className="ml-5">
                          <UpArrow />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="tp-pagenation">
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            </div>
          </div>
          <div className="col-lg-4 pb-50">
            {/* blog sidebar area */}
            <BlogSidebar />
            {/* blog sidebar area */}
          </div>
        </div>
      </div>
    </div>
  );
}
