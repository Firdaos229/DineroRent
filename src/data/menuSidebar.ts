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
      url: "/admin/users",
      icon: UsersIcon,
    },
    {
      title: "Vendors",
      url: "/admin/vendors",
      icon: FolderIcon,
    },
    {
      title: "Apartments",
      url: "#",
      icon: Building2Icon,
      items: [
        { title: "All Apartments", url: "/admin/listings/apartments" },
        { title: "Create Apartment", url: "/admin/listings/apartments/create" },
      ],
    },
    {
      title: "Cars",
      url: "#",
      icon: CarIcon,
      items: [
        { title: "All Cars", url: "/admin/listings/cars" },
        { title: "Create Car", url: "/admin/listings/cars/create" },
      ],
    },
    {
      title: "Boats",
      url: "#",
      icon: ShipIcon,
      items: [
        { title: "All Boats", url: "/admin/listings/boats" },
        { title: "Create Boat", url: "/admin/listings/boats/create" },
      ],
    },
    {
      title: "Bookings / Rentals",
      url: "/dashboard/booking",
      icon: FileTextIcon,
    },
    {
      title: "Payments / Escrow",
      url: "/admin/payments",
      icon: CreditCardIcon,
    },
    {
      title: "Reviews",
      url: "/admin/reviews",
      icon: MessageSquareIcon,
    },
    {
      title: "Site Settings",
      url: "/admin/settings",
      icon: SlidersHorizontalIcon,
      items: [
        { title: "General Settings", url: "/admin/settings" },
        { title: "Advertisements", url: "/admin/ads" },
        { title: "Site Policies & Legal", url: "/admin/legal" },
      ],
    },
  ],

  documents: [
    {
      name: "Reports",
      url: "/admin/reports",
      icon: ClipboardListIcon,
    },
  ],

  navSecondary: [
    {
      title: "FAQ & Help Center",
      url: "/admin/faq",
      icon: HelpCircleIcon,
    },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: BarChartIcon,
    },
  ],
};