// 'use client';

// import OffCanvas from '@/common/OffCanvas';
// import SearchArea from '@/common/SearchArea';
// import menu_data from '@/data/menu-data';
// import useSticky from '@/hooks/use-sticky';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// interface InnerSubMenu {
//   title: string;
//   link: string;
// }

// interface SubMenu {
//   title: string;
//   link: string;
//   has_inner_dropdown: boolean;
//   inner_submenu?: InnerSubMenu[];
// }

// interface MenuItem {
//   title: string;
//   link: string;
//   has_dropdown: boolean;
//   sub_menus?: SubMenu[];
// }

// // Expertise dropdown items
// const expertiseItems = [
//   {
//     title: 'Business Immigration',
//     description: 'Corporate solutions',
//     link: '/services/business-immigration',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//         <circle cx="12" cy="7" r="4"></circle>
//       </svg>
//     ),
//   },
//   {
//     title: 'Personal Immigration',
//     description: 'Individual services',
//     link: '/services/personal-immigration',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//         <polyline points="9 22 9 12 15 12 15 22"></polyline>
//       </svg>
//     ),
//   },
//   {
//     title: 'Self Sponsorship',
//     description: 'Independent routes',
//     link: '/services/self-sponsorship',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//         <circle cx="8.5" cy="7" r="4"></circle>
//         <line x1="20" y1="8" x2="20" y2="14"></line>
//         <line x1="23" y1="11" x2="17" y2="11"></line>
//       </svg>
//     ),
//   },
//   {
//     title: 'Wills Writing',
//     description: 'Estate planning',
//     link: '/services/wills-writing',
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//         <polyline points="14 2 14 8 20 8"></polyline>
//         <line x1="16" y1="13" x2="8" y2="13"></line>
//         <line x1="16" y1="17" x2="8" y2="17"></line>
//         <polyline points="10 9 9 9 8 9"></polyline>
//       </svg>
//     ),
//   },
// ];

// // Business Immigration sub-categories
// const businessImmigrationCategories = [
//   {
//     title: 'Hiring Foreign Workers',
//     links: [
//       { text: 'Apply for Sponsor Licence', href: '/apply-sponsor-licence' },
//       { text: 'Sponsor Licence Renewal', href: '/sponsor-licence-renewal' },
//       { text: 'Sponsor Licence Suspension / Revocation', href: '/sponsor-licence-suspension' },
//       { text: 'Sponsor Licence Compliance Visits Support', href: '/sponsor-licence-compliance' },
//       { text: 'Sponsor Licence Compliance Training', href: '/sponsor-licence-training' },
//       { text: 'Sponsor Licence Rejected', href: '/sponsor-licence-rejected' },
//       { text: 'Sponsor Licence UK Guide', href: '/sponsor-licence-guide' },
//     ]
//   },
//   {
//     title: 'UK Settlement for Entrepreneurs',
//     links: [
//       { text: 'Self-Sponsorship Route', href: '/self-sponsorship-route' },
//       { text: 'Self-Sponsorship Requirements', href: '/self-sponsorship-requirements' },
//       { text: 'Self-Sponsorship Cost', href: '/self-sponsorship-cost' },
//       { text: 'Self-Sponsorship Skilled Worker Visa', href: '/self-sponsorship-skilled-worker' },
//       { text: 'Apply for Self-Sponsorship', href: '/apply-self-sponsorship' },
//       { text: 'Self-Sponsorship Guide', href: '/self-sponsorship-guide' },
//     ]
//   },
//   {
//     title: 'Challenge Decisions, Secure Rights',
//     links: [
//       { text: 'Immigration Appeals Procedure', href: '/immigration-appeals' },
//       { text: 'Spouse Visa Appeal', href: '/spouse-visa-appeal' },
//       { text: 'ILR /Settlement Visa Refusal Appeal', href: '/ilr-settlement-appeal' },
//       { text: 'EEA Visa Refusal Appeal', href: '/eea-visa-appeal' },
//       { text: 'Tier 1 Entrepreneur Visa Refusal', href: '/tier1-entrepreneur-refusal' },
//       { text: 'Administrative Review & Appeal', href: '/administrative-review' },
//     ]
//   },
//   {
//     title: 'UK Exploration Made Easy',
//     links: [
//       { text: 'Standard Visitor Visa UK', href: '/standard-visitor-visa' },
//       { text: 'UK Visitor Visa Refusal', href: '/visitor-visa-refusal' },
//     ]
//   },
//   {
//     title: 'Business Expansion in UK',
//     links: [
//       { text: 'Global Business Mobility Visa', href: '/global-business-mobility' },
//       { text: 'UK Expansion worker Visa', href: '/uk-expansion-worker' },
//       { text: 'Sole Representative Visa Extension', href: '/sole-representative-extension' },
//     ]
//   },
// ];

// const HeaderOne = () => {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('theme') || 'light-mode';
//     }
//     return 'light-mode';
//   });

//   useEffect(() => {
//     document.body.className = theme;
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => (prev === 'light-mode' ? 'dark-mode' : 'light-mode'));

//   const { sticky } = useSticky();
//   const [isSearchOpen, setSearchOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openCanvas, setOpenCavas] = useState(false);
//   const [navTitle, setNavTitle] = useState('');
//   const [navTitle2, setNavTitle2] = useState('');
//   const [showExpertiseDropdown, setShowExpertiseDropdown] = useState(false);
//   const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
//   const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
//   const [hoveredExpertise, setHoveredExpertise] = useState<string | null>(null);

//   const openMobileMenu = (menu: string) => {
//     if (menu === 'Expertise') {
//       setMobileExpertiseOpen(!mobileExpertiseOpen);
//       setMobileBusinessOpen(false);
//     } else {
//       setNavTitle((prev) => (prev === menu ? '' : menu));
//     }
//   };

//   const openMobileMenu2 = (menu: string) => {
//     setNavTitle2((prev) => (prev === menu ? '' : menu));
//   };

//   const toggleMobileBusinessDropdown = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setMobileBusinessOpen(!mobileBusinessOpen);
//   };

//   // Detect Footer Intersection
//   const [isFooterVisible, setIsFooterVisible] = useState(false);
//   useEffect(() => {
//     const footer = document.querySelector('footer');
//     if (!footer) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsFooterVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     observer.observe(footer);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         /* ========== DESKTOP STYLES (Above 991px) ========== */
//         @media (min-width: 992px) {
//           /* Desktop Expertise Dropdown */
//           .desktop-expertise-dropdown {
//             position: fixed;
//             top: 80px;
//             left: 0;
//             right: 0;
//             width: 100%;
//             background: rgba(52, 58, 64, 0.98);
//             backdrop-filter: blur(10px);
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//             z-index: 999;
//             padding: 2rem 0;
//             box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//           }

//           .desktop-expertise-dropdown.show {
//             opacity: 1;
//             visibility: visible;
//           }

//           .desktop-dropdown-wrapper {
//             max-width: 800px;
//             margin: 0 auto;
//             padding: 0 2rem;
//           }

//           .desktop-dropdown-content {
//             display: flex;
//             justify-content: space-around;
//             gap: 2rem;
//           }

