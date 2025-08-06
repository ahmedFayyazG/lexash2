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
interface Guarantee {
    title: string;
    description: string;
    icon: ReactNode;
}

interface Package {
    title: string;
    idealFor: string;
    features: string[];
    investment: string;
}

interface Differentiator {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const guarantees: Guarantee[] = [
    { title: 'Expert Service', description: 'Bad advice can lead to delays and refusals. We assign a subject matter expert to manage your case throughout.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Fast Response', description: 'We guarantee a reply to all messages and emails within 24 working hours or we refund 20% of your fees.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
    { title: 'Fixed Fees', description: 'Our services have fixed fees so you know exactly how much you need to pay, with no nasty surprises down the line.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];

const packages: Package[] = [
    { title: 'Starter', idealFor: 'First time applicants', features: ['Precision-crafted applications for first-time success.', 'Perfect for high-risk cases or any first-time applicant.', 'Complete documentation review and submission.'], investment: '£3,000' },
    { title: 'Recovery', idealFor: 'One prior refusal', features: ['Expert strategies to overcome initial refusals.', 'In-depth analysis of past rejection reasons.', 'A stronger, more compelling application.'], investment: '£4,000' },
    { title: 'Rebuild', idealFor: 'Two or more refusals', features: ['Comprehensive support for complex cases.', 'Detailed case reconstruction and risk mitigation.', 'Our highest level of attention and expertise.'], investment: '£5,000' },
];

const differentiators: Differentiator[] = [
    { title: 'Bespoke Application Strategy', description: 'Every case is unique. We tailor your application to align with UK immigration rules and Home Office expectations.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> },
    { title: 'Advanced Document Review', description: 'We don’t just check for missing paperwork—we analyse bank statements and proof of ties to ensure everything aligns.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
    { title: 'Pre-emptive Problem-Solving', description: 'We identify weak spots before submission, so you don’t risk rejection over avoidable mistakes.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> },
    { title: 'Clear Communication', description: 'No chasing updates or waiting weeks for answers. We keep you informed at every stage.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> },
    { title: 'Guidance Beyond Submission', description: 'If additional evidence is requested, or if you need to challenge a decision, we’re with you every step of the way.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
    { title: 'Fixed Fees, No Surprises', description: 'We have transparent pricing so you know exactly what you\'re paying for, with no hidden costs.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> },
];


// --- MAIN PAGE COMPONENT ---
const StandardVisitorVisaPage = () => {
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

          .testimonial-card { background: #fff; border-radius: 12px; box-shadow: 0 15px 40px rgba(44, 62, 80, 0.1); max-width: 800px; margin: 3rem auto; padding: 2.5rem; }
          .testimonial-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
          .testimonial-header h4 { margin: 0; }
          .stars { color: #f1c40f; }
          .testimonial-body { font-style: italic; color: #555; }
          .testimonial-author { font-weight: 500; margin-top: 1.5rem; text-align: right; }

          .guarantee-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
          .guarantee-card { background: #fff; padding: 2rem; border-radius: 12px; border: 1px solid #e9ecef; }
          .guarantee-card h4 { display: flex; align-items: center; gap: 0.75rem; }
          .guarantee-icon { color: #EBBF7D; }

          .packages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: stretch; }
          .package-card { background: #fff; padding: 2.5rem 2rem; border-radius: 12px; border: 1px solid #e9ecef; display: flex; flex-direction: column; }
          .package-card h3 { margin-top: 0; font-size: 1.5rem; }
          .package-card .ideal-for { font-weight: 500; color: #EBBF7D; margin-bottom: 1.5rem; }
          .package-card ul { list-style: none; padding: 0; margin: 0 0 2rem; flex-grow: 1; }
          .package-card li { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem; font-size: 0.95rem; }
          .package-card li svg { color: #27ae60; flex-shrink: 0; margin-top: 5px; }
          .package-investment { text-align: center; font-size: 2.5rem; font-weight: 600; margin: 1rem 0; }
          
          .comparison-table { background: #fff; border-radius: 12px; box-shadow: 0 15px 40px rgba(44, 62, 80, 0.1); overflow: hidden; margin-top: 3rem; }
          .comp-row { display: grid; grid-template-columns: 2fr 1fr 1fr; text-align: center; border-bottom: 1px solid #e9ecef; }
          .comp-row div { padding: 1.25rem; }
          .comp-header { background: #212C3C; color: white; font-weight: 500; }
          .comp-header div:first-child { text-align: left; }
          .comp-feature { text-align: left; font-weight: 400; }
          .check-icon { color: #27ae60; font-size: 1.5rem; }
          .cross-icon { color: #c0392b; font-size: 1.5rem; }

          .differentiators-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
          .diff-card { display: flex; align-items: flex-start; gap: 1.5rem; }
          .diff-icon { color: #EBBF7D; width: 36px; height: 36px; flex-shrink: 0; }
          .diff-card h4 { margin: 0 0 0.5rem; font-size: 1.1rem; }
          .diff-card p { margin: 0; font-size: 0.95rem; }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
          @media (max-width: 768px) { .comp-row { font-size: 0.8rem; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Avoid Delays and Mistakes on Your Standard Visitor Visa UK Application</h1>
              <p>
                Experience award-winning bespoke legal support you can trust to help you avoid the pitfalls - so your UK visit starts smoothly and stress-free.
              </p>
              <div className="cta-group">
                <Link href="#contact" className="cta-button">Get Advice Today</Link>
                <Link href="#guide" className="cta-button secondary">Get Visa Checklist Now</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Don’t Let A Cheap Visa Service Jeopardise Your Future</h2>
                        <p>A rejected visitor visa isn’t just an inconvenience - it can ruin future applications, block business opportunities, and keep you from life’s most important moments. Unlike budget ‘visa services’ that cut corners, our expert immigration lawyers handle your case with precision, ensuring your application meets Home Office scrutiny. Because in a process this complex, even the smallest mistake can cost you dearly.</p>
                        <Link href="#contact" className="cta-button" style={{marginTop: '1rem'}}>Get Advice Today</Link>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Legal professionals reviewing documents" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="comparison" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">THE REAL COST</div>
                    <h2>Think A Cheap Visa Service Will Save You Money? Think Again.</h2>
                    <p>A rejected visa can cost you far more than a few hundred pounds. Here’s what you’re really getting when you pay for a budget service vs. expert immigration lawyers.</p>
                </div>
                <div className="comparison-table animate-on-scroll">
                    <div className="comp-row comp-header">
                        <div>What You’re Really Paying For…</div>
                        <div>Budget ‘Visa Services’</div>
                        <div>Lexington Ashworth’s Premium Service</div>
                    </div>
                    <div className="comp-row"><div className="comp-feature">Who handles your case?</div><div>Junior staff</div><div>Specialist immigration lawyers</div></div>
                    <div className="comp-row"><div className="comp-feature">Application accuracy</div><div>Basic document checks</div><div>Comprehensive review</div></div>
                    <div className="comp-row"><div className="comp-feature">Risk of refusal?</div><div>High</div><div>Minimal</div></div>
                    <div className="comp-row"><div className="comp-feature">Support if there’s a Problem?</div><div>None</div><div>Full expert guidance</div></div>
                    <div className="comp-row"><div className="comp-feature">Impact on Future Applications?</div><div>Potential long-term consequences</div><div>Exceptional track record</div></div>
                    <div className="comp-row"><div className="comp-feature">Real Value?</div><div>An expensive mistake</div><div>A smart investment in success</div></div>
                </div>
            </div>
        </section>

        <section id="why-us" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR DIFFERENCE</div>
                    <h2>How Our Premium Immigration Support Service Is Different</h2>
                    <p>Unlike one-size-fits-all services, we take the time to understand your case, anticipate challenges, and build your strongest application possible.</p>
                </div>
                <div className="differentiators-grid">
                    {differentiators.map((item, index) => (
                        <div key={index} className="diff-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="diff-icon">{item.icon}</div>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="packages" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR PACKAGES</div>
                    <h2>Our Premium Visit Visa Packages – Making Your Success Our Priority</h2>
                    <p>Applying for a UK visitor visa is about much more than just filling out forms. It’s about avoiding pitfalls, protecting your plans and securing your future. Our packages are designed to give you the best chance of success.</p>
                </div>
                <div className="packages-grid">
                    {packages.map((pkg, index) => (
                        <div key={index} className="package-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <h3>{pkg.title}</h3>
                            <p className="ideal-for">{pkg.idealFor}</p>
                            <ul>
                                {pkg.features.map((feature, fIndex) => (
                                    <li key={fIndex}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>{feature}</li>
                                ))}
                            </ul>
                            <div className="package-investment">{pkg.investment}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="reviews" className="section">
            <div className="container">
                <div className="testimonial-card animate-on-scroll">
                    <div className="testimonial-header">
                        <div>
                            <h4>Lexington Ashworth</h4>
                            <div className="stars">★★★★★ 4.9 | 1,317 Reviews</div>
                        </div>
                        <Link href="#" className="cta-button secondary">View Review</Link>
                    </div>
                    <p className="testimonial-body">"We fix the mistakes that cause refusals. Budget services miss key details that lead to rejections - we ensure your application is built to succeed. Specialist Immigration lawyers, not junior administrators. Your case is handled by experienced professionals, not admin staff following a generic checklist."</p>
                    <p className="testimonial-author">- A Happy Client</p>
                </div>
            </div>
        </section>

        <section id="guarantees" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR COMMITMENT</div>
                    <h2>Expertise, Speed, and Transparency</h2>
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

export default StandardVisitorVisaPage;
