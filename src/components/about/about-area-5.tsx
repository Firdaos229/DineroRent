import Image from "next/image";
import ab_thumb from '@/assets/img/about/hotel/thumb.jpg';

export default function AboutAreaFive() {
    return (
        <div className="tp-about-area pt-120 mb-120">
            <div className="container">
                <div className="tp-about-hotel-border">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-thumb">
                                <Image className="w-100" src={ab_thumb} alt="thumb" style={{height:'auto'}} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-content">
                                <div className="tp-about-title-box mb-35">
                                    <span className="tp-about-hotel-subtitle">Why Choose Us?</span>
                                    <h2 className="tp-about-hotel-title mb-15">See Life From A<br /> Different Perspective.</h2>
                                    <p>Our vision is to become Nigeria’s most trusted platform for lifestyle rentals,
                                        especially during peak travel seasons,  connecting users and vendors with simplicity,
                                        speed, and safety.</p>
                                </div>
                                <div className="tp-about-hotel-feature mb-35">
                                    <ul>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <span><strong>Verified Vendors:</strong> Every vendor undergoes a strict KYC process</span>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <span><strong>Curated Listings:</strong> We manually review each property or vehicle before it goes live</span>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <span><strong>IJGB-Ready:</strong> Perfect for diaspora returnees looking for convenience and trust</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tp-about-hotel-btn">
                                    <a className="tp-btn-4" href="/contact">Join the DineroRent Experience</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
