import { Metadata } from "next";
import AboutAreaFour from "@/components/about/about-area-4";
import AboutAreaFive from "@/components/about/about-area-5";
import TextSliderArea from "@/components/text-slider/text-slider-area";
import VideoArea from "@/components/video/video-area";

export const metadata: Metadata = {
  title: "About - DineroRent",
};

export default function AboutPage() {
  return (
    <>
      {/* about area start */}
      <AboutAreaFour />
      {/* about area end */}

      {/* text slider area start */}
      <TextSliderArea cls="tp-text-spacing" content_2={true} />
      {/* text slider area end */}

      {/* video area start */}
      <VideoArea />
      {/* video area end */}

      {/* hotel about area start */}
      <AboutAreaFive />
      {/* hotel about area end */}
    </>
  );
}
