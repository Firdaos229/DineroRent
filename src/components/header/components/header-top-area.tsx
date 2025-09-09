"use client";
import { Email, Phone, User } from "@/components/svg";
import useGlobalContext from "@/hooks/use-global-context";
import Link from "next/link";

export default function HeaderTopArea() {
  const { userInfo, handleLogout } = useGlobalContext();
  console.log(userInfo, "userInfo");
  return (
    <div className="tp-header-top tp-header-border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="tp-header-info">
              <ul>
                <li>
                  <a href="mailto:dinerotechnologieslimited@gmail.com">
                    <Email />
                    dinerotechnologieslimited@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+(234)9166032718">
                    <Phone />
                    +(234) 916 603 2718
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-header-top-right d-flex justify-content-end align-items-center">
              <div className="tp-header-acount tp-header-usd tp-header-border-right">
                {userInfo?.user?.email ? (
                  <a className="pointer" onClick={handleLogout}>
                    {" "}
                    {userInfo.user.username}
                  </a>
                ) : (
                  <Link href="/login"> Become a vendor</Link>
                )}
              </div>
              <div className="tp-header-acount tp-header-usd tp-header-border-right">
                {userInfo?.user?.email ? (
                  <a className="pointer" onClick={handleLogout}>
                    <User /> {userInfo.user.username}
                  </a>
                ) : (
                  <Link href="/login">
                    <User /> Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
