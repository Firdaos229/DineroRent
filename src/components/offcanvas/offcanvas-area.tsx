import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/dinero.png";
import { BehanceSvg, CloseSvg, InstagramSvg, YoutubeSvg } from "../svg";
import OffcanvasMenus from "./offcanvas-menus";

type IProps = {
  open: boolean;
  onClose: () => void;
};
export default function OffcanvasArea({ open, onClose }: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${open ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link href="/">
                <Image data-width="138" src={logo} alt="logo" width={138} />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button onClick={onClose} className="tp-offcanvas-close-btn">
                <CloseSvg />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>
                DineroRent is a digital rental marketplace built for modern
                travelers, returnees, and locals who need quick, trusted access
                to lifestyle rental services.{" "}
              </p>
            </div>
            <div className="tp-offcanvas-menu d-lg-none">
              <nav>
                {/* nav menus */}
                <OffcanvasMenus />
                {/* nav menus */}
              </nav>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>
              <ul>
                <li>
                  <a href="tel:+(234)9166032718">+(234) 916 603 2718</a>
                </li>
                <li>
                  <a href="mailto:dinerotechnologieslimited@gmail.com">
                    dinerotechnologieslimited@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a href="#">
                    <InstagramSvg />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <YoutubeSvg />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BehanceSvg />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Overlay */}
      <div
        onClick={onClose}
        className={`body-overlay ${open ? "opened" : ""}`}
      />
      {/* Offcanvas Overlay */}
    </>
  );
}
