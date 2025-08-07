'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Heart, Home, Award, Briefcase, Star, ArrowRight } from 'lucide-react';

// --- MOCK COMPONENTS ---
interface LinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any;
}

const Link = ({ href, children, ...props }: LinkProps) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// --- INTERFACES ---
interface ServiceLink {
    name: string;
    href: string;
}

interface ServiceCategory {
    title: string;
    icon: ReactNode;
    links: ServiceLink[];
}

// --- COMPONENT DATA ---
const serviceCategories: ServiceCategory[] = [
    {
        title: 'Unite Families in UK',
        icon: <Heart className="w-8 h-8" />,
        links: [
            { name: 'Spouse Visa UK', href: '#' },
            { name: 'Spouse/Civil Partnership Visa Extension', href: '#' },
            { name: 'Spouse Visa Appeal', href: '#' },
            { name: 'Same Sex partner Visa', href: '#' },
            { name: 'Civil Partnership', href: '#' },
        ]
    },
    {
        title: 'Secure Permanent UK Residency',
        icon: <Home className="w-8 h-8" />,
        links: [
            { name: 'Indefinite Leave to Remain (ILR)', href: '#' },
            { name: 'ILR Refusals Due to Tax Amendments', href: '#' },
            { name: 'Judicial Review for ILR Refusal', href: '#' },
            { name: 'ILR /Settlement Visa Refusal Appeal', href: '#' },
        ]
    },
    {
        title: 'Path to UK Citizenship',
        icon: <Award className="w-8 h-8" />,
        links: [
            { name: 'British Citizenship Application', href: '#' },
            { name: 'British Citizenship for EU or EEA Nationals', href: '#' },
            { name: 'Naturalise As A British Citizen - Form AN', href: '#' },
        ]
    },
    {
        title: 'UK Skilled Work Opportunity',
        icon: <Briefcase className="w-8 h-8" />,
        links: [
            { name: 'Skilled Worker Visa', href: '#' },
            { name: 'Skilled Worker Visa Refusal', href: '#' },
        ]
    },
    {
        title: 'Unlock UK Talent Opportunities',
        icon: <Star className="w-8 h-8" />,
        links: [
            { name: 'Global Talent Visa', href: '#' },
            { name: 'Global Talent Accelerator', href: '#' },
            { name: 'Permanent visa for exceptionally talented', href: '#' },
        ]
    }
];


// --- MAIN PAGE COMPONENT ---
const PersonalImmigrationPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
        elementsToAnimate.forEach(el => observer.observe(el));

        return () => {
            elementsToAnimate.forEach(el => observer.unobserve(el));
        };
    }, []);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!pageRef.current) return;
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = pageRef.current;
        const xPos = (clientX / offsetWidth) * 100;
        const yPos = (clientY / offsetHeight) * 100;
        pageRef.current.style.setProperty('--gradient-x', `${xPos}%`);
        pageRef.current.style.setProperty('--gradient-y', `${yPos}%`);
    };

  return (
    <>
      <div className="pageWrapper" ref={pageRef} onMouseMove={handleMouseMove}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { margin: 0; font-family: 'Poppins', sans-serif; line-height: 1.8; color: #333; background: #fff; font-weight: 300; }
          * { box-sizing: border-box; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
          h1, h2, h3, h4, h5 { font-family: 'Poppins', sans-serif; color: #212C3C; font-weight: 400; }
          h1 { font-size: 3rem; line-height: 1.25; }
          h2 { font-size: 2.5rem; text-align: center; margin-bottom: 1rem; }
          p { color: #555; font-size: 1rem; }
          @media (max-width: 768px) {
            h1 { font-size: 2.25rem; }
            h2 { font-size: 2rem; }
          }
        `}</style>
        <style>{`
          .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
          .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
          
          .hero-section {
            background-color: #1A202C;
            color: white;
            padding: 7rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at var(--gradient-x, 50%) var(--gradient-y, 50%), rgba(185, 148, 106, 0.15), transparent 40%);
            z-index: 1;
            pointer-events: none;
            transition: background 0.2s ease-out;
          }
          .hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
          .hero-content h1 { color: #fff; animation: fadeInDown 1s ease-out 0.2s backwards; }
          .hero-content p { font-size: 1.1rem; margin: 1.5rem 0 2.5rem; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button { background: #B9946A; color: #1A202C; padding: 0.8rem 1.8rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; animation: fadeInUp 1s ease-out 0.6s backwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(185, 148, 106, 0.4); }
          
          .section { padding: 5rem 0; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 4rem; }
          .section-header .subtitle { color: #B9946A; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .services-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .service-category-card {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 3rem;
            align-items: flex-start;
          }
          .category-title-wrapper {
            position: sticky;
            top: 100px;
          }
          .category-icon {
            width: 72px;
            height: 72px;
            background: #f8f9fa;
            color: #B9946A;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            border: 1px solid #e9ecef;
          }
          .category-title-wrapper h3 {
            font-size: 2rem;
            line-height: 1.3;
            margin: 0;
          }
          .service-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          .service-link-card {
            background: #fff;
            padding: 1.5rem;
            border-radius: 12px;
            text-decoration: none;
            color: #212C3C;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            border: 1px solid #e9ecef;
            box-shadow: 0 5px 15px rgba(0,0,0,0.03);
          }
          .service-link-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.07);
            border-color: #B9946A;
          }
          .service-link-card span {
            font-weight: 500;
          }
          .service-link-card .arrow-icon {
            color: #B9946A;
            transition: transform 0.3s ease;
            opacity: 0;
          }
          .service-link-card:hover .arrow-icon {
            transform: translateX(5px);
            opacity: 1;
          }
          
          @media (max-width: 992px) {
            .service-category-card {
                grid-template-columns: 1fr;
            }
            .category-title-wrapper {
                position: static;
                text-align: center;
            }
            .category-icon {
                margin-left: auto;
                margin-right: auto;
            }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Personal Immigration Services</h1>
              <p>
                Expert legal guidance for you and your family on your journey to making the UK your home. We handle everything from visa applications to citizenship.
              </p>
              <Link href="#contact" className="cta-button">Contact Our Team</Link>
            </div>
          </div>
        </section>

        <section id="services" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR EXPERTISE</div>
                    <h2>How We Can Help</h2>
                </div>
                <div className="services-grid">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="service-category-card animate-on-scroll" style={{transitionDelay: `${index * 0.15}s`}}>
                            <div className="category-title-wrapper">
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="service-links-grid">
                                {category.links.map((link, linkIndex) => (
                                    <Link key={linkIndex} href={link.href} className="service-link-card">
                                        <span>{link.name}</span>
                                        <div className="arrow-icon"><ArrowRight size={20} /></div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default PersonalImmigrationPage;
