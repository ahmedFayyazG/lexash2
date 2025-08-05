"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breacrumb from "@/common/Breacrumb";

const OurTeamPage = () => {
  const teamMembers = [
    {
      name: "Asif Ranjha",
      position: "Co-Founder & Managing partner",
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg",
    },
    {
      name: "Javaid Iqbal Wattoo",
      position: "Compliance Partner",
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg",
    },
    {
      name: "Hassan Gondal",
      position: "Paralegal",
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg",
    },
    {
      name: "Muhammad Gulbaz Shahzad",
      position: "Paralegal",
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft14.svg",
    },
    {
      name: "Javeria Zain",
      position: "Bussines Support Manager",
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft12.svg",
    },
    {
      name: "Muhammad Ahmed Fayyaz",
      position: "IT & Digital operations manager",
      image: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ft13.svg",
    },
  ];

  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      setColumns(window.innerWidth < 768 ? 1 : 3);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#FFFFFF" }}>
        <HeaderOne />

        <section style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 0 }}>
          {/* Hero Section */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "70vh", // Reduced from 70vh
              minHeight: "300px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/assets/services-bg.jpg"
              alt="Our Services"
              fill
              style={{ objectFit: "cover", zIndex: 0 }}
            />
            <div style={{ marginBottom: 0 }}>
              <Breacrumb title="Our Team" subtitle="Our Team" />
            </div>
          </div>

          {/* Team Section */}
          <section
            style={{
              paddingTop:"-4rem",
              paddingBottom:"3rem", // Reduced top padding
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: "2rem",
                paddingBottom: "4rem",
                paddingTop: "-2rem",
              }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <div
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      backgroundColor: "white",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          filter: "grayscale(1)",
                          transition: "filter 0.5s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
                        onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(1)")}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                        }}
                      ></div>
                    </div>
                    <div style={{ padding: "1rem", textAlign: "center" }}>
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "500",
                          color: "#111827",
                          fontFamily: "poppins, sans-serif",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#4B5563",
                          fontWeight: "400",
                          marginTop: "0.25rem",
                          fontFamily: "poppins, sans-serif",
                        }}
                      >
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <FooterOne />
      </div>
    </>
  );
};

export default OurTeamPage;
