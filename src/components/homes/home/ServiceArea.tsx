
// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import { UserCheck, BriefcaseBusiness, ScrollText, Building2 } from 'lucide-react';

// const services = [
//   {
//     title: "Personal Immigration",
//     icon: <UserCheck className="w-6 h-6" />,
//     link: "/personal-immigration",
//     content: "We provide tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases."
//   },
//   {
//     title: "Business Immigration", 
//     icon: <BriefcaseBusiness className="w-6 h-6" />,
//     link: "/business-immigration",
//     content: "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes."
//   },
//   {
//     title: "Will Writing (Including Islamic Wills)",
//     icon: <ScrollText className="w-6 h-6" />,
//     link: "/will-writing", 
//     content: "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity."
//   },
//   {
//     title: "Self-Sponsorship",
//     icon: <Building2 className="w-6 h-6" />,
//     link: "/self-sponsorship",
//     content: "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications."
//   }
// ];

// const ServiceArea = () => {
//   // Correctly typed state
//   const [activeCard, setActiveCard] = useState<number | null>(null);
//   // Correctly typed ref for the div elements
//   const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // FIX: Check if the target is an HTMLElement before accessing .style
//           if (entry.isIntersecting && entry.target instanceof HTMLElement) {
//             const targetElement = entry.target;
//             setTimeout(() => {
//               targetElement.style.opacity = '1';
//               targetElement.style.transform = 'translateY(0)';
//             }, 100); // A small delay can be kept for staggering if needed
//           }
//         });
//       },
//       { threshold: 0.1 } // Changed threshold slightly for earlier trigger
//     );

//     const currentRefs = serviceRefs.current;
//     currentRefs.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       currentRefs.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   // Correctly typed function parameters
//   const handleServiceClick = (link: string, title: string) => {
//     // This could navigate the user, e.g., using Next.js router
//     // For now, it just logs to the console.
//     console.log(`Navigating to: ${link} - ${title}`);
//     // Example: window.location.href = link;
//   };

//   return (
//     <section style={{
//       background: '#ffffff',
//       padding: 'clamp(5rem, 10vw, 8rem) 0',
//       position: 'relative'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 2rem'
//       }}>
//         <div style={{
//           textAlign: 'center',
//           marginBottom: '5rem'
//         }}>
//           <h2 style={{
//             fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
//             fontWeight: 300,
//             fontFamily: 'Poppins, sans-serif',
//             color: '#2c3e50',
//             marginBottom: '1.5rem',
//             letterSpacing: '-0.5px',
//             lineHeight: '1.2'
//           }}>
//             Our Services
//           </h2>
          
//           <p style={{
//             fontSize: '1.1rem',
//             color: '#6c757d',
//             maxWidth: '600px',
//             margin: '0 auto',
//             lineHeight: '1.6',
//             fontWeight: 300,
//             fontFamily: 'Poppins, sans-serif'
//           }}>
//             Comprehensive legal solutions delivered with excellence and expertise
//           </p>
//         </div>

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: '2rem'
//         }}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               // Add the ref to the array
//               ref={el => {
//                 if (el) serviceRefs.current[index] = el;
//               }}
//               onClick={() => handleServiceClick(service.link, service.title)}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//               style={{
//                 background: '#ffffff',
//                 border: '1px solid #f0f0f0',
//                 borderRadius: '16px',
//                 padding: '2.5rem 2rem',
//                 textAlign: 'center',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 opacity: 0, // Initial state for animation
//                 transform: 'translateY(20px)', // Initial state for animation
//                 boxShadow: activeCard === index ? 
//                   '0 8px 40px rgba(0, 0, 0, 0.08)' : 
//                   '0 2px 12px rgba(0, 0, 0, 0.04)'
//               }}
//             >
//               <div style={{
//                 width: '60px',
//                 height: '60px',
//                 background: activeCard === index ? '#dab173' : '#f8f9fa',
//                 borderRadius: '12px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: '0 auto 2rem',
//                 color: activeCard === index ? 'white' : '#dab173',
//                 transition: 'all 0.3s ease'
//               }}>
//                 {service.icon}
//               </div>