//           .desktop-expertise-item {
//             flex: 1;
//             text-align: center;
//             padding: 1rem;
//             border-radius: 8px;
//             transition: all 0.3s ease;
//             cursor: pointer;
//             position: relative;
//           }

//           .desktop-expertise-item:hover {
//             background: rgba(255, 255, 255, 0.1);
//             transform: translateY(-2px);
//           }

//           .desktop-expertise-link {
//             color: white;
//             text-decoration: none;
//             font-size: 1.1rem;
//             font-weight: 500;
//             font-family: 'Roundo', sans-serif;
//             display: block;
//             padding: 0.5rem;
//           }

//           /* Desktop Business Immigration Dropdown */
//           .desktop-business-dropdown {
//             position: fixed;
//             top: 160px;
//             left: 0;
//             right: 0;
//             width: 100%;
//             background: #ffffff;
//             box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//             z-index: 998;
//             max-height: calc(100vh - 160px);
//             overflow-y: auto;
//           }

//           .desktop-business-dropdown.show {
//             opacity: 1;
//             visibility: visible;
//           }

//           .desktop-business-wrapper {
//             max-width: 1400px;
//             margin: 0 auto;
//             padding: 3rem 2rem;
//           }

//           .desktop-business-grid {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 3rem;
//           }

//           .desktop-business-bottom {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 3rem;
//             margin-top: 3rem;
//             padding-top: 3rem;
//             border-top: 1px solid #e5e5e5;
//           }

//           .desktop-category-title {
//             font-size: 1.2rem;
//             font-weight: 600;
//             color: #2c3e50;
//             margin-bottom: 1.5rem;
//             font-family: 'Roundo', sans-serif;
//           }

//           .desktop-category-links {
//             display: flex;
//             flex-direction: column;
//             gap: 0.75rem;
//           }

//           .desktop-category-link {
//             color: #666;
//             text-decoration: none;
//             font-size: 0.95rem;
//             transition: all 0.2s ease;
//             font-family: 'Poppins', sans-serif;
//             padding: 0.25rem 0;
//             display: block;
//           }

//           .desktop-category-link:hover {
//             color: #EBBF7D;
//             transform: translateX(5px);
//           }

//           /* Hide mobile elements on desktop */
//           .mobile-expertise-dropdown,
//           .mobile-business-dropdown,
//           .mobile-arrow,
//           .expertise-icon,
//           .expertise-desc {
//             display: none !important;
//           }
//         }

//         /* ========== MOBILE STYLES (991px and below) ========== */
//         @media (max-width: 991px) {
//           /* Hide desktop elements on mobile */
//           .desktop-expertise-dropdown,
//           .desktop-business-dropdown {
//             display: none !important;
//           }

//           /* Mobile Expertise Dropdown */
//           .mobile-expertise-dropdown {
//             position: static;
//             margin: 0.5rem 0;
//             background: rgba(23, 32, 42, 0.95);
//             border-radius: 12px;
//             box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
//             opacity: 1;
//             visibility: visible;
//             display: none;
//             border: 1px solid rgba(235, 191, 125, 0.2);
//             overflow: hidden;
//             animation: slideDown 0.3s ease-out;
//           }

//           @keyframes slideDown {
//             from {
//               opacity: 0;
//               transform: translateY(-10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .mobile-expertise-dropdown.show {
//             display: block;
//           }

//           .mobile-dropdown-content {
//             padding: 0.75rem;
//           }

//           .mobile-expertise-item {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 1rem;
//             margin-bottom: 0.5rem;
//             background: rgba(255, 255, 255, 0.03);
//             border: 1px solid rgba(255, 255, 255, 0.08);
//             border-radius: 10px;
//             position: relative;
//             overflow: hidden;
//             transition: all 0.3s ease;
//             cursor: pointer;
//           }

//           .mobile-expertise-item::before {
//             content: '';
//             position: absolute;
//             left: 0;
//             top: 0;
//             bottom: 0;
//             width: 4px;
//             background: #EBBF7D;
//             transform: scaleY(0);
//             transition: transform 0.3s ease;
//           }

//           .mobile-expertise-item:active {
//             background: rgba(235, 191, 125, 0.1);
//             border-color: rgba(235, 191, 125, 0.3);
//           }

//           .mobile-expertise-item:active::before {
//             transform: scaleY(1);
//           }

//           .mobile-expertise-content {
//             display: flex;
//             align-items: center;
//             gap: 1rem;
//             flex: 1;
//           }

//           .expertise-icon {
//             width: 45px;
//             height: 45px;
//             background: linear-gradient(135deg, #EBBF7D 0%, #f4e4c1 50%, #EBBF7D 100%);
//             box-shadow: 0 3px 10px rgba(235, 191, 125, 0.3);
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             flex-shrink: 0;
//           }

//           .expertise-icon svg {
//             width: 22px;
//             height: 22px;
//             stroke: #212C3C;
//           }

