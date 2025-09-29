import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";

export const boatCards = [
  {
    title: "Total Boats",
    value: "24",
    badgeText: "+4",
    badgeIcon: TrendingUpIcon,
    footerText: "Added this month",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Total boats in the system",
  },
  {
    title: "Available Boats",
    value: "15",
    badgeText: "+2",
    badgeIcon: TrendingUpIcon,
    footerText: "Ready for booking",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Boats currently available",
  },
  {
    title: "Rented Boats",
    value: "9",
    badgeText: "-1",
    badgeIcon: TrendingDownIcon,
    footerText: "Rented right now",
    footerIcon: TrendingDownIcon,
    footerSubtext: "Live rentals in progress",
  },
  {
    title: "Revenue This Month",
    value: "$3,450",
    badgeText: "+12%",
    badgeIcon: TrendingUpIcon,
    footerText: "Increased revenue",
    footerIcon: TrendingUpIcon,
    footerSubtext: "Compared to last month",
  },
];
