
"use client";
import React, { useState, useEffect, ReactNode } from 'react';

// --- MOCK COMPONENTS & TYPES ---
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
interface FAQItem {
  question: string;
  answer: string;
}

interface Requirement {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

// Loading Component
const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
  <div className={`loadingScreen ${!isLoading ? 'hide' : ''}`} style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    opacity: isLoading ? 1 : 0,
    visibility: isLoading ? 'visible' : 'hidden',
    pointerEvents: isLoading ? 'auto' : 'none'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '60px',
        height: '60px',
        margin: '0 auto 1.5rem',
        border: '3px solid #f0f0f0',
        borderTop: '3px solid #EBBF7D',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{
        color: '#2c3e50',
        fontSize: '1.1rem',
        fontWeight: 500,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>Loading...</p>
    </div>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const SelfSponsorship = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Ensure CSS is loaded before showing content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Prevent rendering until mounted (avoids hydration issues)
  if (!isMounted) {
    return <LoadingScreen isLoading={true} />;
  }

  const requirements: Requirement[] = [
    {
      title: 'Business Structure',
      description: 'Establish a genuine UK limited company with proper registration, business plan, and operational structure that meets Home Office scrutiny.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/>
          <path d="M9 7h6v6H9z"/>
        </svg>
      ),
    },
    {
      title: 'Sponsor Licence',
      description: 'Obtain a Sponsor Licence for your company, demonstrating genuine trading activities and compliance systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      title: 'Financial Requirements',
      description: 'Meet minimum salary thresholds (£38,700 or going rate) and maintain sufficient funds for business operations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation including business plans, financial projections, and evidence of genuine business activities.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      ),
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Company Formation',
      description: 'Register your UK limited company with Companies House, ensuring proper structure and shareholding arrangements that comply with immigration rules.',
    },
    {
      number: 2,
      title: 'Business Establishment',
      description: 'Develop genuine business operations, secure office premises, create employment contracts, and establish HR systems required for sponsorship.',
    },
    {
      number: 3,
      title: 'Sponsor Licence Application',
      description: 'Apply for a Sponsor Licence, demonstrating your company\'s legitimacy and ability to fulfill sponsorship duties.',
    },
    {
      number: 4,
      title: 'Skilled Worker Visa',
      description: 'Once approved, assign a Certificate of Sponsorship to yourself and apply for the Skilled Worker visa.',
    },
  ];

   const sectionStyle = {
    // --- Background Image ---
    // Replace this URL with the path to your desired background image
    backgroundImage: "url('/assets/img/bigben.jpg')",
    
    // --- Styling (equivalent to the old Tailwind classes) ---
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem', // Equivalent to p-8

    // --- Height Adjustment ---
    // You can adjust the height of this section by changing the 'minHeight' value below.
    // - For a fixed height: minHeight: '500px'
    // - For a screen-relative height: minHeight: '60vh' (60% of viewport height)
    minHeight: '60vh'
  };

