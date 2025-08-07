'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Heart, Home, Award, Briefcase, Star, ArrowRight } from 'lucide-react';

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
interface ServiceLink {
    name: string;
    href: string;
}

interface ServiceCategory {
    title: string;
    description: string; // Added a description for more context
    icon: ReactNode;
    links: ServiceLink[];
}

// --- COMPONENT DATA ---
const serviceCategories: ServiceCategory[] = [
    {
        title: 'Unite Families in UK',
        description: 'Guidance on visas for spouses, civil partners, and other family members to join you in the UK.',
        icon: <Heart className="w-8 h-8" />,
        links: [
            { name: 'Spouse Visa UK', href: '#' },
            { name: 'Spouse/Civil Partnership Visa Extension', href: '#' },
            { name: 'Spouse Visa Appeal', href: '#' },
            { name: 'Same Sex partner Visa', href: '#' },
            { name: 'Civil Partnership', href: '#' },
        ]
    },
    {
        title: 'Secure Permanent UK Residency',
        description: 'Navigate the path to Indefinite Leave to Remain (ILR) and permanent settlement in the UK.',
        icon: <Home className="w-8 h-8" />,
        links: [
            { name: 'Indefinite Leave to Remain (ILR)', href: '#' },
            { name: 'ILR Refusals Due to Tax Amendments', href: '#' },
            { name: 'Judicial Review for ILR Refusal', href: '#' },
            { name: 'ILR /Settlement Visa Refusal Appeal', href: '#' },
        ]
    },
    {
        title: 'Path to UK Citizenship',
        description: 'Expert support for your application to become a British Citizen through naturalisation.',
        icon: <Award className="w-8 h-8" />,
        links: [
            { name: 'British Citizenship Application', href: '#' },
            { name: 'British Citizenship for EU or EEA Nationals', href: '#' },
            { name: 'Naturalise As A British Citizen - Form AN', href: '#' },
        ]
    },
    {
        title: 'UK Skilled Work Opportunity',
        description: 'Assistance with skilled worker visas for talented professionals seeking employment in the UK.',
        icon: <Briefcase className="w-8 h-8" />,
        links: [
            { name: 'Skilled Worker Visa', href: '#' },
            { name: 'Skilled Worker Visa Refusal', href: '#' },
        ]
    },
    {
        title: 'Unlock UK Talent Opportunities',
        description: 'Specialised advice for exceptional talent and global leaders to live and work in the UK.',
        icon: <Star className="w-8 h-8" />,
        links: [
            { name: 'Global Talent Visa', href: '#' },
            { name: 'Global Talent Accelerator', href: '#' },
            { name: 'Permanent visa for exceptionally talented', href: '#' },
        ]
    }
];

// --- MAIN PAGE COMPONENT ---
const PersonalImmigrationPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Stop observing after it's visible
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

    // Mouse move effect for hero section
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
        <div ref={pageRef} onMouseMove={handleMouseMove} className="bg-[#F7F8FA] font-poppins text-[#333]">
            {/* Global Styles */}
            <style>
                {`
                /* Global & Base Styles */
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                body {
                    margin: 0;
                    font-family: 'Poppins', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: #f9f9f9;
                    font-weight: 300;
                }
                * {
                    box-sizing: border-box;
                }
                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                h1, h2, h3 {
                    font-family: 'Poppins', sans-serif;
                    color: #212C3C;
                    font-weight: 600;
                }
                h1 {
                    font-size: 3.5rem;
                    line-height: 1.25;
                }
                h2 {
                    font-size: 2.5rem;
                    text-align: center;
                    margin-bottom: 1rem;
                }
                p {
                    color: #555;
                    font-size: 1.1rem;
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5rem;
                    }
                    h2 {
                        font-size: 2rem;
                    }
                    .container {
                        padding: 0 1rem;
                    }
                }

                /* Animations */
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .animate-on-scroll.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(26, 32, 44, 0.85);
                    background-image: radial-gradient(circle at var(--gradient-x, 50%) var(--gradient-y, 50%), rgba(185, 148, 106, 0.2), rgba(26, 32, 44, 0.85) 40%);
                    z-index: 1;
                    pointer-events: none;
                    transition: background 0.2s ease-out;
                }
                `}
            </style>

            {/* Hero Section */}
            <section className="hero-section relative bg-[#1A202C] text-white py-28 md:py-48 overflow-hidden bg-cover bg-center"
                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549929285-d85c8f85f3de?q=80&w=2070&auto=format&fit=crop')" }}>
                <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                        Your Future, Our Expertise
                    </h1>
                    <p className="text-lg md:text-xl font-light mb-8 opacity-90 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                        Expert legal guidance for you and your family on your journey to making the UK your permanent home.
                    </p>
                    <Link href="#services" className="inline-block px-8 py-3 bg-[#B9946A] text-[#1A202C] font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-[#a68661] hover:shadow-xl animate-on-scroll" style={{ animationDelay: '0.6s' }}>
                        Explore Our Services
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 md:py-28">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16 animate-on-scroll">
                        <span className="text-[#B9946A] text-sm font-semibold uppercase tracking-widest">Our Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#212C3C]">How We Can Help You Succeed</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {serviceCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="p-8 pb-0">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-[#B9946A] text-white flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 group-hover:scale-105">
                                            {category.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#212C3C]">{category.title}</h3>
                                            <p className="text-gray-600 mt-1 text-sm">{category.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <ul className="divide-y divide-gray-100 border-t border-gray-100">
                                            {category.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link href={link.href} className="flex justify-between items-center py-4 px-2 -mx-2 group hover:bg-gray-50 transition-colors duration-200 rounded-md">
                                                        <span className="text-gray-800 font-medium group-hover:text-[#B9946A] transition-colors duration-200">{link.name}</span>
                                                        <ArrowRight size={20} className="text-[#B9946A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PersonalImmigrationPage;
