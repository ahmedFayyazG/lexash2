'use client';

import React, { useState, useEffect } from 'react';

// --- MOCK COMPONENTS TO FIX RESOLVE ERRORS ---
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// --- INTERFACES ---
interface FAQItem {
  question: string;
  answer: string;
}

interface Requirement {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ProcessStep {
  title: string;
  description: string;
}

// --- COMPONENT DATA ---
const eligibilityRequirements: Requirement[] = [
  {
    title: 'Age & English Proficiency',
    description: 'Be at least 18 years old and hold a CEFR B1 English qualification (e.g., IELTS 6.0) to ensure effective communication.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  },
  {
    title: 'Valid Passport',
    description: 'Hold a valid passport from a country requiring a UK visa. Ensure it has at least six months of validity remaining.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
  },
  {
    title: 'Active UK Business',
    description: 'You must own a genuine, actively trading UK company or commit to acquiring one as part of your application.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="22" x2="6" y2="12"></line><line x1="18" y1="22" x2="18" y2="12"></line><path d="M12 22V8.8c0-1.4 1.2-2.8 2.5-2.8s2.5 1.4 2.5 2.8V22"></path><path d="M12 22V8.8c0-1.4-1.2-2.8-2.5-2.8S7 7.4 7 8.8V22"></path><path d="M5 12H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v6zm14 0h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3v6z"></path></svg>,
  },
  {
    title: 'Business Experience',
    description: 'Demonstrate serious entrepreneurial ambition or proven experience in your industry to confidently run the UK company.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>,
  },
  {
    title: 'Authorising Officer (AO)',
    description: 'Appoint a UK-settled individual to act as your Authorising Officer for Home Office correspondence.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>,
  },
  {
    title: 'Sponsor Licence Documents',
    description: 'Prepare bank statements, Employer’s Liability insurance, PAYE registration, VAT certificate, and a detailed cover letter.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  },
  {
    title: 'Salary Threshold',
    description: 'Your role must pay at least £41,700 per year or the going rate for its SOC code, whichever is higher.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
  },
  {
    title: 'Operating Budget',
    description: 'Budget at least £150,000 for first-year costs like rent, salaries, and equipment. A detailed cost breakdown is crucial.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
  },
  {
    title: 'Legal Fees',
    description: 'Be prepared to cover all legal service fees for the Sponsor Licence, CoS allocation, and Skilled Worker visa processing.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  },
];

const processSteps: ProcessStep[] = [
  {
    title: 'Sponsor Licence Application',
    description: 'We guide your Sponsor Licence application preparation and filing.',
  },
  {
    title: 'HR Compliance Setup',
    description: 'We create your HR compliance policies and train your team.',
  },
  {
    title: 'Certificate of Sponsorship',
    description: 'We manage your CoS allocation quickly and accurately.',
  },
  {
    title: 'Skilled Worker Visa Support',
    description: 'We support your Skilled Worker visa application from start to finish.',
  },
  {
    title: 'Ongoing Compliance Services',
    description: 'We handle your ongoing sponsor duties, audits and reporting.',
  },
];

const faqItems: FAQItem[] = [
    {
      question: 'How much money is needed for a self-sponsorship visa in the UK?',
      answer: 'You should budget at least £150,000 for first-year operating costs, plus funds to meet the minimum salary requirement (at least £41,700) and cover all legal fees.',
    },
    {
      question: 'What are the requirements for UK visa sponsorship?',
      answer: 'Key requirements include having a genuine UK business, obtaining a Sponsor Licence, meeting the English language and age criteria, and ensuring the sponsored role meets the minimum skill and salary levels.',
    },
    {
      question: 'Can I apply for a UK visa by myself?',
      answer: 'While you can apply by yourself, the self-sponsorship route is highly complex. Using an experienced immigration solicitor is strongly recommended to avoid common pitfalls and maximize your chances of success.',
    },
    {
      question: 'Who is eligible for work in the UK without sponsorship?',
      answer: 'Individuals with certain types of visas (like a Spouse Visa or Ancestry Visa), those with settled status, or British citizens do not require sponsorship to work in the UK.',
    },
    {
      question: 'What if I change my role’s duties or salary post-grant?',
      answer: 'If you change to a job with a different occupation code or your new salary no longer meets the threshold, you must submit a new Skilled Worker visa application with a new Certificate of Sponsorship.',
    },
];


// --- LOADING COMPONENT ---
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
  <div className={`loadingScreen ${!isLoading ? 'hide' : ''}`} style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: '#ffffff',
    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    opacity: isLoading ? 1 : 0, visibility: isLoading ? 'visible' : 'hidden',
    pointerEvents: isLoading ? 'auto' : 'none'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '60px', height: '60px', margin: '0 auto 1.5rem', border: '3px solid #f0f0f0',
        borderTop: '3px solid #EBBF7D', borderRadius: '50%', animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{ color: '#2c3e50', fontSize: '1.1rem', fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>Loading...</p>
    </div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const SelfSponsorshipPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // --- ANIMATION OBSERVER EFFECT ---
  useEffect(() => {
    if (!isLoading) {
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
    }
  }, [isLoading]);

  if (!isMounted) {
    return <LoadingScreen isLoading={true} />;
  }

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <div className={`pageWrapper ${!isLoading ? 'loaded' : ''}`} style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { margin: 0; font-family: 'Poppins', sans-serif; line-height: 1.6; color: #333; background: #fff; }
          * { box-sizing: border-box; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
          h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; color: #2c3e50; }
          h1 { font-size: 3rem; font-weight: 700; line-height: 1.2; }
          h2 { font-size: 2.25rem; font-weight: 600; margin-bottom: 2rem; text-align: center; }
          h3 { font-size: 1.5rem; font-weight: 600; }
          @media (max-width: 768px) {
            h1 { font-size: 2.25rem; }
            h2 { font-size: 1.75rem; }
          }
        `}</style>
        <style>{`
          .hero-section {
            background: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 6rem 0 4rem;
            text-align: center;
          }
          .hero-content p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 1rem auto 2rem;
            opacity: 0.9;
          }
          .cta-button-group {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .cta-button {
            background: #EBBF7D;
            color: #2c3e50;
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(235, 191, 125, 0.4);
          }
          .cta-button.secondary {
            background: transparent;
            color: #EBBF7D;
            border: 2px solid #EBBF7D;
          }
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .intro-text {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 3.5rem;
            font-size: 1.1rem;
            color: #555;
          }
          
          /* --- NEW ANIMATED REQUIREMENTS SECTION --- */
          .requirements-list {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
          }
          .requirement-item {
            display: flex;
            align-items: center;
            background: #fff;
            border-radius: 12px;
            margin-bottom: 1.5rem;
            border: 1px solid #e9ecef;
            transition: all 0.4s ease;
            opacity: 0;
            transform: translateX(-30px);
          }
          .requirement-item.is-visible {
            opacity: 1;
            transform: translateX(0);
          }
          .requirement-item:nth-child(2) { transition-delay: 0.1s; }
          .requirement-item:nth-child(3) { transition-delay: 0.2s; }
          .requirement-item:nth-child(4) { transition-delay: 0.3s; }
          .requirement-item:nth-child(5) { transition-delay: 0.4s; }
          .requirement-item:nth-child(6) { transition-delay: 0.5s; }
          .requirement-item:nth-child(7) { transition-delay: 0.6s; }
          .requirement-item:nth-child(8) { transition-delay: 0.7s; }
          .requirement-item:nth-child(9) { transition-delay: 0.8s; }

          .requirement-item:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(44, 62, 80, 0.12);
            border-color: #EBBF7D;
          }
          .requirement-icon-wrapper {
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            border-right: 1px solid #e9ecef;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 12px;
          }
          .requirement-icon {
            width: 48px;
            height: 48px;
            color: #EBBF7D;
          }
          .requirement-icon svg { width: 100%; height: 100%; }
          .requirement-content {
            padding: 1.5rem 2rem;
          }
          .requirement-content h4 { font-size: 1.25rem; margin-bottom: 0.5rem; }
          .requirement-content p { color: #6c757d; font-size: 0.95rem; margin: 0; }
          
          .process-section {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .process-steps {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 1rem;
            width: 100%;
            margin-top: 3rem;
            position: relative;
          }
          .process-steps::before {
            content: '';
            position: absolute;
            top: 30px;
            left: 10%;
            right: 10%;
            height: 2px;
            background: #e0e0e0;
            z-index: 1;
          }
          .step {
            text-align: center;
            position: relative;
            z-index: 2;
          }
          .step-number {
            width: 60px;
            height: 60px;
            background: #fff;
            color: #EBBF7D;
            border: 2px solid #EBBF7D;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.5rem;
            margin: 0 auto 1rem;
            transition: all 0.3s ease;
          }
          .step:hover .step-number {
            background: #EBBF7D;
            color: #2c3e50;
            transform: scale(1.1);
          }
          .step h4 { font-size: 1.1rem; margin-bottom: 0.5rem; }
          .step p { font-size: 0.9rem; color: #6c757d; }

          .faq-container { max-width: 800px; margin: 0 auto; }
          .faq-item {
            background: #fff;
            margin-bottom: 1rem;
            border-radius: 8px;
            border: 1px solid #e5e5e5;
          }
          .faq-question {
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
            font-size: 1.1rem;
          }
          .faq-answer {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: all 0.4s ease-in-out;
          }
          .faq-item.active .faq-answer {
            padding: 0 1.5rem 1.5rem;
            max-height: 500px;
          }
          .faq-icon { transition: transform 0.3s ease; }
          .faq-item.active .faq-icon { transform: rotate(45deg); color: #EBBF7D; }

          @media (max-width: 992px) {
            .process-steps { grid-template-columns: 1fr; gap: 2rem; }
            .process-steps::before { display: none; }
          }
          @media (max-width: 768px) {
            .requirement-item { flex-direction: column; text-align: center; }
            .requirement-icon-wrapper { border-right: none; border-bottom: 1px solid #e9ecef; width: 100%; border-radius: 12px 12px 0 0; }
            .requirement-content { padding: 1.5rem; }
          }
        `}</style>

        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>UK Self-Sponsorship Visa Route Requirements - 2025 Eligibility</h1>
              <p>
                This route is designed for ambitious entrepreneurs with relevant business experience, ready to base their business in the UK. Ensure you have sufficient capital to cover the required salary, operating costs, and legal fees.
              </p>
              <div className="cta-button-group">
                <Link href="#eligibility" className="cta-button">Check Your Eligibility</Link>
                <Link href="#costs" className="cta-button secondary">Explore Costs</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="eligibility" className="section bg-light">
          <div className="container">
            <h2 style={{fontWeight:"400"}}>Non-Negotiable Eligibility Requirements</h2>
            <p className="intro-text" style={{fontWeight:"300"}}>Before applying, you must satisfy these core requirements to be considered for the Self-Sponsorship route.</p>
            <div className="requirements-list">
              {eligibilityRequirements.map((req, index) => (
                <div key={index} className="requirement-item animate-on-scroll">
                  <div className="requirement-icon-wrapper">
                      <div className="requirement-icon">{req.icon}</div>
                  </div>
                  <div className="requirement-content">
                    <h4 style={{fontWeight:"400"}}>{req.title}</h4>
                    <p>{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container process-section">
            <h2 style={{fontWeight:"400"}}>How Lexington Ashworth Solicitors Will Guide You</h2>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="step">
                  <div className="step-number">{index + 1}</div>
                  <h4 style={{fontWeight:"400"}}>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section bg-light">
          <div className="container">
            <h2 style={{fontWeight:"400"}}>Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqItems.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={activeFAQ === index} style={{fontWeight:"400"}}>
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p style={{fontWeight:"300"}}>{faq.answer}</p>
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

export default SelfSponsorshipPage;
