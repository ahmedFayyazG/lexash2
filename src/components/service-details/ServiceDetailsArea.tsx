// "use client"
// import Link from 'next/link';
// import React from 'react';

// const ServiceDetailsArea = () => {

//   if(typeof window !== 'undefined') {
//     require("bootstrap/dist/js/bootstrap");
//   }

//   return (
//     <>
//       <div className="service-details-wrapper">
//         <div className="divider"></div>

//         <div className="container">
//           <div className="row g-4 g-xxl-5">

//             <div className="col-12 col-lg-8">
//               <div className="service-details-content">
//                 <img className="rounded-lg" src="/assets/img/bg-img/33.jpg" alt="" />
//                 <h2>Web Development</h2>
//                 <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book
//                   bethas survived not only five when anner year unknown printer eed little help from friend from time
//                   to time. Although we offer the one-stop convenience. unknown printer took galley type year anddey
//                   scrambled.</p>
//                 <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book
//                   bethas survived not only five when anner year unknown printer eed little help from friend from time
//                   to time. Although we offer the one-stop convenience. unknown printer took galley type year anddey
//                   scrambled.</p>

//                 <ul className="list-unstyled">
//                   <li>
//                     <span className="material-symbols-outlined">check_circle</span>
//                     Sed nisl fusce est consequat mollis habitasse facilisi rutrum nisle.
//                   </li>

//                   <li>
//                     <span className="material-symbols-outlined">check_circle</span>
//                     Cubilia quisque ad accumsan lorem platea elementum nisl curabitur dapibus.
//                   </li>
//                   <li>
//                     <span className="material-symbols-outlined">check_circle</span>
//                     Egestas magnis sapien hack vehicula condimentum dui enim justo site.
//                   </li>
//                 </ul>

//                 <div className="row g-4">
//                   <div className="col-6">
//                     <img src="/assets/img/bg-img/34.jpg" alt="" />
//                   </div>
//                   <div className="col-6">
//                     <img src="/assets/img/bg-img/35.jpg" alt="" />
//                   </div>
//                 </div>

//                 <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book
//                   bethas survived not only five when anner year unknown printer eed little help from friend from time
//                   to time. Although we offer the one-stop convenience. unknown printer took galley type year anddey
//                   scrambled.</p>
//               </div>

//               <div className="divider-sm"></div>


//               <div className="faq-accordion service-details-faq">
//                 <h3 className="mb-5">Frequently Asked Question</h3>
//                 <div className="accordion" id="faqAccordion">

//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
//                         What is vision for the future?
//                       </button>
//                     </h2>
//                     <div id="faqQuestion1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body">
//                         A business consultant is a professional who provides expert advice and guidance on various
//                         aspects such.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
//                         Do you offer free resources?
//                       </button>
//                     </h2>
//                     <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body">
//                         A business consultant is a professional who provides expert advice and guidance on various
//                         aspects such.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
//                         Can help to find investors?
//                       </button>
//                     </h2>
//                     <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body">
//                         A business consultant is a professional who provides expert advice and guidance on various
//                         aspects such.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
//                         Can help to find investors?
//                       </button>
//                     </h2>
//                     <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body">
//                         A business consultant is a professional who provides expert advice and guidance on various
//                         aspects such.
//                       </div>
//                     </div>
//                   </div>

//                   <div className="accordion-item">
//                     <h2 className="accordion-header">
//                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
//                         What services do you offer?
//                       </button>
//                     </h2>
//                     <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
//                       <div className="accordion-body">
//                         A business consultant is a professional who provides expert advice and guidance on various
//                         aspects such.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-12 col-lg-4">
//               <div className="d-flex flex-column gap-5">

//                 <div className="service-widget">
//                   <h4 className="mb-4">Service List</h4>

//                   <ul className="service-list">
//                     <li>
//                       <Link href="/service-details">
//                         Digital Marketing
//                         <span className="material-symbols-outlined">arrow_forward</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/service-details">
//                         Web Development
//                         <span className="material-symbols-outlined">arrow_forward</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/service-details">
//                         Mobile Apps
//                         <span className="material-symbols-outlined">arrow_forward</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/service-details">
//                         UI/UX Design
//                         <span className="material-symbols-outlined">arrow_forward</span>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/service-details">
//                         Animation Design
//                         <span className="material-symbols-outlined">arrow_forward</span>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>


//                 <div className="service-widget brochures">
//                   <h4 className="mb-4">Our Brochures</h4>

