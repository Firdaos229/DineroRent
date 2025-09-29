import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"

export const carCards = [
  {
    title: "Total Cars",
    value: "42",
    badgeText: "+5",
    badgeIcon: TrendingUpIcon,
    footerText: "Added this month",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Total cars in the system",
  },
  {
    title: "Available Cars",
    value: "27",
    badgeText: "+3",
    badgeIcon: TrendingUpIcon,
    footerText: "Ready for rental",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Currently available vehicles",
  },
  {
    title: "Rented Cars",
    value: "15",
    badgeText: "-2",
    badgeIcon: TrendingDownIcon,
    footerText: "Out for rental",
    footerIcon: TrendingDownIcon,
    footerSubtext: "Cars in use right now",
  },
  {
    title: "Revenue This Month",
    value: "$7,980",
    badgeText: "+9%",
    badgeIcon: TrendingUpIcon,
    footerText: "Rental income growth",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Compared to last month",
  },
]
