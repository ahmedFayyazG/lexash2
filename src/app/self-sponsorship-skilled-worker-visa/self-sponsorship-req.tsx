'use client';

import React, { useState, useEffect } from 'react';

// --- MOCK COMPONENTS ---
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// --- INTERFACES ---
interface Benefit {
    title: string;
    icon: JSX.Element;
}

interface Step {
    title: string;
    description: string;
}

interface Requirement {
    text: string;
}

// --- COMPONENT DATA ---
const keyBenefits: Benefit[] = [
    { title: 'No Job Offer Required', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> },
    { title: 'No Endorsement Needed', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> },
    { title: 'NHS & Education Access', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Any Business Sector', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="22" x2="6" y2="12"></line><line x1="18" y1="22" x2="18" y2="12"></line><path d="M12 22V8.8c0-1.4 1.2-2.8 2.5-2.8s2.5 1.4 2.5 2.8V22"></path><path d="M12 22V8.8c0-1.4-1.2-2.8-2.5-2.8S7 7.4 7 8.8V22"></path><path d="M5 12H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v6zm14 0h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3v6z"></path></svg> },
    { title: 'Entrepreneurial Freedom', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg> },
    { title: 'Clear ILR Pathway', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
    { title: 'Include Your Family', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { title: 'Assured Visa Stability', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
    { title: 'High Quality of Life', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
];

const processSteps: Step[] = [
    { title: 'Acquire a UK Business', description: 'Acquire or own a UK business which serves as the legal foundation for your visa.' },
    { title: 'HR Compliance', description: 'Implement HR systems, payroll, and employment compliance frameworks.' },
    { title: 'Sponsor Licence', description: 'Apply for and obtain your Sponsor Licence from the Home Office.' },
    { title: 'Skilled Worker Visa', description: 'Apply for your Skilled Worker visa through your own company.' },
    { title: 'ILR & Permanent Residency', description: 'Progress to Indefinite Leave to Remain after 5 years.' },
];

const eligibilityRequirements: Requirement[] = [
    { text: 'Be 18+ and pass English at CEFR B1 level' },
    { text: 'Valid passport from an eligible country required' },
    { text: 'Intend to run or acquire a genuine, trading UK business' },
    { text: 'Must demonstrate real business activity and intent' },
    { text: 'Pay yourself at least £38,700 annually (or SOC-specific rate)' },
    { text: 'Cover rent, staff, and operating expenses (~£150,000 budget)' },
    { text: 'Appoint a UK-settled Authorising Officer' },
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
const SelfSponsorshipRequirementsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`pageWrapper ${!isLoading ? 'loaded' : ''}`} style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }}>
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
          .hero-section {
            background-color: #212C3C;
            background-image: linear-gradient(rgba(33, 44, 60, 0.95), rgba(33, 44, 60, 0.95)), url('https://images.unsplash.com/photo-1533929736458-ca5889820924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 7rem 0;
            text-align: center;
          }
          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }
          .hero-content h1 {
            color: #fff;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
          }
          .hero-content p {
            font-size: 1.15rem;
            margin: 1.5rem 0 2.5rem;
            color: rgba(255, 255, 255, 0.85);
            font-weight: 300;
          }
          .cta-group {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          .cta-button {
            background: #EBBF7D;
            color: #212C3C;
            padding: 0.8rem 1.8rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            display: inline-block;
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4);
          }
          .cta-button.secondary {
            background: transparent;
            color: #EBBF7D;
            border: 1px solid #EBBF7D;
          }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
          
          .intro-section-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
          }
          .intro-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
          }
          .intro-card h4 { margin-top: 0; }
          .intro-card p { margin-bottom: 0; }
          
          .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 3rem;
          }
          .comparison-card {
            padding: 2rem;
            border-radius: 12px;
          }
          .comparison-card.ideal { background: #e8f5e9; border: 1px solid #a5d6a7; }
          .comparison-card.not-ideal { background: #ffebee; border: 1px solid #ef9a9a; }
          .comparison-card h4 { margin-top: 0; }
          .comparison-card ul { list-style: none; padding: 0; margin: 0; }
          .comparison-card li { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem; }
          .ideal li svg { color: #27ae60; flex-shrink: 0; margin-top: 4px; }
          .not-ideal li svg { color: #c0392b; flex-shrink: 0; margin-top: 4px; }

          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }
          .benefit-card {
            background: #fff;
            padding: 1.5rem;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #e9ecef;
            transition: all 0.3s ease;
          }
          .benefit-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(44, 62, 80, 0.1); }
          .benefit-icon { width: 40px; height: 40px; color: #EBBF7D; margin: 0 auto 1rem; }
          .benefit-card h5 { font-size: 1.1rem; margin: 0; }

          .timeline {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 800px;
            margin: 3rem auto;
          }
          .timeline-step {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .step-number {
            width: 50px;
            height: 50px;
            background: #EBBF7D;
            color: #212C3C;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 1.25rem;
            flex-shrink: 0;
          }
          .step-content h4 { margin: 0 0 0.5rem; }

          .eligibility-card {
            background: linear-gradient(135deg, #2c3e50, #212C3C);
            color: white;
            padding: 3rem;
            border-radius: 16px;
            max-width: 900px;
            margin: 3rem auto;
          }
          .eligibility-card h3 { color: #EBBF7D; }
          .eligibility-list {
            list-style: none;
            padding: 0;
            margin: 2rem 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .eligibility-list li { display: flex; align-items: center; gap: 0.75rem; font-weight: 300; color: rgba(255,255,255,0.9); }
          .eligibility-list li svg { color: #EBBF7D; flex-shrink: 0; }
          
          @media (max-width: 992px) {
            .intro-section-grid { grid-template-columns: 1fr; }
            .comparison-grid { grid-template-columns: 1fr; }
            .eligibility-list { grid-template-columns: 1fr; }
          }
        `}</style>

        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Self-Sponsor Your Skilled Worker Visa in 2025</h1>
              <p>
                A faster, smarter path to UK residency, led by UK-regulated immigration solicitors and trusted by 200+ business leaders, offering you long-term stability and a future built on your own terms.
              </p>
              <div className="cta-group">
                <Link href="#cost" className="cta-button">Explore Cost</Link>
                <Link href="#eligibility" className="cta-button secondary">Check Eligibility</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-section-grid">
                    <div>
                        <h2>What is the Self-Sponsorship Route?</h2>
                        <p>Self-Sponsorship is a route that allows you to apply for a Skilled Worker visa by using your own UK business as your sponsor. This means you can live and work in the UK without needing a job offer from an existing UK employer. It’s a fully legal pathway that can lead to permanent residency for you and your family!</p>
                    </div>
                    <div className="intro-card">
                        <h4>Work Permit for the Business Owner</h4>
                        <p>You can legally work for your business using the Skilled Worker visa by becoming both the employer (via your UK company) and the sponsored employee. You’ll need two things: a UK company that you acquire, and a Sponsor Licence so your business can sponsor your visa.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="who-is-it-for" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">THE IDEAL CANDIDATE</div>
                    <h2>Who Is This Visa Route For?</h2>
                </div>
                <div className="comparison-grid">
                    <div className="comparison-card ideal">
                        <h4>Ideal For:</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Entrepreneurs with proven business experience</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Individuals with £150,000+ to invest in a UK business</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Those aiming for long-term UK residency and ILR</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Families planning to relocate and settle together</li>
                        </ul>
                    </div>
                    <div className="comparison-card not-ideal">
                        <h4>Not Ideal For:</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Individuals with no business experience</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Those with budgets under £100,000 for UK expansion</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Jobseekers not interested in owning a business</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Anyone unwilling to meet compliance obligations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="benefits" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">ADVANTAGES</div>
                    <h2>Key Benefits of the Self-Sponsorship Route</h2>
                </div>
                <div className="benefits-grid">
                    {keyBenefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h5>{benefit.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="process" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">THE PROCESS</div>
                    <h2>5 Key Steps for Sponsoring Yourself in the UK</h2>
                </div>
                <div className="timeline">
                    {processSteps.map((step, index) => (
                        <div key={index} className="timeline-step">
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content">
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="eligibility" className="section">
            <div className="container">
                 <div className="eligibility-card">
                    <h3>Eligibility Requirements to Sponsor Yourself</h3>
                    <p>To qualify for this route, you must meet several key criteria. Our team can provide a full assessment of your eligibility.</p>
                    <ul className="eligibility-list">
                        {eligibilityRequirements.map((req, index) => (
                            <li key={index}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>{req.text}</li>
                        ))}
                    </ul>
                    <Link href="#contact" className="cta-button" style={{marginTop: '1rem'}}>Check Your Eligibility</Link>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default SelfSponsorshipRequirementsPage;
