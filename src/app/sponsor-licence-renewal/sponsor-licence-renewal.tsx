'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import { Clock, ShieldCheck, DollarSign, Users, ChevronDown } from 'lucide-react';

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
  title: 'Sponsor Licence Renewal | Expert UKVI Compliance Services',
  description: 'Renew your Sponsor Licence on time and stay compliant with UKVI. We offer pre-audits, gap-fixing, and strong renewal submissions to help you hire global talent without disruption.',
  keywords: 'Sponsor Licence Renewal, UKVI Compliance, Home Office Checks, Skilled Worker Visa, UK Immigration',
};

// --- TYPE DEFINITIONS ---
interface Requirement {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessStep {
  number: string;
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
    title: 'Timely Submission',
    description: 'Application must be submitted via the SMS at least 3 months before expiry to prevent any sponsorship disruption.',
    icon: <Clock size={24} />,
  },
  {
    title: 'Compliance Readiness',
    description: 'Right-to-work checks, reporting duties, and HR systems must be fully compliant and ready for potential UKVI audits.',
    icon: <ShieldCheck size={24} />,
  },
  {
    title: 'Genuine Vacancy',
    description: 'Sponsored roles must meet the required skill and salary thresholds, with clear evidence of genuine business need.',
    icon: <DollarSign size={24} />,
  },
  {
    title: 'Record Keeping',
    description: 'Key Personnel information must be current, with robust record-keeping policies and SMS governance in place.',
    icon: <Users size={24} />,
  },
];

const processSteps: ProcessStep[] = [
    {
        number: '1',
        title: 'Initial Audit & Strategy',
        description: 'We begin with a comprehensive audit of your current compliance status, identifying potential risks and formulating a clear renewal strategy.',
    },
    {
        number: '2',
        title: 'Evidence Collation & Prep',
        description: 'Our team works with you to gather and prepare all necessary documentation, ensuring a robust and compelling evidence portfolio.',
    },
    {
        number: '3',
        title: 'Application Submission',
        description: 'We manage the entire submission process through the Sponsor Management System, ensuring accuracy and timeliness.',
    },
    {
        number: '4',
        title: 'Post-Submission Support',
        description: 'We handle all communication with UKVI and prepare you for any potential audits, supporting you until your licence is successfully renewed.',
    },
];

const faqItems: FAQItem[] = [
  {
    question: 'When is the latest I can apply for renewal?',
    answer: 'You must apply before your current licence expires, but we strongly recommend applying at least 3 months in advance to ensure continuous sponsorship rights while UKVI processes the application.',
  },
  {
    question: 'What are the most common reasons for renewal refusal?',
    answer: 'Common pitfalls include failure to report migrant activity, incorrect salary calculations, inadequate right-to-work checks, and poor record-keeping. Our pre-renewal audit is specifically designed to identify and rectify these issues.',
  },
  {
    question: 'Will UKVI definitely visit our premises during renewal?',
    answer: 'While not guaranteed, an audit is always a possibility, especially for businesses in high-risk sectors or those with a history of compliance issues. We ensure you are fully prepared for both desk-based assessments and on-site visits.',
  },
];

const relatedServices = [
    { title: 'New Sponsor Licence Applications', href: '/sponsor-licence' },
    { title: 'Skilled Worker & Dependant Visas', href: '/skilled-worker-visa' },
    { title: 'Global Mobility & Expansion', href: '/business-immigration' },
    { title: 'Mock Compliance Audits', href: '/compliance-audit' },
];


