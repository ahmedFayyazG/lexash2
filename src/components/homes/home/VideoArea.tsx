'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Zap, Handshake, Scale, Lightbulb } from 'lucide-react';

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

// --- MISSION AREA COMPONENT ---
const MissionArea = () => {
  return (
    <>
      <style>{`
        .mission-section {
          position: relative;
          height: 90vh;
          min-height: 600px;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 2rem;
        }

        .video-background {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(26, 32, 44, 0.05);
          z-index: 2;
        }

        .content-wrapper {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .content-container {
          background: rgba(255, 255, 255, 0.53);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: clamp(2rem, 6vw, 4rem);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 700px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          margin-left: 2rem;
          color: #FFFFFF;
        }

        .heading {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 400;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .paragraph {
          color: rgba(7, 7, 7, 0.9);
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          line-height: 1.7;
          font-weight: 300;
          font-family: 'Poppins', sans-serif;
        }
        
        @media (max-width: 768px) {
            .mission-section {
                justify-content: center;
            }
            .content-wrapper {
                justify-content: center;
            }
            .content-container {
                margin-left: 0;
                margin-right: 0;
                padding: 2rem;
                text-align: center;
            }
            .heading {
                font-size: 2rem;
            }
            .paragraph {
                font-size: 1rem;
            }
        }
      `}</style>
      <section className="mission-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
          src="/assets/img/whywe.mp4"
        />
        <div className="overlay" />
        <div className="content-wrapper">
          <div className="content-container animate-on-scroll">
            <h2 className="heading">Why We Exist</h2>
            <p className="paragraph">
              Our mission is to deliver outstanding legal service guided by our core values of insight,
              integrity, and impact. We exist to simplify complex legal challenges, empowering clients
              with clear guidance and confidence. Each case we undertake is an opportunity to provide
              meaningful support and create positive outcomes for individuals and businesses navigating
              critical immigration decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};


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

  return (
    <>
      <div className="pageWrapper" ref={pageRef}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { margin: 0; font-family: 'Poppins', sans-serif; line-height: 1.8; color: #333; background: #fff; font-weight: 300; }
          * { box-sizing: border-box; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
          h1, h2, h3, h4, h5 { font-family: 'Poppins', sans-serif; color: #212C3C; font-weight: 400; }
          p { color: #555; font-size: 1rem; }
          
          .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
          .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
        `}</style>

        <MissionArea />

      </div>
    </>
  );
};

export default OurMissionPage;
