"use client";
import Link from "next/link";
import React from "react";
import { UserCheck, BriefcaseBusiness, ScrollText, Building2 } from "lucide-react";

const services = [
  {
    title: "Personal Immigration",
    icon: <UserCheck className="w-10 h-10 text-yellow-400" />,
    link: "/personal-immigration",
    content:
      "We provide tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases.",
  },
  {
    title: "Business Immigration",
    icon: <BriefcaseBusiness className="w-10 h-10 text-yellow-400" />,
    link: "/business-immigration",
    content:
      "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes.",
  },
  {
    title: "Will Writing (Including Islamic Wills)",
    icon: <ScrollText className="w-10 h-10 text-yellow-400" />,
    link: "/will-writing",
    content:
      "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity.",
  },
  {
    title: "Self-Sponsorship",
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
    link: "/self-sponsorship",
    content:
      "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications.",
  },
];

const ServiceArea = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF", padding: "4rem 1rem" }}>
      <div className="container">

        {/* Grid Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div
                className="group"
                style={{
                  padding: "1.5rem",
                  borderRadius: "0.75rem",
                  height: "100%",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: "transparent",
                  boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
                  border: "1px solid #E5E7EB",
                  paddingTop: "1.5rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#FBF0DF")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {/* Icon */}
              <div
  style={{
    marginBottom: "2.5rem",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      backgroundColor: "#EBBF7D", // or any soft color you prefer
      borderRadius: "9999px",
      padding: "1rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "64px",
      height: "64px",
    }}
  >
    {service.icon}
  </div>
</div>


                {/* Title */}
                <h2
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1f2937",
                    transition: "all 0.3s",
                  }}
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    color: "#4B5563",
                    paddingTop: "0.5rem",
                  }}
                >
                  {service.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
