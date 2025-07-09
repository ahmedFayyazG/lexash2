import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section
        className="hero-wrapper text-white"
        style={{ backgroundColor: '#212C3C' }}
      >
        <div className="divider"></div>

        <div className="container">
          {/* Logo on top with deep navy glassmorphic background */}
          <div
            className="mb-5 p-4"
            // style={{
            // backdropFilter: 'blur(10px)',
            //   WebkitBackdropFilter: 'blur(10px)',
            //   backgroundColor: '#212C3C',
            //   borderRadius: '20px',
            //   border: '1px solid rgba(255, 255, 255, 0.15)',
            //   boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
            //   maxWidth: '100%',
            //   margin: '0 auto',
            // }}
          >  
          <img
  src="/assets/img/core-img/textOnlyLogo.PNG"
  alt="Lexington Ashworth Logo"
  className="img-fluid"
  style={{
    width: '100%',
    maxWidth: '1200px', // ✅ increase this to desired width (e.g. 500px)
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    display: 'block',
    margin: '0 auto',   // center horizontally
  }}
/>
          </div>

          <div className="row g-4">
            {/* Main Heading */}
            <div className="col-12 col-lg-8 col-xl-9">
              <div className="hero-content home2 text-center  text-lg-start">
        <h2
  className="mb-0 wow text-white fadeInUp responsive-spacing"
  style={{ fontFamily: 'Roundo', letterSpacing: '0.04em' }}
  data-wow-duration="1000ms"
  data-wow-delay="700ms"
>
  Specialist UK Immigration Solicitors
</h2>

              </div>
            </div>

            {/* Description and CTA */}
            <div className="col-12 col-md-8 col-lg-4 col-xl-3">
              <div className="hero-content home2">
                <p
                  className="my-5 wow fadeInUp"
                  data-wow-duration="1000ms"
                  style={{ fontFamily: 'Roundo', letterSpacing: '0.08em' , lineHeight: '1.9' }}
                  data-wow-delay="1100ms"
                >
                  Whether you are facing a Visa refusal, a Deportation order, or navigating complex
                  compliance issues, Lexington Ashworth Solicitors offers clear, expert legal help.
                  We specialise in appeals, human rights claims, family migration, and sponsor
                  licence solutions across the UK.
                </p>
                <a
                  href="#"
                  className="btn btn-primary wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <span>CONTACT US</span>
                  <span>CONTACT US</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;
