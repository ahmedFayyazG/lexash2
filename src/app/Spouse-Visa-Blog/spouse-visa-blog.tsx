'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Facebook, Twitter, Linkedin, Calendar, User } from 'lucide-react';

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

// --- COMPONENT DATA ---
const articleData = {
    type: 'Immigration',
    title: 'Navigating UK Spouse Visa Requirements in 2025',
    summary: 'The path to reuniting with your partner in the UK can be complex. This guide breaks down the key requirements for a successful Spouse Visa application in 2025, from financial thresholds to the genuineness test.',
    author: 'Muhammad Ahmed Fayyaz',
    date: 'July 7, 2025',
    image: 'https://images.unsplash.com/photo-1560520450-4d2d4c00a29d?q=80&w=2070&auto=format&fit=crop',
    href: '#',
};


// --- MAIN PAGE COMPONENT ---
const SpouseVisaBlogPostPage = () => {
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
    const heroSection = pageRef.current.querySelector('.hero-section');
    if (heroSection && heroSection instanceof HTMLElement) { // FIX: Check if it's an HTMLElement
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = heroSection;
        const xPos = (clientX / offsetWidth) * 100;
        const yPos = (clientY / offsetHeight) * 100;
        heroSection.style.setProperty('--gradient-x', `${xPos}%`);
        heroSection.style.setProperty('--gradient-y', `${yPos}%`);
    }
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
            background-color: #1A202C;
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
          
          .section { padding: 5rem 0; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 4rem; }
          .section-header .subtitle { color: #B9946A; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .article-layout {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 4rem;
            align-items: flex-start;
          }
          .article-content {
            font-size: 1.1rem;
            line-height: 1.9;
          }
          .article-content h2 {
            font-size: 2rem;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            text-align: left;
          }
          .article-content p {
            margin-bottom: 1.5rem;
          }
          .article-content blockquote {
            border-left: 4px solid #B9946A;
            padding-left: 2rem;
            margin: 2.5rem 0;
            font-style: italic;
            font-size: 1.2rem;
            color: #5A6774;
          }

          .sidebar {
            position: sticky;
            top: 100px;
          }
          .author-card, .share-card {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            border: 1px solid #e9ecef;
          }
          .author-card h3, .share-card h3 {
            font-size: 1.25rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #e0e0e0;
          }
          .author-details {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .author-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }
          .author-info h4 {
            margin: 0;
            font-size: 1.1rem;
            font-weight: 500;
          }
          .author-info p {
            margin: 0;
            font-size: 0.9rem;
            color: #5A6774;
          }
          
          .share-links {
            display: flex;
            gap: 1rem;
          }
          .social-link {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background-color: #fff;
            color: #212C3C;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            border: 1px solid #e9ecef;
          }
          .social-link:hover {
            background-color: #B9946A;
            color: #fff;
            transform: translateY(-3px);
          }
          
          @media (max-width: 992px) {
            .article-layout {
                grid-template-columns: 1fr;
            }
            .sidebar {
                position: static;
            }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container">
            <div className="hero-content">
              <h1>{articleData.title}</h1>
              <p>{articleData.summary}</p>
            </div>
          </div>
        </section>

        <section id="article" className="section">
            <div className="container">
                <div className="article-layout">
                    <main className="article-content animate-on-scroll">
                        <p>The journey to reuniting with a loved one in the UK through a Spouse Visa is one of the most significant steps a couple can take. While the prospect of starting a life together is exciting, the application process itself can be daunting. The UK's immigration rules are notoriously complex, and the requirements for a Spouse Visa are strict. In 2025, these requirements have been further refined, making it more important than ever to be well-prepared.</p>
                        
                        <h2>The Financial Requirement: A Key Hurdle</h2>
                        <p>One of the most critical aspects of a Spouse Visa application is the financial requirement. The Home Office needs to be satisfied that the sponsoring partner can support the applicant without recourse to public funds. In 2025, the minimum income threshold has been a key area of focus. Sponsors must demonstrate a gross annual income of at least the required amount, which has seen adjustments to reflect the current economic climate. This income can be met through various means, including employment, self-employment, cash savings, pensions, and other sources of income. It is crucial to provide detailed and correctly formatted evidence to support your application, as any discrepancies can lead to a refusal.</p>
                        
                        <blockquote>
                            "Meeting the financial requirement is not just about having the funds; it's about proving it in the precise way the Home Office demands. This is where many applications falter."
                        </blockquote>
                        
                        <h2>The Genuineness Test: Proving Your Relationship</h2>
                        <p>Beyond the financial aspects, the Home Office places a strong emphasis on the "genuineness" of the relationship. You must provide substantial evidence that you are in a genuine and subsisting relationship. This can include marriage certificates, photographs together over a period of time, joint bank statements, tenancy agreements, and correspondence that shows you have been in regular contact. The Home Office will scrutinize this evidence to ensure that the relationship is not a "marriage of convenience." Preparing a comprehensive portfolio of your relationship history is a vital part of a successful application.</p>
                    </main>
                    <aside className="sidebar">
                        <div className="author-card animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                            <h3>About the Author</h3>
                            <div className="author-details">
                                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Author" className="author-avatar" />
                                <div className="author-info">
                                    <h4>{articleData.author}</h4>
                                    <p>Immigration Solicitor</p>
                                </div>
                            </div>
                        </div>
                        <div className="share-card animate-on-scroll" style={{transitionDelay: '0.3s'}}>
                            <h3>Share This Article</h3>
                            <div className="share-links">
                                <Link href="#" className="social-link"><Twitter size={20} /></Link>
                                <Link href="#" className="social-link"><Facebook size={20} /></Link>
                                <Link href="#" className="social-link"><Linkedin size={20} /></Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default SpouseVisaBlogPostPage;
