import Image from "next/image";
import ContactForm from "../form/contact-form";
import { CheckSvg } from "../svg";
import shape_1 from "@/assets/img/contact/shape-1.png";
import shape_2 from "@/assets/img/contact/shape-1.png";


export default function ContactArea() {
    return (
        <div className="tp-contact-area p-relative pt-120 mb-120">
            <div className="tp-contact-shape-box">
                <div className="tp-contact-shape d-none d-lg-block">
                    <Image src={shape_1} alt="shape" />
                </div>
                <div className="tp-contact-shape-2 d-none d-lg-block">
                    <Image src={shape_2} alt="shape2" />
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="tp-contact-form-wrap">
                            <div className="tp-contact-content mb-35 text-center">
                                <p className="tp-contact-dis">Need help with a booking or have any questions or suggestions?<br/> Our team is here to assist you.</p>
                                <div className="tp-contact-list">
                                    <ul>
                                        <li>
                                            <span>
                                                <CheckSvg />
                                            </span>
                                            <p>Need help with a booking?</p>
                                        </li>
                                        <li>
                                            <span>
                                                <CheckSvg />
                                            </span>
                                            <p>Do you have a question?</p>
                                        </li>
                                        <li>
                                            <span>
                                                <CheckSvg />
                                            </span>
                                            <p>Are you a vendor?</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tp-contact-form tp-postbox-comment-input">
                                {/* form area start */}
                                <ContactForm />
                                {/* form area end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
