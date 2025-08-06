'use client';

import React, { useState, useEffect } from 'react';

// --- MOCK COMPONENTS ---
const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// --- INTERFACES ---
interface Guarantee {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface Service {
    title: string;
    description: string;
    href: string;
}

// --- COMPONENT DATA ---
const guarantees: Guarantee[] = [
    { title: 'Expert Service', description: 'Bad advice can lead to delays and refusals. We assign a subject matter expert to manage your case throughout.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Fast Response', description: 'We guarantee a reply to all messages and emails within 24 working hours, ensuring you\'re always informed.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
    { title: 'Fixed Fees', description: 'Our services have fixed fees so you know exactly how much you need to pay, with no nasty surprises down the line.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];

const relatedServices: Service[] = [
    { title: 'Sponsor Licence Compliance Training', description: 'Had notification of a visit from the Home Office? How Lexington Ashworth can help.', href: '#' },
    { title: 'Sponsor Licence Revocation or Suspension', description: 'Protect your workforce by getting in front of your licence renewal. Get help to submit an error-free application.', href: '#' },
    { title: 'Sponsor Licence Application Guidance', description: 'Everything you need to know about your sponsor licence application in one place.', href: '#' },
];


// --- MAIN PAGE COMPONENT ---
const SponsorLicenceRejectedPage = () => {
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
          .waves-container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 250px; 
            z-index: 1;
          }
          .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background-size: 50% 100%;
            background-repeat: repeat-x;
            animation: wave-flow 20s linear infinite;
          }
          .wave1 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='rgba(255,255,255,0.07)' fill-opacity='1' d='M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3e%3c/path%3e%3c/svg%3e");
            animation-duration: 25s;
          }
          .wave2 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3e%3cpath fill='rgba(235, 191, 125, 0.1)' fill-opacity='1' d='M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,160C672,171,768,213,864,208C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3e%3c/path%3e%3c/svg%3e");
            animation-duration: 18s;
            animation-delay: -3s;
          }
          @keyframes wave-flow {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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

          .related-services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
          .service-card { background: #fff; padding: 2rem; border-radius: 12px; border: 1px solid #e9ecef; transition: all 0.3s ease; }
          .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(44, 62, 80, 0.1); }
          .service-card h4 { margin-top: 0; }
          .service-card a { color: #EBBF7D; text-decoration: none; font-weight: 500; }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="waves-container">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Sponsor Licence Rejected? We’ll Help You With Your Pre Licence Error Correction Application</h1>
              <p>
                Get immigration expertise to uncover the reasons behind your refusal, so you can successfully submit a Pre-Licence Error Correction Application.
              </p>
              <div className="cta-group">
                <Link href="#contact" className="cta-button">Contact Our Team</Link>
                <Link href="#eligibility" className="cta-button secondary">Check My Eligibility</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Understand Why Your Application Was Refused and Quickly Correct the Issue</h2>
                        <p>Application of Sponsor Licence refused? We know how frustrating it is to apply for something so important only to receive a rejection. That's why our team of experienced immigration solicitors has spent years helping clients with their Pre Licence Error Correction application. We can help you determine why your application was refused and the exact steps you need to take to overturn the decision.</p>
                        <Link href="#contact" className="cta-button" style={{marginTop: '1rem'}}>Contact Our Team</Link>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Professional legal team collaborating" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="reviews" className="section bg-light">
            <div className="container">
                <div className="testimonial-card animate-on-scroll">
                    <div className="testimonial-header">
                        <div>
                            <h4>Lexington Ashworth</h4>
                            <div className="stars">★★★★★ 4.9 | 1,317 Reviews</div>
                        </div>
                        <Link href="#" className="cta-button secondary">View Review</Link>
                    </div>
                    <p className="testimonial-body">"Our Tier 2 Sponsor Licence application was successful in just 3 weeks. We received extremely professional and helpful service throughout our engagement. Lexington Ashworth advised us correctly, and at the end, we achieved a great positive result. Many thanks again to the team for all your support. I would recommend them very highly!!!"</p>
                    <p className="testimonial-author">- Pallavi</p>
                </div>
            </div>
        </section>

        <section id="guarantees" className="section">
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

        <section id="related-services" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">MORE WAYS WE CAN HELP</div>
                    <h2>Other Sponsor Licence Related Services We Deliver</h2>
                </div>
                <div className="related-services-grid">
                    {relatedServices.map((service, index) => (
                        <div key={index} className="service-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <Link href={service.href}>Learn More →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default SponsorLicenceRejectedPage;
