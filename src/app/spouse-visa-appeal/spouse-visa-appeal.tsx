'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Heart, Shield, FileText, UserCheck, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

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
//   title: 'Spouse Visa Appeal Solicitors UK | Reunite With Your Partner',
//   description: 'Has your Spouse Visa been refused? Lexington Ashworth Solicitors specialise in Spouse Visa appeals, challenging refusals and reuniting families in the UK.',
// };


// --- INTERFACES ---
interface RefusalReason {
    title: string;
    icon: ReactNode;
}

interface AppealStep {
    number: string;
    title: string;
    description: string;
}

// --- COMPONENT DATA ---
const refusalReasons: RefusalReason[] = [
    { title: 'Genuineness of Relationship Doubted', icon: <Heart/> },
    { title: 'Financial Requirements Not Met', icon: <FileText/> },
    { title: 'Documentation Errors or Missing Evidence', icon: <FileText/> },
    { title: 'English Language Requirement Issues', icon: <UserCheck/> },
];

const appealProcess: AppealStep[] = [
    { number: '01', title: 'Analyse the Refusal', description: 'We meticulously review the Home Office’s decision to understand the exact reasons for the rejection and identify legal or factual errors.' },
    { number: '02', title: 'Prepare Grounds of Appeal', description: 'Our team drafts persuasive legal arguments that form the foundation of your case, challenging the refusal on solid grounds.' },
    { number: '03', title: 'Gather & Compile Evidence', description: 'We work with you to strengthen your case by gathering robust relationship evidence, financial records, and witness statements into a comprehensive appeal bundle.' },
    { number: '04', title: 'Represent You at Tribunal', description: 'An experienced advocate from our firm will represent you at the Immigration Tribunal, presenting your case with expertise and conviction.' },
    { number: '05', title: 'Receive the Decision', description: 'Once the Tribunal makes a decision, we provide clear advice on the outcome and the next steps to reunite your family in the UK.' },
];


// --- MAIN PAGE COMPONENT ---
const SpouseVisaAppealPage = () => {
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

          .reasons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
          .reason-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .reason-icon {
            color: #B9946A;
            flex-shrink: 0;
          }
          .reason-card h4 {
            font-size: 1.1rem;
            font-weight: 500;
            margin: 0;
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
            position: relative;
            border-radius: 8px;
            border: 1px solid #e9ecef;
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
              <h1>Spouse Visa Appeal: Reuniting Families, Restoring Futures</h1>
              <p>
                A Spouse Visa refusal does not have to mean separation. With the right legal guidance, you can challenge the Home Office’s decision and fight for your right to live with your loved one in the UK.
              </p>
              <Link href="#contact" className="cta-button">Start Your Appeal</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>When Your Spouse Visa is Refused</h2>
                        <p>A refusal of a UK Spouse Visa can feel devastating. It puts your future, your family life, and your peace of mind on hold. Many applicants assume a refusal is final — but in reality, you may have the legal right to appeal. These refusals can feel unfair, especially when your relationship is genuine and your intention is to build a life together in the UK.</p>
                    </div>
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="https://images.unsplash.com/photo-1560520450-4d2d4c00a29d?q=80&w=2070&auto=format&fit=crop" alt="A couple holding hands" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="reasons" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">COMMON ISSUES</div>
                    <h2>Why Spouse Visas Are Refused</h2>
                </div>
                <div className="reasons-grid">
                    {refusalReasons.map((reason, index) => (
                        <div key={index} className="reason-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="reason-icon">{reason.icon}</div>
                            <h4>{reason.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="process" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">STEP-BY-STEP</div>
                    <h2>The Appeal Process in Simple Steps</h2>
                </div>
                <div className="timeline">
                    {appealProcess.map((step, index) => (
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
                <h2>Why Timing Matters</h2>
                <p>Appeals are time-sensitive. You usually have 14 days (inside the UK) or 28 days (outside the UK) to lodge your appeal. Missing the deadline may mean losing your right to challenge the decision. It’s important to act quickly and seek expert advice as soon as you receive a refusal notice.</p>
                <Link href="#contact" className="cta-button">Contact Us Today</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default SpouseVisaAppealPage;
