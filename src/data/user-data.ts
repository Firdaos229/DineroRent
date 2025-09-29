import { IUser } from "@/types/users";

export const users: IUser[] = [
  {
    id: "1",
    name: "Jean Vendor",
    email: "jean@vendor.com",
    role: "vendor",
    status: "suspend",
  },
  {
    id: "2",
    name: "Alice User",
    email: "alice@user.com",
    role: "user",
    status: "approve",
  },
  {
    id: "3",
    name: "Admin Boss",
    email: "admin@site.com",
    role: "admin",
    status: "approve",
  },
  {
    id: "4",
    name: "Marc Vendor",
    email: "marc@vendor.com",
    role: "vendor",
    status: "verify",
  },
];