//               <h3 style={{
//                 fontSize: '1.3rem',
//                 fontWeight: 500,
//                 fontFamily: 'Poppins, sans-serif',
//                 color: '#2c3e50',
//                 marginBottom: '1rem',
//                 lineHeight: '1.3'
//               }}>
//                 {service.title}
//               </h3>

//               <p style={{
//                 fontSize: '0.95rem',
//                 color: '#6c757d',
//                 lineHeight: '1.6',
//                 fontWeight: 300,
//                 fontFamily: 'Poppins, sans-serif',
//                 marginBottom: '1.5rem'
//               }}>
//                 {service.content}
//               </p>

//               <div style={{
//                 color: '#dab173',
//                 fontSize: '0.9rem',
//                 fontWeight: 500,
//                 fontFamily: 'Poppins, sans-serif',
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//                 opacity: activeCard === index ? 1 : 0.7,
//                 transition: 'opacity 0.3s ease'
//               }}>
//                 Learn More
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M5 12h14M12 5l7 7-7 7"/>
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceArea;



// 'use client';
// import React, { useEffect, useRef, useState, ReactNode } from 'react';
// import { UserCheck, BriefcaseBusiness, ScrollText, Building2, ArrowRight } from 'lucide-react';

// // --- Type Definitions ---
// interface Service {
//   title: string;
//   icon: ReactNode;
//   link: string;
//   content: string;
//   image: string;
// }

// // --- Service Data ---
// const services: Service[] = [
//   {
//     title: "Personal Immigration",
//     icon: <UserCheck className="w-8 h-8" />,
//     link: "/personal-immigration",
//     content: "Tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases.",
//     image: "https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "Business Immigration",
//     icon: <BriefcaseBusiness className="w-8 h-8" />,
//     link: "/business-immigration",
//     content: "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes.",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "Will Writing",
//     icon: <ScrollText className="w-8 h-8" />,
//     link: "/will-writing",
//     content: "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity.",
//     image: "https://images.unsplash.com/photo-1542841841-6cc985354175?q=80&w=2070&auto=format&fit=crop"
//   },
//   {
//     title: "Self-Sponsorship",
//     icon: <Building2 className="w-8 h-8" />,
//     link: "/self-sponsorship",
//     content: "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications.",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
//   }
// ];

// // --- Theme Colors ---
// const theme = {
//   accent: '#B9946A',
//   text: '#FFFFFF',
//   lightText: 'rgba(255, 255, 255, 0.8)',
//   background: '#FDFBF8',
//   darkBackground: '#1A202C',
// };

// const ServiceArea: React.FC = () => {
//   const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const currentRefs = serviceRefs.current;
//     currentRefs.forEach(ref => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       currentRefs.forEach(ref => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = e.currentTarget;
//     const { left, top, width, height } = card.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;
//     const rotateX = (y / height - 0.5) * -15;
//     const rotateY = (x / width - 0.5) * 15;
//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
//     const image = card.querySelector('.service-bg-image') as HTMLElement;
//     if (image) {
//         const panX = (x / width) * 10 - 5;
//         const panY = (y / height) * 10 - 5;
//         image.style.transform = `scale(1.15) translateX(${-panX}px) translateY(${-panY}px)`;
//     }
//   };

//   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = e.currentTarget;
//     card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
//     const image = card.querySelector('.service-bg-image') as HTMLElement;
//     if (image) {
//         image.style.transform = 'scale(1.1)';
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

//         .service-section-wrapper {
//           background-color: ${theme.background};
//           padding: clamp(5rem, 10vw, 8rem) 2rem;
//           font-family: 'Poppins', sans-serif;
//         }

//         .service-container {
//           max-width: 1280px;
//           margin: 0 auto;
//         }