  const benefits = [
    'Direct pathway to UK settlement after 5 years of continuous residence',
    'Ability to bring family members as dependants',
    'Full control over your business operations and growth',
    'No investment threshold unlike the Innovator Founder visa',
    'Flexibility to switch between eligible job roles within your company',
    'Opportunity to sponsor other skilled workers as your business grows',
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'What is the minimum salary for self-sponsorship?',
      answer: 'The minimum salary is £38,700 per year or the "going rate" for your occupation code, whichever is higher. Some roles may qualify for reduced thresholds.',
    },
    {
      question: 'Can I be the sole director and employee?',
      answer: 'While possible, it\'s generally advisable to have additional directors or employees to demonstrate genuine business operations and reduce Home Office scrutiny.',
    },
    {
      question: 'How long does the process take?',
      answer: 'The entire process typically takes 3-6 months, including company setup (1-2 weeks), sponsor licence application (8-12 weeks), and visa application (3-8 weeks).',
    },
  ];

  const relatedServices = [
    { title: 'Sponsor Licence Application', href: '/sponsor-licence' },
    { title: 'Skilled Worker Visa', href: '/skilled-worker-visa' },
    { title: 'Business Immigration', href: '/business-immigration' },
    { title: 'Compliance Audit Services', href: '/compliance-audit' },
    { title: 'ILR & Settlement', href: '/ilr-settlement' },
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Self-Sponsorship UK Requirements - Lexington Ashworth</title>
        <meta name="description" content="Navigate UK self-sponsorship requirements with expert immigration solicitors. Complete guide to sponsor licence and skilled worker visa for entrepreneurs." />
      </Head>

      <LoadingScreen isLoading={isLoading} />

      <div className={`pageWrapper ${!isLoading ? 'loaded' : ''}`} style={{
        minHeight: '100vh',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.4s ease-in-out'
      }}>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
          }

          * {
            box-sizing: border-box;
          }

          /* Critical styles to prevent FOUC */
          .hero-section {
            background: linear-gradient(135deg, #2c3e50 0%, #3a4a5c 100%);
            color: white;
            padding: 4rem 0;
            position: relative;
            overflow: hidden;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          h2 {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 1.5rem;
            font-weight: 600;
            position: relative;
            padding-left: 1rem;
          }

          h2::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 80%;
            background: #EBBF7D;
            border-radius: 2px;
          }

          /* Animation classes */
          .fadeInUp {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUpAnimation 0.6s ease-out forwards;
          }

          @keyframes fadeInUpAnimation {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fadeInUp.delay1 { animation-delay: 0.1s; }
          .fadeInUp.delay2 { animation-delay: 0.2s; }
          .fadeInUp.delay3 { animation-delay: 0.3s; }
          .fadeInUp.delay4 { animation-delay: 0.4s; }
          .fadeInUp.delay5 { animation-delay: 0.5s; }
          .fadeInUp.delay6 { animation-delay: 0.6s; }
        `}</style>

        <style jsx>{`
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.05" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
            background-size: cover;
          }

          .hero-content {
            position: relative;
            z-index: 1;
          }

          .breadcrumb {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 2rem;
            font-size: 0.9rem;
            opacity: 0.9;
          }

          .breadcrumb a {
            color: #EBBF7D;
            text-decoration: none;
            transition: opacity 0.3s;
          }

          .breadcrumb a:hover {
            opacity: 0.8;
          }

          .breadcrumb span {
            color: #fff;
          }

          .hero-description {
            font-size: 1.25rem;
            opacity: 0.95;
            max-width: 800px;
            line-height: 1.8;
          }

          .main-content {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 3rem;
            padding: 4rem 0;
          }

          .content-area {
            background: white;
          }

          .section {
            margin-bottom: 3rem;
          }

          h3 {
            font-size: 1.5rem;
            color: #2c3e50;
            margin: 2rem 0 1rem;
            font-weight: 600;
          }

          p {
            margin-bottom: 1.5rem;
            color: #555;
            line-height: 1.8;
            font-size: 1.05rem;
          }

          .requirements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
          }

          .requirement-card {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 12px;
            border-left: 4px solid #EBBF7D;
            transition: all 0.3s ease;
          }

          .requirement-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .requirement-card h4 {
            color: #2c3e50;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .requirement-icon {
            width: 40px;
            height: 40px;
            background: #EBBF7D;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .requirement-icon svg {
            width: 20px;
            height: 20px;
            stroke: #2c3e50;
          }

          .process-steps {
            margin: 2rem 0;
          }

          .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2rem;
            position: relative;
          }

          .step:not(:last-child)::after {
            content: '';
            position: absolute;
            left: 30px;
            top: 60px;
            bottom: -20px;
            width: 2px;
            background: #e5e5e5;
          }

          .step-number {
            width: 60px;
            height: 60px;
            background: #EBBF7D;
            color: #2c3e50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.5rem;
            flex-shrink: 0;
            margin-right: 1.5rem;
          }

          .step-content h4 {
            color: #2c3e50;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .benefits-list {
            list-style: none;
            margin: 2rem 0;
            padding: 0;
          }

          .benefits-list li {
            padding: 1rem 0 1rem 3rem;
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            transition: all 0.3s ease;
          }

          .benefits-list li:hover {
            background: #f8f9fa;
            padding-left: 3.5rem;
          }

          .benefits-list li::before {
            content: '✓';
            position: absolute;
            left: 1rem;
            top: 1rem;
            width: 24px;
            height: 24px;
            background: #EBBF7D;
            color: #2c3e50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
          }

          .sidebar {
            position: sticky;
            top: 2rem;
            height: fit-content;
          }

          .cta-card {
            background: linear-gradient(135deg, #EBBF7D 0%, #f4e4c1 100%);
            padding: 2.5rem;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 2rem;
            box-shadow: 0 10px 30px rgba(235, 191, 125, 0.3);
          }

          .cta-card h3 {
            color: #2c3e50;
            font-size: 1.75rem;
            margin-bottom: 1rem;
          }

          .cta-card p {
            color: #2c3e50;
            margin-bottom: 1.5rem;
            font-weight: 500;
          }

          .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #2c3e50;
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(44, 62, 80, 0.3);
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(44, 62, 80, 0.4);
          }

          .quick-links {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
          }

          .quick-links h4 {
            color: #2c3e50;
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #EBBF7D;
          }

          .quick-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .quick-links li {
            margin-bottom: 1rem;
          }

          .quick-links a {
            color: #555;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            padding: 0.5rem;
            border-radius: 6px;
          }

          .quick-links a:hover {
            color: #EBBF7D;
            background: white;
            padding-left: 1rem;
          }

          .quick-links a::before {
            content: '→';
            color: #EBBF7D;
            font-weight: bold;
          }

          .download-box {
            background: #2c3e50;
            color: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
          }

          .download-box h4 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-family: 'Poppins', sans-serif;
          }

          .download-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #EBBF7D;
            color: #2c3e50;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
            transition: all 0.3s ease;
          }

          .download-button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(235, 191, 125, 0.4);
          }

          .faq-item {
            background: #f8f9fa;
            margin-bottom: 1rem;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #e5e5e5;
          }

          .faq-question {
            padding: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: #2c3e50;
            transition: all 0.3s ease;
            background: none;
            border: none;
            width: 100%;
            text-align: left;
            font-size: 1rem;
          }

          .faq-question:hover {
            background: #EBBF7D;
            color: white;
          }

          .faq-answer {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .faq-item.active .faq-answer {
            padding: 1.5rem;
            max-height: 500px;
          }

          .faq-icon {
            transition: transform 0.3s ease;
          }

          .faq-item.active .faq-icon {
            transform: rotate(180deg);
          }

          @media (max-width: 968px) {
            .main-content {
              grid-template-columns: 1fr;
            }

            h1 {
              font-size: 2rem;
            }

            .sidebar {
              position: static;
            }

            .requirements-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 3rem 0;
            }

            h1 {
              font-size: 1.75rem;
            }

            .hero-description {
              font-size: 1.1rem;
            }

            .step {
              flex-direction: column;
              text-align: center;
            }

            .step-number {
              margin: 0 auto 1rem;
            }

            .step:not(:last-child)::after {
              display: none;
            }
          }
        `}</style>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content fadeInUp" style={{paddingTop: "6rem"}}>
              <div className="breadcrumb">
                <Link href="/" style={{fontFamily: "poppins, sans-serif", fontWeight:"300", color:"white"}}>Home</Link>
                <span>›</span>
                <Link href="/services" style={{fontFamily: "poppins, sans-serif", fontWeight:"300", color:"white"}}>Services</Link>
                <span>›</span>
                <span>Self-Sponsorship UK Requirements</span>
              </div>
              <h1 style={{fontFamily: "poppins, sans-serif", color:"white", fontWeight:"400"}}>Self-Sponsorship UK Requirements</h1>
              <p className="hero-description" style={{fontFamily: "poppins, sans-serif", color:"white", fontWeight:"200"}}>
                Navigate the complexities of UK self-sponsorship with confidence. Our expert immigration solicitors 
                guide you through every requirement, ensuring your business and visa applications meet all Home Office standards.
              </p>
            </div>
          </div>
        </section>

<section 
      style={sectionStyle}
    >
      {/* Content has been removed as requested. You can place new content here. */}
    </section>
        {/* Main Content */}
        <div className="container">
          <div className="main-content">
            {/* Content Area */}
            <div className="content-area">
              <section className="section fadeInUp delay1">
                <h2 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Understanding Self-Sponsorship in the UK</h2>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  Self-sponsorship represents a unique pathway for entrepreneurs and business owners to establish 
                  themselves in the UK. This route allows you to set up a UK company that can sponsor your own 
                  Skilled Worker visa, combining business establishment with personal immigration goals.
                </p>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  The process requires careful planning and adherence to strict Home Office requirements. Our 
                  experienced team at Lexington Ashworth has successfully guided numerous entrepreneurs through 
                  this complex journey, ensuring compliance at every step.
                </p>
              </section>

              <section className="section fadeInUp delay2">
                <h2 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Key Requirements for Self-Sponsorship</h2>
                <div className="requirements-grid">
                  {requirements.map((req, index) => (
                    <div key={index} className="requirement-card">
                      <h4 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                        <div className="requirement-icon">
                          {req.icon}
                        </div>
                        {req.title}
                      </h4>
                      <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>{req.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="section fadeInUp delay3">
                <h2 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>The Self-Sponsorship Process</h2>
                <div className="process-steps">
                  {processSteps.map((step, index) => (
                    <div key={index} className="step">
                      <div className="step-number">{step.number}</div>
                      <div className="step-content">
                        <h4 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>{step.title}</h4>
                        <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="section fadeInUp delay4">
                <h2 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Benefits of Self-Sponsorship</h2>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}} key={index}>{benefit}</li>
                  ))}
                </ul>
              </section>

              <section className="section fadeInUp delay5">
                <h2 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Common Challenges and Solutions</h2>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  Self-sponsorship applications face intense scrutiny from the Home Office. Common challenges include 
                  proving genuine business operations, demonstrating the need for the role, and maintaining compliance 
                  with sponsorship duties.
                </p>
                <h3 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Genuineness Test</h3>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  The Home Office rigorously assesses whether your business is genuine and whether the job role is 
                  necessary. We help you build a compelling case with comprehensive documentation, business plans, 
                  and evidence of commercial viability.
                </p >
                <h3 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Compliance Requirements</h3>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  Maintaining sponsor licence compliance while running your business can be challenging. Our team 
                  provides ongoing support to ensure you meet all reporting obligations, right to work checks, and 
                  record-keeping requirements.
                </p>
              </section>

              <section className="section fadeInUp delay6">
                <h2 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Frequently Asked Questions</h2>
                <div className="faq-container">
                  {faqItems.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`}>
                      <button 
                        className="faq-question" 
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={activeFAQ === index}
                        style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}
                      >
                        {faq.question}
                        <span className="faq-icon">▼</span>
                      </button>
                      <div className="faq-answer" >
                        <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="sidebar">
              <div className="cta-card fadeInUp delay2">
                <h3 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Need Expert Guidance?</h3>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Get professional assistance with your self-sponsorship journey</p>
                <Link href="/contact" className="cta-button" style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  Book Consultation
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              <div className="quick-links fadeInUp delay3">
                <h4 style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>Related Services</h4>
                <ul>
                  {relatedServices.map((service, index) => (
                    <li key={index}>
                      <Link href={service.href} style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="download-box fadeInUp delay4">
                <h4 style={{fontFamily: "poppins, sans-serif",color:"white", fontWeight:"400"}}>Free Guide</h4>
                <p style={{fontFamily: "poppins, sans-serif", fontWeight:"300", color:"white"}}>Download our comprehensive Self-Sponsorship Guide</p>
                <a href="#" className="download-button" style={{fontFamily: "poppins, sans-serif", fontWeight:"300"}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfSponsorship;