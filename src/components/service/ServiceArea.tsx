"use client";
import Link from "next/link";
import React from "react";
import { UserCheck, BriefcaseBusiness, ScrollText, Building2 } from "lucide-react";

const services = [
  {
    title: "Personal Immigration",
    icon: <UserCheck className="w-10 h-10 text-yellow-400" />,
    content:
      "We provide tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases.",
  },
  {
    title: "Business Immigration",
    icon: <BriefcaseBusiness className="w-10 h-10 text-yellow-400" />,
    content:
      "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes.",
  },
  {
    title: "Will Writing (Including Islamic Wills)",
    icon: <ScrollText className="w-10 h-10 text-yellow-400" />,
    content:
      "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity.",
  },
  {
    title: "Self-Sponsorship",
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
    content:
      "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications.",
  },
];

const ServiceArea = () => {
  return (
    <div className="service-wrapper bg-[#212C3C] text-white py-16">
      <div className="divider"></div>

      <div className="container">
        <div className="row g-4 g-lg-5">
          {services.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-xl-4">
              <Link href="/service-details">
                <div className="service-slide-card group transition-all duration-300 hover:shadow-xl hover:bg-[#1f2937] p-6 rounded-xl cursor-pointer h-full">
                  {/* Icon */}
                  <div className="mb-4">{item.icon}</div>

                  {/* Title with hover animation */}
                  <h2 className="text-xl font-semibold transform transition-all duration-300 group-hover:-translate-y-2 group-hover:pb-4">
                    {item.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-gray-300 transition-all duration-300 group-hover:pb-2">
                    {item.content}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default ServiceArea;
