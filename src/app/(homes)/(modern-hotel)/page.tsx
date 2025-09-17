import { Metadata } from "next";
import AboutArea from "@/components/about/about-area";
import BlogArea from "@/components/blog/blog-area";
import HotelRooms from "@/components/hotel/hotel-rooms";
import { getCityHotels } from "@/api/hotel";
import AboutAreaThree from "@/components/about/about-area-3";
import CtaArea from "@/components/cta/cta-area";
import HeroBannerFive from "@/components/hero-banner/hero-banner-5";
import CityHotels from "@/components/hotel/city-hotels";
import OfferArea from "@/components/offer/offer-area";

export const metadata: Metadata = {
  title: "DineroRent",
};

export default async function HomeModernHotelPage() {
  const cityHotels = await getCityHotels();
  return (
    <main>
      {/* hero banner area start */}
      <HeroBannerFive />
      {/* hero banner area end */}

      {/* hotel area start */}
      <HotelRooms />
      {/* hotel area end */}

      {/* city hotels start */}
      <CityHotels cityHotels={cityHotels} />
      {/* city hotels end */}

      {/* about area start */}
      <AboutAreaThree />
      {/* about area end */}

      {/* about area start */}
      <AboutArea />
      {/* about area end */}

      {/* offer area start */}
      <OfferArea />
      {/* offer area end */}

      {/* blog area start */}
      <BlogArea />
      {/* blog area end */}

      {/* cta area start */}
      <CtaArea />
      {/* cta area end */}
    </main>
  );
}
