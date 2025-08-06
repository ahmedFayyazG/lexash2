'use client';

import { ReactNode, useEffect } from 'react';

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
interface Benefit {
    title: string;
    icon: ReactNode;
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
    { title: 'Faster Decision Times', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
    { title: 'Entrepreneurial Freedom', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg> },
    { title: 'Clear ILR Pathway', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
    { title: 'Include Your Family', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { title: 'Assured Visa Stability', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
    { title: 'High Quality of Life', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
];

const processSteps: Step[] = [
    { title: 'Acquire a UK Business', description: 'Acquire or have an existing UK business, which serves as the legal foundation for your visa.' },
    { title: 'HR Compliance', description: 'Implement HR systems, payroll, and employment compliance frameworks.' },
    { title: 'Sponsor Licence', description: 'Apply for and obtain your Sponsor Licence from the Home Office.' },
    { title: 'Skilled Worker Visa', description: 'Apply for your Skilled Worker visa through your own company.' },
    { title: 'ILR & Permanent Residency', description: 'Progress to Indefinite Leave to Remain after 5 years.' },
];

const eligibilityRequirements: Requirement[] = [
    { text: 'Be 18+ and pass English at CEFR B1 level' },
    { text: 'Valid passport from eligible country required' },
    { text: 'Intend to run or acquire a genuine, trading UK business' },
    { text: 'Must demonstrate real business activity and intent' },
    { text: 'Pay yourself at least £38,700 annually (or SOC-specific rate)' },
    { text: 'Cover rent, staff, and operating expenses (~£150,000 budget)' },
    { text: 'Appoint a UK-settled Authorising Officer' },
];


// --- MAIN PAGE COMPONENT ---
const SelfSponsorshipVisaPage = () => {
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
          .blob2 { width: 500px; height: 500px; background: #4A5568; bottom: -150px; right: -150px; animation: moveBlob 25s infinite alternate-reverse; }
          @keyframes moveBlob {
            0% { transform: scale(1.1) translate(0, 0) rotate(0deg); }
            100% { transform: scale(1.4) translate(120px, 80px) rotate(180deg); }
          }
          .hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
          .hero-content h1 { color: #fff; animation: fadeInDown 1s ease-out 0.2s backwards; }
          .hero-content p { font-size: 1.1rem; margin: 1.5rem 0 2.5rem; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-group { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; animation: fadeInUp 1s ease-out 0.6s backwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button { background: #EBBF7D; color: #212C3C; padding: 0.8rem 1.8rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
          .cta-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4); }
          .cta-button.secondary { background: transparent; color: #EBBF7D; border: 1px solid #EBBF7D; }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .intro-content h2 { text-align: left; }
          .intro-image { border-radius: 12px; max-width: 100%; }

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
            margin: 2rem 0 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .eligibility-list li { display: flex; align-items: center; gap: 0.75rem; font-weight: 300; color: rgba(255,255,255,0.9); }
          .eligibility-list li svg { color: #EBBF7D; flex-shrink: 0; }

          @media (max-width: 992px) { 
            .intro-grid { grid-template-columns: 1fr; }
            .comparison-grid { grid-template-columns: 1fr; }
            .eligibility-list { grid-template-columns: 1fr; }
          }
        `}</style>

        <section className="hero-section" style={{paddingTop:"15rem"}}>
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>What is UK Self Sponsorship Visa Route?</h1>
              <p>
                A faster, smarter path to UK residency, led by UK regulated immigration solicitors and trusted by 200+ business leaders offering you long-term stability and a future built on your own terms.
              </p>
              <div className="cta-group">
                <Link href="#requirements" className="cta-button">Explore Requirements</Link>
                <Link href="#cost" className="cta-button secondary">Explore Cost</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Is Self-Sponsorship an Official Visa Route?</h2>
                        <p>Self-Sponsorship in the UK is not a specific type of visa, but rather a way for business owners to stay and live in the UK to run their business. It is a structure that combines two legal UK visa routes: the Skilled Worker visa and the Sponsor Licence.</p>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="International business team meeting" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="who-is-it-for" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">THE IDEAL CANDIDATE</div>
                    <h2>Is This Route For You?</h2>
                </div>
                <div className="comparison-grid">
                    <div className="comparison-card ideal animate-on-scroll delay-1">
                        <h4>Ideal For:</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Entrepreneurs with proven business experience</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Individuals with £150,000+ to invest in a UK business</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Those aiming for long-term UK residency and ILR</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Families planning to relocate and settle together</li>
                        </ul>
                    </div>
                    <div className="comparison-card not-ideal animate-on-scroll delay-2">
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
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">ADVANTAGES</div>
                    <h2>Key Benefits of Self-sponsorship</h2>
                </div>
                <div className="benefits-grid">
                    {keyBenefits.map((benefit, index) => (
                        <div key={index} className="benefit-card animate-on-scroll" style={{transitionDelay: `${index * 0.05}s`}}>
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h5>{benefit.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="process" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">THE PROCESS</div>
                    <h2>Your Step-by-Step Journey</h2>
                </div>
                <div className="timeline">
                    {processSteps.map((step, index) => (
                        <div key={index} className="timeline-step animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
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
                 <div className="eligibility-card animate-on-scroll">
                    <h3>Eligibility Requirements for Self-Sponsorship</h3>
                    <p>To qualify for this route, you must meet several key criteria. Our team can provide a full assessment of your eligibility.</p>
                    <ul className="eligibility-list">
                        {eligibilityRequirements.map((req, index) => (
                            <li key={index}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>{req.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default SelfSponsorshipVisaPage;