//           .expertise-text {
//             display: flex;
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           .mobile-expertise-title {
//             font-size: 1.05rem;
//             font-weight: 600;
//             color: #EBBF7D;
//             margin-bottom: 0.2rem;
//             font-family: 'Roundo', sans-serif;
//           }

//           .expertise-desc {
//             font-size: 0.9rem;
//             color: rgba(255, 255, 255, 0.8);
//             font-weight: 400;
//             font-family: 'Poppins', sans-serif;
//           }

//           .mobile-arrow {
//             width: 20px;
//             height: 20px;
//             stroke: #EBBF7D;
//             transition: transform 0.3s ease;
//             flex-shrink: 0;
//           }

//           .mobile-expertise-item.expanded .mobile-arrow {
//             transform: rotate(90deg);
//           }

//           /* Mobile Business Dropdown */
//           .mobile-business-dropdown {
//             margin-top: 1rem;
//             padding: 1rem;
//             background: rgba(0, 0, 0, 0.2);
//             border-radius: 8px;
//             display: none;
//           }

//           .mobile-business-dropdown.show {
//             display: block;
//             animation: expandDown 0.3s ease-out;
//           }

//           @keyframes expandDown {
//             from {
//               opacity: 0;
//               max-height: 0;
//             }
//             to {
//               opacity: 1;
//               max-height: 1000px;
//             }
//           }

//           .mobile-category {
//             margin-bottom: 1.5rem;
//           }

//           .mobile-category:last-child {
//             margin-bottom: 0;
//           }

//           .mobile-category-title {
//             font-size: 0.95rem;
//             font-weight: 600;
//             color: #EBBF7D;
//             margin-bottom: 0.75rem;
//             padding-bottom: 0.5rem;
//             border-bottom: 1px solid rgba(235, 191, 125, 0.3);
//             font-family: 'Roundo', sans-serif;
//           }

//           .mobile-category-links {
//             display: flex;
//             flex-direction: column;
//             gap: 0.5rem;
//           }

//           .mobile-category-link {
//             color: rgba(255, 255, 255, 0.9);
//             text-decoration: none;
//             font-size: 0.85rem;
//             padding: 0.5rem 0.75rem;
//             border-radius: 6px;
//             transition: all 0.2s ease;
//             font-family: 'Poppins', sans-serif;
//           }

//           .mobile-category-link:active {
//             background: rgba(235, 191, 125, 0.2);
//             color: #EBBF7D;
//           }
//         }

//         /* Common styles */
//         .dropdown-arrow {
//           width: 12px;
//           height: 12px;
//           stroke: #fff;
//           transition: transform 0.3s ease;
//           margin-left: 4px;
//           display: inline-block;
//         }

//         .expertise-hover:hover .dropdown-arrow,
//         .expertise-active .dropdown-arrow {
//           transform: rotate(180deg);
//         }

//         .expertise-active > a {
//           color: #EBBF7D !important;
//         }
//       `}</style>

//       <header
//         className={`header-area ${sticky ? 'sticky-on' : ''} ${menuOpen ? 'mobile-menu-open' : ''}`}
//         style={{ backgroundColor: '#212C3C' }}
//       >
//         <nav className="navbar navbar-expand-lg">
//           <div className="container">
//             <Link
//               className="navbar-brand"
//               href="/"
//               style={{ display: isFooterVisible ? 'none' : 'block' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//                 <div style={{ width: '250px', height: '80px' }}>
//                   <img
//                     src="/assets/img/FullLogo_Transparent.png"
//                     alt="Top Logo"
//                     style={{
//                       width: '80%',
//                       height: '100%',
//                       transform: 'scale(0.9)',
//                       transformOrigin: 'left center',
//                       objectFit: 'cover',
//                       marginTop: '5px',
//                       marginLeft: '25px',
//                     }}
//                   />
//                 </div>
//                 <img
//                   src="/assets/img/Lextext.png"
//                   alt="Main Logo"
//                   style={{
//                     maxWidth: '250px',
//                     maxHeight: '40px',
//                     width: 'auto',
//                     height: 'auto',
//                     objectFit: 'contain',
//                     objectPosition: 'left center',
//                     marginTop: '-25px',
//                   }}
//                 />
//               </div>
//             </Link>

//             <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-toggler" type="button">
//               <span className="material-symbols-outlined text-white">view_cozy</span>
//             </button>

//             <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="vorixNav">
//               <ul className="navbar-nav navbar-nav-scroll" style={{ fontFamily: 'Poppins' }}>
//                 {(menu_data as MenuItem[]).map((item, i) => (
//                 <li
//   key={i}
//   className={`vorix-dd ${item.title === 'Expertise' ? 'expertise-hover expertise-wrapper' : ''} ${mobileExpertiseOpen && item.title === 'Expertise' ? 'expertise-active' : ''}`}
//   onMouseEnter={() => {
//     if (item.title === 'Expertise') {
//       setShowExpertiseDropdown(true);
//     } else {
//       setNavTitle(item.title);
//     }
//   }}
//   onMouseLeave={(e) => {
//     if (item.title === 'Expertise') {
//       const related = e.relatedTarget as HTMLElement;
//       if (!related || !related.closest('.expertise-wrapper')) {
//         setShowExpertiseDropdown(false);
//         setHoveredExpertise(null);
//       }
//     } else {
//       setNavTitle('');
//     }
//   }}
// >

//                     <Link
//                       href={item.link}
//                       style={{
//                         fontFamily: 'Roundo',
//                         fontWeight: 700,
//                         fontSize: '1rem',
//                         color: 'white',
//                         whiteSpace: 'nowrap',
//                         display: 'flex',
//                         alignItems: 'center',
//                       }}
//                       onClick={(e) => {
//                         if (item.title === 'Expertise' && window.innerWidth <= 991) {
//                           e.preventDefault();
//                           openMobileMenu(item.title);
//                         } else {
//                           openMobileMenu(item.title);
//                         }
//                       }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = '#EBBF7D')}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
//                     >
//                       {item.title}
//                       {item.title === 'Expertise' && (
//                         <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                           <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       )}
//                     </Link>

//                     {/* Desktop Expertise Dropdown */}
//                     {item.title === 'Expertise' && (
//                       <div className={`desktop-expertise-dropdown ${showExpertiseDropdown ? 'show' : ''}`}>
//                         <div className="desktop-dropdown-wrapper">
//                           <div className="desktop-dropdown-content">
//                             {expertiseItems.map((expertiseItem, index) => (
//                               <div 
//                                 key={index} 
//                                 className="desktop-expertise-item"
//                                 onMouseEnter={() => setHoveredExpertise(expertiseItem.title)}
//                                 onMouseLeave={() => setHoveredExpertise(null)}
//                               >
//                                 <Link 
//                                   href={expertiseItem.link} 
//                                   className="desktop-expertise-link"
//                                 >
//                                   {expertiseItem.title}
//                                 </Link>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     {/* Desktop Business Immigration Dropdown */}
//                     <div className={`desktop-business-dropdown ${hoveredExpertise === 'Business Immigration' ? 'show' : ''}`}>
//                       <div className="desktop-business-wrapper">
//                         <div className="desktop-business-grid">
//                           {businessImmigrationCategories.slice(0, 3).map((category, catIndex) => (
//                             <div key={catIndex}>
//                               <h3 className="desktop-category-title">{category.title}</h3>
//                               <div className="desktop-category-links">
//                                 {category.links.map((linkItem, linkIndex) => (
//                                   <Link 
//                                     key={linkIndex} 
//                                     href={linkItem.href} 
//                                     className="desktop-category-link"
//                                   >
//                                     {linkItem.text}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                         <div className="desktop-business-bottom">
//                           {businessImmigrationCategories.slice(3).map((category, catIndex) => (
//                             <div key={catIndex + 3}>
//                               <h3 className="desktop-category-title">{category.title}</h3>
//                               <div className="desktop-category-links">
//                                 {category.links.map((linkItem, linkIndex) => (
//                                   <Link 
//                                     key={linkIndex} 
//                                     href={linkItem.href} 
//                                     className="desktop-category-link"
//                                   >
//                                     {linkItem.text}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Mobile Expertise Dropdown */}
//                     {item.title === 'Expertise' && (
//                       <div className={`mobile-expertise-dropdown ${mobileExpertiseOpen ? 'show' : ''}`}>
//                         <div className="mobile-dropdown-content">
//                           {expertiseItems.map((expertiseItem, index) => {
//                             const isBusiness = expertiseItem.title === 'Business Immigration';
//                             return (
//                               <div key={index}>
//                                 <div
//                                   className={`mobile-expertise-item ${mobileBusinessOpen && isBusiness ? 'expanded' : ''}`}
//                                   onClick={(e) => {
//                                     if (isBusiness) {
//                                       toggleMobileBusinessDropdown(e);
//                                     } else {
//                                       window.location.href = expertiseItem.link;
//                                     }
//                                   }}
//                                 >
//                                   <div className="mobile-expertise-content">
//                                     <div className="expertise-icon">
//                                       {expertiseItem.icon}
//                                     </div>
//                                     <div className="expertise-text">
//                                       <div className="mobile-expertise-title">{expertiseItem.title}</div>
//                                       <div className="expertise-desc">{expertiseItem.description}</div>
//                                     </div>
//                                   </div>
                                  
//                                   {isBusiness && (
//                                     <svg 
//                                       className="mobile-arrow"
//                                       viewBox="0 0 24 24" 
//                                       fill="none" 
//                                       strokeWidth="2"
//                                     >
//                                       <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
//                                     </svg>
//                                   )}
//                                 </div>

//                                 {/* Mobile Business Dropdown */}
//                                 {isBusiness && (
//                                   <div className={`mobile-business-dropdown ${mobileBusinessOpen ? 'show' : ''}`}>
//                                     {businessImmigrationCategories.map((category, catIndex) => (
//                                       <div key={catIndex} className="mobile-category">
//                                         <div className="mobile-category-title">{category.title}</div>
//                                         <div className="mobile-category-links">
//                                           {category.links.map((linkItem, linkIndex) => (
//                                             <Link 
//                                               key={linkIndex} 
//                                               href={linkItem.href} 
//                                               className="mobile-category-link"
//                                               onClick={() => {
//                                                 setMenuOpen(false);
//                                                 setMobileExpertiseOpen(false);
//                                                 setMobileBusinessOpen(false);
//                                               }}
//                                             >
//                                               {linkItem.text}
//                                             </Link>
//                                           ))}
//                                         </div>
//                                       </div>
//                                     ))}
//                                   </div>
//                                 )}
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     )}
//                     {/* Original dropdown logic for other menu items */}
//                     {item.has_dropdown && item.sub_menus && item.title !== 'Expertise' && (
//                       <ul className="vorix-dd-menu" style={{ display: navTitle === item.title ? 'block' : 'none' }}>
//                         {item.sub_menus.map((sub_menu, index) => (
//                           <li key={index} className="vorix-dd" onMouseEnter={() => setNavTitle2(sub_menu.title)} onMouseLeave={() => setNavTitle2('')}>
//                             <Link
//                               href={sub_menu.link}
//                               style={{
//                                 fontFamily: 'poppins',
//                                 fontWeight: 300,
//                                 fontSize: '0.95rem',
//                                 color: 'black',
//                               }}
//                               onClick={() => openMobileMenu2(sub_menu.title)}
//                               onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
//                               onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
//                             >
//                               {sub_menu.title}
//                             </Link>

