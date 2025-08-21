'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
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
    description: string;
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
        title: 'Unite Families in the UK',
        icon: <Heart className="w-8 h-8" />,
        links: [
            { name: 'Spouse Visa UK', description: 'Begin your life together in the UK.', href: '#' },
            { name: 'Spouse/Civil Partnership Visa Extension', description: 'Continue your journey with your partner.', href: '#' },
            { name: 'Spouse Visa Appeal', description: 'Challenge a refusal with expert help.', href: '#' },
            { name: 'Same-Sex Partner Visa', description: 'Navigate the specific requirements for same-sex partners.', href: '#' },
            { name: 'Civil Partnership Visa', description: 'Formalise your union and build a future.', href: '#' },
        ]
    },
    {
        title: 'Secure Permanent UK Residency',
        icon: <Home className="w-8 h-8" />,
        links: [
            { name: 'Indefinite Leave to Remain (ILR)', description: 'Make the UK your permanent home.', href: '#' },
            { name: 'ILR Refusals Due to Tax Amendments', description: 'Resolve complex tax-related refusals.', href: '#' },
            { name: 'Judicial Review for ILR Refusal', description: 'Challenge unlawful ILR decisions.', href: '#' },
            { name: 'ILR / Settlement Visa Refusal Appeal', description: 'Expert representation for your appeal.', href: '#' },
        ]
    },
    {
        title: 'Path to UK Citizenship',
        icon: <Award className="w-8 h-8" />,
        links: [
            { name: 'British Citizenship Application', description: 'The final step in your UK journey.', href: '#' },
            { name: 'British Citizenship for EU/EEA Nationals', description: 'Navigate post-Brexit citizenship routes.', href: '#' },
            { name: 'Naturalisation As A British Citizen (Form AN)', description: 'Understand the formal application process.', href: '#' },
        ]
    },
    {
        title: 'UK Skilled Work Opportunities',
        icon: <Briefcase className="w-8 h-8" />,
        links: [
            { name: 'Skilled Worker Visa', description: 'For professionals with a UK job offer.', href: '#' },
            { name: 'Skilled Worker Visa Refusal', description: 'Overturn a disappointing decision.', href: '#' },
        ]
    },
    {
        title: 'Unlock UK Talent Opportunities',
        icon: <Star className="w-8 h-8" />,
        links: [
            { name: 'Global Talent Visa', description: 'For leaders in science, arts, and tech.', href: '#' },
            { name: 'Global Talent Accelerator', description: 'Fast-track your application as a leader.', href: '#' },
            { name: 'Permanent Visa for Exceptional Talent', description: 'Settle in the UK based on your achievements.', href: '#' },
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
            elementsToAnimate.forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(!pageRef.current) return;
        const heroSection = pageRef.current.querySelector('.hero-section');
        if (heroSection) {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = heroSection as HTMLElement;
            const xPos = (clientX / offsetWidth) * 100;
            const yPos = (clientY / offsetHeight) * 100;
       const el = heroSection as HTMLElement | null;
if (el) {
  el.style.setProperty('--gradient-x', `${xPos}%`);
  el.style.setProperty('--gradient-y', `${yPos}%`);
}
        }
    };

    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
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
            padding-top: 15rem;
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

          .services-container {
            display: flex;
            flex-direction: column;
            gap: 4rem;
          }
          .service-category-section {
            padding-bottom: 4rem;
            border-bottom: 1px solid #EAE6E1;
          }
          .service-category-section:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }

          .category-header {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2.5rem;
          }
          .category-icon {
            width: 64px;
            height: 64px;
            flex-shrink: 0;
            background: #f8f9fa;
            color: #B9946A;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #e9ecef;
          }
          .category-header h3 {
            margin: 0;
            font-size: 2rem;
            line-height: 1.3;
          }
          .service-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          .service-link-card {
            background: #F9F9F9;
            border-radius: 16px;
            padding: 2rem;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden;
            text-decoration: none;
            color: #212C3C;
          }
          .service-link-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 16px;
            border: 1px solid transparent;
            background: radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #B9946A20, transparent 80%) border-box;
            -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
            transition: all 0.3s ease;
            opacity: 0;
          }
          .service-link-card:hover::before {
            opacity: 1;
          }
          .service-link-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          }
          .service-card-content h4 {
            font-size: 1.25rem;
            font-weight: 500;
            margin: 0 0 0.5rem;
          }
          .service-card-content p {
            font-size: 0.9rem;
            color: #5A6774;
            margin-bottom: 2rem;
            min-height: 50px;
          }
          .learn-more {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #B9946A;
            font-weight: 500;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
          }
          .service-link-card:hover .learn-more {
            opacity: 1;
            transform: translateX(0);
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
                <div className="services-container">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="service-category-section animate-on-scroll" style={{transitionDelay: `${index * 0.15}s`}}>
                            <div className="category-header">
                                <div className="category-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="service-links-grid">
                                {category.links.map((link, linkIndex) => (
                                    <Link 
                                        key={linkIndex} 
                                        href={link.href} 
                                        className="service-link-card"
                                        onMouseMove={handleCardMouseMove}
                                    >
                                        <div className="service-card-content">
                                            <h4>{link.name}</h4>
                                            <p>{link.description}</p>
                                            <div className="learn-more">
                                                <span>Learn More</span>
                                                <ArrowRight size={20} />
                                            </div>
                                        </div>
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