//         .service-header {
//           text-align: center;
//           margin-bottom: 5rem;
//         }

//         .service-header h2 {
//           font-size: clamp(2.5rem, 5vw, 3.5rem);
//           font-weight: 600;
//           color: ${theme.darkBackground};
//           margin-bottom: 1.5rem;
//           line-height: 1.2;
//         }

//         .service-header p {
//           font-size: clamp(1rem, 2vw, 1.15rem);
//           color: ${theme.darkBackground};
//           max-width: 750px;
//           margin: 0 auto;
//           line-height: 1.7;
//           font-weight: 300;
//         }

//         .service-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 3rem;
//         }

//         .service-card-outer {
//           opacity: 0;
//           transform: translateY(40px);
//           transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
//         }

//         .service-card-outer.is-visible {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .service-card-inner {
//           position: relative;
//           border-radius: 24px;
//           overflow: hidden;
//           cursor: pointer;
//           transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
//           transform-style: preserve-3d;
//           box-shadow: 0 30px 60px rgba(0,0,0,0.2);
//         }
        
//         .service-bg-image {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transform: scale(1.1);
//             transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
//             z-index: 1;
//         }
        
//         .service-card-inner::after {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(to right, rgba(26, 32, 44, 0.8), rgba(26, 32, 44, 0.6));
//             z-index: 2;
//         }

//         .service-content {
//           position: relative;
//           z-index: 3;
//           padding: clamp(2rem, 5vw, 4rem);
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           min-height: 400px;
//         }

//         .icon-container {
//           width: 64px;
//           height: 64px;
//           background-color: rgba(255,255,255,0.1);
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: ${theme.accent};
//           transition: all 0.3s ease;
//           margin-bottom: 2rem;
//           border: 1px solid rgba(255,255,255,0.1);
//         }

//         .service-card-inner:hover .icon-container {
//           background-color: ${theme.accent};
//           color: white;
//         }

//         .service-content h3 {
//           font-size: 1.75rem;
//           font-weight: 600;
//           color: ${theme.text};
//           margin-bottom: 1rem;
//           line-height: 1.3;
//         }

//         .service-content p {
//           font-size: 1rem;
//           color: ${theme.lightText};
//           line-height: 1.7;
//           font-weight: 300;
//           max-width: 500px;
//           margin-bottom: 2rem;
//         }

//         .learn-more {
//           color: ${theme.accent};
//           font-size: 1rem;
//           font-weight: 500;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           transition: color 0.3s ease, transform 0.3s ease;
//         }

//         .service-card-inner:hover .learn-more {
//           transform: translateX(5px);
//         }
//       `}</style>
//       <section className="service-section-wrapper">
//         <div className="service-container">
//           <div className="service-header">
//             <h2 style={{fontFamily:"poppins", fontWeight:"400"}}>Our Areas of Expertise</h2>
//             <p style={{fontFamily:"poppins", fontWeight:"300"}}>
//               We provide strategic counsel across a spectrum of immigration and personal law, ensuring clarity and confidence at every step.
//             </p>
//           </div>

//           <div className="service-grid">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 ref={el => { serviceRefs.current[index] = el; }}
//                 onClick={() => handleServiceClick(service.link)}
//                 className="service-card-outer"
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div 
//                     className="service-card-inner"
//                     onMouseMove={handleMouseMove}
//                     onMouseLeave={handleMouseLeave}
//                 >
//                     <img src={service.image} alt={service.title} className="service-bg-image" />
//                     <div className="service-content">
//                         <div className="icon-container">
//                           {service.icon}
//                         </div>
//                         <h3>{service.title}</h3>
//                         <p>{service.content}</p>
//                         <div className="learn-more">
//                           Learn More
//                           <ArrowRight size={20} />
//                         </div>
//                     </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceArea;


'use client';
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { UserCheck, BriefcaseBusiness, ScrollText, Building2, ArrowRight } from 'lucide-react';

