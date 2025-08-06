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

// --- COMPONENT DATA ---
const guarantees: Guarantee[] = [
    { title: 'Expert Service', description: 'Bad advice can lead to delays and refusals. We assign a subject matter expert to manage your case throughout.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Fast Response', description: 'We guarantee a reply to all messages and emails within 24 working hours or we refund 20% of your fees.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
    { title: 'Fixed Fees', description: 'Our services have fixed fees so you know exactly how much you need to pay, with no nasty surprises down the line.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];


// --- MAIN PAGE COMPONENT ---
const SkilledWorkerVisaPage = () => {
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

          .cta-section {
            background: #212C3C;
            color: white;
            padding: 4rem 0;
            text-align: center;
          }
          .cta-section h2 { color: white; }
          .cta-section p { color: rgba(255,255,255,0.8); max-width: 600px; margin: 1.5rem auto 2rem; }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Skilled Worker Visa UK: Your Gateway to Better Career Opportunities and a Better Tomorrow</h1>
              <p>
                Our immigration solicitors simplify the visa process, guiding you every step of the way so you can focus on what really matters - building your career in the UK.
              </p>
              <div className="cta-group">
                <Link href="#eligibility" className="cta-button">Check Your Eligibility</Link>
                <Link href="#guide" className="cta-button secondary">Download Free Checklist</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Experience a Simplified Approach to Your Skilled Worker Visa</h2>
                        <p>The Skilled Worker visa has superseded the Tier 2 (General) visa, introducing new requirements and complications which can seem daunting. If you have no idea where to begin, we will help you! Our specialist immigration solicitors are here for you. We'll do everything for you, ensuring the entire application process is seamless and hassle-free, so you can concentrate on your future without adding this extra weight.</p>
                        <Link href="#eligibility" className="cta-button" style={{marginTop: '1rem'}}>Check Your Eligibility</Link>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Professional discussing plans" className="intro-image" />
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
                    <p className="testimonial-body">"I had an opportunity to work with Shurui Han and she was absolutely amazing! She guided me through the whole process in a very professional manner. I would also get a response from her almost immediately which is very helpful and comforting. I would definitely recommend Lexington Ashworth. I would like to thank Shurui and the whole team for your help!"</p>
                    <p className="testimonial-author">- Lena</p>
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

        <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>Expert Immigration Support Tailored to Your Needs</h2>
                <p>As experts in UK immigration law, we have successfully represented more than 4,000 business leaders and professionals from around the globe through the intricacies of the British system. We manage all United Kingdom immigration matters, including Skilled Worker Visas, ILR, Spouse Visas, and more.</p>
                <Link href="#contact" className="cta-button">Check Your Eligibility</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default SkilledWorkerVisaPage;
