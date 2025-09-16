import { Metadata } from "next";
import FaqAreaThree from "@/components/faq/faq-area-three";
import BreadcrumbSix from "@/components/breadcrumb/breadcrumb-six";

export const metadata: Metadata = {
  title: "Faq Page - DineroRent",
}

export default function FaqPage() {
  return (
    <>

      {/* breadcrumb area start */}
      <BreadcrumbSix title="Have a question in mind?" subtitle="Have Any Questions?" />
      {/* breadcrumb area end */}

      {/* faq area start */}
      <FaqAreaThree />
      {/* faq area end */}

    </>
  )
}
