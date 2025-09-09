import { Metadata } from "next";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-2";
import DestinationArea from "@/components/destination/destination-area";
import AboutAreaTwo from "@/components/about/about-area-2";
import CityHotels from "@/components/hotel/city-hotels";
import AdventuresArea from "@/components/adventures/adventures-area";
import BannerArea from "@/components/banner/banner-area";
import TestimonialAreaTwo from "@/components/testimonial/testimonial-area-2";
import BrandArea from "@/components/brand/brand-area";
import ConnectedArea from "@/components/connected/connected-area";
import CtaArea from "@/components/cta/cta-area";
import { getCityHotels } from "@/api/hotel";


export const metadata: Metadata = {
  title: "City Hotel - Housey Resort and Hotel Next JS Template",
};

export default async function CityHotelPage() {
  const cityHotels = await getCityHotels();
  return (
    <main>

      {/* hero banner start */}
      <HeroBannerTwo />
      {/* hero banner end */}


      {/* destination area start */}
      <DestinationArea/>
      {/* destination area end */}

      {/* about area start */}
      <AboutAreaTwo/>
      {/* about area end */}

      {/* city hotels start */}
      <CityHotels cityHotels={cityHotels}/>
      {/* city hotels end */}

      {/* adventure area start */}
      <AdventuresArea/>
      {/* adventure area end */}

      {/* banner area start */}
      <BannerArea/>
      {/* banner area end */}

      {/* testimonial area start */}
      <TestimonialAreaTwo/>
      {/* testimonial area end */}

      {/* brand area start */}
      <BrandArea/>
      {/* brand area end */}

      {/* connected area start */}
      <ConnectedArea/>
      {/* connected area end */}

      {/* cta area start */}
      <CtaArea/>
      {/* cta area end */}
    </main>
  );
}
