import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <div className="blog-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-7">
              <div className="section-heading text-center">
                <h2 className="mb-0" style={{fontFamily: 'Poppins, sans-serif', fontWeight:"400"}}>Our Articles and News</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card-two">
                <img src="data:image/jpeg;base64,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" alt="Immigration Law" style={{ height: '250px', objectFit: 'cover' }}/>
                <div className="blog-content">
                  <div className="blog-meta d-flex align-items-center">
                    <a href="#" style={{fontFamily:"poppins"}}>July 7, 2025</a>
                    <div className="dot"></div>
                    <a href="#" style={{fontFamily:"poppins"}}>Immigration</a>
                  </div>
                  <Link className="post-title" href="/blog-details" style={{fontFamily:"poppins"}}>
                    Navigating UK Spouse Visa Requirements in 2025
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card-two">
                <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80" alt="Legal Consultation" style={{ height: '250px', objectFit: 'cover' }}/>
                <div className="blog-content">
                  <div className="blog-meta d-flex align-items-center">
                    <a href="#" style={{fontFamily:"poppins"}}>July 5, 2025</a>
                    <div className="dot"></div>
                    <a href="#" style={{fontFamily:"poppins"}}>Wills</a>
                  </div>
                  <Link className="post-title" href="/blog-details"  style={{fontFamily:"poppins"}}>
                    Why Every Family Should Have a Legally Valid Will
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="blog-card-two">
                <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80" alt="Business Visa" style={{ height: '250px', objectFit: 'cover' }}/>
                <div className="blog-content">
                  <div className="blog-meta d-flex align-items-center">
                    <a href="#" style={{fontFamily:"poppins"}}>July 3, 2025</a>
                    <div className="dot"></div>
                    <a href="#" style={{fontFamily:"poppins"}}>Self-Sponsorship</a>
                  </div>
                  <Link className="post-title" href="/blog-details" style={{fontFamily:"poppins"}}>
                    Self-Sponsorship: A Game-Changer for Entrepreneurs in the UK
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default BlogArea;
