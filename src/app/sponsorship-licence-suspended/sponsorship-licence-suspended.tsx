'use client';

import React, { useState, useEffect } from 'react';

// --- MOCK COMPONENTS ---
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// --- INTERFACES ---
interface StrategyStep {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface Trigger {
    name: string;
}

// --- COMPONENT DATA ---
const reversalSteps: StrategyStep[] = [
    { title: 'Identify Suspension Triggers', description: 'Pinpoint the serious breaches or omissions that led to the suspension and resolve them fast.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
    { title: 'Protect Your Business', description: 'Pursue legal strategies to dispute the suspension notice and restore your eligibility to sponsor.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Navigate Reinstatement', description: 'Follow a clear roadmap for appeals, corrective actions, and engagement with the Home Office.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> },
    { title: 'Direct Home Office Negotiation', description: 'Our senior lawyers deal directly with UKVI decision-makers to obtain the quickest possible reinstatement.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

const suspensionTriggers: Trigger[] = [
    { name: 'Missing right-to-work checks' },
    { name: 'Poor record-keeping' },
    { name: 'Inaccurate SMS entries' },
    { name: 'Failure to inform changes' },
    { name: 'Incomplete CoS records' },
    { name: 'Inadequate HR systems' },
];


// --- MAIN PAGE COMPONENT ---
const SponsorLicenceSuspendedPage = () => {
    useEffect(() => {
    // Intersection Observer for scroll animations
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
          /* --- SCROLL ANIMATION STYLES --- */
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .animate-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .delay-1 { transition-delay: 0.1s; }
          .delay-2 { transition-delay: 0.2s; }
          .delay-3 { transition-delay: 0.3s; }
          
          .hero-section {
            background-color: #212C3C;
            color: white;
            padding: 7rem 0;
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
            filter: blur(100px);
            opacity: 0.35;
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
            background: #c0392b;
            bottom: -150px;
            right: -150px;
            animation: moveBlob 25s infinite alternate-reverse;
          }
          @keyframes moveBlob {
            0% { transform: scale(1.1) translate(0, 0) rotate(0deg); }
            100% { transform: scale(1.4) translate(120px, 80px) rotate(180deg); }
          }
          .hero-content { 
            max-width: 800px; 
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 2;
          }
          .hero-content .subtitle {
            font-weight: 500;
            color: #EBBF7D;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 1rem;
            display: block;
            animation: fadeInDown 1s ease-out;
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
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
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
            animation: fadeInUp 1s ease-out 0.6s backwards;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4);
          }
          .emergency-note {
            margin-top: 1.5rem;
            font-size: 0.9rem;
            color: rgba(255,255,255,0.7);
          }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .reversal-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .reversal-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
            text-align: center;
            transition: all 0.3s ease;
          }
          .reversal-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(44, 62, 80, 0.1);
          }
          .reversal-icon {
            width: 50px;
            height: 50px;
            color: #EBBF7D;
            margin: 0 auto 1.5rem;
          }
          .reversal-card h4 { font-size: 1.2rem; margin-bottom: 0.5rem; }
          .reversal-card p { font-size: 0.95rem; color: #6c757d; }

          .triggers-section {
            background: #212C3C;
            color: white;
          }
          .triggers-section h2 { color: white; }
          .triggers-section p { color: rgba(255,255,255,0.8); }
          .triggers-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          .trigger-item {
            background: rgba(255,255,255,0.05);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid #c0392b;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #fff;
            transition: background 0.3s ease;
          }
          .trigger-item:hover {
            background: rgba(255,255,255,0.1);
          }
          .trigger-icon { color: #c0392b; }
          
          .consequences-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 3rem;
          }
          .consequence-card {
            padding: 2rem;
            border-radius: 12px;
          }
          .consequence-card.act-now { background: #e8f5e9; border: 1px solid #a5d6a7; }
          .consequence-card.fail-act { background: #ffebee; border: 1px solid #ef9a9a; }
          .consequence-card h4 { margin-top: 0; }
          .consequence-card ul { list-style: none; padding: 0; margin: 0; }
          .consequence-card li { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem; }
          .act-now li svg { color: #27ae60; flex-shrink: 0; margin-top: 4px; }
          .fail-act li svg { color: #c0392b; flex-shrink: 0; margin-top: 4px; }

          .cta-section {
            background: #f8f9fa;
            padding: 4rem 0;
            text-align: center;
          }
          .cta-section p { max-width: 600px; margin: 1.5rem auto 2rem; }

          @media (max-width: 992px) {
            .consequences-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <span className="subtitle">Sponsor Licence Suspended?</span>
              <h1>Get Legal Support Now Before It's Too Late</h1>
              <p>
                Your licence suspension stops you from hiring new overseas workers and puts your operations at risk. Every day counts when you have 20 working days to respond.
              </p>
              <Link href="#contact" className="cta-button">Contact Us for Emergency Support</Link>
              <p className="emergency-note">Emergency consultation available within 24 hours.</p>
            </div>
          </div>
        </section>

        <section id="what-is" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">UNDERSTANDING THE SITUATION</div>
                    <h2>What is a Sponsor Licence Suspension?</h2>
                    <p>A sponsor licence suspension temporarily freezes your ability to sponsor new overseas workers while UK Visas and Immigration (UKVI) investigates potential breaches of your sponsorship duties. You cannot issue new Certificates of Sponsorship, but your existing sponsored workers can continue working while we resolve the issue.</p>
                </div>
            </div>
        </section>

        <section id="how-we-help" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR STRATEGY</div>
                    <h2>How Lexington Ashworth Can Reverse Your Suspension</h2>
                    <p>Our lawyers have won appeals in hundreds of suspension cases. We close compliance gaps and liaise with the Home Office on your behalf. We act swiftly to protect your business and get your sponsorship licence back to its A-rating.</p>
                </div>
                <div className="reversal-grid">
                    {reversalSteps.map((step, index) => (
                        <div key={index} className="reversal-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="reversal-icon">{step.icon}</div>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="triggers" className="section triggers-section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">COMMON CAUSES</div>
                    <h2>Primary Triggers for a Sponsor Licence Suspension</h2>
                    <p>The Home Office suspends licences for breaches of sponsorship duties. These common issues often decide the fate of your licence:</p>
                </div>
                <div className="triggers-grid">
                    {suspensionTriggers.map((trigger, index) => (
                        <div key={index} className="trigger-item animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="trigger-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                            <span>{trigger.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="consequences" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">THE 20-DAY DEADLINE</div>
                    <h2>What Happens Next?</h2>
                </div>
                <div className="consequences-grid">
                    <div className="consequence-card act-now animate-on-scroll delay-1">
                        <h4>Take Immediate Action – What Happens When You Respond</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Challenge the suspension within 20 working days and restore your licence.</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Your current sponsored workers keep their jobs while you fix compliance.</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Demonstrate compliance improvements to UKVI to regain full rights.</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Protect your business operations through prompt legal support from our team.</li>
                        </ul>
                    </div>
                    <div className="consequence-card fail-act animate-on-scroll delay-2">
                        <h4>Fail to Respond – What Happens If You Don’t Act</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Missing the deadline turns the suspension into a revocation.</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>UKVI curtails all sponsored visas, forcing staff to leave the UK.</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>You cannot apply for a new licence for at least 12 months.</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>You lose the ability to recruit skilled international workers indefinitely.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>You Can Stop the Home Office from Revoking Your Sponsor Licence</h2>
                <p>At Lexington Ashworth, we have successfully guided numerous clients through the complexities of a suspended Sponsor Licence. Our immigration solicitors are ready to answer your questions and review your processes to set up your business for long-term success.</p>
                <Link href="#contact" className="cta-button">Contact Us Now</Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default SponsorLicenceSuspendedPage;
