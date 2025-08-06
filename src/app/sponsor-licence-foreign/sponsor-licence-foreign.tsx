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
interface TableOfContentsItem {
    title: string;
    href: string;
}

interface LicenceType {
    title: string;
    description: string;
    routes: string[];
}

interface ProcessStep {
    title: string;
    description: string;
}

interface Requirement {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const tableOfContents: TableOfContentsItem[] = [
    { title: 'What is a Sponsorship Licence?', href: '#what-is' },
    { title: 'Types of Sponsorship Licence', href: '#types' },
    { title: 'Who Needs a Sponsor Licence?', href: '#who-needs' },
    { title: 'Sponsor Licence Requirements', href: '#requirements' },
    { title: 'Application Process Guide', href: '#process' },
    { title: 'Application Cost', href: '#cost' },
    { title: 'Sponsor Licence Compliance', href: '#compliance' },
    { title: 'Common Pitfalls to Avoid', href: '#pitfalls' },
];

const licenceTypes: LicenceType[] = [
    {
        title: 'UK Worker Sponsor Licence',
        description: 'Allows an organisation to recruit skilled overseas nationals into long-term roles such as Skilled Worker or International Sportsperson.',
        routes: ['Skilled Worker', 'Senior or Specialist Worker', 'Minister of Religion', 'International Sportsperson']
    },
    {
        title: 'UK Temporary Worker Sponsor Licence',
        description: 'Enables an organisation to sponsor fixed-term staff under schemes like Creative Worker, Charity Worker, and Global Business Mobility routes.',
        routes: ['Scale-up Worker', 'Creative Worker', 'Charity Worker', 'Seasonal Worker', 'GBM Routes']
    }
];

const processSteps: ProcessStep[] = [
    { title: 'Prepare for your application', description: 'Check your business meets all rules, has HR systems, and key staff assigned.' },
    { title: 'Gather your documents', description: 'Collect proof of your company’s legitimacy, finances, and premises.' },
    { title: 'Complete the online application', description: 'Log into the Sponsorship Management System (SMS) and fill in all details.' },
    { title: 'Pay the application fee', description: 'Pay the required fee (£574 for small, £1,579 for large sponsors) via the SMS.' },
    { title: 'Submit supporting documents', description: 'Email all your prepared PDFs to the Home Office within five working days.' },
    { title: 'Await the Home Office decision', description: 'Standard processing takes up to 8 weeks. Priority service is available.' },
    { title: 'Prepare for a compliance visit', description: 'The Home Office may visit to review your systems and paperwork.' },
    { title: 'Receive your sponsor licence', description: 'Once approved, you’re added to the Register of Licensed Sponsors.' },
];

const requirements: Requirement[] = [
    { title: 'Eligible Business Entity', description: 'Your organisation must be a genuine UK trading entity with proof of commercial activity.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8.8c0-1.4 1.2-2.8 2.5-2.8s2.5 1.4 2.5 2.8V22m-5 0V8.8c0-1.4-1.2-2.8-2.5-2.8S7 7.4 7 8.8V22m5-12H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v6m14 0h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3v6M6 22h12"/></svg> },
    { title: 'Genuine Vacancy & Skill Level', description: 'The role must be a real vacancy at RQF level 3 or above and meet specific skill criteria.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { title: 'Minimum Salary', description: 'You must pay the sponsored worker at least the "going rate" or the general salary threshold.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
    { title: 'HR & Recruitment Records', description: 'Maintain clear records of recruitment efforts to prove a settled worker could not fill the role.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> },
    { title: 'Key Personnel Appointed', description: 'Appoint an Authorising Officer, Key Contact, and Level 1 Users to manage the licence.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> },
    { title: 'No Criminal Convictions', description: 'Sponsors must have no unspent convictions for immigration offences, fraud, or other serious crimes.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
];

const pitfalls = [
    { title: 'Incomplete Application Details', description: 'Missing or inaccurate information can lead to immediate delays or rejection.' },
    { title: 'Insufficient Supporting Documents', description: 'Failure to provide all required documents from Appendix A is a common reason for refusal.' },
    { title: 'Non-Compliance with Salary Thresholds', description: 'The offered salary must meet the strict minimum requirements for the specific role.' },
    { title: 'Weak Recruitment Evidence', description: 'You must prove you conducted a genuine search for a settled worker before sponsoring.' },
    { title: 'Slow Responses to UKVI Queries', description: 'Timely communication with the Home Office is crucial during the application process.' },
    { title: 'Poor Audit Preparation', description: 'Your HR systems must be robust and ready for a potential compliance visit at any time.' },
];


// --- MAIN PAGE COMPONENT ---
const SponsorLicencePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

  return (
    <>
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
            background-color: #f8f9fa;
            padding: 7rem 0;
          }
          .hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          .hero-content p {
            font-size: 1.1rem;
            max-width: 550px;
            margin: 1.5rem 0 2.5rem;
          }
          .cta-group {
            display: flex;
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
            color: #212C3C;
            border: 1px solid #212C3C;
          }
          .hero-visual {
            background: #fff;
            border-radius: 20px;
            padding: 2rem;
            border: 1px solid #e9ecef;
            box-shadow: 0 20px 50px rgba(44, 62, 80, 0.1);
          }
          .hero-visual h4 {
            margin-top: 0;
            color: #EBBF7D;
            font-weight: 500;
            border-bottom: 1px solid #e9ecef;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
          }
          .toc-list {
            list-style: none;
            padding: 0;
            margin: 0;
            columns: 2;
            column-gap: 2rem;
          }
          .toc-list li {
            margin-bottom: 0.75rem;
          }
          .toc-list a {
            color: #555;
            text-decoration: none;
            font-weight: 300;
            transition: color 0.3s;
            font-size: 0.9rem;
          }
          .toc-list a:hover {
            color: #EBBF7D;
          }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
          
          .benefits-grid-4 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }
          .benefit-card-small {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
            text-align: center;
          }
          .benefit-card-small h4 {
            font-size: 1.1rem;
          }

          .licence-types-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .licence-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
          }
          .licence-card h3 { margin-top: 0; }
          .licence-card ul {
            list-style: none;
            padding: 0;
            margin-top: 1rem;
          }
          .licence-card li {
            background: #f8f9fa;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            display: inline-block;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
          }
          
          .process-timeline {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 900px;
            margin: 3rem auto;
          }
          .timeline-step {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            background: #fff;
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
          }
          .step-number {
            width: 50px;
            height: 50px;
            background: #212C3C;
            color: #EBBF7D;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 1.25rem;
            flex-shrink: 0;
          }
          .step-content h4 { margin: 0 0 0.5rem; }
          .step-content p { margin: 0; font-size: 0.95rem; }

          .requirements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }
          .req-card {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .req-icon {
            width: 48px;
            height: 48px;
            color: #EBBF7D;
            flex-shrink: 0;
          }
          .req-card h4 { margin: 0 0 0.5rem; }
          .req-card p { margin: 0; font-size: 0.95rem; }
          
          .cost-table {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 15px 40px rgba(44, 62, 80, 0.1);
            overflow: hidden;
            max-width: 800px;
            margin: 2rem auto;
          }
          .cost-row {
            display: grid;
            grid-template-columns: 1fr auto;
            padding: 1.25rem 1.5rem;
            border-bottom: 1px solid #e9ecef;
          }
          .cost-row:last-child { border-bottom: none; }
          .cost-row.header { background: #212C3C; color: white; font-weight: 500; }
          .cost-component { font-weight: 400; }
          .cost-value { font-weight: 500; }

          .pitfall-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          .pitfall-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border-left: 4px solid #c0392b;
          }
          .pitfall-card h4 { display: flex; align-items: center; gap: 0.75rem; }
          .pitfall-icon { color: #c0392b; }

          @media (max-width: 992px) {
            .hero-grid { grid-template-columns: 1fr; }
            .hero-visual { margin-top: 3rem; }
            .licence-types-grid { grid-template-columns: 1fr; }
          }
           @media (max-width: 768px) {
            .toc-list { columns: 1; }
          }
        `}</style>

        <section className="hero-section">
          <div className="container">
            <div className="hero-grid">
                <div className="hero-content">
                  <h1>UK Sponsor Licence Application: A Complete 2025 Guide</h1>
                  <p>
                    A sponsorship licence is formal authorisation from UK Visas and Immigration that lets an organisation recruit and sponsor overseas workers. Explore costs, documents, eligibility, and timelines to successfully apply in 2025.
                  </p>
                  <div className="cta-group">
                    <Link href="#requirements" className="cta-button">Check Your Eligibility</Link>
                    <Link href="#guide" className="cta-button secondary">Download Guide</Link>
                  </div>
                </div>
                <div className="hero-visual">
                    <h4>Table of Contents</h4>
                    <ul className="toc-list">
                        {tableOfContents.map((item, index) => (
                            <li key={index}><Link href={item.href}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </section>

        <section id="what-is" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">THE BASICS</div>
                    <h2>What is a UK Sponsor Licence?</h2>
                    <p>A Sponsorship Licence is official permission from the UK Home Office for employers to hire skilled workers from outside the UK. With this licence, a business becomes an approved sponsor and can issue Certificates of Sponsorship (CoS) to eligible foreign workers, who can then apply for a Skilled Worker Visa. It's essential for any UK business looking to access global talent legally.</p>
                </div>
                <div className="benefits-grid-4">
                    <div className="benefit-card-small"><h4>Legally Hire Skilled Workers</h4></div>
                    <div className="benefit-card-small"><h4>Access a Global Talent Pool</h4></div>
                    <div className="benefit-card-small"><h4>Enhance Business Credibility</h4></div>
                    <div className="benefit-card-small"><h4>Build Workforce Stability</h4></div>
                </div>
            </div>
        </section>

        <section id="types" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">LICENCE CATEGORIES</div>
                    <h2>Types of Sponsorship Licence</h2>
                    <p>There are two principal categories of UK sponsor licence, each permitting different types of migrant employment. Your choice depends on the nature of the role you're offering.</p>
                </div>
                <div className="licence-types-grid">
                    {licenceTypes.map((licence, index) => (
                        <div key={index} className="licence-card">
                            <h3>{licence.title}</h3>
                            <p>{licence.description}</p>
                            <ul>
                                {licence.routes.map((route, rIndex) => (
                                    <li key={rIndex}>{route}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="who-needs" className="section">
            <div className="container">
                 <div className="section-header">
                    <div className="subtitle">APPLICABILITY</div>
                    <h2>Who Needs a Sponsor Licence?</h2>
                    <p>To hire anyone who doesn't already have settled status or a valid right to work in the UK, your organisation must apply for a sponsor licence. This rule applies to all employers, big or small, no matter how many overseas staff you bring on.</p>
                </div>
                 <div className="benefits-grid-4">
                    <div className="benefit-card-small"><h4>Large Corporations</h4></div>
                    <div className="benefit-card-small"><h4>SMEs & Startups</h4></div>
                    <div className="benefit-card-small"><h4>Educational Institutions</h4></div>
                    <div className="benefit-card-small"><h4>Charities & Non-Profits</h4></div>
                </div>
            </div>
        </section>

        <section id="requirements" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">ELIGIBILITY</div>
                    <h2>Sponsor Licence Requirements 2025</h2>
                    <p>To apply for a UK sponsor licence, organisations must demonstrate they meet the Home Office's eligibility criteria and maintain robust compliance systems.</p>
                </div>
                <div className="requirements-grid">
                    {requirements.map((req, index) => (
                        <div key={index} className="req-card">
                            <div className="req-icon">{req.icon}</div>
                            <div>
                                <h4>{req.title}</h4>
                                <p>{req.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="process" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">STEP-BY-STEP</div>
                    <h2>Sponsor Licence Application Process</h2>
                </div>
                <div className="process-timeline">
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

        <section id="cost" className="section bg-light">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">INVESTMENT</div>
                    <h2>Cost of a Sponsor Licence Application</h2>
                </div>
                <div className="cost-table">
                    <div className="cost-row header">
                        <div>Fee Type</div>
                        <div>Cost (from 9 April 2025)</div>
                    </div>
                    <div className="cost-row">
                        <div className="cost-component">Small Sponsor Licence Application</div>
                        <div className="cost-value">£574</div>
                    </div>
                    <div className="cost-row">
                        <div className="cost-component">Large Sponsor Licence Application</div>
                        <div className="cost-value">£1,579</div>
                    </div>
                    <div className="cost-row">
                        <div className="cost-component">Priority Service (10-day decision)</div>
                        <div className="cost-value">£500</div>
                    </div>
                    <div className="cost-row">
                        <div className="cost-component">Certificate of Sponsorship (CoS)</div>
                        <div className="cost-value">£525</div>
                    </div>
                     <div className="cost-row">
                        <div className="cost-component">Immigration Skills Charge (per worker/year)</div>
                        <div className="cost-value">£364 - £1,000</div>
                    </div>
                </div>
            </div>
        </section>

        <section id="pitfalls" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle">AVOID MISTAKES</div>
                    <h2>Common Pitfalls in Sponsor Licence Applications</h2>
                </div>
                <div className="pitfall-grid">
                    {pitfalls.map((item, index) => (
                        <div key={index} className="pitfall-card">
                            <h4>
                                <div className="pitfall-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </div>
                                {item.title}
                            </h4>
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

export default SponsorLicencePage;
