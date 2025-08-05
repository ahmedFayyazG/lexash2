'use client';

import { useState, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

// Loading Component
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
  <div className={`loadingScreen ${!isLoading ? 'hide' : ''}`} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    opacity: isLoading ? 1 : 0,
    visibility: isLoading ? 'visible' : 'hidden',
    pointerEvents: isLoading ? 'auto' : 'none'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '60px',
        height: '60px',
        margin: '0 auto 1.5rem',
        border: '3px solid #f0f0f0',
        borderTop: '3px solid #EBBF7D',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{
        color: '#2c3e50',
        fontSize: '1.1rem',
        fontWeight: 500,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>Loading...</p>
    </div>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const SponsorLicencePage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return <LoadingScreen isLoading={true} />;
  }

  const faqItems: FAQItem[] = [
    {
      question: 'What is a Sponsorship Licence?',
      answer: 'A Sponsorship Licence is official permission from the UK Home Office allowing employers to hire skilled workers from outside the UK. It enables a business to issue Certificates of Sponsorship (CoS) for visa applications like the Skilled Worker Visa.'
    },
    {
      question: 'How long does the application process take?',
      answer: 'Standard processing time is up to eight weeks. However, for an additional fee of £500, the Sponsor Licence Priority Service can provide a decision within ten working days.'
    },
    {
      question: 'What are the main eligibility criteria?',
      answer: 'Your organisation must be a genuine UK trading entity, offer a genuine vacancy at the required skill level (RQF level 3 or above), meet minimum salary thresholds, and have robust HR systems for compliance and record-keeping.'
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <div className={`pageWrapper ${!isLoading ? 'loaded' : ''}`} style={{
        minHeight: '100vh',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.4s ease-in-out'
      }}>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.7;
            color: #333;
            background: #fff;
          }
          * { box-sizing: border-box; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
          h1, h2, h3 { color: #2c3e50; font-weight: 600; }
          h1 { font-size: 2.8rem; line-height: 1.2; }
          h2 { font-size: 2rem; margin-bottom: 1.5rem; position: relative; padding-left: 1rem; }
          h2::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 4px; height: 80%; background: #EBBF7D; border-radius: 2px; }
          .fadeInUp { opacity: 0; transform: translateY(20px); animation: fadeInUpAnimation 0.6s ease-out forwards; }
          @keyframes fadeInUpAnimation { to { opacity: 1; transform: translateY(0); } }
        `}</style>
        <style jsx>{`
          .hero-section { background: #2c3e50; color: white; padding: 6rem 0 4rem; }
          .hero-description { font-size: 1.1rem; opacity: 0.9; max-width: 800px; font-weight: 300; }
          .hero-buttons { margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem; }
          .hero-button { background: #EBBF7D; color: #2c3e50; padding: 0.8rem 1.8rem; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; }
          .hero-button:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(235, 191, 125, 0.3); }
          .hero-button.secondary { background: transparent; border: 2px solid #EBBF7D; color: #EBBF7D; }
          .main-content { display: grid; grid-template-columns: 1fr 350px; gap: 3rem; padding: 4rem 0; }
          .section { margin-bottom: 3rem; }
          p { margin-bottom: 1.5rem; color: #555; font-size: 1rem; font-weight: 300; }
          .toc { background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; }
          .toc ol { list-style-position: inside; padding-left: 0; }
          .toc li { margin-bottom: 0.5rem; }
          .toc a { color: #2c3e50; text-decoration: none; }
          .toc a:hover { text-decoration: underline; color: #EBBF7D; }
          .benefit-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
          .benefit-card { background: #f8f9fa; padding: 2rem; border-radius: 12px; border-bottom: 4px solid #EBBF7D; text-align: center; }
          .benefit-card h4 { font-size: 1.1rem; font-weight: 600; color: #2c3e50; }
          table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
          th, td { padding: 1rem; text-align: left; border-bottom: 1px solid #e5e5e5; }
          th { background: #f8f9fa; font-weight: 600; }
          .step { display: flex; align-items: flex-start; margin-bottom: 2rem; }
          .step-number { width: 50px; height: 50px; background: #EBBF7D; color: #2c3e50; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; flex-shrink: 0; margin-right: 1.5rem; }
          .faq-item { border: 1px solid #e5e5e5; margin-bottom: 1rem; border-radius: 8px; overflow: hidden; }
          .faq-question { padding: 1.5rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; }
          .faq-answer { padding: 0 1.5rem; max-height: 0; overflow: hidden; transition: all 0.3s ease; }
          .faq-item.active .faq-answer { padding: 1.5rem; max-height: 500px; }
          @media (max-width: 968px) { .main-content { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="container">
            <div className="hero-content fadeInUp">
              <h1>UK Sponsor Licence Application: A Complete 2025 Guide</h1>
              <p className="hero-description">
                A sponsorship licence is formal authorisation granted by UK Visas and Immigration that lets an organisation recruit and sponsor overseas workers under the UK points-based immigration system. UK based employers can explore cost, documents, eligibility requirements, timelines to successfully apply for Sponsor Licence in 2025 without the legal jargon.
              </p>
              <div className="hero-buttons">
                <a href="#eligibility" className="hero-button">Check your eligibility</a>
                <a href="#download" className="hero-button secondary">Download Guide for Sponsor Licences</a>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="main-content">
            <div className="content-area">
              <section className="section toc">
                <h3>Table of Contents</h3>
                <ol>
                    <li><a href="#what-is">What is a Sponsorship Licence?</a></li>
                    <li><a href="#types">Types of Sponsorship Licence</a></li>
                    <li><a href="#who-needs">Who Needs a Sponsor Licence?</a></li>
                    <li><a href="#requirements">Sponsor Licence Requirements & Eligibility</a></li>
                    <li><a href="#documents">Required Documents</a></li>
                    <li><a href="#process">Application Process: Step-by-Step</a></li>
                    <li><a href="#faq">Frequently Asked Questions</a></li>
                </ol>
              </section>

              <section id="what-is" className="section">
                <h2>What is a Sponsorship Licence?</h2>
                <p>A Sponsorship Licence (also known as a Sponsor Licence or a UK Sponsor Licence) is official permission granted by the UK Home Office to employers who want to hire skilled workers from outside the UK, including from the EU. With this licence, a business becomes an approved sponsor and can issue Certificates of Sponsorship (CoS) to eligible foreign workers. These workers can then apply for a Skilled Worker Visa or other work routes.</p>
                <div className="benefit-cards">
                    <div className="benefit-card"><h4>Legally Hire Skilled Workers from Abroad</h4></div>
                    <div className="benefit-card"><h4>Access to a Global Talent Pool</h4></div>
                    <div className="benefit-card"><h4>Business Credibility and Compliance</h4></div>
                    <div className="benefit-card"><h4>Pathway to Long-Term Workforce Stability</h4></div>
                </div>
              </section>

              <section id="types" className="section">
                <h2>Types of Sponsorship Licence</h2>
                <p>There are two principal categories of UK sponsor licence, each permitting different types of migrant employment:</p>
                <table>
                  <thead><tr><th>Licence Category</th><th>Routes</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Worker Sponsor Licence</strong></td><td>Skilled Worker, Senior or Specialist Worker, Minister of Religion, International Sportsperson</td></tr>
                    <tr><td><strong>Temporary Worker Sponsor Licence</strong></td><td>Scale-up Worker, Creative Worker, Charity Worker, Seasonal Worker, Government Authorised Exchange, and various Global Business Mobility (GBM) routes.</td></tr>
                  </tbody>
                </table>
              </section>
              
              <section id="who-needs" className="section">
                <h2>Who Needs a Sponsor Licence?</h2>
                <p>To hire anyone who doesn't already have settled status or a valid right to work in the UK, your organisation must apply for a sponsor licence. This rule applies to all employers, big or small, no matter how many overseas staff you bring on.</p>
              </section>

              <section id="requirements" className="section">
                <h2>Sponsor Licence Requirements & Eligibility Criteria 2025</h2>
                <p>To apply for a UK sponsor licence in 2025, organisations must demonstrate they meet the Home Office's eligibility criteria and maintain robust compliance systems.</p>
                <ul>
                  <li><strong>Eligible Business Entity:</strong> Must be a genuine UK trading entity with proof of commercial activity.</li>
                  <li><strong>Genuine Vacancy & Skill Level:</strong> The role must be a real vacancy at RQF level 3 or above.</li>
                  <li><strong>Minimum Salary & Financial Capacity:</strong> Must pay the sponsored worker at least the published "going rate" or general salary threshold.</li>
                  <li><strong>HR & Recruitment Records:</strong> Maintain clear records of recruitment efforts.</li>
                  <li><strong>Sponsorship Management System & Key Personnel:</strong> Appoint key personnel to manage compliance via the Home Office's SMS.</li>
                </ul>
              </section>

              <section id="documents" className="section">
                <h2>Sponsorship Licence Documents</h2>
                <p>A minimum of 4 items from the mandatory list in Appendix A are required.</p>
                 <table>
                  <thead><tr><th>Document Bundle</th><th>What it Includes</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Mandatory (min 4 items)</strong></td><td>Latest audited accounts, Employer's liability insurance, VAT certificate, Corporate bank statement, HMRC registration, Proof of premises.</td></tr>
                  </tbody>
                </table>
              </section>

              <section id="process" className="section">
                <h2>Application Process: Step-by-Step Guide</h2>
                <div className="process-steps">
                    <div className="step"><div className="step-number">1</div><div><h4>Prepare Application</h4><p>Check business eligibility and assign key personnel.</p></div></div>
                    <div className="step"><div className="step-number">2</div><div><h4>Gather Documents</h4><p>Collect all required proof of legitimacy and finances.</p></div></div>
                    <div className="step"><div className="step-number">3</div><div><h4>Complete Online Form</h4><p>Fill in company details on the Sponsorship Management System (SMS).</p></div></div>
                    <div className="step"><div className="step-number">4</div><div><h4>Pay Fee & Submit</h4><p>Pay the fee (£574 for small, £1,579 for large sponsors) and submit.</p></div></div>
                    <div className="step"><div className="step-number">5</div><div><h4>Email Documents</h4><p>Send all supporting PDFs to the Home Office within five working days.</p></div></div>
                    <div className="step"><div className="step-number">6</div><div><h4>Await Decision</h4><p>Decisions usually take up to eight weeks (or 10 working days with priority service).</p></div></div>
                </div>
              </section>

              <section id="faq" className="section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                  {faqItems.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                      <button className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                        <span className="faq-icon">{activeFAQ === index ? '−' : '+'}</span>
                      </button>
                      <div className="faq-answer"><p>{faq.answer}</p></div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            <aside className="sidebar">
              {/* Sidebar content can be added here if needed */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorLicencePage;