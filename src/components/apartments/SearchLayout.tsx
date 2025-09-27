"use client";
import { ReactNode } from "react";

type SearchLayoutProps = {
  sidebar: ReactNode;
  content: ReactNode;
};

export default function SearchLayout({ sidebar, content }: SearchLayoutProps) {
  return (
    <div className="tp-search-area pt-120 pb-70">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-4">{sidebar}</div>

          {/* Content */}
          <div className="col-lg-8">{content}</div>
        </div>
      </div>
    </div>
  );
}
