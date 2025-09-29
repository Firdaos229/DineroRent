export type UserRole = "admin" | "vendor" | "user";
export type UserStatus = "active" | "pending" | "suspended";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}
