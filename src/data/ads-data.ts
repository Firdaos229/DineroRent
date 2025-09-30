import { IHeroBanner, IOfferAd } from "@/types/ads-d-t";

export const heroBanner: IHeroBanner = {
  videoUrl: "/assets/video/sea-video.mp4",
  title: "Welcome to DineroRent",
  subtitle: "Find Shortlets, Apartments, Cars & Boats",
};

export const offerAds: IOfferAd[] = [
  {
    id: 1,
    imgSrc: "/assets/img/offer/03.jpg",
    preLabel: "Exclusive",
    title: "Honeymoon<br/> Package",
    discount: "Get 40% Off",
    delay: ".3s",
  },
  {
    id: 2,
    imgSrc: "/assets/img/offer/01.jpg",
    preLabel: "Unbundled",
    title: "Cocktail<br/> Package",
    discount: "Get 30% Off",
    delay: ".4s",
  },
  {
    id: 3,
    imgSrc: "/assets/img/offer/02.jpg",
    preLabel: "Wellness",
    title: "Massage<br/> Package",
    discount: "Get 25% Off",
    delay: ".5s",
  },
  {
    id: 4,
    imgSrc: "/assets/img/offer/04.jpg",
    preLabel: "Exclusive",
    title: "Airport <br> Transfer",
    discount: "Get 40% Off",
    delay: ".3s",
  },
  {
    id: 5,
    imgSrc: "/assets/img/offer/05.jpg",
    preLabel: "Unbundled",
    title: "Holiday <br> Relax",
    discount: "Get 30% Off",
    delay: ".4s",
  },
  {
    id: 6,
    imgSrc: "/assets/img/offer/06.jpg",
    preLabel: "Wellness",
    title: "Couple’s <br> Spa Day",
    discount: "Get 35% Off",
    delay: ".5s",
  },
];
