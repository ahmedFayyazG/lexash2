'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { ClipboardCheck, FileText, Building, Shield, LifeBuoy, ChevronDown } from 'lucide-react';

// --- MOCK LINK COMPONENT (for standalone use) ---
// In a real Next.js app, you would import Link from 'next/link'
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

// --- SEO METADATA (for parent Server Component) ---
export const metadata = {
  title: 'Sponsor Licence Renewal Solicitors UK | Lexington Ashworth',
  description: 'Renew your UK Sponsor Licence with confidence. Lexington Ashworth solicitors provide expert guidance, compliance checks, and Home Office representation for smooth licence renewal.',
};

// --- TYPE DEFINITIONS ---
interface Requirement {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- COMPONENT DATA ---
const requirements: Requirement[] = [
  {
    title: "Licence Health Check",
    description: "We review your current compliance systems and identify any risks before renewal.",
    icon: (
      <span className="requirementIcon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      </span>
    ),
  },
  {
    title: "Application Preparation",
    description: "We ensure your renewal application is accurate, complete, and submitted on time.",
    icon: (
      <span className="requirementIcon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </span>
    ),
  },
  {
    title: "Compliance Audit Prep",
    description: "We prepare you for possible Home Office visits and inspections.",
    icon: (
      <span className="requirementIcon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4v0a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4z"/></svg>
      </span>
    ),
  },
  {
    title: "Ongoing Support",
    description: "We offer continuous advice even after your renewal to keep you compliant.",
    icon: (
      <span className="requirementIcon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </span>
    ),
  },
];

const processSteps: ProcessStep[] = [
    {
        number: 1,
        title: 'Initial Review',
        description: 'We check your current Sponsor Licence details and expiry dates.',
    },
    {
        number: 2,
        title: 'Compliance Audit',
        description: 'We assess your HR systems to ensure they meet Home Office standards.',
    },
    {
        number: 3,
        title: 'Application Preparation',
        description: 'We gather and organise the required documents.',
    },
    {
        number: 4,
        title: 'Submission & Support',
        description: 'We submit your renewal application on time and advise on ongoing duties to keep your licence secure.',
    },
];

const benefits = [
    "Retain the ability to sponsor skilled workers",
    "Avoid disruption to your business operations",
    "Protect your reputation with the Home Office",
    "Ensure full compliance with immigration laws",
    "Peace of mind with expert legal support",
];

const faqItems: FAQItem[] = [
  {
    question: 'When should you apply for renewal?',
    answer: 'You can apply to renew your Sponsor Licence up to 3 months before it expires. Leaving it too late is risky, as an expired licence cannot be reinstated — you would have to apply for a new one from scratch.',
  },
  {
    question: 'What does the Home Office check during renewal?',
    answer: 'When renewing, the Home Office may check that your organisation continues to maintain robust HR systems, keep accurate records, report changes in circumstances on time, and comply with UK employment laws.',
  },
  {
    question: 'What are the consequences of failing to renew?',
    answer: 'Not renewing your Sponsor Licence has serious consequences, including the immediate loss of ability to sponsor workers, disruption to your business, and damage to your reputation with the Home Office.',
  },
];

const relatedServices = [
    { title: 'New Sponsor Licence Applications', href: '/sponsor-licence' },
    { title: 'Skilled Worker Visas', href: '/skilled-worker-visa' },
    { title: 'Indefinite Leave to Remain (ILR)', href: '/ilr' },
    { title: 'Business Immigration', href: '/business-immigration' },
];

// --- MAIN COMPONENT ---
const SponsorLicenceRenewalPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body { 
            margin: 0; 
            font-family: 'Poppins', sans-serif; 
            line-height: 1.8; 
            color: #555; 
            background: #fff; 
            font-weight: 300; 
        }
        