// --- MAIN COMPONENT ---
const SponsorLicenceRenewalPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="page-wrapper">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
        
        :global(:root) {
            --primary-dark: #2c3e50;
            --primary-light: #3a4a5c;
            --accent-gold: #EBBF7D;
            --accent-gold-light: #fdf8f0;
            --text-color: #555;
            --background-light: #f8f9fa;
            --white: #fff;
            --border-color: #e9ecef;
        }

        :global(html) {
            scroll-behavior: smooth;
        }

        :global(body) {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            background-color: var(--white);
            color: var(--text-color);
            line-height: 1.8;
            font-weight: 300;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        :global(h1), :global(h2), :global(h3), :global(h4) {
            font-weight: 400;
            color: var(--primary-dark);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 3rem;
        }

        .section {
            padding: 6rem 0;
            position: relative;
        }
        
        .section-light {
            background-color: var(--white);
        }

        .section-dark {
            background-color: var(--background-light);
        }

        .h1 {
            font-size: 3.2rem;
            margin: 0 0 1.5rem;
            line-height: 1.2;
            color: var(--white);
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .h2 {
            font-size: 2.8rem;
            margin: 0 0 1rem;
            text-align: center;
        }
        
        .section-subtitle {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 4rem auto;
            font-size: 1.1rem;
            font-weight: 300;
        }

        .heroSection {
            background: linear-gradient(135deg, #2c3e50 0%, #3a4a5c 100%);
            color: #fff;
            padding: 8rem 0 8rem 0;
            position: relative;
            overflow: hidden;
        }

        .heroSection::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
        }

        .heroContent {
            position: relative;
            z-index: 1;
        }
        
        .breadcrumb {
            margin-bottom: 2rem;
            font-size: 0.9rem;
            font-weight: 400;
        }
        .breadcrumb :global(a) {
            color: var(--accent-gold);
            text-decoration: none;
            transition: opacity 0.2s;
        }
        .breadcrumb :global(a:hover) {
            opacity: 0.8;
        }
        .breadcrumb span {
            color: rgba(255,255,255,0.6);
            margin: 0 0.5rem;
        }

        .heroDescription {
            font-size: 1.15rem;
            max-width: 650px;
            margin: 0 0 2.5rem 0;
            font-weight: 300;
            opacity: 0.9;
        }
        
        .hero-cta {
            display: inline-block;
            background: var(--accent-gold);
            color: var(--primary-dark);
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 400;
            font-size: 1.1rem;
            transition: transform .2s, box-shadow .2s;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .hero-cta:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }

        .image-section {
            margin-top: -5rem;
            position: relative;
            z-index: 10;
        }
        
        .image-section img {
            width: 100%;
            height: auto;
            max-height: 450px;
            object-fit: cover;
            display: block;
        }

        .main-layout {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 4rem;
            padding: 6rem 0;
        }

        .requirementsGrid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .requirementCard {
            background: var(--white);
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: transform .3s, box-shadow .3s;
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
        }

        .requirementCard:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(44,62,80,0.1);
        }
        
        .requirementCard h4 {
            font-size: 1.3rem;
            margin: 0 0 0.5rem;
            font-weight: 400;
        }
        
        .requirementCard p {
            margin: 0;
            font-size: 0.95rem;
            font-weight: 300;
            line-height: 1.6;
        }

        .requirementIcon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--accent-gold), #f4e4c1);
            border-radius: 12px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: var(--primary-dark);
        }

        .processSteps {
            max-width: 800px;
            margin: 4rem auto 0 auto;
            position: relative;
        }
        
        .process-line {
            position: absolute;
            left: 39px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--border-color);
            z-index: 0;
        }
        
        .step {
            display: flex;
            align-items: flex-start;
            gap: 2rem;
            position: relative;
            padding-bottom: 3rem;
        }
        
        .step:last-child {
            padding-bottom: 0;
        }
        
        .stepNumber {
            flex-shrink: 0;
            width: 80px;
            height: 80px;
            background-color: var(--white);
            border: 2px solid var(--border-color);
            color: var(--accent-gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: 400;
            z-index: 1;
            transition: all 0.3s ease;
        }
        
        .step:hover .stepNumber {
            background-color: var(--primary-dark);
            border-color: var(--primary-dark);
            color: var(--white);
            transform: scale(1.1);
        }
        
        .stepContent {
            padding-top: 1.5rem;
        }
        
        .stepContent h4 {
            margin: 0 0 0.5rem;
            font-size: 1.5rem;
        }

        .faqContainer {
            max-width: 800px;
            margin: 0 auto;
        }
        .faqItem {
            background: var(--white);
            border-radius: 12px;
            margin-bottom: 1rem;
            border: 1px solid var(--border-color);
            overflow: hidden;
            transition: border-color 0.3s ease;
        }
        .faqItem.active {
            border-color: var(--accent-gold);
        }
        .faqQuestion {
            font-size: 1.1rem;
            font-weight: 400;
            cursor: pointer;
            list-style: none;
            position: relative;
            padding: 1.5rem 4rem 1.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .faq-icon {
            transition: transform 0.3s ease;
            color: var(--accent-gold);
        }
        .faqItem.active .faq-icon {
            transform: rotate(180deg);
        }
        .faqAnswer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
        }
        .faqItem.active .faqAnswer {
            max-height: 300px; /* Adjust as needed */
        }
        .faqAnswerContent {
            padding: 0 2rem 1.5rem 2rem;
            font-weight: 300;
        }
        .faqAnswerContent p { margin: 0; }

        .sidebar {
            position: sticky;
            top: 2rem;
            height: fit-content;
        }
        
        .sidebar-widget {
            border-radius: 16px;
            margin-bottom: 2rem;
            border: 1px solid var(--border-color);
            box-shadow: 0 10px 30px rgba(44,62,80,0.05);
            overflow: hidden;
        }

        .sidebar-widget-content {
            padding: 2rem;
        }

        .ctaCard {
            background-color: var(--accent-gold-light);
            text-align: center;
            border-color: var(--accent-gold);
        }

        .ctaCard h3 {
            font-size: 1.75rem;
            margin: 0 0 1rem;
            color: var(--primary-dark);
        }
        .ctaCard p {
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }

        .ctaButton {
            display: inline-block;
            background: var(--primary-dark);
            color: var(--white);
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 400;
            transition: transform .2s, box-shadow .2s, background-color .2s;
        }

        .ctaButton:hover {
            transform: translateY(-3px);
            background-color: var(--primary-light);
            box-shadow: 0 6px 20px rgba(44,62,80,0.2);
        }
        
        .sidebar-widget h4 {
            margin: 0 0 1.5rem;
            font-size: 1.4rem;
        }
        
        .quickLinks ul { list-style: none; padding: 0; margin: 0; }
        .quickLinks li { margin-bottom: 1rem; }
        .quickLinks li:last-child { margin-bottom: 0; }
        .quickLink {
            color: var(--primary-light);
            text-decoration: none;
            font-weight: 400;
            transition: color 0.2s;
            display: flex;
            align-items: center;
        }
        .quickLink::before {
            content: '→';
            margin-right: 0.75rem;
            color: var(--accent-gold);
            transition: transform 0.2s;
        }
        .quickLink:hover { color: var(--accent-gold); }
        .quickLink:hover::before { transform: translateX(5px); }
        
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        @media(max-width: 992px) {
            .main-layout { grid-template-columns: 1fr; }
            .sidebar { position: static; margin-top: 4rem; }
            .requirementsGrid { grid-template-columns: 1fr; }
        }

        @media(max-width: 768px) {
            .h1 { font-size: 2.4rem; }
            .heroSection { padding: 6rem 0 6rem 0; }
            .container { padding: 0 2rem; }
            .image-section .container-wide { padding: 0; }
            .step { gap: 1.5rem; }
            .stepNumber { width: 60px; height: 60px; font-size: 2rem; }
            .process-line { left: 29px; }
            .stepContent { padding-top: 0.5rem; }
        }
      `}</style>
        <header className="heroSection">
            <div className="heroContent container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span>Sponsor Licence Renewal
                </nav>
                <h1 className="h1">Secure Your Sponsor Licence Renewal</h1>
                <p className="heroDescription">
                    Navigate the complexities of UKVI compliance with confidence. Our expert-led service ensures a seamless, timely, and successful renewal, safeguarding your ability to sponsor international talent.
                </p>
                <Link href="#contact" className="hero-cta">Book a Free Consultation</Link>
            </div>
        </header>

        <section className="image-section">
            <img 
                src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1920" 
                alt="A picture of the Houses of Parliament and Big Ben in London at dusk, representing UK business."
                loading="lazy"
            />
        </section>

        <div className="main-layout container">
            <main>
                <section className="section section-light" id="requirements">
                    <h2 className="h2 fade-in">Core Renewal Requirements</h2>
                    <p className="section-subtitle fade-in">Meeting these four pillars of compliance is essential for a successful licence renewal. We ensure every aspect is meticulously prepared and evidenced.</p>
                    <div className="requirementsGrid">
                        {requirements.map((req, index) => (
                            <div className="requirementCard fade-in" style={{ transitionDelay: `${index * 100}ms` }} key={req.title}>
                                <div className="requirementIcon">{req.icon}</div>
                                <div>
                                    <h4>{req.title}</h4>
                                    <p>{req.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section section-dark" id="process">
                    <h2 className="h2 fade-in">Our 4-Step Renewal Process</h2>
                    <p className="section-subtitle fade-in">We've refined our process to be thorough yet efficient, providing you with clarity and confidence at every stage.</p>
                    <div className="processSteps">
                        <div className="process-line"></div>
                        {processSteps.map((step, index) => (
                             <div className="step fade-in" key={step.title}>
                                <div className="stepNumber" aria-hidden="true">{step.number}</div>
                                <div className="stepContent">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="section section-light" id="faq">
                    <h2 className="h2 fade-in">Frequently Asked Questions</h2>
                    <div className="faqContainer fade-in">
                        {faqItems.map((item, index) => (
                            <div className={`faqItem ${activeFAQ === index ? 'active' : ''}`} key={item.question}>
                                <div className="faqQuestion" onClick={() => toggleFAQ(index)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)}>
                                    <span>{item.question}</span>
                                    <span className="faq-icon"><ChevronDown size={24} /></span>
                                </div>
                                <div className="faqAnswer">
                                    <div className="faqAnswerContent">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <aside className="sidebar" aria-label="Actions and quick links">
                <div className="sidebar-widget ctaCard fade-in" id="contact">
                    <div className="sidebar-widget-content">
                        <h3>Ready to Renew?</h3>
                        <p>Let's secure your licence. Schedule a free, no-obligation consultation today.</p>
                        <Link href="/contact" className="ctaButton">Book Consultation</Link>
                    </div>
                </div>

                <div className="sidebar-widget quickLinks fade-in">
                     <div className="sidebar-widget-content">
                        <h4>Related Services</h4>
                        <ul>
                            {relatedServices.map(service => (
                                <li key={service.title}><Link href={service.href} className="quickLink">{service.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
      </div>
  );
};

export default SponsorLicenceRenewalPage;
