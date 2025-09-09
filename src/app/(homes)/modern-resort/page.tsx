import { getCityHotels } from "@/api/hotel";
import AboutAreaTwo from "@/components/about/about-area-2";
import AdventuresArea from "@/components/adventures/adventures-area";
import BannerArea from "@/components/banner/banner-area";
import BrandArea from "@/components/brand/brand-area";
import ConnectedArea from "@/components/connected/connected-area";
import CtaArea from "@/components/cta/cta-area";
import DestinationAreaTwo from "@/components/destination/destination-area-2";
import HeroBannerFour from "@/components/hero-banner/hero-banner-4";
import CityHotels from "@/components/hotel/city-hotels";
import TestimonialAreaTwo from "@/components/testimonial/testimonial-area-2";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Modern Resort - Housey Resort and Hotel Next JS Template",
};

export default async function ModernResortPage() {
    const hotelData = await getCityHotels();
    return (
        <>
           {/* hero banner area start */}
           <HeroBannerFour/>
           {/* hero banner area end */}

           {/* destination area start */}
           <DestinationAreaTwo/>
           {/* destination area end */}

           {/* about area start */}
           <AboutAreaTwo/>
           {/* about area end */}

           {/* hotel area start */}
           <CityHotels cityHotels={hotelData}/>
           {/* hotel area end */}

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

           {/* connect area start */}
           <ConnectedArea/>
           {/* connect area end */}

           {/* cta area start */}
           <CtaArea/>
           {/* cta area end */}
        </>
    )
}
