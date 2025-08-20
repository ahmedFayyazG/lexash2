'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Briefcase, Users, Target, Lightbulb, Handshake, ArrowRight, MapPin } from 'lucide-react';

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

interface JobOpening {
    title: string;
    location: string;
    type: string;
    href: string;
}

// --- COMPONENT DATA ---
const coreValues: Value[] = [
    { title: 'Client-Centric', description: 'Our clients are at the heart of everything we do. We are dedicated to achieving the best possible outcomes for them.', icon: <Users/> },
    { title: 'Excellence', description: 'We strive for the highest standards of quality in our legal advice and client service.', icon: <Target/> },
    { title: 'Integrity', description: 'We operate with unwavering honesty, transparency, and ethical principles.', icon: <Handshake/> },
    { title: 'Innovation', description: 'We embrace creative thinking and technology to find the best solutions for complex immigration challenges.', icon: <Lightbulb/> },
];

const jobOpenings: JobOpening[] = [
    { title: 'Senior Immigration Solicitor', location: 'Manchester, UK', type: 'Full-Time', href: '#' },
    { title: 'Paralegal - Business Immigration', location: 'London, UK', type: 'Full-Time', href: '#' },
    { title: 'Legal Secretary', location: 'Manchester, UK', type: 'Part-Time', href: '#' },
];


// --- MAIN PAGE COMPONENT ---
const JoinOurTeamPage = () => {
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

          .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .intro-content h2 { text-align: left; }
          .intro-image { border-radius: 12px; max-width: 100%; }

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
          
          .openings-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .job-card {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
          }
          .job-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.07);
            border-color: #B9946A;
          }
          .job-details h4 {
            margin: 0 0 0.5rem;
            font-size: 1.25rem;
          }
          .job-meta {
            display: flex;
            gap: 1rem;
            color: #5A6774;
            font-size: 0.9rem;
          }
          .job-meta span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          @media (max-width: 992px) { .intro-grid { grid-template-columns: 1fr; } }
          @media (max-width: 768px) { .job-card { flex-direction: column; align-items: flex-start; gap: 1rem; } }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Join Our Team</h1>
              <p>
                We are always looking for talented and passionate individuals to join our growing team. Explore our open positions and discover a rewarding career at Lexington Ashworth.
              </p>
              <Link href="#openings" className="cta-button">View Open Positions</Link>
            </div>
          </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="intro-grid">
                    <div className="intro-content animate-on-scroll">
                        <h2>Why Work With Us?</h2>
                        <p>At Lexington Ashworth, we believe in fostering a collaborative and supportive environment where our team members can thrive. We are committed to professional development, work-life balance, and making a real impact in the lives of our clients. Join us and be part of a team that values expertise, integrity, and a passion for excellence in immigration law.</p>
                    </div>
                    <div className="animate-on-scroll delay-1">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="A collaborative team working together" className="intro-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="values" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">OUR CULTURE</div>
                    <h2>Our Core Values</h2>
                    <p>Our values guide everything we do, from how we work with our clients to how we support each other as a team.</p>
                </div>
                <div className="values-grid">
                    {coreValues.map((item, index) => (
                        <div key={index} className="value-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="value-icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="openings" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">CAREER OPPORTUNITIES</div>
                    <h2>Current Openings</h2>
                </div>
                <div className="openings-list">
                    {jobOpenings.map((job, index) => (
                        <div key={index} className="job-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="job-details">
                                <h4>{job.title}</h4>
                                <div className="job-meta">
                                    <span><MapPin size={16}/> {job.location}</span>
                                    <span><Briefcase size={16}/> {job.type}</span>
                                </div>
                            </div>
                            <Link href={job.href} className="cta-button">Apply Now</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default JoinOurTeamPage;
