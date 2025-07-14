'use client';

import OffCanvas from '@/common/OffCanvas';
import SearchArea from '@/common/SearchArea';
import menu_data from '@/data/menu-data';
import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: SubMenu[];
}

const HeaderOne = ({ style_2 }: any) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light-mode';
    }
    return 'light-mode';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light-mode' ? 'dark-mode' : 'light-mode'));

  const { sticky } = useSticky();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCanvas, setOpenCavas] = useState(false);
  const [navTitle, setNavTitle] = useState('');
  const [navTitle2, setNavTitle2] = useState('');

  const openMobileMenu = (menu: string) => {
    setNavTitle((prev) => (prev === menu ? '' : menu));
  };

  const openMobileMenu2 = (menu: string) => {
    setNavTitle2((prev) => (prev === menu ? '' : menu));
  };

  // Detect Footer Intersection
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`header-area ${sticky ? 'sticky-on' : ''} ${menuOpen ? 'mobile-menu-open' : ''}`}
        style={{ backgroundColor: '#212C3C' }}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
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

            <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-toggler" type="button">
              <span className="material-symbols-outlined text-white">view_cozy</span>
            </button>

            <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="vorixNav">
              <ul className="navbar-nav navbar-nav-scroll" style={{ fontFamily: 'Poppins' }}>
                {(menu_data as MenuItem[]).map((item, i) => (
                  <li key={i} className="vorix-dd" onMouseEnter={() => setNavTitle(item.title)} onMouseLeave={() => setNavTitle('')}>
                    <Link
                      href={item.link}
                      style={{
                        fontFamily: 'Roundo',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'white',
                        whiteSpace: 'nowrap',
                      }}
                      onClick={() => openMobileMenu(item.title)}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#EBBF7D')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                    >
                      {item.title}
                    </Link>

                    {item.has_dropdown && item.sub_menus && (
                      <ul className="vorix-dd-menu" style={{ display: navTitle === item.title ? 'block' : 'none' }}>
                        {item.sub_menus.map((sub_menu, index) => (
                          <li key={index} className="vorix-dd" onMouseEnter={() => setNavTitle2(sub_menu.title)} onMouseLeave={() => setNavTitle2('')}>
                            <Link
                              href={sub_menu.link}
                              style={{
                                fontFamily: 'Roundo',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                color: 'black',
                              }}
                              onClick={() => openMobileMenu2(sub_menu.title)}
                              onMouseEnter={(e) => (e.currentTarget.style.color = 'black')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                            >
                              {sub_menu.title}
                            </Link>

                            {sub_menu.has_inner_dropdown && sub_menu.inner_submenu && (
                              <ul className="vorix-dd-menu" style={{ display: navTitle2 === sub_menu.title ? 'block' : 'none' }}>
                                {sub_menu.inner_submenu.map((inner_menu, inner_index) => (
                                  <li key={inner_index}>
                                    <Link
                                      href={inner_menu.link}
                                      style={{
                                        fontFamily: 'Roundo',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        color: 'white',
                                      }}
                                      onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                                      onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                                    >
                                      {inner_menu.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="d-flex align-items-center">
                <div className="header-search-btn" id="searchButton" style={{ paddingTop: '5px' }}>
                  <button
                    className="btn"
                    onClick={() => setSearchOpen(!isSearchOpen)}
                    style={{ color: '#FFFFFF', padding: 0, border: 'none', background: 'transparent' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" style={{ fill: '#FFFFFF' }}>
                      <path d="M10.5 2C6.91 2 4 4.91 4 8.5C4 12.09 6.91 15 10.5 15C12.09 15 13.54 14.41 14.63 13.45L19.39 18.21L20.8 16.8L16.04 12.04C17 10.95 17.59 9.5 17.59 8C17.59 4.91 14.68 2 11.09 2H10.5ZM6 8.5C6 6.57 7.57 5 9.5 5C11.43 5 13 6.57 13 8.5C13 10.43 11.43 12 9.5 12C7.57 12 6 10.43 6 8.5Z" />
                    </svg>
                  </button>
                </div>

                <button id="theme-toggle" onClick={toggleTheme} className={`theme-btn ${theme === 'light-mode' ? '' : 'light-mode-active'}`}>
                  <span className="material-symbols-outlined moon" style={{ color: 'white' }}>clear_day</span>
                  <span className="material-symbols-outlined sun" style={{ color: 'white' }}>bedtime</span>
                </button>

                <div className="mb-3 mb-lg-0" id="sideMenuButton">
                  <a onClick={() => setOpenCavas(!openCanvas)} role="button" className="btn btn-primary sideMenuButton" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '8px' }}>
                    <div style={{ backgroundColor: '#EBBF7D', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="black">
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

export default HeaderOne;
