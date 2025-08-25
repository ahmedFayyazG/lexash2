'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Heart, Shield, FileText, UserCheck, Clock, CheckCircle, Phone, Mail, MapPin, Search, XCircle } from 'lucide-react';

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

// --- SEO METADATA ---
// In a real Next.js App Router project, this would be exported from the page.tsx file
// export const metadata = {
//   title: 'Spouse Visa UK | Live With Your Partner in the United Kingdom',
//   description: 'Lexington Ashworth Solicitors specialise in UK Spouse Visa applications, helping you reunite with your partner. Expert advice on financial and relationship requirements.',
// };


// --- INTERFACES ---
interface ListItem {
    text: string;
}

// --- COMPONENT DATA ---
const financialSources: ListItem[] = [
    { text: 'Employment income' },
    { text: 'Self-employment' },
    { text: 'Pension income' },
    { text: 'Cash savings (over £62,500 if relying on savings alone)' },
    { text: 'Certain non-employment income' },
];

const refusalReasons: ListItem[] = [
    { text: 'Lack of sufficient relationship evidence (e.g., joint documents, photographs, communication history)' },
    { text: 'Failure to meet the income threshold or provide correct financial documents' },
    { text: 'Issues with the English language test' },
    { text: 'Incomplete or inconsistent information on the application' },
];

const howWeHelp: { text: string; icon: ReactNode }[] = [
    { text: 'Eligibility Assessment – We confirm your suitability before you apply', icon: <Search size={20} /> },
    { text: 'Document Preparation – We prepare and check your financial, relationship, and accommodation evidence', icon: <FileText size={20} /> },
    { text: 'Application Drafting – We complete the Home Office forms and ensure full compliance with requirements', icon: <UserCheck size={20} /> },
    { text: 'Legal Representation – We correspond with the Home Office on your behalf', icon: <Shield size={20} /> },
    { text: 'Ongoing Support – From application to approval, we guide you at every stage', icon: <Heart size={20} /> },
];

const whyChooseUsItems: ListItem[] = [
    { text: 'Experienced immigration solicitors with proven success in Spouse Visa cases' },
    { text: 'Local support from a trusted law firm in Manchester' },
    { text: 'Tailored advice based on your personal and financial circumstances' },
    { text: 'Guidance for future applications, including visa extensions and ILR' },
];


// --- MAIN PAGE COMPONENT ---
const SpouseVisaPage = () => {
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
    if (heroSection && heroSection instanceof HTMLElement) {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroSection;
        const xPos = (clientX / offsetWidth) * 100;
        const yPos = (clientY / offsetHeight) * 100;
        heroSection.style.setProperty('--gradient-x', `${xPos}%`);
        heroSection.style.setProperty('--gradient-y', `${yPos}%`);
    }
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
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 4rem; }
          .section-header .subtitle { color: #B9946A; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .intro-content h2 { text-align: left; }
          .intro-image { border-radius: 12px; max-width: 100%; }

          .support-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .support-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }
          .support-icon {
            color: #B9946A;
            flex-shrink: 0;
            margin-top: 5px;
          }
          
          .cta-section {
            background: #212C3C;
            color: white;
            padding: 4rem 0;
            text-align: center;
          }
          .cta-section h2 { color: white; }
          .cta-section p { color: rgba(255,255,255,0.8); max-width: 600px; margin: 1.5rem auto 2rem; }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Spouse Visa UK: Live With Your Partner in the United Kingdom</h1>
              <p>
                The UK Spouse Visa allows married partners, civil partners, and in some cases long-term unmarried partners of British citizens or settled persons to live together in the UK.
              </p>
              <Link href="#contact" className="cta-button">Start Your Application</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Financial Requirements Explained</h2>
                        <p>The financial threshold is one of the most common reasons for refusals. You may meet the requirement through:</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            {financialSources.map((item, index) => (
                                <li key={index} className="support-item">
                                    <div className="support-icon"><CheckCircle size={20} /></div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="https://images.unsplash.com/photo-1560520450-4d2d4c00a29d?q=80&w=2070&auto=format&fit=crop" alt="A happy couple holding hands" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="support" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR EXPERTISE</div>
                    <h2>How Lexington Ashworth Solicitors Can Help</h2>
                </div>
                <ul className="support-list" style={{maxWidth: '800px', margin: '0 auto'}}>
                    {howWeHelp.map((item, index) => (
                        <li key={index} className="support-item animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="support-icon">{item.icon}</div>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        
        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="https://images.unsplash.com/photo-1518619713589-09a25b1848b3?q=80&w=2070&auto=format&fit=crop" alt="A person looking at a passport and travel documents" className="intro-image" />
                    </div>
                    <div className="intro-content animate-on-scroll">
                        <h2>Common Reasons for Refusal</h2>
                        <p>Many applications are refused due to:</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            {refusalReasons.map((item, index) => (
                                <li key={index} className="support-item">
                                    <div className="support-icon"><XCircle size={20} /></div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>Start Your Spouse Visa Application Today</h2>
                <p>Reuniting with your partner in the UK is one of life’s most important steps. With Lexington Ashworth Solicitors, you can apply with confidence, knowing your application is handled by experts.</p>
                <Link href="#contact" className="cta-button">Book a Consultation</Link>
            </div>
        </section> */}

      </div>
    </>
  );
};

export default SpouseVisaPage;
