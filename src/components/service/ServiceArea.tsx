"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UserCheck, BriefcaseBusiness, ScrollText, Building2 } from "lucide-react";

const services = [
  {
    title: "Personal Immigration",
    icon: <UserCheck className="w-10 h-10 text-yellow-400" />,
    content:
      "We provide tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases."
  },
  {
    title: "Business Immigration",
    icon: <BriefcaseBusiness className="w-10 h-10 text-yellow-400" />,
    content:
      "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes."
  },
  {
    title: "Will Writing (Including Islamic Wills)",
    icon: <ScrollText className="w-10 h-10 text-yellow-400" />,
    content:
      "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity."
  },
  {
    title: "Self-Sponsorship",
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
    content:
      "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications."
  }
];

const ServiceArea = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <>
         <div className="service-wrapper">
      <div className="divider"></div>

      <div className="container">
         <div className="row g-4 g-lg-5">
          {services.map((item, i) => (
             <div key={i} className="col-12 col-md-6 col-xl-4">
             <Link href="/service-details">
                <div onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card  ${activeIndex === i ? "active" : ""}`}>
                   <span className="material-symbols-outlined">{item.icon}</span>
                   <h2 style={{ bottom: `${activeIndex === i ? '140px' : ''}` }}>{item.title}</h2>
                    <p className="mb-0" style={{ bottom: `${activeIndex === i ? '45px' : ''}` }}>
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
    </>
  );
};

export default ServiceArea;