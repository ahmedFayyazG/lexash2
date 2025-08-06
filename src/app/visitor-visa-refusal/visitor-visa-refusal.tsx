'use client';

import React, { useState, useEffect , ReactNode} from 'react';


interface LinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any; // allows extra props
}

const Link = ({ href, children, ...props }: LinkProps) => (
  <a href={href} {...props}>{children}</a>
);

// --- INTERFACES ---
interface NextStep {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const nextSteps: NextStep[] = [
    { title: 'Reapply', description: 'Submit a new, stronger application that directly addresses the specific reasons for the initial refusal.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> },
    { title: 'Appeal', description: 'If you have the right to appeal (usually on human rights grounds), you can challenge the decision at a tribunal.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Judicial Review', description: 'Challenge the lawfulness of the decision if you believe there was a legal or procedural error by the Home Office.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];


// --- MAIN PAGE COMPONENT ---
const VisitorVisaRefusedPage = () => {
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
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
          .gradient-blob { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.25; }
          .blob1 { width: 600px; height: 600px; background: #EBBF7D; top: -200px; left: -200px; animation: moveBlob 20s infinite alternate; }
          .blob2 { width: 500px; height: 500px; background: #c0392b; bottom: -150px; right: -150px; animation: moveBlob 25s infinite alternate-reverse; }
          @keyframes moveBlob {
            0% { transform: scale(1.1) translate(0, 0) rotate(0deg); }
            100% { transform: scale(1.4) translate(120px, 80px) rotate(180deg); }
          }
          .hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
          .hero-content h1 { color: #fff; animation: fadeInDown 1s ease-out 0.2s backwards; }
          .hero-content p { font-size: 1.1rem; margin: 1.5rem 0 2.5rem; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button { background: #EBBF7D; color: #212C3C; padding: 0.8rem 1.8rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; animation: fadeInUp 1s ease-out 0.6s backwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4); }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .options-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          .option-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
            text-align: center;
            transition: all 0.3s ease;
          }
          .option-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(44, 62, 80, 0.1);
          }
          .option-icon {
            width: 50px;
            height: 50px;
            color: #EBBF7D;
            margin: 0 auto 1.5rem;
          }
          .option-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .option-card p {
            font-size: 0.95rem;
            color: #6c757d;
          }
          
          .cta-section {
            background: #212C3C;
            color: white;
            padding: 4rem 0;
            text-align: center;
          }
          .cta-section h2 { color: white; }
          .cta-section p { color: rgba(255,255,255,0.8); max-width: 600px; margin: 1.5rem auto 2rem; }

        `}</style>

        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>What’s Next if Your UK Visitor Visa Was Refused?</h1>
              <p>
                If your Visit Visa is refused, there are steps you can take to reverse the decision. Getting expert legal advice is essential, as picking the wrong remedy could lead to higher costs and further refusals.
              </p>
              <Link href="#contact" className="cta-button">Contact Our Team</Link>
            </div>
          </div>
        </section>

        <section id="options" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">YOUR OPTIONS</div>
                    <h2>What To Do Next</h2>
                    <p>If your Visit Visa is refused, you have three primary options. The best path forward depends on the specific reasons for the refusal.</p>
                </div>
                <div className="options-grid">
                    {nextSteps.map((step, index) => (
                        <div key={index} className="option-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="option-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>Navigate The Complex System With A UK Immigration Solicitor That Cares</h2>
                <p>The UK immigration system is notoriously complex. One administrative oversight could mean a major setback for your plans. At Lexington Ashworth, we provide the expert guidance you need to ensure your case is handled correctly.</p>
                <Link href="#contact" className="cta-button">Contact Our Team</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default VisitorVisaRefusedPage;
