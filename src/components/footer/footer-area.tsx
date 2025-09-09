import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/dinero.png";
import logo_2 from "@/assets/img/logo/dinero.png";
import { XSvgTwo } from "../svg";

type IProps = {
  top_bg?: string;
  style_2?: boolean;
};

export default function FooterArea({ top_bg = "tp-pink-bg", style_2 }: IProps) {
  return (
    <footer>
      <div className={`tp-footer-area ${top_bg} pt-120`}>
        <div className="container mb-50">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
              <div
                className={`tp-footer-widget mb-60 ${
                  style_2 ? "tp-footer-widget-3" : ""
                }`}
              >
                <div className="tp-footer-logo mb-25">
                  <Link href="/">
                    <Image
                      style={{ width: "138px", height: "auto" }}
                      src={style_2 ? logo_2 : logo}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <div
                    className={`tp-footer-location mb-20 ${
                      style_2 ? "tp-footer-location-3" : ""
                    }`}
                  >
                    <a href="mailto:dinerotechnologieslimited@gmail.com">
                      dinerotechnologieslimited@gmail.com
                    </a>
                  </div>
                  <div
                    className={`tp-footer-number mb-15 ${
                      style_2 ? "tp-footer-number-3" : ""
                    }`}
                  >
                    <span
                      className={`tp-footer-call-title ${
                        style_2 ? "tp-footer-call-title-3" : ""
                      }`}
                    >
                      Call For Reservations
                    </span>
                    <a href="tel:+(234)9166032718" className="tp-footer-call">
                      +(234) 916 603 2718
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-6 col-sm-6">
              <div
                className={`tp-footer-widget mb-60 ${
                  style_2 ? "tp-footer-widget-3" : ""
                }`}
              >
                <h3
                  className={`tp-footer-widget-title mb-25 ${
                    style_2 ? "tp-footer-widget-title-3" : ""
                  }`}
                >
                  Quick Links
                </h3>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div
                      className={`tp-footer-widget-content ${
                        style_2 ? "tp-footer-widget-content-3" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="#">Rooms & Shortlets</a>
                        </li>
                        <li>
                          <a href="/faq">FAQ&apos;s</a>
                        </li>
                        <li>
                          <a href="#">Book Now</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div
                      className={`tp-footer-widget-content ${
                        style_2 ? "tp-footer-widget-content-3" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="/blog-grid">Our Blog</a>
                        </li>
                        <li>
                          <a href="#">Popular Destination</a>
                        </li>
                        <li>
                          <a href="#">Pricing Plan</a>
                        </li>
                        <li>
                          <a href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="/privacy-policy">Terms & Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-xl-4 col-lg-6 col-md-6 ${
                style_2 ? "col-sm-8 mb-60" : ""
              }`}
            >
              <div
                className={`tp-footer-widget pl-65 ${
                  style_2
                    ? "tp-footer-widget-3"
                    : "tp-footer-widget-space mb-60"
                }`}
              >
                <h3 className="tp-footer-widget-title mb-15">
                  Don’t miss
                  <br /> Our Latest Updated
                </h3>
                <p
                  className={`tp-footer-widget-para ${
                    style_2 ? "tp-footer-widget-para-3" : ""
                  } mb-10`}
                >
                  Sign up to our newsletter for exclusive offers.
                </p>
                <div className="tp-footer-form mb-20">
                  <form action="#">
                    <div
                      className={`tp-footer-input ${
                        style_2 ? "tp-footer-input-3" : ""
                      } p-relative`}
                    >
                      <input type="email" placeholder="E-mail" />
                      <button
                        type="button"
                        className={`tp-footer-input-btn ${
                          style_2 ? "tp-footer-input-btn-3" : ""
                        } p-absolute`}
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tp-footer-social-2 mt-15">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <XSvgTwo />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-botom">
          <div className="container">
            <div className="tp-footer-bottom-inner">
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className={`tp-footer-copyright ${
                      style_2 ? "tp-footer-copyright-3" : ""
                    }`}
                  >
                    <p>
                      Copyright © {new Date().getFullYear()}{" "}
                      <a href="#">DineroRent</a>. All Rights Reserved.
                    </p>
                  </div>
                </div>
                {/* <div className="col-sm-6">
                           <div className={`tp-footer-develop tp-footer-copyright ${style_2?'tp-footer-copyright-3':''} text-right`}>
                              <p>Developed by: <a href="#">Firdaos Folachade</a></p>
                           </div>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
