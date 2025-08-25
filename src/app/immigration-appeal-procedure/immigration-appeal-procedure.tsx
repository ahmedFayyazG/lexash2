'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Scale, FileCheck, Gavel, Shield, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

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
interface Step {
    number: string;
    title: string;
    description: string;
}

interface SupportItem {
    text: string;
}

interface ChoiceItem {
    text: string;
}

// --- COMPONENT DATA ---
const appealProcess: Step[] = [
    { number: '01', title: 'Review of Refusal', description: 'We carefully examine your refusal letter to identify errors in fact or law.' },
    { number: '02', title: 'Lodging the Appeal', description: 'Appeals must usually be filed within strict deadlines (14 days if inside the UK, 28 days if outside).' },
    { number: '03', title: 'Preparing Grounds of Appeal', description: 'We draft strong legal arguments explaining why the refusal was incorrect.' },
    { number: '04', title: 'Gathering Evidence', description: 'Supporting documents, witness statements, and expert reports are compiled to strengthen your case.' },
    { number: '05', title: 'Tribunal Hearing', description: 'Your case is heard before an independent judge at the First-tier Tribunal. We represent you and cross-examine the Home Office’s arguments.' },
    { number: '06', title: 'Decision', description: 'If your appeal is successful, the Home Office must reconsider and grant your application.' },
];

const supportItems: SupportItem[] = [
    { text: 'Provide a clear explanation of your refusal and your appeal rights' },
    { text: 'Draft persuasive legal grounds tailored to your case' },
    { text: 'Prepare and submit your appeal within the deadline' },
    { text: 'Represent you at the Tribunal with professionalism and determination' },
    { text: 'Advise on next steps if the appeal is unsuccessful, including Upper Tribunal, Judicial Review, or re-application strategies' },
];

const whyChooseUsItems: ChoiceItem[] = [
    { text: 'Extensive knowledge of UK immigration law' },
    { text: 'Proven experience handling appeals at all Tribunal levels' },
    { text: 'Personalised support, recognising the human impact of each case' },
    { text: 'A commitment to securing the best possible outcome for our clients' },
];


// --- MAIN PAGE COMPONENT ---
const ImmigrationAppealsPage = () => {
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

          .timeline {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 800px;
            margin: 0 auto;
          }
          .timeline-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .timeline-icon {
            width: 60px;
            height: 60px;
            flex-shrink: 0;
            background-color: #fff;
            border: 3px solid #B9946A;
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

          .support-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }
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

          @media (max-width: 992px) { .intro-grid, .support-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Immigration Appeals Procedure: Your Guide to Challenging Refusals</h1>
              <p>
                Receiving a refusal from the Home Office can be stressful and life-changing. A refusal doesn’t always have to be the end of your journey.
              </p>
              <Link href="#contact" className="cta-button">Request a Case Review</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Understanding the Immigration Appeals Process</h2>
                        <p>In many cases, you may have the right to challenge the decision through the UK Immigration Appeals Procedure. This process allows you to argue your case before an independent tribunal, ensuring that your application is reconsidered fairly.</p>
                    </div>
                    <div className="animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <img src="/assets/img/legal/gavel.jpg" alt="A courtroom gavel" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="process" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">STEP-BY-STEP</div>
                    <h2>The Appeals Procedure Step by Step</h2>
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
        
        <section id="support" className="section">
            <div className="container">
                <div className="support-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>How Lexington Ashworth Supports You</h2>
                        <p>At Lexington Ashworth Solicitors, we treat every appeal with the seriousness it deserves. Our immigration team will:</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            {supportItems.map((item, index) => (
                                <li key={index} className="support-item">
                                    <div className="support-icon"><CheckCircle size={20} /></div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="intro-content animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                        <h2>Why Choose Us?</h2>
                        <p>The outcome of your appeal can decide your future in the UK. Working with experienced immigration solicitors ensures your case is presented in the strongest possible way. We bring:</p>
                        <ul className="support-list" style={{marginTop: '2rem'}}>
                            {whyChooseUsItems.map((item, index) => (
                                <li key={index} className="support-item">
                                    <div className="support-icon"><CheckCircle size={20} /></div>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default ImmigrationAppealsPage;
