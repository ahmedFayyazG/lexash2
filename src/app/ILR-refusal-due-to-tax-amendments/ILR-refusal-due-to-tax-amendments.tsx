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

interface FAQItem {
    question: string;
    answer: string;
}

// --- COMPONENT DATA ---
const guarantees: Guarantee[] = [
    { title: 'Expert Service', description: 'Bad advice can lead to delays and refusals. We assign a subject matter expert to manage your case throughout.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Fast Response', description: 'We guarantee a reply to all messages and emails within 24 working hours or we refund 20% of your fees.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> },
    { title: 'Fixed Fees', description: 'Our services have fixed fees so you know exactly how much you need to pay, with no nasty surprises down the line.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
];

const faqItems: FAQItem[] = [
    { question: 'What is Paragraph 322(5)?', answer: 'Paragraph 322(5) of the Immigration Rules is a general ground for refusal. It is often used by the Home Office when they have concerns about an applicant\'s character or conduct, including discrepancies in their tax history which may suggest deception.' },
    { question: 'How can I challenge an ILR refusal due to tax issues?', answer: 'The best approach is typically to submit a new, well-prepared application that directly addresses the Home Office\'s concerns. This involves providing comprehensive evidence, a detailed explanation for any amendments, and strong legal representations to demonstrate your good character.' },
    { question: 'Why choose Lexington Ashworth for a tax-related ILR refusal?', answer: 'Our team has extensive experience in successfully overturning ILR refusals based on tax amendments. We meticulously review your entire immigration and financial history to build a robust case that pre-emptively resolves the Home Office\'s concerns, giving you the best possible chance of success.' },
];


// --- MAIN PAGE COMPONENT ---
const ILRTaxRefusalPage = () => {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

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
          
          .faq-container { max-width: 800px; margin: 0 auto; }
          .faq-item {
            background: #fff;
            margin-bottom: 1rem;
            border-radius: 8px;
            border: 1px solid #e5e5e5;
            transition: all 0.3s ease;
          }
          .faq-item.active {
             border-color: #EBBF7D;
             box-shadow: 0 5px 20px rgba(235, 191, 125, 0.2);
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
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
          }
          .faq-answer-content {
            padding: 0 1.5rem 1.5rem;
            color: #555;
          }
          .faq-item.active .faq-answer {
            max-height: 500px;
          }
          .faq-icon { transition: transform 0.3s ease; font-size: 1.5rem; }
          .faq-item.active .faq-icon { transform: rotate(45deg); color: #EBBF7D; }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>Our Experienced Lawyers Will Prevent Any ILR Refusal Due To Tax Amendments</h1>
              <p>
                We Will Carefully Evaluate And Ensure Your ILR Won’t Get Refused Anymore Due To Tax Amendments.
              </p>
              <div className="cta-group">
                <Link href="#contact" className="cta-button">Contact Our Team</Link>
                <Link href="#guide" className="cta-button secondary">Get ILR Checklist Now</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>No More ILR Refusals Due to Tax Amendments</h2>
                        <p>For any skilled migrant, experiencing ILR refusals due to tax amendments can be confusing and stressful. Discrepancies in past tax returns can impact your character, leading the UK Home Office to refuse your application. Our immigration team has proven its ability to diminish these challenging situations quickly. We legally represent you to the Home Office, resolve concerns about deception, and highlight your value to the community.</p>
                        <Link href="#contact" className="cta-button" style={{marginTop: '1rem'}}>Contact Our Team</Link>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="Legal professionals in a meeting" className="intro-image" />
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
                    <p className="testimonial-body">"I lack words to show how happy I am to have met Lexington Ashworth. You've proven beyond doubt that you're the best. You've been supportive from the first day to the last, not minding my shortcomings, and you have patiently assisted us down to this day. Our visa applications were all approved, none were denied, courtesy of your relentless efforts. I'll recommend you over and over again."</p>
                    <p className="testimonial-author">- Jane Onyekachi</p>
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

        <section id="faq" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">COMMON QUESTIONS</div>
                    <h2>Your Answers to Questions About ILR Refusals Due to Tax Amendments</h2>
                </div>
                <div className="faq-container">
                    {faqItems.map((item, index) => (
                        <div key={index} className={`faq-item animate-on-scroll ${activeFAQ === index ? 'active' : ''}`} style={{transitionDelay: `${index * 0.05}s`}}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFAQ(index); }} aria-expanded={activeFAQ === index}>
                                {item.question}
                                <span className="faq-icon">+</span>
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    <p>{item.answer}</p>
                                </div>
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

export default ILRTaxRefusalPage;
