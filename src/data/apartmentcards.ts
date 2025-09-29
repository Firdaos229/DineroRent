import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"

export const apartmentCards = [
  {
    title: "Total Apartments",
    value: "38",
    badgeText: "+3",
    badgeIcon: TrendingUpIcon,
    footerText: "Added recently",
    footerIcon: TrendingUpIcon,
    footerSubtext: "All registered apartments",
  },
  {
    title: "Available Apartments",
    value: "22",
    badgeText: "+1",
    badgeIcon: TrendingUpIcon,
    footerText: "Vacancies increased",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Currently bookable units",
  },
  {
    title: "Occupied Apartments",
    value: "16",
    badgeText: "-2",
    badgeIcon: TrendingDownIcon,
    footerText: "Slight drop",
    footerIcon: TrendingDownIcon,
    footerSubtext: "Rooms in use currently",
  },
  {
    title: "Revenue This Month",
    value: "$6,730",
    badgeText: "+6%",
    badgeIcon: TrendingUpIcon,
    footerText: "Earnings growth",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Compared to last period",
  },
]
