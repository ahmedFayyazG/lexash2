'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

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
interface Article {
    type: 'News' | 'Blog';
    title: string;
    summary: string;
    author: string;
    date: string;
    image: string;
    href: string;
}

// --- COMPONENT DATA ---
const featuredArticle: Article = {
    type: 'Blog',
    title: 'Navigating the New Salary Thresholds for Skilled Worker Visas in 2025',
    summary: 'The UK government has introduced significant changes to the Skilled Worker visa salary thresholds. Our in-depth guide breaks down what this means for sponsors and applicants, and how to navigate the new requirements successfully.',
    author: 'M.Ahmed Fayyaz',
    date: 'August 15, 2025',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
    href: '/salaryskilledworker',
};

const latestNews: Article[] = [
    {
        type: 'News',
        title: 'Home Office Announces Updates to the EU Settlement Scheme',
        summary: 'The Home Office has released new guidance for late applications to the EUSS, providing more clarity for EU citizens.',
        author: 'Lexington Ashworth',
        date: 'August 18, 2025',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop',
        href: '#',
    },
    {
        type: 'News',
        title: 'UK Reviews Shortage Occupation List for Tech Sector',
        summary: 'A new review is underway to identify key tech roles to be added to the Shortage Occupation List, potentially easing recruitment for sponsors.',
        author: 'Lexington Ashworth',
        date: 'August 12, 2025',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        href: '#',
    },
];

const blogPosts: Article[] = [
    {
        type: 'Blog',
        title: 'A Complete Guide to the UK Self-Sponsorship Route',
        summary: 'Explore the step-by-step process of sponsoring yourself through your own UK business, a popular alternative to traditional visa routes.',
        author: 'Jane Smith',
        date: 'August 5, 2025',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop',
        href: '#',
    },
    {
        type: 'Blog',
        title: "Understanding the 'Genuine Vacancy' Test for Sponsor Licences",
        summary: 'One of the most critical aspects of a Sponsor Licence application is proving the genuineness of the role. We break down what the Home Office looks for.',
        author: 'John Doe',
        date: 'July 28, 2025',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
        href: '#',
    },
    {
        type: 'Blog',
        title: 'The Future of UK Immigration: What to Expect Post-2025',
        summary: 'With policy shifts on the horizon, we analyze potential changes to the UK immigration landscape and how they might affect you.',
        author: 'Dr. Yash Dubal',
        date: 'July 21, 2025',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
        href: '#',
    },
];


// --- MAIN PAGE COMPONENT ---
const InsightsPage = () => {
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

          .insights-layout {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
          }
          .main-content {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          .sidebar {
            position: sticky;
            top: 100px;
          }
          .sidebar h3 {
            font-size: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #B9946A;
            margin-bottom: 2rem;
          }
          
          .article-card {
            background: #fff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.07);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
          }
          .article-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          }
          .article-image-wrapper {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%; /* 16:9 Aspect Ratio */
          }
          .article-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }
          .article-card:hover .article-image {
            transform: scale(1.05);
          }
          .article-content {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
          }
          .article-tag {
            background: #B9946A;
            color: #fff;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            align-self: flex-start;
            margin-bottom: 1rem;
          }
          .article-card h4 {
            font-size: 1.25rem;
            color: #212C3C;
            margin: 0 0 1rem;
            line-height: 1.4;
          }
          .article-card p {
            color: #5A6774;
            font-size: 0.95rem;
            flex-grow: 1;
            margin-bottom: 1.5rem;
          }
          .article-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.85rem;
            color: #5A6774;
            border-top: 1px solid #e9ecef;
            padding-top: 1rem;
          }
          .article-meta span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .sidebar .article-card {
            flex-direction: row;
            align-items: center;
            padding: 1rem;
            gap: 1rem;
          }
          .sidebar .article-image-wrapper {
            width: 80px;
            height: 80px;
            padding-top: 0;
            flex-shrink: 0;
            border-radius: 8px;
          }
          .sidebar .article-content {
            padding: 0;
          }
          .sidebar .article-card h4 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          .sidebar .article-meta {
            border-top: none;
            padding-top: 0;
            font-size: 0.8rem;
          }
          
          @media (max-width: 992px) {
            .insights-layout {
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
              <h1>Insights & News</h1>
              <p>
                Stay informed with the latest updates in UK immigration law, expert analysis, and in-depth guides from our team of specialist solicitors.
              </p>
            </div>
          </div>
        </section>

        <section id="content" className="section">
            <div className="container">
                <div className="insights-layout">
                    <main className="main-content">
                        <div className="section-header" style={{textAlign: 'left', margin: '0 0 2rem 0'}}>
                            <h2 style={{textAlign: 'left'}}>Featured Blog</h2>
                        </div>
                        <Link href={featuredArticle.href} className="article-card animate-on-scroll">
                            <div className="article-image-wrapper">
                                <img src={featuredArticle.image} alt={featuredArticle.title} className="article-image" />
                            </div>
                            <div className="article-content">
                                <span className="article-tag">{featuredArticle.type}</span>
                                <h4>{featuredArticle.title}</h4>
                                <p>{featuredArticle.summary}</p>
                                <div className="article-meta">
                                    <span><User size={14} /> {featuredArticle.author}</span>
                                    <span><Calendar size={14} /> {featuredArticle.date}</span>
                                </div>
                            </div>
                        </Link>

                        <div className="section-header" style={{textAlign: 'left', margin: '2rem 0'}}>
                            <h2 style={{textAlign: 'left'}}>In-Depth Blog Posts</h2>
                        </div>
                        {blogPosts.map((post, index) => (
                             <Link href={post.href} key={index} className="article-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                                <div className="article-image-wrapper">
                                    <img src={post.image} alt={post.title} className="article-image" />
                                </div>
                                <div className="article-content">
                                    <span className="article-tag">{post.type}</span>
                                    <h4>{post.title}</h4>
                                    <p>{post.summary}</p>
                                    <div className="article-meta">
                                        <span><User size={14} /> {post.author}</span>
                                        <span><Calendar size={14} /> {post.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </main>
                    <aside className="sidebar">
                        <div className="animate-on-scroll">
                            <h3>Latest News</h3>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                                {latestNews.map((news, index) => (
                                    <Link href={news.href} key={index} className="article-card">
                                        <div className="article-image-wrapper">
                                            <img src={news.image} alt={news.title} className="article-image" />
                                        </div>
                                        <div className="article-content">
                                            <h4>{news.title}</h4>
                                            <div className="article-meta">
                                                <span><Calendar size={14} /> {news.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
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

export default InsightsPage;