//                             {sub_menu.has_inner_dropdown && sub_menu.inner_submenu && (
//                               <ul className="vorix-dd-menu" style={{ display: navTitle2 === sub_menu.title ? 'block' : 'none' }}>
//                                 {sub_menu.inner_submenu.map((inner_menu, inner_index) => (
//                                   <li key={inner_index}>
//                                     <Link
//                                       href={inner_menu.link}
//                                       style={{
//                                         fontFamily: 'Poppins',
//                                         fontWeight: 300,
//                                         fontSize: '0.9rem',
//                                         color: 'white',
//                                       }}
//                                       onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
//                                       onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
//                                     >
//                                       {inner_menu.title}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="d-flex align-items-center">
//                 <div className="header-search-btn" id="searchButton" style={{ paddingTop: '5px' }}>
//                   <button
//                     className="btn"
//                     onClick={() => setSearchOpen(!isSearchOpen)}
//                     style={{
//                       color: '#FFFFFF',
//                       padding: 0,
//                       border: 'none',
//                       background: 'transparent',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="29"
//                       height="29"
//                       viewBox="0 0 24 24"
//                       fill="white"
//                       style={{
//                         color: '#FFFFFF',
//                         fill: '#FFFFFF',
//                         stroke: 'none',
//                       }}
//                     >
//                       <path d="M10.5 2C6.91 2 4 4.91 4 8.5C4 12.09 6.91 15 10.5 15C12.09 15 13.54 14.41 14.63 13.45L19.39 18.21L20.8 16.8L16.04 12.04C17 10.95 17.59 9.5 17.59 8C17.59 4.91 14.68 2 11.09 2H10.5ZM6 8.5C6 6.57 7.57 5 9.5 5C11.43 5 13 6.57 13 8.5C13 10.43 11.43 12 9.5 12C7.57 12 6 10.43 6 8.5Z" />
//                     </svg>
//                   </button>
//                 </div>

//                 <button id="theme-toggle" onClick={toggleTheme} className={`theme-btn ${theme === 'light-mode' ? '' : 'light-mode-active'}`}>
//                   <span className="material-symbols-outlined moon" style={{ color: 'white' }}>clear_day</span>
//                   <span className="material-symbols-outlined sun" style={{ color: 'white' }}>bedtime</span>
//                 </button>

//                 <div className="mb-3 mb-lg-0" id="sideMenuButton">
//                   <a
//                     onClick={() => setOpenCavas(!openCanvas)}
//                     role="button"
//                     className="btn btn-primary sideMenuButton"
//                     style={{
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       backgroundColor: 'transparent',
//                       border: 'none',
//                       cursor: 'pointer',
//                       padding: '8px'
//                     }}
//                   >
//                     <div
//                       style={{
//                         backgroundColor: '#EBBF7D',
//                         borderRadius: '50%',
//                         width: '42px',
//                         height: '42px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                       }}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 512 512"
//                         fill="black"
//                         width="20"
//                         height="20"
//                         preserveAspectRatio="xMidYMid meet"
//                       >
//                         <path d="M391.1 351.1c-13.3-13.3-33.6-13.3-46.9 0l-36.5 36.5c-41.2-22.6-74.7-56.2-97.3-97.3l36.5-36.5c13.3-13.3 13.3-33.6 0-46.9L174.1 86.7c-13.3-13.3-33.6-13.3-46.9 0l-45.2 45.2c-26.6 26.6-35.5 65.6-23.7 101.6 34.6 105.3 116.4 187 221.7 221.7 35.9 11.8 74.9 2.9 101.6-23.7l45.2-45.2c13.3-13.3 13.3-33.6 0-46.9l-70.7-70.7z" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <SearchArea setSearchOpen={setSearchOpen} isSearchOpen={isSearchOpen} />
//       <OffCanvas setOpenCavas={setOpenCavas} openCanvas={openCanvas} />
//     </>
//   );
// };

// export default HeaderOne;
'use client';
import React, { useState, useEffect , ReactNode} from 'react';


interface LinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any; // allows extra props
}

const Link = ({ href, children, ...props }: LinkProps) => (
  <a href={href} {...props}>{children}</a>
);


// Mock for menu_data
const menu_data = [
  { title: 'Home', link: '/', has_dropdown: false },
  { title: 'Expertise', link: '/services', has_dropdown: true },
  { title: 'About Us', link: '/about', has_dropdown: false },
  { title: 'Contact', link: '/contact', has_dropdown: false },
];

// Mock for useSticky hook
const useSticky = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { sticky };
};

// Mock for OffCanvas component
const OffCanvas = ({ setOpenCavas, openCanvas }) => {
  if (!openCanvas) return null;
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, width: '300px', height: '100%', background: 'white', zIndex: 1100, padding: '20px', boxShadow: '-5px 0 15px rgba(0,0,0,0.2)' }}>
      <h2>Side Menu</h2>
      <button onClick={() => setOpenCavas(false)}>Close</button>
    </div>
  );
};

