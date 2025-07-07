"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UserCheck, BriefcaseBusiness, ScrollText, Building2 } from 'lucide-react';

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
  return (
    <>
      <div className="latest-service-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-heading text-center">
                <h2 className="mb-0">Our Services</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination-2",
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="swiper service-two-swiper">

            {services.map((service, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <Link href="/service-details">
                  <div className="icon-wrapper">{service.icon}</div>
                  <h2>{service.title}</h2>
                  <p className="mb-0">{service.content}</p>
                </Link>
              </SwiperSlide>
            ))}

            <div className="swiper-pagination-2"></div>
          </Swiper>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea;
