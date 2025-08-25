'use client';

import React, { useState, useEffect, ReactNode } from 'react';

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
interface ProcessStep {
    number: number;
    title: string;
}

interface Guarantee {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const processSteps: ProcessStep[] = [
    { number: 1, title: 'You will be assigned a dedicated and experienced immigration associate to handle your case.' },
    { number: 2, title: 'You will receive a written agreement known as a Client Care Letter (CCL) outlining the service we shall provide.' },
    { number: 3, title: 'We will provide you with a customised document checklist for preparing your case.' },
    { number: 4, title: 'We will review each document and provide advice on any necessary amendments.' },
    { number: 5, title: 'Your case will have full legal representation, including explaining the merits of your case.' },
    { number: 6, title: 'We will complete your entire application.' },
    { number: 7, title: 'We will submit your application to the Home Office on your behalf.' },
    { number: 8, title: 'We will arrange an appointment to submit your immigration application at the nearest UKVCAS centre.' },
    { number: 9, title: 'We will prepare and train you for an interview with the Home Office.' },
    { number: 10, title: 'We will handle all enquiries from the Home Office until a decision is made.' },
];

const guarantees: Guarantee[] = [
    { title: 'Expert Service', description: 'Bad advice can lead to delays and refusals. We assign a subject matter expert to manage your case throughout.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Fast Response', description: 'We guarantee a reply to all messages and emails within 24 working hours, ensuring you\'re always informed.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
    { title: 'Fixed Fees', description: 'Our services have fixed fees so you know exactly how much you need to pay, with no nasty surprises down the line.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];


// --- MAIN PAGE COMPONENT ---
const WhyChooseUsPage = () => {
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
        elementsToAnimate.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="pageWrapper">
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
          .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
          .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
          .delay-1 { transition-delay: 0.1s; }
          .delay-2 { transition-delay: 0.2s; }
          .delay-3 { transition-delay: 0.3s; }
          
          .hero-section {
            background-color: #212C3C;
            color: white;
            padding: 7rem 0;
            padding-top: 15rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .hero-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .gradient-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.25;
          }
          .blob1 {
            width: 600px;
            height: 600px;
            background: #EBBF7D;
            top: -200px;
            left: -200px;
            animation: moveBlob 20s infinite alternate;
          }
          .blob2 {
            width: 500px;
            height: 500px;
            background: #4A5568;
            bottom: -150px;
            right: -150px;
            animation: moveBlob 25s infinite alternate-reverse;
          }
          @keyframes moveBlob {
            0% { transform: scale(1) translate(0, 0) rotate(0deg); }
            100% { transform: scale(1.3) translate(150px, 80px) rotate(180deg); }
          }
          .hero-content { 
            max-width: 800px; 
            margin: 0 auto;
            position: relative;
            z-index: 2;
          }
          .hero-content h1 { 
            color: #fff; 
            animation: fadeInDown 1s ease-out 0.2s backwards;
          }
          .hero-content p {
            font-size: 1.1rem;
            margin: 1.5rem 0 2.5rem;
            color: rgba(255, 255, 255, 0.85);
            animation: fadeInDown 1s ease-out 0.4s backwards;
          }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-group {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
            animation: fadeInUp 1s ease-out 0.6s backwards;
          }
           @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .cta-button {
            background: #EBBF7D;
            color: #212C3C;
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4);
          }
          .hero-benefits {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            animation: fadeInUp 1s ease-out 0.8s backwards;
          }
          .hero-benefit-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: rgba(255,255,255,0.9);
            font-weight: 400;
          }
          .hero-benefit-item svg { color: #EBBF7D; }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .intro-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }
          .intro-content h2 { text-align: left; }
          
          .why-us-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .why-us-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
          }
          .why-us-card h4 { margin-top: 0; }
          
          .process-section-container {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
            align-items: flex-start;
          }
          .process-checklist {
            border: 1px solid #e9ecef;
            border-radius: 12px;
            padding: 2rem;
            background: #fff;
          }
          .process-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #EBBF7D;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
          }
          .process-header h3 { margin: 0; }
          .process-header span { font-weight: 500; }
          .process-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem 2rem;
          }
          .step-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }
          .step-number {
            width: 40px;
            height: 40px;
            background: #212C3C;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 1rem;
            flex-shrink: 0;
          }
          .step-description { font-size: 0.9rem; }
          .guarantees-card {
            background: #212C3C;
            color: white;
            padding: 2rem;
            border-radius: 12px;
          }
          .guarantees-card h4 { color: #EBBF7D; margin-top: 0; }
          .guarantees-list { list-style: none; padding: 0; margin: 0; }
          .guarantees-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; font-weight: 400; }
          .guarantees-list li svg { color: #27ae60; flex-shrink: 0; }
          
          .testimonial-card {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 15px 40px rgba(44, 62, 80, 0.1);
            max-width: 800px;
            margin: 3rem auto;
            padding: 2.5rem;
          }
          .testimonial-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
          .testimonial-header h4 { margin: 0; }
          .stars { color: #f1c40f; }
          .testimonial-body { font-style: italic; color: #555; }
          .testimonial-author { font-weight: 500; margin-top: 1.5rem; text-align: right; }

          .guarantee-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          .guarantee-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
          }
          .guarantee-card h4 { display: flex; align-items: center; gap: 0.75rem; }
          .guarantee-icon { color: #EBBF7D; }

          @media (max-width: 992px) {
            .intro-grid { grid-template-columns: 1fr; }
            .process-section-container { grid-template-columns: 1fr; }
          }
          @media (max-width: 768px) {
            .process-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        <section className="hero-section">
            <div className="hero-background">
                <div className="gradient-blob blob1"></div>
                <div className="gradient-blob blob2"></div>
            </div>
          <div className="container">
            <div className="hero-content">
              <h1>Simplify Your Sponsor Licence Application Process with Experts &amp; Their Support</h1>
              <p>
                We know how important this is for you. Achieve Sponsorship Licence success with our legal experts by your side, guiding you at every step.
              </p>
              <div className="cta-group">
                <Link href="#eligibility" className="cta-button">Check Your Eligibility</Link>
                <Link href="#guide" className="cta-button secondary">Download Process Guide</Link>
              </div>
              <div className="hero-benefits">
                  <div className="hero-benefit-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Proven Expertise</div>
                  <div className="hero-benefit-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>End-to-End Support</div>
                  <div className="hero-benefit-item"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Transparent Service</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Navigate The Complex System With A UK Immigration Solicitor That Cares</h2>
                        <p>The UK offers many opportunities for individuals and businesses. But the immigration system is notoriously complex. One administrative oversight could mean a major setback for your plans, which can sometimes take years to resolve. That's a pressure you can do without—and it's why we believe immigration representation shouldn't keep you awake at night. At Lexington Ashworth, we make sure it doesn't.</p>
                        <Link href="#contact" className="cta-button" style={{marginTop: '1rem'}}>Contact Our Team</Link>
                    </div>
                    <div className="why-us-grid">
                        <div className="why-us-card animate-on-scroll delay-1"><h4>Proven Expertise</h4><p>Over a decade helping UK employers secure and maintain Sponsor Licences.</p></div>
                        <div className="why-us-card animate-on-scroll delay-2"><h4>End-to-End Support</h4><p>From eligibility checks to post-grant compliance, our team guides you every step.</p></div>
                        <div className="why-us-card animate-on-scroll delay-3"><h4>Tailored Approach</h4><p>We customise advice to your organisation’s size and sector to ensure compliance.</p></div>
                        <div className="why-us-card animate-on-scroll delay-4"><h4>Fast Communication</h4><p>Clear timelines, proactive reminders, and direct access to your case manager.</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="process" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR PROVEN METHOD</div>
                    <h2>The 10-Step Process We Follow for Your Immigration Matter</h2>
                </div>
                <div className="process-section-container animate-on-scroll">
                    <div className="process-checklist">
                        <div className="process-header">
                            <h3>10-STEP CHECKLIST – Your UK Immigration Matter</h3>
                            <span>Lexington Ashworth</span>
                        </div>
                        <div className="process-grid">
                            {processSteps.map((step) => (
                                <div key={step.number} className="step-item">
                                    <div className="step-number">{step.number}</div>
                                    <p className="step-description">{step.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="guarantees-card">
                        <h4>3 Guarantees for Exceptional Legal Service</h4>
                        <ul className="guarantees-list">
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Fast Response Times</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Peace of Mind</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Ownership of the Process</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        <section id="guarantees" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR COMMITMENT</div>
                    <h2>Need Expert Legal Guidance?</h2>
                    <p>We have more than 1,200 positive client reviews and a listing in The Legal 500 best UK law firms, so you can rest assured your immigration challenges are in safe hands.</p>
                </div>
                <div className="guarantee-grid">
                    {guarantees.map((item, index) => (
                        <div key={index} className="guarantee-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <h4><div className="guarantee-icon">{item.icon}</div>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUsPage;
