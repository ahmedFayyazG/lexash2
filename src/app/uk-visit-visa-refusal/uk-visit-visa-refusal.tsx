'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { XCircle, CheckCircle, ArrowRight, Phone, Mail, MapPin, Search, FileText, Gavel, UserCheck } from 'lucide-react';

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
//   title: 'UK Visitor Visa Refusal Solicitors in Manchester | Reapply With Confidence',
//   description: 'Has your UK Visitor Visa been refused? Lexington Ashworth Solicitors help you understand the reasons, build a stronger case, and reapply with confidence.',
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
const refusalReasons: ListItem[] = [
    { text: 'Lack of evidence showing strong ties to your home country (employment, property, or family)' },
    { text: 'Insufficient financial documents to prove you can afford your trip' },
    { text: 'Concerns that you may overstay in the UK' },
    { text: 'Incomplete or inconsistent application forms' },
    { text: 'Previous immigration history or visa refusals' },
];

const howWeHelp: ListItem[] = [
    { text: 'Review your refusal letter in detail and explain your options' },
    { text: 'Identify exactly why your application was refused' },
    { text: 'Prepare stronger evidence such as financial records, employment letters, or property documents' },
    { text: 'Draft a tailored legal strategy for re-application or Administrative Review' },
    { text: 'Handle the full process from start to finish until your visa is approved' },
];

const stepByStep: Step[] = [
    { number: '01', title: 'Consultation', description: 'Speak to our immigration solicitors about your refusal.' },
    { number: '02', title: 'Case Review', description: 'We analyse your Home Office decision and advise on next steps.' },
    { number: '03', title: 'Application Strategy', description: 'We create a plan to correct weaknesses and strengthen your evidence.' },
    { number: '04', title: 'Submission', description: 'We prepare and file your new application or Administrative Review.' },
    { number: '05', title: 'Outcome', description: 'We support you until your Visitor Visa is granted.' },
];


// --- MAIN PAGE COMPONENT ---
const VisitorVisaRefusalPage = () => {
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
              <h1>UK Visitor Visa Refusal: Challenge and Reapply With Confidence</h1>
              <p>
                A Visitor Visa refusal does not have to mean the end of your journey. With the right legal support, you can understand why your application was refused, address the issues, and submit a much stronger re-application.
              </p>
              <Link href="#contact" className="cta-button">Reapply With Confidence</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Common Reasons for Visitor Visa Refusals</h2>
                        <p>Most refusals happen because the Home Office is not satisfied that the applicant will leave the UK at the end of their visit.</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            {refusalReasons.map((item, index) => (
                                <li key={index} className="support-item">
                                    <div className="support-icon"><XCircle size={20} /></div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="https://images.unsplash.com/photo-1518619713589-09a25b1848b3?q=80&w=2070&auto=format&fit=crop" alt="A person looking at a passport and travel documents" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="options" className="section bg-light">
            <div className="container">
                <div className="intro-grid">
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="/assets/img/legal/documents.jpg" alt="Reviewing legal documents" className="intro-image" />
                    </div>
                    <div className="intro-content animate-on-scroll">
                        <h2>Can You Appeal a Visitor Visa Refusal?</h2>
                        <p>In most cases, you cannot appeal a Visitor Visa refusal. However, you may still have options:</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            <li className="support-item"><div className="support-icon" style={{color: '#27ae60'}}><CheckCircle size={20} /></div><span><b>Administrative Review</b> – In limited cases where the Home Office made a clear error in law or fact.</span></li>
                            <li className="support-item"><div className="support-icon" style={{color: '#27ae60'}}><CheckCircle size={20} /></div><span><b>Fresh Application</b> – The most common solution. A new, carefully prepared application that addresses the refusal reasons.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="support" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR EXPERTISE</div>
                    <h2>How Lexington Ashworth Solicitors Can Help</h2>
                </div>
                <ul className="support-list" style={{maxWidth: '800px', margin: '0 auto'}}>
                    {howWeHelp.map((item, index) => (
                        <li key={index} className="support-item animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="support-icon"><CheckCircle size={20} /></div>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        
        <section id="process" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">STEP-BY-STEP</div>
                    <h2>Step-by-Step After a Refusal</h2>
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
                <h2>The Importance of Acting Quickly</h2>
                <p>A Visitor Visa refusal can delay your plans, but it doesn’t have to end them. With Lexington Ashworth Solicitors guiding your next steps, you can rebuild your case, reapply with confidence, and finally get the approval you need.</p>
                <Link href="#contact" className="cta-button">Start Your New Application Today</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default VisitorVisaRefusalPage;