//                   <div className="d-flex gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
//                       <g clipPath="url(#clip0_1_1597)">
//                         <path
//                           d="M6.70703 46.127C7.42451 48.3722 9.50576 50.0006 11.9562 50.0006H38.0443C40.4946 50.0006 42.5759 48.3722 43.2934 46.127H6.70703Z"
//                           fill="#ECC80B" />
//                         <path
//                           d="M41.9457 8.03447L35.5285 1.61729C35.2639 1.35254 34.9776 1.11914 34.6729 0.916016V8.85498C34.6729 9.03564 34.8203 9.18223 35.0011 9.18223H42.8277C42.5895 8.76699 42.2935 8.38223 41.9457 8.03447Z"
//                           fill="#ECC80B" />
//                         <path
//                           d="M43.5614 12.1116H35.0013C33.2041 12.1116 31.7429 10.6504 31.7429 8.8542V0.00195312C31.7048 0 31.6657 0 31.6276 0H11.9561C8.91445 0 6.43945 2.4751 6.43945 5.51758V20.5662H43.5615L43.5614 12.1116Z"
//                           fill="#ECC80B" />
//                         <path
//                           d="M25.0528 29.9707H23.7129V36.8811H25.0528C25.9562 36.8811 26.4078 36.3793 26.4078 35.3755V31.4763C26.4077 30.4728 25.9561 29.9707 25.0528 29.9707Z"
//                           fill="#ECC80B" />
//                         <path
//                           d="M16.6369 29.9707H15.1465V33.1473H16.6369C17.5402 33.1473 17.992 32.6455 17.992 31.6417V31.4762C17.9918 30.4728 17.5401 29.9707 16.6369 29.9707Z"
//                           fill="#ECC80B" />
//                         <path
//                           d="M43.752 23.4961H6.24854C4.20742 23.4961 2.54688 25.1566 2.54688 27.1978V39.4938C2.54688 41.535 4.20742 43.1955 6.24854 43.1955H43.7519C45.793 43.1955 47.4536 41.535 47.4536 39.4938V27.1978C47.4536 25.1566 45.7931 23.4961 43.752 23.4961ZM20.3409 31.4603C20.3409 32.6548 20.0021 33.5355 19.3246 34.1024C18.6472 34.6695 17.7514 34.953 16.6373 34.953H15.1469V38.2049C15.1469 38.4358 15.0313 38.614 14.8006 38.7394C14.5696 38.8649 14.2937 38.9275 13.9726 38.9275C13.6512 38.9275 13.3753 38.8649 13.1444 38.7394C12.9135 38.614 12.7981 38.4358 12.7981 38.2049V28.6298C12.7981 28.4393 12.8783 28.2736 13.039 28.133C13.1994 27.9926 13.4102 27.9223 13.6713 27.9223H16.7877C17.8615 27.9223 18.7224 28.2008 19.3696 28.7579C20.017 29.3149 20.3407 30.1907 20.3407 31.385V31.4603H20.3409ZM28.7564 35.3747C28.7564 36.5993 28.42 37.4975 27.7478 38.0695C27.0752 38.6416 26.1769 38.9277 25.0529 38.9277H22.3882C22.087 38.9277 21.841 38.8576 21.6505 38.717C21.4598 38.5766 21.3644 38.4109 21.3644 38.2201V28.63C21.3644 28.4395 21.4597 28.2738 21.6505 28.1332C21.841 27.9928 22.0871 27.9225 22.3882 27.9225H25.0529C26.1769 27.9225 27.0753 28.2086 27.7478 28.7807C28.42 29.3527 28.7564 30.2512 28.7564 31.4755V35.3747ZM37.0141 29.6688C36.8885 29.8697 36.7152 29.97 36.4947 29.97H32.5955V32.5144H34.8688C35.0894 32.5144 35.2626 32.6047 35.3882 32.7853C35.5136 32.9659 35.5764 33.1819 35.5764 33.4326C35.5764 33.6636 35.5161 33.8692 35.3957 34.0499C35.2753 34.2306 35.0995 34.3208 34.8688 34.3208H32.5955V38.205C32.5955 38.4359 32.48 38.6141 32.2492 38.7395C32.0183 38.865 31.7423 38.9276 31.4212 38.9276C31.0998 38.9276 30.8239 38.865 30.5931 38.7395C30.3621 38.6141 30.2468 38.4359 30.2468 38.205V28.645C30.2468 28.4143 30.347 28.2361 30.548 28.1105C30.7485 27.9852 30.9896 27.9224 31.2705 27.9224H36.4946C36.7253 27.9224 36.9012 28.0228 37.0216 28.2235C37.142 28.4244 37.2022 28.6602 37.2022 28.9312C37.2021 29.2223 37.1394 29.4681 37.0141 29.6688Z"
//                           fill="#ECC80B" />
//                       </g>
//                       <defs>
//                         <clipPath id="clip0_1_1597">
//                           <rect width="50" height="50" fill="white" />
//                         </clipPath>
//                       </defs>
//                     </svg>
//                     <div>
//                       <p>Business is marketing discipline focused on growing visibility info
//                         (non-paid) technic required.</p>
//                       <a href="#" className="btn-link">Click here to download</a>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="divider"></div>
//       </div>
//     </>
//   );
// };

// export default ServiceDetailsArea;
// ServiceDetailsPage.module.css
'use client';

import { useState, useEffect , ReactNode} from 'react';
import Link from 'next/link';
import Head from 'next/head';

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

const ServiceDetailsPage = () => {
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
            <div className="hero-content fadeInUp">
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

export default ServiceDetailsPage;