'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';

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
interface WillType {
    title: string;
    description: string;
    href: string;
    icon: ReactNode;
    image: string;
}

// --- COMPONENT DATA ---
const willTypes: WillType[] = [
    {
        title: 'Islamic Wills',
        description: 'Compliant with Shariah principles, ensuring your legacy is handled in accordance with your faith.',
        href: '/islamic-wills',
        icon: <BookOpen />,
        image: 'https://images.unsplash.com/photo-1542841841-6cc985354175?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Conventional Wills',
        description: 'Standard UK estate planning to protect your assets and provide for your loved ones.',
        href: '/conventional-wills',
        icon: <FileText />,
        image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2070&auto=format&fit=crop',
    }
];


// --- MAIN PAGE COMPONENT ---
const WillsWritingPage = () => {
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
        heroSection.style.setProperty('--gradient-x', `${xPos}%`);
        heroSection.style.setProperty('--gradient-y', `${yPos}%`);
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

          .wills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .will-card {
            background: #F9F9F9;
            border-radius: 20px;
            padding: 2.5rem;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden;
            text-decoration: none;
            color: #212C3C;
          }
          .will-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 20px;
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
          .will-card:hover::before {
            opacity: 1;
          }
          .will-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          }
          .will-icon {
            width: 64px;
            height: 64px;
            background-color: #FFFFFF;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #B9946A;
            transition: all 0.3s ease;
            margin-bottom: 2rem;
            flex-shrink: 0;
            border: 1px solid #EAE6E1;
          }
          .will-card:hover .will-icon {
            background-color: #B9946A;
            color: white;
            transform: scale(1.1);
          }
          .will-card h3 {
            font-size: 1.75rem;
            font-weight: 500;
            margin-bottom: 1rem;
          }
          .will-card p {
            font-size: 1rem;
            color: #5A6774;
            min-height: 80px;
          }
          .learn-more {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #B9946A;
            font-weight: 500;
            margin-top: 2rem;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
          }
          .will-card:hover .learn-more {
            opacity: 1;
            transform: translateX(0);
          }
          
          @media (max-width: 768px) {
            .wills-grid {
                grid-template-columns: 1fr;
            }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Wills Writing Services</h1>
              <p>
                Secure your legacy and protect your loved ones with our expert will writing services. We provide tailored solutions for both conventional UK wills and Shariah-compliant Islamic wills.
              </p>
              <Link href="#contact" className="cta-button">Arrange a Consultation</Link>
            </div>
          </div>
        </section>

        <section id="services" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR SERVICES</div>
                    <h2>Plan for the Future with Confidence</h2>
                </div>
                <div className="wills-grid">
                    {willTypes.map((will, index) => (
                        <Link 
                            key={index} 
                            href={will.href} 
                            className="will-card animate-on-scroll" 
                            style={{transitionDelay: `${index * 100}ms`}}
                            onMouseMove={handleCardMouseMove}
                        >
                            <div className="will-icon">{will.icon}</div>
                            <h3>{will.title}</h3>
                            <p>{will.description}</p>
                            <div className="learn-more">
                                <span>Learn More</span>
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default WillsWritingPage;
