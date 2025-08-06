
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { UserCheck, BriefcaseBusiness, ScrollText, Building2 } from 'lucide-react';

const services = [
  {
    title: "Personal Immigration",
    icon: <UserCheck className="w-6 h-6" />,
    link: "/personal-immigration",
    content: "We provide tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases."
  },
  {
    title: "Business Immigration", 
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    link: "/business-immigration",
    content: "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes."
  },
  {
    title: "Will Writing (Including Islamic Wills)",
    icon: <ScrollText className="w-6 h-6" />,
    link: "/will-writing", 
    content: "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity."
  },
  {
    title: "Self-Sponsorship",
    icon: <Building2 className="w-6 h-6" />,
    link: "/self-sponsorship",
    content: "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications."
  }
];

const ServiceArea = () => {
  // Correctly typed state
  const [activeCard, setActiveCard] = useState<number | null>(null);
  // Correctly typed ref for the div elements
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // FIX: Check if the target is an HTMLElement before accessing .style
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const targetElement = entry.target;
            setTimeout(() => {
              targetElement.style.opacity = '1';
              targetElement.style.transform = 'translateY(0)';
            }, 100); // A small delay can be kept for staggering if needed
          }
        });
      },
      { threshold: 0.1 } // Changed threshold slightly for earlier trigger
    );

    const currentRefs = serviceRefs.current;
    currentRefs.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Correctly typed function parameters
  const handleServiceClick = (link: string, title: string) => {
    // This could navigate the user, e.g., using Next.js router
    // For now, it just logs to the console.
    console.log(`Navigating to: ${link} - ${title}`);
    // Example: window.location.href = link;
  };

  return (
    <section style={{
      background: '#ffffff',
      padding: 'clamp(5rem, 10vw, 8rem) 0',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '5rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 300,
            fontFamily: 'Poppins, sans-serif',
            color: '#2c3e50',
            marginBottom: '1.5rem',
            letterSpacing: '-0.5px',
            lineHeight: '1.2'
          }}>
            Our Services
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#6c757d',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: 300,
            fontFamily: 'Poppins, sans-serif'
          }}>
            Comprehensive legal solutions delivered with excellence and expertise
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              // Add the ref to the array
              ref={el => {
                if (el) serviceRefs.current[index] = el;
              }}
              onClick={() => handleServiceClick(service.link, service.title)}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                background: '#ffffff',
                border: '1px solid #f0f0f0',
                borderRadius: '16px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0, // Initial state for animation
                transform: 'translateY(20px)', // Initial state for animation
                boxShadow: activeCard === index ? 
                  '0 8px 40px rgba(0, 0, 0, 0.08)' : 
                  '0 2px 12px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: activeCard === index ? '#dab173' : '#f8f9fa',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: activeCard === index ? 'white' : '#dab173',
                transition: 'all 0.3s ease'
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
                color: '#2c3e50',
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#6c757d',
                lineHeight: '1.6',
                fontWeight: 300,
                fontFamily: 'Poppins, sans-serif',
                marginBottom: '1.5rem'
              }}>
                {service.content}
              </p>

              <div style={{
                color: '#dab173',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: activeCard === index ? 1 : 0.7,
                transition: 'opacity 0.3s ease'
              }}>
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
