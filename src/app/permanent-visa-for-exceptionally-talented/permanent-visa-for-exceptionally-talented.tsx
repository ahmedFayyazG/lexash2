'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Award, CheckCircle, ArrowRight, Search, FileText, Gavel, UserCheck, Shield } from 'lucide-react';

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
//   title: 'Global Talent Visa UK | Immigration Solicitors Manchester',
//   description: 'Apply for the UK Global Talent Visa with Lexington Ashworth Solicitors, Manchester. Immigration lawyers helping leaders in tech, science, arts, and academia secure endorsement and citizenship.',
// };


// --- INTERFACES ---
interface ListItem {
    text: string;
}

interface Step {
    number: string;
    title: string;
    description: string;
}

// --- COMPONENT DATA ---
const whoCanApply: ListItem[] = [
    { text: 'Academia or Research – Scientists, researchers, and academics with significant contributions.' },
    { text: 'Arts and Culture – Artists, film-makers, musicians, fashion designers, architects, and more.' },
    { text: 'Digital Technology – Innovators, software engineers, product developers, and digital entrepreneurs.' },
];

const howWeHelp: { text: string; icon: ReactNode }[] = [
    { text: 'Eligibility Review – Confirming whether you meet the criteria before applying.', icon: <Search size={20} /> },
    { text: 'Evidence Preparation – Structuring your portfolio of achievements, awards, and references.', icon: <FileText size={20} /> },
    { text: 'Endorsement Application – Submitting your case to the appropriate endorsing body.', icon: <UserCheck size={20} /> },
    { text: 'Visa Application Support – Preparing and submitting your Home Office application once endorsed.', icon: <Shield size={20} /> },
    { text: 'Ongoing Immigration Planning – Guiding you towards ILR and eventual British citizenship.', icon: <Award size={20} /> },
];

const stepByStep: Step[] = [
    { number: '01', title: 'Initial Consultation', description: 'We review your career history and achievements.' },
    { number: '02', title: 'Endorsement Preparation', description: 'We prepare strong evidence and submit it to the relevant endorsing body.' },
    { number: '03', title: 'Visa Application', description: 'Once endorsed, we file your Global Talent Visa application with the Home Office.' },
    { number: '04', title: 'Decision & Entry', description: 'You receive your visa and begin your journey in the UK.' },
    { number: '05', title: 'Settlement', description: 'We assist with ILR and citizenship applications once you qualify.' },
];


// --- MAIN PAGE COMPONENT ---
const GlobalTalentVisaPage = () => {
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

          .cta-section {
            background: #212C3C;
            color: white;
            padding: 4rem 0;
            text-align: center;
          }
          .cta-section h2 { color: white; }
          .cta-section p { color: rgba(255,255,255,0.8); max-width: 600px; margin: 1.5rem auto 2rem; }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
          @media (max-width: 768px) {
            .timeline-item { width: 100%; padding-left: 80px; padding-right: 15px; }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Global Talent Visa UK – Global Talent Accelerator</h1>
              <p>
                The UK Global Talent Visa is designed to attract the world’s brightest and most skilled individuals to the United Kingdom. It provides a flexible immigration route for leaders and emerging leaders in various fields.
              </p>
              <Link href="#contact" className="cta-button">Start Your Application</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Who Can Apply for the Global Talent Visa?</h2>
                        <p>You may be eligible if you are recognised as a leader or potential leader in one of the following areas:</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            {whoCanApply.map((item, index) => (
                                <li key={index} className="support-item">
                                    <div className="support-icon"><CheckCircle size={20} /></div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop" alt="A diverse group of professionals collaborating" className="intro-image" />
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
        
        <section id="process" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">STEP-BY-STEP</div>
                    <h2>Step-by-Step Process</h2>
                </div>
                <div className="timeline">
                    {stepByStep.map((step, index) => (
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

        <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>Start Your Global Talent Visa Application Today</h2>
                <p>The UK is actively seeking world-class talent. If you are a leader, innovator, or skilled professional, the Global Talent Visa could be your route to a successful career and permanent settlement in the UK.</p>
                <Link href="#contact" className="cta-button">Book a Consultation</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default GlobalTalentVisaPage;
