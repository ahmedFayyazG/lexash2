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
    type: 'Blog',
    title: 'Navigating the New Salary Thresholds for Skilled Worker Visas in 2025',
    summary: 'The UK government has introduced significant changes to the Skilled Worker visa salary thresholds. Our in-depth guide breaks down what this means for sponsors and applicants, and how to navigate the new requirements successfully.',
    author: 'Muhammad Ahmed Fayyaz',
    date: 'August 22, 2025',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
    href: '#',
};


// --- MAIN PAGE COMPONENT ---
const SkilledWorkerSalaryBlogPage = () => {
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
            background-color: #1A202C;
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
                        <p>The UK's immigration landscape is in a constant state of evolution, and 2025 has brought one of the most significant changes in recent years: a substantial increase in the salary thresholds for the Skilled Worker visa. This move by the Home Office is designed to prioritise high-skilled, high-wage roles, but it presents new challenges for both UK sponsors and prospective applicants. Understanding these changes is crucial for any business looking to hire from overseas or any individual planning their career in the UK.</p>
                        
                        <h2>What Has Changed?</h2>
                        <p>The general salary threshold for the Skilled Worker route has seen a significant rise, from its previous level to the new 2025 requirement. This means that, in most cases, a job offer must now meet this higher baseline salary to be eligible for sponsorship. Furthermore, the "going rates" for specific occupations, which are determined by Standard Occupational Classification (SOC) codes, have also been updated and, in many cases, increased. Applicants must meet both the general threshold and the specific going rate for their role, whichever is higher.</p>
                        
                        <blockquote>
                            "These changes signal a clear shift in the UK's immigration strategy, placing a greater emphasis on attracting top-tier talent in high-value sectors. For businesses, this means that strategic workforce planning is more important than ever."
                        </blockquote>
                        
                        <h2>Navigating the New Requirements</h2>
                        <p>For UK businesses, the new thresholds require a careful reassessment of their recruitment strategies. It is no longer enough for a role to be on the list of eligible occupations; it must also be compensated at a level that reflects the government's new economic priorities. This may mean re-evaluating salary structures and budgeting for higher recruitment costs.</p>
                        <p>For individuals, it is crucial to research the updated going rate for your specific profession and to ensure that any job offer you receive meets the new requirements. Our team of specialist solicitors can provide detailed guidance on how these changes affect your specific circumstances and help you navigate the application process with confidence. We have a deep understanding of the new rules and can help you ensure your application is built for success from the ground up.</p>
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

export default SkilledWorkerSalaryBlogPage;
