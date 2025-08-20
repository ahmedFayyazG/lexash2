'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Target, Eye, Heart, Shield, Scale, Award, Lightbulb } from 'lucide-react';

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
interface Value {
    title: string;
    description: string;
    icon: ReactNode;
}

// --- COMPONENT DATA ---
const ourValues: Value[] = [
    { title: 'Client-Centricity', description: 'Our clients are at the heart of everything we do. We listen, understand, and tailor our strategies to their unique needs.', icon: <Heart/> },
    { title: 'Unwavering Integrity', description: 'We operate with the utmost honesty and transparency, building relationships based on trust and ethical practice.', icon: <Shield/> },
    { title: 'Pursuit of Excellence', description: 'We are committed to the highest standards of legal expertise and client service, constantly striving for perfection in our work.', icon: <Award/> },
    { title: 'Innovative Solutions', description: 'We embrace creative thinking and cutting-edge legal strategies to navigate complex challenges and achieve the best possible outcomes.', icon: <Lightbulb/> },
];


// --- MAIN PAGE COMPONENT ---
const OurMissionPage = () => {
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
            padding-top: 15rem;
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

          .mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
          .mission-content h2 { text-align: left; }
          .mission-image { border-radius: 12px; max-width: 100%; }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          .value-card {
            background: #fff;
            padding: 2.5rem 2rem;
            border-radius: 16px;
            border: 1px solid #e9ecef;
            text-align: center;
            transition: all 0.3s ease;
          }
          .value-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.07);
          }
          .value-icon {
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
          .value-card h4 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }
          .value-card p {
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

          @media (max-width: 992px) { .mission-grid { grid-template-columns: 1fr; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Our Mission</h1>
              <p>
                To provide exceptional, client-focused legal solutions with integrity and innovation, empowering individuals and businesses to navigate the complexities of UK immigration law with confidence.
              </p>
              <Link href="#contact" className="cta-button">Contact Our Team</Link>
            </div>
          </div>
        </section>

        <section id="mission" className="section">
            <div className="container">
                <div className="mission-grid">
                    <div className="mission-content animate-on-scroll">
                        <h2>Our Mission</h2>
                        <p>Our mission is to demystify the immigration process, providing clear, strategic, and compassionate legal counsel. We are dedicated to helping our clients achieve their personal and professional goals in the UK by delivering tailored solutions with unwavering integrity and a commitment to excellence. We strive to be more than just lawyers; we aim to be trusted partners in your journey.</p>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="A collaborative team working together" className="mission-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="vision" className="section bg-light">
            <div className="container">
                <div className="mission-grid">
                     <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Professional discussing plans" className="mission-image" />
                    </div>
                    <div className="mission-content animate-on-scroll">
                        <h2>Our Vision</h2>
                        <p>Our vision is to be the UK's most trusted and client-centric immigration law firm, recognized for our innovative approach, successful outcomes, and profound positive impact on the lives of the individuals and businesses we serve. We aspire to set the standard for excellence and integrity in the legal profession.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="values" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR GUIDING PRINCIPLES</div>
                    <h2>Our Core Values</h2>
                    <p>Our values are the bedrock of our firm. They define who we are, how we work, and what we stand for.</p>
                </div>
                <div className="values-grid">
                    {ourValues.map((item, index) => (
                        <div key={index} className="value-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="value-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="cta-section">
            <div className="container animate-on-scroll">
                <h2>Ready to Start Your Journey?</h2>
                <p>Let our mission guide your success. Contact us today for a consultation and experience the Lexington Ashworth difference.</p>
                <Link href="#contact" className="cta-button">Get in Touch</Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default OurMissionPage;
