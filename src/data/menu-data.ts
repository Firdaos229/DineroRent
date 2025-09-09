import { IMenuItem, IMenuItemTwo } from "@/types/menu-d-t";

// === Menu principal (desktop) ===
const menu_data_one: IMenuItem[] = [
  { id: 1, label: "Home", url: "/sea-hotel" }, // Home
  { id: 2, label: "About Us", url: "/about" },
  { id: 4, label: "Rooms", url: "/room-1" },
  { id: 6, label: "Contact", url: "/contact" },
];

// === Menu secondaire (mobile ou autre) ===
const menu_data_two: IMenuItemTwo[] = [
  { id: 1, label: "Home", url: "/sea-hotel" },
  { id: 2, label: "About Us", url: "/about" },
  { id: 4, label: "Rooms", url: "/room-1" },
  { id: 6, label: "Contact", url: "/contact" },
];

// ✅ Export des menus
export const MenuData = {
  menu_data_one,
  menu_data_two,
};