        * { 
            box-sizing: border-box; 
        }
      `}</style>
      <style jsx>{`
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        .section {
            margin-bottom: 3rem;
        }
        .paragraph {
            margin: 0 0 1.5rem;
            color: #555;
            line-height: 1.8;
            font-size: 1.05rem;
        }
        .h1 {
            font-size: 3rem;
            font-weight: 700;
            margin: 0 0 1rem;
            line-height: 1.2;
            color: #fff;
        }
        .h2 {
            font-size: 2rem;
            color: #2c3e50;
            margin: 0 0 1.5rem;
            position: relative;
            padding-left: 1rem;
            font-weight: 600;
        }
        .h2::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 80%;
            background: #EBBF7D;
            border-radius: 2px;
        }
        .heroSection {
            background: linear-gradient(135deg, #2c3e50 0%, #3a4a5c 100%);
            color: #fff;
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
        }
        .heroSection::before {
            content: "";
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.05" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom / cover;
        }
        .heroContent {
            position: relative;
            z-index: 1;
            padding-top: 6rem;
        }
        .heroDescription {
            font-size: 1.25rem;
            opacity: .95;
            max-width: 800px;
            line-height: 1.8;
            color: #fff;
        }
        .breadcrumb {
            display: flex;
            align-items: center;
            gap: .5rem;
            margin-bottom: 2rem;
            font-size: .9rem;
            opacity: .9;
        }
        .breadcrumb :global(a) {
            color: #EBBF7D;
            text-decoration: none;
        }
        .main {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 3rem;
            padding: 4rem 0;
        }
        .contentArea {
            background: #fff;
        }
        .requirementsGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        .requirementCard {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 12px;
            border-left: 4px solid #EBBF7D;
            transition: transform .3s, box-shadow .3s;
        }
        .requirementCard:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,.1);
        }
        .requirementCard h4 {
            color: #2c3e50;
            font-size: 1.25rem;
            margin: 0 0 1rem;
            display: flex;
            align-items: center;
            gap: .5rem;
        }
        .requirementIcon {
            width: 40px;
            height: 40px;
            background: #EBBF7D;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        .requirementIcon :global(svg) {
            width: 20px;
            height: 20px;
            stroke: #2c3e50;
        }
        .processSteps {
            margin: 2rem 0;
        }
        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2rem;
            position: relative;
        }
        .step:not(:last-child)::after {
            content: "";
            position: absolute;
            left: 30px;
            top: 60px;
            bottom: -20px;
            width: 2px;
            background: #e5e5e5;
        }
        .stepNumber {
            width: 60px;
            height: 60px;
            background: #EBBF7D;
            color: #2c3e50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.5rem;
            flex-shrink: 0;
            margin-right: 1.5rem;
        }
        .stepContent h4 {
            color: #2c3e50;
            font-size: 1.25rem;
            margin: 0 0 .5rem;
        }
        .benefitsList {
            list-style: none;
            margin: 2rem 0;
            padding: 0;
        }
        .benefitsList li {
            padding: 1rem 0 1rem 3rem;
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            transition: padding-left .3s, background .3s;
        }
        .benefitsList li:hover {
            background: #f8f9fa;
            padding-left: 3.5rem;
        }
        .benefitsList li::before {
            content: "✓";
            position: absolute;
            left: 1rem;
            top: 1rem;
            width: 24px;
            height: 24px;
            background: #EBBF7D;
            color: #2c3e50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
        }
        .sidebar {
            position: sticky;
            top: 2rem;
            height: fit-content;
        }
        .ctaCard {
            background: linear-gradient(135deg,#EBBF7D 0%,#f4e4c1 100%);
            padding: 2.5rem;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(235,191,125,.3);
        }
        .ctaCard h3 {
            color: #2c3e50;
            font-size: 1.75rem;
            margin: 0 0 1rem;
        }
        .ctaCard p {
            color: #2c3e50;
            margin: 0 0 1.5rem;
            font-weight: 500;
        }
        .ctaButton {
            display: inline-flex;
            align-items: center;
            gap: .5rem;
            background: #2c3e50;
            color: #fff;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: transform .2s, box-shadow .2s;
            box-shadow: 0 4px 15px rgba(44,62,80,.3);
        }
        .ctaButton:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(44,62,80,.4);
        }
        .quickLinks {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
        }
        .quickLinks h4 {
            color: #2c3e50;
            font-size: 1.25rem;
            margin: 0 0 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #EBBF7D;
        }
        .quickLinks ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .quickLinks li {
            margin-bottom: 1rem;
        }
        .quickLink {
            color: #555;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: .5rem;
            transition: .3s;
            padding: .5rem;
            border-radius: 6px;
        }
        .quickLink:hover {
            color: #EBBF7D;
            background: #fff;
            padding-left: 1rem;
        }
        .quickLink::before {
            content: "→";
            color: #EBBF7D;
            font-weight: 700;
        }
        .faqItem {
            background: #f8f9fa;
            margin-bottom: 1rem;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e5e5e5;
        }
        .faqQuestion {
            padding: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: #2c3e50;
            background: none;
            border: none;
            width: 100%;
            text-align: left;
            font-size: 1rem;
            transition: background .3s,color .3s;
        }
        .faqQuestion:hover {
            background: #EBBF7D;
            color: #fff;
        }
        .faqAnswer {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height .25s ease, padding .25s ease;
        }
        .faqItem.active .faqAnswer {
            padding: 1.5rem;
            max-height: 500px;
        }
        .faqIcon {
            transition: transform .3s;
        }
        .faqItem.active .faqIcon {
            transform: rotate(180deg);
        }
        @media(max-width:968px) {
            .main { grid-template-columns: 1fr; }
            .h1 { font-size: 2rem; }
            .sidebar { position: static; }
            .requirementsGrid { grid-template-columns: 1fr; }
        }
        @media(max-width:768px) {
            .heroSection { padding: 3rem 0; }
            .heroDescription { font-size: 1.1rem; }
            .step { flex-direction: column; text-align: center; }
            .stepNumber { margin: 0 auto 1rem; }
            .step:not(:last-child)::after { display: none; }
        }
      `}</style>
        <header className="heroSection">
            <div className="heroContent container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span>Sponsor Licence Renewal
                </nav>
                <h1 className="h1">Sponsor Licence Renewal: Keep Your Business Compliant and Approved</h1>
                <p className="heroDescription">
                    Failing to renew your licence on time can result in your business losing the ability to employ or retain sponsored staff. It could also damage your company’s reputation with the Home Office.
                </p>
                <Link href="#contact" className="hero-cta">Start Your Renewal Today</Link>
            </div>
        </header>

        <div className="main-layout container">
            <main>
                <section className="section section-light" id="why-us">
                    <h2 className="h2">Why Choose Lexington Ashworth for Your Renewal?</h2>
                    <p className="paragraph">
                        At Lexington Ashworth Solicitors, we support UK businesses of all sizes with Sponsor Licence renewals. Our immigration lawyers have extensive experience in compliance matters and dealing with the Home Office.
                    </p>
                    <div className="requirementsGrid">
                        {renewalBenefits.map((item, index) => (
                            <div className="requirementCard" key={item.title}>
                                <h4>
                                    {item.icon}
                                    {item.title}
                                </h4>
                                <p className="paragraph">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section section-dark" id="process">
                    <h2 className="h2">Our Step-by-Step Renewal Process</h2>
                    <div className="processSteps">
                        {renewalProcessSteps.map((step) => (
                             <div className="step" key={step.title}>
                                <div className="stepNumber" aria-hidden="true">{step.number}</div>
                                <div className="stepContent">
                                    <h4>{step.title}</h4>
                                    <p className="paragraph">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="section section-light" id="consequences">
                    <h2 className="h2">Consequences of Failing to Renew</h2>
                     <ul className="benefitsList">
                         {benefits.map((b, i) => <li key={i}>{b}</li>)}
                     </ul>
                </section>

                <section className="section section-dark" id="faq">
                    <h2 className="h2">Frequently Asked Questions</h2>
                    <div className="faqContainer">
                        {faqItems.map((item, index) => (
                            <div className={`faqItem ${activeFAQ === index ? 'active' : ''}`} key={item.question}>
                                <div className="faqQuestion" onClick={() => toggleFAQ(index)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)}>
                                    <span>{item.question}</span>
                                    <span className="faq-icon"><ChevronDown size={24} /></span>
                                </div>
                                <div className="faqAnswer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <aside className="sidebar" aria-label="Actions and quick links">
                <div className="ctaCard" id="contact">
                    <h3>Start Your Renewal Today</h3>
                    <p>Don’t risk losing your ability to employ skilled workers. Start your Sponsor Licence renewal process early with expert guidance.</p>
                    <Link href="/contact" className="ctaButton">Book a Consultation</Link>
                </div>

                <div className="quickLinks">
                     <h4>Related Services</h4>
                        <ul>
                            {relatedServices.map(service => (
                                <li key={service.title}><Link href={service.href} className="quickLink">{service.title}</Link></li>
                            ))}
                        </ul>
                </div>
            </aside>
        </div>
      </div>
  );
};

export default SponsorLicenceRenewalPage;
