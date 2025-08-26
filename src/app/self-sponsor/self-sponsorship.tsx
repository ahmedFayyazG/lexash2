'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Building, UserCheck, Shield, CheckCircle, ArrowRight, FileText, Briefcase } from 'lucide-react';

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
//   title: 'Self-Sponsorship UK Requirements | UK Visa & Sponsor Licence Solicitors',
//   description: 'Discover how to secure a UK visa through Self-Sponsorship. Learn the key requirements for starting your business, obtaining a Sponsor Licence, and applying for a Skilled Worker visa. Expert guidance from immigration solicitors.',
//   keywords: 'Self-Sponsorship UK, UK self-sponsorship visa requirements, sponsor licence UK, skilled worker visa self sponsorship, business immigration UK, self sponsor visa',
// };


// --- INTERFACES ---
interface Step {
    number: string;
    title: string;
    description: string;
}

interface Requirement {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const requirements: Requirement[] = [
    { title: 'Business Structure', description: 'Incorporate a genuine UK company at Companies House with a clear business plan and operating model.', icon: <Building size={24} /> },
    { title: 'Sponsor Licence', description: 'Apply for and secure a Sponsor Licence by proving your business is legitimate, compliant, and capable of fulfilling sponsorship duties.', icon: <FileText size={24} /> },
    { title: 'Financial Requirements', description: 'Demonstrate you can pay yourself the Skilled Worker minimum salary (currently £38,700 per year or the “going rate” for your occupation).', icon: <Briefcase size={24} /> },
    { title: 'Documentation', description: 'Provide evidence including business plans, contracts, financial forecasts, and proof of genuine trading activities.', icon: <UserCheck size={24} /> },
];

const processSteps: Step[] = [
    { number: '01', title: 'Company Formation', description: 'Register your company with Companies House, set up a business bank account, and prepare contracts.' },
    { number: '02', title: 'Business Establishment', description: 'Secure office space (virtual or physical), build compliance systems, and ensure operational readiness.' },
    { number: '03', title: 'Sponsor Licence Application', description: 'Apply to the Home Office for a Sponsor Licence and pass eligibility and compliance checks.' },
    { number: '04', title: 'Skilled Worker Visa Application', description: 'Assign yourself a Certificate of Sponsorship and apply for your Skilled Worker visa.' },
];


// --- MAIN PAGE COMPONENT ---
const SelfSponsorshipRequirementsPage = () => {
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

          .requirements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .requirement-card {
            background: #fff;
            padding: 2.5rem 2rem;
            border-radius: 16px;
            border: 1px solid #e9ecef;
            text-align: center;
            transition: all 0.3s ease;
          }
          .requirement-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.07);
          }
          .requirement-icon {
            width: 64px;
            height: 64px;
            background: #B9946A;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          .requirement-card h4 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }
          .requirement-card p {
            font-size: 0.95rem;
            color: #5A6774;
          }

          .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
          }
          .timeline-item {
            padding: 1rem 3rem 2rem 5rem;
            position: relative;
            background-color: inherit;
            width: 100%;
          }
          .timeline-icon {
            position: absolute;
            width: 60px;
            height: 60px;
            left: 0;
            background-color: #fff;
            border: 3px solid #B9946A;
            top: 15px;
            border-radius: 50%;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: #B9946A;
          }
          .timeline-content {
            padding: 1.5rem;
            background-color: #fff;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            flex-grow: 1;
          }
          .timeline-content h3 {
            margin-top: 0;
            font-size: 1.25rem;
          }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
          @media (max-width: 768px) {
            .timeline-item { width: 100%; padding-left: 80px; padding-right: 15px; }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Self-Sponsorship UK Requirements</h1>
              <p>
                The Self-Sponsorship route offers entrepreneurs, business owners, and professionals a unique pathway to live and work in the UK without needing an external sponsor. By establishing and running your own UK-registered company, you can obtain a Sponsor Licence and assign yourself a Skilled Worker visa.
              </p>
              <Link href="#contact" className="cta-button">Check Your Eligibility</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Understanding Self-Sponsorship in the UK</h2>
                        <p>Self-Sponsorship is not a separate visa category but a practical way to use the existing Skilled Worker visa system. Instead of relying on an employer, you create your own UK company and become both the sponsor and the sponsored employee.</p>
                    </div>
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" alt="A person working on a business plan" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="requirements" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">ELIGIBILITY</div>
                    <h2>Key Requirements</h2>
                    <p>To succeed in a Self-Sponsorship application, you must meet specific Home Office requirements:</p>
                </div>
                <div className="requirements-grid">
                    {requirements.map((item, index) => (
                        <div key={index} className="requirement-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="requirement-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="process" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">STEP-BY-STEP</div>
                    <h2>The Self-Sponsorship Process</h2>
                </div>
                <div className="timeline">
                    {processSteps.map((step, index) => (
                        <div key={index} className="timeline-item animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="timeline-icon">{step.number}</div>
                            <div className="timeline-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
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

export default SelfSponsorshipRequirementsPage;