// Mock for SearchArea component
const SearchArea = ({ setSearchOpen, isSearchOpen }) => {
  if (!isSearchOpen) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px' }}>
        <input type="search" placeholder="Search..." style={{ fontSize: '1.5rem', padding: '10px' }} />
        <button onClick={() => setSearchOpen(false)} style={{ marginLeft: '10px' }}>Close</button>
      </div>
    </div>
  );
};


// --- INTERFACES ---
interface InnerSubMenu {
  title: string;
  link: string;
}

interface SubMenu {
  title: string;
  link: string;
  has_inner_dropdown: boolean;
  inner_submenu?: InnerSubMenu[];
}

interface MenuItem {
  title:string;
  link:string;
  has_dropdown: boolean;
  sub_menus?: SubMenu[];
}

// --- DATA FOR EXPERTISE DROPDOWN ---
const expertiseItems = [
  {
    title: 'Business Immigration',
    description: 'Corporate solutions for businesses',
    link: '/services/business-immigration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Personal Immigration',
    description: 'Services for individuals & families',
    link: '/services/personal-immigration',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Self Sponsorship',
    description: 'Independent routes to the UK',
    link: '/services/self-sponsorship',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
      </svg>
    ),
  },
  {
    title: 'Wills Writing',
    description: 'Secure your legacy & estate',
    link: '/services/wills-writing',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];

const businessImmigrationCategories = [
  {
    title: 'Hiring Foreign Workers',
    links: [
      { text: 'Sponsor Licence', href: '/sponsor-licence-foreign' },
      { text: 'Apply for Sponsor Licence', href: '/apply-for-sponsorship' },
      { text: 'Sponsor Licence Renewal', href: '/sponsor-licence-renewal' },
      { text: 'Sponsor Licence Suspension / Revocation', href: '/sponsorship-licence-suspended' },
      { text: 'Sponsor Licence Rejected', href: '/self-sponsorship-rejected' },



      { text: 'Sponsor Licence Compliance Visits Support', href: '/sponsor-licence-compliance' },
    ]
  },
  {
    title: 'UK Settlement for Entrepreneurs',
    links: [
      { text: 'Self-Sponsorship Route', href: '/self-sponsor' },
      { text: 'Self-Sponsorship Requirements', href: '/UK-Self-Sponsorship-Visa-Route' },
      { text: 'Self-Sponsorship Cost', href: '/self-sponsorship-cost' },
      { text: 'Self-Sponsorship Skilled Worker Visa', href: '/self-sponsorship-skilled-worker-visa' },
      { text: 'Apply for Self-Sponsorship', href: '/apply-self-sponsorship' },
    ]
  },
  {
    title: 'Challenge Decisions, Secure Rights',
    links: [
      { text: 'Immigration Appeals Procedure', href: '/immigration-appeals' },
      { text: 'Spouse Visa Appeal', href: '/spouse-visa-appeal' },
      { text: 'ILR /Settlement Visa Refusal Appeal', href: '/long-residence-ILR-page' },
      { text: 'Administrative Review & Appeal', href: '/administrative-review' },
    ]
  },
  {
    title: 'UK Exploration Made Easy',
    links: [
      { text: 'Standard Visitor Visa UK', href: '/standard-visit-visa' },
      { text: 'UK Visitor Visa Refusal', href: '/visitor-visa-refusal' },
    ]
  },
  {
    title: 'Business Expansion in UK',
    links: [
      { text: 'Global Business Mobility Visa', href: '/global-business-mobility' },
      { text: 'UK Expansion worker Visa', href: '/uk-expansion-worker' },
      { text: 'Sole Representative Visa Extension', href: '/sole-representative-extension' },
    ]
  },
];

const personalImmigrationCategories = [
  {
    title: 'Unite Families in UK',
    links: [
      { text: 'Spouse Visa UK', href: '/spouse-visa-uk' },
      { text: 'Spouse/Civil Partnership Visa Extension', href: '/spouse-civil-partnership-visa-extension' },
      { text: 'Spouse Visa Appeal', href: '/spouse-visa-appeal' },
      { text: 'Same Sex partner Visa', href: '/same-sex-partner-visa' },
      { text: 'Civil Partnership', href: '/civil-partnership' },
    ]
  },
  {
    title: 'Secure Permanent UK Residency',
    links: [
      { text: 'Indefinite Leave to Remain (ILR)', href: '/indefinite-leave-to-remain' },
      { text: 'ILR Refusals Due to Tax Amendments', href: '/ILR-refusal-due-to-tax-amendments' },
      { text: 'Judicial Review for ILR Refusal', href: '/judicial-review-of-ILR-refusal-page' },
      { text: 'ILR /Settlement Visa Refusal Appeal', href: '/long-residence-ILR-page' },
    ]
  },
  {
    title: 'Path to UK Citizenship',
    links: [
      { text: 'British Citizenship Application', href: '/british-citizenship-application-page' },
      { text: 'British Citizenship for EU or EEA Nationals', href: '/UK-citizenship-for-EU-nationals-page' },
      { text: 'Naturalise As A British Citizen - Form AN', href: '/naturalise-british-citizen-form-an' },
    ]
  },
    {
    title: 'UK Skilled Work Opportunity',
    links: [
      { text: 'Skilled Worker Visa', href: '/tier-2-skilled-worker-administrative' },
      { text: 'Skilled Worker Visa Refusal', href: '/skilled-worker-visa-refusal' },
    ]
  },
  {
    title: 'Unlock UK Talent Opportunities',
    links: [
      { text: 'Global Talent Visa', href: '/global-talent-visa-page' },
      { text: 'Global Talent Accelerator', href: '/global-talent-accelerator' },
      { text: 'Permanent visa for exceptionally talented', href: '/permanent-visa-exceptionally-talented' },
    ]
  },
];

const willsWritingOptions = [
    {
        title: 'Islamic Wills',
        description: 'Compliant with Sharia principles.',
        href: '/services/wills-writing/islamic',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    },
    {
        title: 'Conventional Wills',
        description: 'Standard UK estate planning.',
        href: '/services/wills-writing/conventional',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    }
];


