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
interface FAQItem {
  question: string;
  answer: string;
}

interface Fee {
    component: string;
    cost: string;
}

interface Tip {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface Comparison {
    feature: string;
    selfSponsorship: string | boolean;
    innovatorFounder: string | boolean;
    gbmVisa: string | boolean;
}

// --- COMPONENT DATA ---
const officialFees: Fee[] = [
    { component: 'Sponsor Licence Application (SME)', cost: '£574' },
    { component: 'Visa Application (≤3 years)', cost: '£769' },
    { component: 'Visa Application (>3 years)', cost: '£1,519' },
    { component: 'Immigration Health Surcharge (IHS)', cost: '£1,035 / year' },
    { component: 'Certificate of Sponsorship (CoS)', cost: '£525' },
    { component: 'Biometric Appointment', cost: '£19.20' },
];

const planningTips: Tip[] = [
    { title: 'Use Standardised Templates', description: 'Leverage pre-approved templates for filings to reduce drafting time and legal fees.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> },
    { title: 'Opt for Fixed-Fee Legal', description: 'Choose firms offering flat-fee support to eliminate surprise costs and ensure budget predictability.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Translate Documents Early', description: 'Avoid premium last-minute fees by translating all necessary documents well in advance.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
    { title: 'Build a Contingency Buffer', description: 'Always budget an extra 10-15% for unexpected business, government, or legal needs that may arise.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> },
];

const comparisonData: Comparison[] = [
    { feature: 'Path to Settlement', selfSponsorship: 'Yes (5 years)', innovatorFounder: 'Yes (3 years)', gbmVisa: 'No' },
    { feature: 'Own Your Business', selfSponsorship: true, innovatorFounder: true, gbmVisa: false },
    { feature: 'Endorsement Body Needed', selfSponsorship: false, innovatorFounder: true, gbmVisa: false },
    { feature: 'Application Risk Profile', selfSponsorship: 'Low', innovatorFounder: 'High', gbmVisa: 'Medium' },
];

const faqItems: FAQItem[] = [
    {
      question: 'What if fees rise after I’ve submitted my application?',
      answer: 'If fees increase after you apply, the Home Office usually honours the rate in place on your submission date. However, it is wise to set aside a modest contingency for any potential shortfalls.',
    },
    {
      question: 'What if I can’t prove my maintenance funds?',
      answer: 'Failure to provide adequate proof of maintenance funds is a common reason for refusal. It is crucial to have correctly formatted bank statements showing the required funds have been held for the specified period.',
    },
    {
      question: 'How much are the total sponsorship fees?',
      answer: 'Total costs vary greatly, but combining government fees, legal support, and business setup, a comprehensive budget often starts from £25,000 to £30,000+, in addition to the £150,000 operating budget.',
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
const SelfSponsorshipCostPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <div className={`pageWrapper ${!isLoading ? 'loaded' : ''}`} style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.4s ease-in-out' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { margin: 0; font-family: 'Poppins', sans-serif; line-height: 1.7; color: #333; background: #fff; font-weight: 300; }
          * { box-sizing: border-box; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
          h1, h2, h3, h4 { font-family: 'Poppins', sans-serif; color: #212C3C; font-weight: 400; }
          h1 { font-size: 3.25rem; font-weight: 400; line-height: 1.2; }
          h2 { font-size: 2.5rem; text-align: center; margin-bottom: 1rem; }
          p { color: #555; font-size: 1.05rem; }
          @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
          }
        `}</style>
        <style>{`
          .hero-section {
            background-image: linear-gradient(rgba(33, 44, 60, 0.85), rgba(33, 44, 60, 0.85)), url('https://images.unsplash.com/photo-1529156069898-fac5153485cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 8rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          .hero-content-wrapper {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 3rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .hero-content h1 {
            color: #fff;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          }
          .hero-content p {
            font-size: 1.15rem;
            max-width: 700px;
            margin: 1.5rem auto 2.5rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 300;
          }
          .cta-button {
            background: #EBBF7D;
            color: #212C3C;
            padding: 0.9rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: inline-block;
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4);
          }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
          
          .cost-breakdown {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          .cost-card {
            background: #fff;
            border-radius: 12px;
            padding: 2rem;
            border: 1px solid #e9ecef;
          }
          .cost-card h3 { margin-top: 0; border-bottom: 2px solid #EBBF7D; padding-bottom: 0.75rem; display: inline-block; }
          .fee-row { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px dashed #e0e0e0; }
          .fee-row:last-child { border-bottom: none; }
          .fee-component { font-weight: 400; }
          .fee-cost { font-weight: 500; color: #212C3C; }

          .tips-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
          .tip-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #e9ecef;
            transition: all 0.3s ease;
          }
          .tip-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(44, 62, 80, 0.1); }
          .tip-icon { width: 50px; height: 50px; color: #EBBF7D; margin: 0 auto 1.5rem; }
          .tip-card h4 { font-size: 1.2rem; margin-bottom: 0.5rem; }
          .tip-card p { font-size: 0.95rem; color: #6c757d; }

          .comparison-table {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 15px 40px rgba(44, 62, 80, 0.1);
            overflow: hidden;
            margin-top: 3rem;
          }
          .comp-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            text-align: center;
            border-bottom: 1px solid #e9ecef;
          }
          .comp-row div { padding: 1.25rem; }
          .comp-header { background: #212C3C; color: white; font-weight: 500; }
          .comp-header div:first-child { text-align: left; }
          .comp-feature { text-align: left; font-weight: 400; }
          .check-icon { color: #27ae60; font-size: 1.5rem; }
          .cross-icon { color: #c0392b; font-size: 1.5rem; }
          
          .pricing-card {
            background: linear-gradient(135deg, #2c3e50, #212C3C);
            color: white;
            padding: 3rem;
            border-radius: 16px;
            max-width: 450px;
            margin: 3rem auto;
            text-align: center;
          }
          .pricing-card h3 { color: #EBBF7D; }
          .price { font-size: 3.5rem; font-weight: 600; color: white; margin: 1rem 0; }
          .price span { font-size: 1rem; font-weight: 300; opacity: 0.8; }
          .features-list { list-style: none; padding: 0; margin: 2rem 0; text-align: left; }
          .features-list li { padding: 0.5rem 0; display: flex; align-items: center; gap: 0.75rem; font-weight: 300; }
          .features-list li svg { color: #EBBF7D; flex-shrink: 0; }

          .risk-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
          }
          .risk-card { padding: 2rem; border-radius: 12px; }
          .risk-card.pro { background: #e8f5e9; border: 1px solid #a5d6a7; }
          .risk-card.diy { background: #ffebee; border: 1px solid #ef9a9a; }
          .risk-card h4 { margin-top: 0; }
          .risk-card ul { list-style: none; padding: 0; }
          .risk-card li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
          .pro li svg { color: #27ae60; }
          .diy li svg { color: #c0392b; }

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
            font-weight: 500;
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
            .risk-section { grid-template-columns: 1fr; }
          }
        `}</style>

        <section className="hero-section">
          <div className="container">
            <div className="hero-content-wrapper">
                <div className="hero-content">
                  <h1>What Does UK Self-Sponsorship Really Cost in 2025?</h1>
                  <p>
                    Get complete clarity on UK Self-Sponsorship costs. Discover real-world examples, a detailed fee breakdown, and smart budgeting tips for business owners.
                  </p>
                  <Link href="#eligibility" className="cta-button">Check Eligibility Now</Link>
                </div>
            </div>
          </div>
        </section>

        <section id="costs" className="section">
          <div className="container">
            <div className="section-header">
                <div className="subtitle">THE FULL FINANCIAL PICTURE</div>
                <h2>Understanding Your Total Investment</h2>
                <p className="intro-text">
                  The self-sponsorship visa cost isn’t just about government fees. It’s a comprehensive investment in your future, covering business acquisition, legal structuring, and ongoing compliance.
                </p>
            </div>
            <div className="cost-breakdown">
                <div className="cost-card">
                    <h3>Government & Official Fees</h3>
                    {officialFees.map((fee, index) => (
                        <div key={index} className="fee-row">
                            <span className="fee-component">{fee.component}</span>
                            <span className="fee-cost">{fee.cost}</span>
                        </div>
                    ))}
                </div>
                <div className="cost-card">
                    <h3>Business & Operational Costs</h3>
                    <div className="fee-row"><span className="fee-component">Business Acquisition / Setup</span><span className="fee-cost">Variable</span></div>
                    <div className="fee-row"><span className="fee-component">First Year's Rent & Utilities</span><span className="fee-cost">~£20,000+</span></div>
                    <div className="fee-row"><span className="fee-component">Accountancy & Payroll Setup</span><span className="fee-cost">~£2,000+</span></div>
                    <div className="fee-row"><span className="fee-component">Employer's Liability Insurance</span><span className="fee-cost">~£500+</span></div>
                    <div className="fee-row"><span className="fee-component">Recruitment & Staffing</span><span className="fee-cost">Variable</span></div>
                    <div className="fee-row"><span className="fee-component">Operating Budget (Min.)</span><span className="fee-cost">£150,000</span></div>
                </div>
            </div>
          </div>
        </section>

        <section id="planning" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">BUDGETING SMARTER</div>
                    <h2>Budget Hacks & Smart Planning Tips</h2>
                    <p className="intro-text">Keep your UK Self-Sponsorship cost under control with these expert-approved strategies for efficient financial planning.</p>
                </div>
                <div className="tips-grid">
                    {planningTips.map((tip, index) => (
                        <div key={index} className="tip-card">
                            <div className="tip-icon">{tip.icon}</div>
                            <h4>{tip.title}</h4>
                            <p>{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="compare" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">VISA PATHWAYS</div>
                    <h2>Compare Your Business Immigration Options</h2>
                </div>
                <div className="comparison-table">
                    <div className="comp-row comp-header">
                        <div>Feature</div>
                        <div>Self-Sponsorship</div>
                        <div>Innovator Founder</div>
                        <div>Global Business Mobility</div>
                    </div>
                    {comparisonData.map((row, index) => (
                        <div key={index} className="comp-row">
                            <div className="comp-feature">{row.feature}</div>
                            <div>{typeof row.selfSponsorship === 'boolean' ? (row.selfSponsorship ? <span className="check-icon">✓</span> : <span className="cross-icon">✗</span>) : row.selfSponsorship}</div>
                            <div>{typeof row.innovatorFounder === 'boolean' ? (row.innovatorFounder ? <span className="check-icon">✓</span> : <span className="cross-icon">✗</span>) : row.innovatorFounder}</div>
                            <div>{typeof row.gbmVisa === 'boolean' ? (row.gbmVisa ? <span className="check-icon">✓</span> : <span className="cross-icon">✗</span>) : row.gbmVisa}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

         <section id="pricing" className="section bg-light">
            <div className="container">
                <div className="pricing-card">
                    <h3>Our Self-Sponsorship Package</h3>
                    <div className="price">£18,000 <span>+ VAT</span></div>
                    <p>For entrepreneurs who need comprehensive legal help with their licence & visa.</p>
                    <ul className="features-list">
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Sponsor Licence Application</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Skilled Worker Visa Application</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>HR Compliance Setup</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>12 Months Legal Support</li>
                    </ul>
                    <Link href="#eligibility" className="cta-button">Check Your Eligibility</Link>
                </div>
            </div>
        </section>

        <section id="risk" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">INVESTMENT VS. LIABILITY</div>
                    <h2>Why Saving on Fees Can Lead to Costly Rejections</h2>
                </div>
                <div className="risk-section">
                    <div className="risk-card pro">
                        <h4>Using Our Self-Sponsorship Route</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Full legal guidance at every step</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Professionally prepared applications</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Ongoing compliance included</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>High success rate and peace of mind</li>
                        </ul>
                    </div>
                    <div className="risk-card diy">
                        <h4>Trying to Cut Costs & Do It Alone</h4>
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Limited understanding of compliance</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Frequent errors in applications</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>Risk of delays or outright rejection</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>A rejection can flag your future attempts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" className="section bg-light">
          <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
              {faqItems.map((faq, index) => (
                <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={activeFAQ === index}>
                    {faq.question}
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
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

export default SelfSponsorshipCostPage;
