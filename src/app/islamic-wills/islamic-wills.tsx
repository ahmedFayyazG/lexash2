'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Shield, BookOpen, Scale, Users, Feather, ArrowRight } from 'lucide-react';

// --- MOCK COMPONENTS ---
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
interface Principle {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const keyPrinciples: Principle[] = [
    { title: 'Adherence to Shariah', description: 'Ensuring all aspects of your will comply with Islamic inheritance laws, providing peace of mind for you and your family.', icon: <BookOpen/> },
    { title: 'Protection of Heirs', description: 'Clearly defining the obligatory shares (Fard) for designated heirs to prevent disputes and ensure fairness.', icon: <Shield/> },
    { title: 'Fulfilment of Bequests', description: 'Allocating the permissible one-third (Wasiyyah) for bequests to non-heirs or charitable causes you care about.', icon: <Feather/> },
    { title: 'Legal Validity in the UK', description: 'Drafting a will that is not only Shariah-compliant but also fully valid and enforceable under UK law.', icon: <Scale/> },
];


// --- MAIN PAGE COMPONENT ---
const IslamicWillsPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

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
        elementsToAnimate.forEach(el => {
            if (el) observer.unobserve(el);
        });
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if(!pageRef.current) return;
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = pageRef.current;
    const xPos = (clientX / offsetWidth) * 100;
    const yPos = (clientY / offsetHeight) * 100;
    pageRef.current.style.setProperty('--gradient-x', `${xPos}%`);
    pageRef.current.style.setProperty('--gradient-y', `${yPos}%`);
  };

  return (
    <>
      <div className="pageWrapper" ref={pageRef} onMouseMove={handleMouseMove}>
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
          .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
          .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
          
          .hero-section {
            background-color: #212C3C;
            color: white;
            padding: 7rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
           .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at var(--gradient-x, 50%) var(--gradient-y, 50%), rgba(185, 148, 106, 0.15), transparent 40%);
            z-index: 1;
            pointer-events: none;
            transition: background 0.2s ease-out;
          }
          .hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
          .hero-content h1 { color: #fff; animation: fadeInDown 1s ease-out 0.2s backwards; }
          .hero-content p { font-size: 1.1rem; margin: 1.5rem 0 2.5rem; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button { background: #B9946A; color: #212C3C; padding: 0.8rem 1.8rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; animation: fadeInUp 1s ease-out 0.6s backwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(185, 148, 106, 0.4); }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #B9946A; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .intro-content h2 { text-align: left; }
          .intro-image { border-radius: 12px; max-width: 100%; }

          .principles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .principle-card {
            background: #fff;
            padding: 2.5rem 2rem;
            border-radius: 16px;
            border: 1px solid #e9ecef;
            text-align: center;
            transition: all 0.3s ease;
          }
          .principle-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.07);
          }
          .principle-icon {
            width: 64px;
            height: 64px;
            background: #B9946A;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          .principle-card h4 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }
          .principle-card p {
            font-size: 0.95rem;
            color: #5A6774;
          }
          
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
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Expert Guidance on Shariah-Compliant Islamic Wills</h1>
              <p>
                Our specialist solicitors provide comprehensive support to ensure your will is legally sound in the UK and honours your faith.
              </p>
              <Link href="#contact" className="cta-button">Arrange a Consultation</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>What is an Islamic Will?</h2>
                        <p>An Islamic Will, or Wasiyyah, is a legally binding document that outlines how a Muslim's assets should be distributed after their death in accordance with Shariah law. While it fulfils a religious duty, it must also be valid under UK law to be enforceable. This ensures your estate is managed according to both your faith and the law of the land, providing clarity for your loved ones during a difficult time.</p>
                        <Link href="#contact" className="cta-button" style={{marginTop: '1rem'}}>Contact Our Team</Link>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1600814832809-579119f47045?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW1pY3xlbnwwfHwwfHx8MA%3D%3D" alt="A happy couple together" className="intro-image" />
                    </div>
                    
                </div>
            </div>
        </section>

        <section id="principles" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">CORE TENETS</div>
                    <h2>Key Principles of a Shariah-Compliant Will</h2>
                    <p>An Islamic Will is structured to ensure fairness, fulfil religious obligations, and provide for your family according to established Islamic principles.</p>
                </div>
                <div className="principles-grid">
                    {keyPrinciples.map((item, index) => (
                        <div key={index} className="principle-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="principle-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>Secure Your Family's Future Today</h2>
                <p>Our experienced solicitors are here to provide clear, compassionate advice on creating a legally robust, Shariah-compliant will. Let us help you achieve peace of mind.</p>
                <Link href="#contact" className="cta-button">Get in Touch</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default IslamicWillsPage;