// --- MAIN HEADER COMPONENT ---
const HeaderOne = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light-mode';
    }
    return 'light-mode';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light-mode' ? 'dark-mode' : 'light-mode'));

  const { sticky } = useSticky();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCanvas, setOpenCavas] = useState(false);
  const [navTitle, setNavTitle] = useState('');
  const [navTitle2, setNavTitle2] = useState('');

  // --- State for new Expertise Dropdown ---
  const [showExpertiseDropdown, setShowExpertiseDropdown] = useState(false);
  const [hoveredExpertise, setHoveredExpertise] = useState<string | null>(null);

  // --- State for Mobile Menu ---
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);
  const [mobileWillsOpen, setMobileWillsOpen] = useState(false);


  const openMobileMenu = (menu: string) => {
    if (menu === 'Expertise') {
      setMobileExpertiseOpen(!mobileExpertiseOpen);
      setMobileBusinessOpen(false);
      setMobilePersonalOpen(false);
      setMobileWillsOpen(false);
    } else {
      setNavTitle((prev) => (prev === menu ? '' : menu));
    }
  };

  const openMobileMenu2 = (menu: string) => {
    setNavTitle2((prev) => (prev === menu ? '' : menu));
  };

  const toggleMobileBusinessDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileBusinessOpen(!mobileBusinessOpen);
  };
  
  const toggleMobilePersonalDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobilePersonalOpen(!mobilePersonalOpen);
  };

  const toggleMobileWillsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileWillsOpen(!mobileWillsOpen);
  };

  // Detect Footer Intersection
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ========== COMMON STYLES ========== */
        .dropdown-arrow-icon {
          width: 14px;
          height: 14px;
          stroke: #fff;
          transition: transform 0.3s ease;
          margin-left: 5px;
          display: inline-block;
        }
        .expertise-menu-container:hover .dropdown-arrow-icon,
        .expertise-active .dropdown-arrow-icon {
          transform: rotate(180deg);
        }
        .expertise-active > a {
          color: #EBBF7D !important;
        }

        /* ========== DESKTOP MEGA-MENU (min-width: 992px) ========== */
        @media (min-width: 992px) {
          .expertise-menu-container {
            position: static;
          }
          .desktop-expertise-mega-menu {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            width: 100%;
            background-color: #f8f9fa;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid #e9ecef;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
            z-index: 1000;
            display: flex;
            justify-content: center;
          }
          .desktop-expertise-mega-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .mega-menu-wrapper {
            display: flex;
            width: 100%;
            max-width: 1200px;
            padding: 2rem;
          }
          .mega-menu-left-panel {
            width: 35%;
            padding-right: 2rem;
            border-right: 1px solid #e0e0e0;
          }
          .mega-menu-right-panel {
            width: 65%;
            padding-left: 2rem;
            min-height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .mega-menu-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s ease, color 0.2s ease;
            text-decoration: none;
            color: #343a40;
            margin-bottom: 0.5rem;
            border: 1px solid transparent;
          }
          .mega-menu-item:hover, .mega-menu-item.active {
            background-color: #ffffff;
            color: #EBBF7D;
            border-color: #e0e0e0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }
          .mega-menu-item-icon {
            margin-right: 1rem;
            color: #EBBF7D;
            flex-shrink: 0;
          }
          .mega-menu-item-icon svg {
            width: 28px;
            height: 28px;
          }
          .mega-menu-item-text .mega-menu-item-title {
            font-family: 'Roundo', sans-serif;
            font-weight: 600;
            font-size: 1rem;
            color: #212529;
          }
          .mega-menu-item:hover .mega-menu-item-title,
          .mega-menu-item.active .mega-menu-item-title {
              color: #EBBF7D;
          }
          .mega-menu-item-text .mega-menu-item-desc {
            font-family: 'Poppins', sans-serif;
            font-size: 0.85rem;
            color: #6c757d;
          }
          .mega-menu-arrow {
            margin-left: auto;
            width: 16px;
            height: 16px;
            stroke: #adb5bd;
            transition: transform 0.2s;
          }
          .mega-menu-item:hover .mega-menu-arrow,
          .mega-menu-item.active .mega-menu-arrow {
            transform: translateX(3px);
            stroke: #EBBF7D;
          }
          .right-panel-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            width: 100%;
          }
          .right-panel-category-title {
            font-family: 'Roundo', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            color: #343a40;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #EBBF7D;
            display: inline-block;
          }
          .right-panel-link {
            display: block;
            color: #495057;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 0.5rem 0;
            transition: color 0.2s ease, transform 0.2s ease;
          }
          .right-panel-link:hover {
            color: #EBBF7D;
            transform: translateX(5px);
          }
          .right-panel-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
            color: #6c757d;
          }
          .right-panel-placeholder svg {
            width: 50px;
            height: 50px;
            margin-bottom: 1rem;
            color: #ced4da;
          }
          .right-panel-placeholder h3 {
            font-family: 'Roundo', sans-serif;
            font-size: 1.2rem;
            color: #495057;
          }
          .right-panel-placeholder p {
            max-width: 300px;
          }
          
          .self-sponsorship-panel {
            background: linear-gradient(135deg, #2c3e50, #46637f);
            color: white;
            padding: 2.5rem;
            border-radius: 12px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          .self-sponsorship-panel svg {
            width: 48px;
            height: 48px;
            margin-bottom: 1rem;
            stroke-width: 1.5;
            color: #EBBF7D;
          }
          .self-sponsorship-panel h3 {
            font-family: 'Roundo', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .self-sponsorship-panel p {
            font-size: 0.95rem;
            max-width: 400px;
            margin-bottom: 1.5rem;
            opacity: 0.9;
          }
          .cta-button {
            background-color: #EBBF7D;
            color: #212C3C;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          .cta-button:hover {
            background-color: #fff;
            color: #212C3C;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(235, 191, 125, 0.4);
          }

          .wills-writing-panel {
            display: flex;
            gap: 2rem;
            width: 100%;
            align-items: stretch;
          }
          .will-option {
             flex: 1;
             padding: 1.5rem;
             border: 1px solid #e0e0e0;
             border-radius: 8px;
             text-decoration: none;
             color: #343a40;
             transition: all 0.3s ease;
             display: flex;
             flex-direction: column;
             align-items: center;
             text-align: center;
          }
          .will-option:hover {
             transform: translateY(-5px);
             box-shadow: 0 8px 20px rgba(0,0,0,0.08);
             border-color: #EBBF7D;
          }
          .will-option svg {
            width: 36px;
            height: 36px;
            color: #EBBF7D;
            margin-bottom: 1rem;
          }
          .will-option h4 {
            font-family: 'Roundo', sans-serif;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
          }
          .will-option p {
            font-size: 0.9rem;
            color: #6c757d;
          }

          .mobile-expertise-dropdown {
            display: none !important;
          }
        }

        /* ========== REVAMPED MOBILE STYLES (991px and below) ========== */
        @media (max-width: 991px) {
          .desktop-expertise-mega-menu {
            display: none !important;
          }
          .mobile-expertise-dropdown {
            position: static;
            margin: 1rem 0;
            background: #ffffff;
            border-radius: 12px;
            display: none;
            overflow: hidden;
            animation: slideDownMobile 0.4s ease-in-out;
            box-shadow: 0 5px 25px rgba(0,0,0,0.1);
          }
          @keyframes slideDownMobile {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .mobile-expertise-dropdown.show {
            display: block;
          }
          .mobile-dropdown-content {
            padding: 0.5rem;
          }
          .mobile-expertise-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem;
            margin-bottom: 0.25rem;
            background: transparent;
            border: none;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .mobile-expertise-item.expanded {
            background: #f1f3f5;
          }
          .mobile-expertise-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
          }
          .expertise-icon {
            width: 40px;
            height: 40px;
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            box-shadow: none;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: #EBBF7D;
          }
          .expertise-icon svg {
            width: 20px;
            height: 20px;
            stroke: #EBBF7D;
          }
          .expertise-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .mobile-expertise-title {
            font-size: 1rem;
            font-weight: 600;
            color: #212C3C;
            margin-bottom: 0.1rem;
            font-family: 'Roundo', sans-serif;
          }
          .mobile-expertise-item.expanded .mobile-expertise-title {
            color: #EBBF7D;
          }
          .expertise-desc {
            font-size: 0.8rem;
            color: #6c757d;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
          }
          .mobile-arrow {
            width: 20px;
            height: 20px;
            stroke: #adb5bd;
            transition: transform 0.3s ease;
            flex-shrink: 0;
          }
          .mobile-expertise-item.expanded .mobile-arrow {
            transform: rotate(90deg);
            stroke: #EBBF7D;
          }
          .mobile-business-dropdown, .mobile-personal-dropdown, .mobile-wills-dropdown {
            margin: 0.5rem 0 0.5rem 0;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
            display: none;
            border-top: 1px solid #e9ecef;
          }
          .mobile-business-dropdown.show, .mobile-personal-dropdown.show, .mobile-wills-dropdown.show {
            display: block;
            animation: expandDownMobile 0.4s ease-in-out;
          }
          @keyframes expandDownMobile {
            from { opacity: 0; transform: translateY(-10px); max-height: 0; }
            to { opacity: 1; transform: translateY(0); max-height: 1500px; }
          }
          .mobile-category {
            margin-bottom: 1.5rem;
          }
          .mobile-category:last-child {
            margin-bottom: 0;
          }
          .mobile-category-title {
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #212C3C;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e0e0e0;
            font-family: 'Roundo', sans-serif;
          }
          .mobile-category-links {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
          }
          .mobile-category-link {
            color: #495057;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 0.6rem 0.75rem;
            border-radius: 6px;
            transition: all 0.2s ease;
            font-family: 'Poppins', sans-serif;
          }
          .mobile-category-link:active {
            background: #EBBF7D;
            color: #fff;
            transform: translateX(5px);
          }
        }
      `}</style>

      <header
        className={`header-area ${sticky ? 'sticky-on' : ''} ${menuOpen ? 'mobile-menu-open' : ''}`}
        style={{ backgroundColor: '#212C3C' }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* --- LOGO --- */}
            <Link
              className="navbar-brand"
              href="/"
              style={{ display: isFooterVisible ? 'none' : 'block' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ width: '250px', height: '80px' }}>
                  <img
                    src="/assets/img/FullLogo_Transparent.png"
                    alt="Top Logo"
                    style={{
                      width: '80%',
                      height: '100%',
                      transform: 'scale(0.9)',
                      transformOrigin: 'left center',
                      objectFit: 'cover',
                      marginTop: '5px',
                      marginLeft: '25px',
                    }}
                  />
                </div>
                <img
                  src="/assets/img/Lextext.png"
                  alt="Main Logo"
                  style={{
                    maxWidth: '250px',
                    maxHeight: '40px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'left center',
                    marginTop: '-25px',
                  }}
                />
              </div>
            </Link>

            {/* --- MOBILE TOGGLER --- */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-toggler" type="button">
              <span className="material-symbols-outlined text-white">view_cozy</span>
            </button>

            <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="vorixNav">
              <ul className="navbar-nav navbar-nav-scroll" style={{ fontFamily: 'Poppins' }}>
                {(menu_data as MenuItem[]).map((item, i) => {
                  if (item.title === 'Expertise') {
                    return (
                      <li
                        key={i}
                        className={`vorix-dd expertise-menu-container ${mobileExpertiseOpen ? 'expertise-active' : ''}`}
                        onMouseEnter={() => setShowExpertiseDropdown(true)}
                        onMouseLeave={() => {
                          setShowExpertiseDropdown(false);
                          setHoveredExpertise(null);
                        }}
                      >
                        <Link
                          href={item.link}
                          style={{ fontFamily: 'Roundo', fontWeight: 700, fontSize: '1rem', color: 'white', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}
                          onClick={(e) => {
                            if (window.innerWidth <= 991) {
                              e.preventDefault();
                              openMobileMenu(item.title);
                            }
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#EBBF7D')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                        >
                          {item.title}
                          <svg className="dropdown-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                          </svg>
                        </Link>

                        {/* --- DESKTOP MEGA MENU --- */}
                        <div className={`desktop-expertise-mega-menu ${showExpertiseDropdown ? 'show' : ''}`}>
                          <div className="mega-menu-wrapper">
                            <div className="mega-menu-left-panel">
                              {expertiseItems.map((expItem, expIndex) => (
                                <Link
                                  key={expIndex}
                                  href={expItem.link}
                                  className={`mega-menu-item ${hoveredExpertise === expItem.title ? 'active' : ''}`}
                                  onMouseEnter={() => setHoveredExpertise(expItem.title)}
                                >
                                  <div className="mega-menu-item-icon">{expItem.icon}</div>
                                  <div className="mega-menu-item-text">
                                    <div className="mega-menu-item-title">{expItem.title}</div>
                                    <div className="mega-menu-item-desc">{expItem.description}</div>
                                  </div>
                                  <svg className="mega-menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                                </Link>
                              ))}
                            </div>
                            <div className="mega-menu-right-panel">
                              {hoveredExpertise === 'Business Immigration' ? (
                                <div className="right-panel-grid">
                                  {businessImmigrationCategories.map((cat, catIndex) => (
                                    <div key={catIndex}>
                                      <h3 className="right-panel-category-title">{cat.title}</h3>
                                      {cat.links.map((link, linkIndex) => (
                                        <Link key={linkIndex} href={link.href} className="right-panel-link">{link.text}</Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              ) : hoveredExpertise === 'Personal Immigration' ? (
                                <div className="right-panel-grid">
                                  {personalImmigrationCategories.map((cat, catIndex) => (
                                    <div key={catIndex}>
                                      <h3 className="right-panel-category-title">{cat.title}</h3>
                                      {cat.links.map((link, linkIndex) => (
                                        <Link key={linkIndex} href={link.href} className="right-panel-link">{link.text}</Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              ) : hoveredExpertise === 'Self Sponsorship' ? (
                                <div className="self-sponsorship-panel">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                    <h3 style={{color:"#FFFFFF"}}>Chart Your Own Course to the UK</h3>
                                    <p style={{color:"#FFFFFF"}}>Discover the possibilities of the self-sponsorship route. A unique pathway for entrepreneurs and innovators.</p>
                                    <Link href="/self-sponsorship-central" className="cta-button">
                                        Explore Self-Sponsorship
                                    </Link>
                                </div>
                              ) : hoveredExpertise === 'Wills Writing' ? (
                                <div className="wills-writing-panel">
                                    {willsWritingOptions.map((opt, index) => (
                                        <Link href={opt.href} key={index} className="will-option">
                                            {opt.icon}
                                            <h4>{opt.title}</h4>
                                            <p>{opt.description}</p>
                                        </Link>
                                    ))}
                                </div>
                              ) : (
                                <div className="right-panel-placeholder">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                  <h3>Welcome to our Expertise</h3>
                                  <p>Hover over an area of expertise on the left to explore our services.</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* --- MOBILE DROPDOWN --- */}
                        <div className={`mobile-expertise-dropdown ${mobileExpertiseOpen ? 'show' : ''}`}>
                          <div className="mobile-dropdown-content">
                            {expertiseItems.map((expertiseItem, index) => {
                              const isBusiness = expertiseItem.title === 'Business Immigration';
                              const isPersonal = expertiseItem.title === 'Personal Immigration';
                              const isWills = expertiseItem.title === 'Wills Writing';
                              
                              return (
                                <div key={index}>
                                  <div
                                    className={`mobile-expertise-item ${(mobileBusinessOpen && isBusiness) || (mobilePersonalOpen && isPersonal) || (mobileWillsOpen && isWills) ? 'expanded' : ''}`}
                                    onClick={(e) => {
                                      if (isBusiness) {
                                        toggleMobileBusinessDropdown(e);
                                      } else if (isPersonal) {
                                        toggleMobilePersonalDropdown(e);
                                      } else if (isWills) {
                                        toggleMobileWillsDropdown(e);
                                      } else {
                                        window.location.href = expertiseItem.link;
                                      }
                                    }}
                                  >
                                    <div className="mobile-expertise-content">
                                      <div className="expertise-icon">{expertiseItem.icon}</div>
                                      <div className="expertise-text">
                                        <div className="mobile-expertise-title">{expertiseItem.title}</div>
                                        <div className="expertise-desc">{expertiseItem.description}</div>
                                      </div>
                                    </div>
                                    {(isBusiness || isPersonal || isWills) && <svg className="mobile-arrow" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                                  </div>
                                  {isBusiness && (
                                    <div className={`mobile-business-dropdown ${mobileBusinessOpen ? 'show' : ''}`}>
                                      {businessImmigrationCategories.map((category, catIndex) => (
                                        <div key={catIndex} className="mobile-category">
                                          <div className="mobile-category-title">{category.title}</div>
                                          <div className="mobile-category-links">
                                            {category.links.map((linkItem, linkIndex) => (
                                              <Link key={linkIndex} href={linkItem.href} className="mobile-category-link" onClick={() => setMenuOpen(false)}>{linkItem.text}</Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {isPersonal && (
                                    <div className={`mobile-personal-dropdown ${mobilePersonalOpen ? 'show' : ''}`}>
                                      {personalImmigrationCategories.map((category, catIndex) => (
                                        <div key={catIndex} className="mobile-category">
                                          <div className="mobile-category-title">{category.title}</div>
                                          <div className="mobile-category-links">
                                            {category.links.map((linkItem, linkIndex) => (
                                              <Link key={linkIndex} href={linkItem.href} className="mobile-category-link" onClick={() => setMenuOpen(false)}>{linkItem.text}</Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {isWills && (
                                     <div className={`mobile-wills-dropdown ${mobileWillsOpen ? 'show' : ''}`}>
                                        <div className="mobile-category-links">
                                            {willsWritingOptions.map((opt, optIndex) => (
                                                <Link key={optIndex} href={opt.href} className="mobile-category-link" onClick={() => setMenuOpen(false)}>{opt.title}</Link>
                                            ))}
                                        </div>
                                     </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </li>
                    );
                  }
                  // --- RENDER OTHER MENU ITEMS ---
                  return (
                    <li key={i} className="vorix-dd" onMouseEnter={() => setNavTitle(item.title)} onMouseLeave={() => setNavTitle('')}>
                      <Link
                        href={item.link}
                        style={{ fontFamily: 'Roundo', fontWeight: 700, fontSize: '1rem', color: 'white', whiteSpace: 'nowrap' }}
                        onClick={(e) => {
                            if (item.has_dropdown && window.innerWidth <= 991) {
                                e.preventDefault();
                                openMobileMenu(item.title);
                            }
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#EBBF7D')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                      >
                        {item.title}
                      </Link>
                      {item.has_dropdown && item.sub_menus && (
                        <ul className="vorix-dd-menu" style={{ display: navTitle === item.title ? 'block' : 'none' }}>
                          {item.sub_menus.map((sub_menu, index) => (
                            <li key={index} className="vorix-dd" onMouseEnter={() => setNavTitle2(sub_menu.title)} onMouseLeave={() => setNavTitle2('')}>
                              <Link href={sub_menu.link}>{sub_menu.title}</Link>
                              {sub_menu.has_inner_dropdown && sub_menu.inner_submenu && (
                                <ul className="vorix-dd-menu" style={{ display: navTitle2 === sub_menu.title ? 'block' : 'none' }}>
                                  {sub_menu.inner_submenu.map((inner_menu, inner_index) => (
                                    <li key={inner_index}><Link href={inner_menu.link}>{inner_menu.title}</Link></li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* --- HEADER BUTTONS --- */}
              <div className="d-flex align-items-center">
                <div className="header-search-btn" id="searchButton" style={{ paddingTop: '5px' }}>
                  <button
                    className="btn"
                    onClick={() => setSearchOpen(!isSearchOpen)}
                    style={{
                      color: '#FFFFFF',
                      padding: 0,
                      border: 'none',
                      background: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{
                        color: '#FFFFFF',
                        fill: '#FFFFFF',
                        stroke: 'none',
                      }}
                    >
                      <path d="M10.5 2C6.91 2 4 4.91 4 8.5C4 12.09 6.91 15 10.5 15C12.09 15 13.54 14.41 14.63 13.45L19.39 18.21L20.8 16.8L16.04 12.04C17 10.95 17.59 9.5 17.59 8C17.59 4.91 14.68 2 11.09 2H10.5ZM6 8.5C6 6.57 7.57 5 9.5 5C11.43 5 13 6.57 13 8.5C13 10.43 11.43 12 9.5 12C7.57 12 6 10.43 6 8.5Z" />
                    </svg>
                  </button>
                </div>

                <button id="theme-toggle" onClick={toggleTheme} className={`theme-btn ${theme === 'light-mode' ? '' : 'light-mode-active'}`}>
                  <span className="material-symbols-outlined moon" style={{ color: 'white' }}>clear_day</span>
                  <span className="material-symbols-outlined sun" style={{ color: 'white' }}>bedtime</span>
                </button>

                <div className="mb-3 mb-lg-0" id="sideMenuButton">
                  <a
                    onClick={() => setOpenCavas(!openCanvas)}
                    role="button"
                    className="btn btn-primary sideMenuButton"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '8px'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#EBBF7D',
                        borderRadius: '50%',
                        width: '42px',
                        height: '42px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="black"
                        width="20"
                        height="20"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M391.1 351.1c-13.3-13.3-33.6-13.3-46.9 0l-36.5 36.5c-41.2-22.6-74.7-56.2-97.3-97.3l36.5-36.5c13.3-13.3 13.3-33.6 0-46.9L174.1 86.7c-13.3-13.3-33.6-13.3-46.9 0l-45.2 45.2c-26.6 26.6-35.5 65.6-23.7 101.6 34.6 105.3 116.4 187 221.7 221.7 35.9 11.8 74.9 2.9 101.6-23.7l45.2-45.2c13.3-13.3 13.3-33.6 0-46.9l-70.7-70.7z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <SearchArea setSearchOpen={setSearchOpen} isSearchOpen={isSearchOpen} />
      <OffCanvas setOpenCavas={setOpenCavas} openCanvas={openCanvas} />
    </>
  );
};

// Add default export
export default HeaderOne;
