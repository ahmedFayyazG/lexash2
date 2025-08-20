'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import HeaderOne from '@/layouts/headers/HeaderOne';

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
interface TeamMember {
    name: string;
    position: string;
    image: string;
}

// --- COMPONENT DATA ---
const teamMembers: TeamMember[] = [
    {
      name: "Asif Ranjha",
      position: "Co-Founder & Managing Partner",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Javaid Iqbal Wattoo",
      position: "Compliance Partner",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Hassan Gondal",
      position: "Paralegal",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Muhammad Gulbaz Shahzad",
      position: "Paralegal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Javeria Zain",
      position: "Business Support Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    },
    {
      name: "Muhammad Ahmed Fayyaz",
      position: "IT & Digital Operations Manager",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300&auto=format&fit=crop",
    },
];


// --- MAIN PAGE COMPONENT ---
const OurTeamPage = () => {
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
    <HeaderOne/>
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
            background-color: #1A202C;
            color: white;
            padding: 7rem 0;
            padding-top:15rem;
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
          .hero-content p { font-size: 1.1rem; margin: 1.5rem 0 0; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          
          .section { padding: 5rem 0; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 4rem; }
          .section-header .subtitle { color: #B9946A; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
          }
          .team-card {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.07);
            text-align: center;
            transition: all 0.3s ease;
          }
          .team-card:hover {
            transform: translateY(-10px);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.07);

          }
          .team-image-wrapper {
            position: relative;
            padding-top: 110%;
          }
          .team-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            transition: all 0.4s ease;
          }
          .team-card:hover .team-image {
            filter: grayscale(90%);
            transform: scale(1.05);
          }
          .team-info {
            padding: 1.5rem;
            position: relative;
          }
          .team-card h3 {
            font-size: 1.25rem;
            font-weight: 500;
            margin: 0 0 0.25rem;
          }
          .team-card p {
            color: #B9946A;
            font-size: 0.9rem;
            font-weight: 500;
            margin: 0;
          }
          .social-links {
            position: absolute;
            bottom: 100%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(26, 32, 44, 0.8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
          }
          .team-card:hover .social-links {
            opacity: 1;
            transform: translateY(0);
          }
          .social-link {
            color: #fff;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .social-link:hover {
            color: #B9946A;
            transform: scale(1.2);
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Our Team</h1>
              <p>
                Meet the dedicated professionals behind Lexington Ashworth. Our team combines decades of experience with a passion for helping our clients achieve their goals.
              </p>
            </div>
          </div>
        </section>

        <section id="team" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">THE EXPERTS</div>
                    <h2>Meet Our Professionals</h2>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="social-links">
                                    <Link href="#" className="social-link"><Twitter size={20} /></Link>
                                    <Link href="#" className="social-link"><Linkedin size={20} /></Link>
                                    <Link href="#" className="social-link"><Mail size={20} /></Link>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3 style={{fontFamily:"poppins", fontWeight:"400"}} >{member.name}</h3>
                                <p style={{fontFamily:"poppins", fontWeight:"300"}} >{member.position}</p>
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

export default OurTeamPage;
