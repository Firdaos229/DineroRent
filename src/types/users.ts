export type UserRole = "admin" | "vendor" | "user";
export type UserStatus = "approve" | "suspend" | "verify";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}
