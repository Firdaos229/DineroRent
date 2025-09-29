import { LayoutDashboardIcon, UsersIcon, FolderIcon, Building2Icon, CarIcon, ShipIcon, FileTextIcon, CreditCardIcon, MessageSquareIcon, SlidersHorizontalIcon, ClipboardListIcon, HelpCircleIcon, BarChartIcon } from "lucide-react";

export const data = {
  user: {
    name: "Admin User",
    email: "admin@dinerorent.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: UsersIcon,
    },
    {
      title: "Apartments",
      url: "/dashboard/apartments",
      icon: Building2Icon,
    },
    {
      title: "Cars",
      url: "/dashboard/cars",
      icon: CarIcon,
    },
    {
      title: "Boats",
      url: "/dashboard/boats",
      icon: ShipIcon,
    },
    {
      title: "Bookings / Rentals",
      url: "/dashboard/booking",
      icon: FileTextIcon,
    },
    {
      title: "Payments Transactions",
      url: "/dashboard/payments",
      icon: CreditCardIcon,
    },
    {
      title: "Site Settings",
      url: "#",
      icon: SlidersHorizontalIcon,
      items: [
        { title: "General Settings", url: "/dashboard/settings" },
        { title: "Advertisements", url: "/dashboard/ads" },
        { title: "Site Policies & Legal", url: "/dashboard/legal" },
      ],
    },
  ],

  documents: [
    {
      name: "Reports",
      url: "/dashboard/reports",
      icon: ClipboardListIcon,
    },
  ],

  navSecondary: [
    {
      title: "FAQ & Help Center",
      url: "/dashboard/faq",
      icon: HelpCircleIcon,
    },
  ],
};