// --- Type Definitions ---
interface Service {
  title: string;
  icon: ReactNode;
  link: string;
  content: string;
}

// --- Service Data ---
const services: Service[] = [
  {
    title: "Personal Immigration",
    icon: <UserCheck className="w-8 h-8" />,
    link: "/personal-immigration-detail-page",
    content: "Tailored legal support for all UK personal immigration matters, including visa applications, ILR, and complex human rights cases."
  },
  {
    title: "Business Immigration",
    icon: <BriefcaseBusiness className="w-8 h-8" />,
    link: "/bussines-immigration-detail-page",
    content: "Strategic visa support for businesses and entrepreneurs, including Skilled Worker Visas, Sponsor Licences, and Innovator Founder routes."
  },
    {
    title: "Self-Sponsorship",
    icon: <Building2 className="w-8 h-8" />,
    link: "/self-sponsorship-central",
    content: "Empower yourself to relocate via your own UK business. We handle setup, sponsor licensing, and Skilled Worker visa applications."
  },
  {
    title: "Will Writing",
    icon: <ScrollText className="w-8 h-8" />,
    link: "/wills-writing-detail-service-page",
    content: "Expert will writing services tailored to your values, including Shariah-compliant Islamic wills, with fixed-fee clarity."
  }

];

// --- Theme Colors ---
const theme = {
  accent: '#B9946A',
  text: '#212C3C',
  lightText: '#5A6774',
  background: '#FFFFFF',
  lightBackground: '#F9F9F9',
  border: '#EAE6E1',
};

const ServiceAreaRedesigned: React.FC = () => {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
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

  const handleServiceClick = (link: string) => {
    window.location.href = link;
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .service-section-wrapper {
          background-color: ${theme.background};
          padding: clamp(5rem, 10vw, 8rem) 2rem;
          font-family: 'Poppins', sans-serif;
        }

        .service-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .service-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .service-header h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
          color: ${theme.text};
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .service-header p {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: ${theme.lightText};
          font-weight: 300;
          font-family: 'Poppins', sans-serif;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 300;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          background: ${theme.lightBackground};
          border-radius: 20px;
          padding: 2.5rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          opacity: 0;
          transform: translateY(40px);
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 20px;
            border: 1px solid transparent;
            background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme.accent}20, transparent 80%) border-box;
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
            transition: all 0.3s ease;
            opacity: 0;
        }

        .service-card:hover::before {
            opacity: 1;
        }


        .service-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
        }

        .icon-container {
          width: 64px;
          height: 64px;
          background-color: #FFFFFF;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.accent};
          transition: all 0.3s ease;
          margin-bottom: 2rem;
          flex-shrink: 0;
          border: 1px solid ${theme.border};
        }

        .service-card:hover .icon-container {
          background-color: ${theme.accent};
          color: white;
          transform: scale(1.1);
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: ${theme.text};
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .service-card p {
          font-size: 1rem;
          color: ${theme.lightText};
          line-height: 1.7;
          font-weight: 300;
          flex-grow: 1;
          margin-bottom: 2rem;
        }

        .learn-more {
          color: ${theme.lightText};
          font-size: 1rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .service-card:hover .learn-more {
          color: ${theme.accent};
          transform: translateX(5px);
        }
      `}</style>
      <section className="service-section-wrapper">
        <div className="service-container">
          <div className="service-header">
            <h2>Our Areas of Expertise</h2>
            <p style={{color:"black", fontFamily:"Poppins", fontWeight:"300"}}>
              We provide strategic counsel across a spectrum of immigration and personal law, ensuring clarity and confidence at every step.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div
                key={index}
                ref={el => { if(el) serviceRefs.current[index] = el; }}
                onClick={() => handleServiceClick(service.link)}
                className="service-card"
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseMove={handleMouseMove}
              >
                <div className="icon-container">
                  {service.icon}
                </div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                  {service.title}
                </h3>

                <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
                  {service.content}
                </p>

                <div className="learn-more">
                  Learn More
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaRedesigned;
