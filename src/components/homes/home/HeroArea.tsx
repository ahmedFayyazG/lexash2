import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section
        className="hero-wrapper text-white"
        style={{ backgroundColor: '#FBF0DF', height: '90vh' }}

      >

        <div className="container">
          {/* Logo on top with deep navy glassmorphic background */}
          <div
            className="mb-1 p-4"
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
{/* <img
  src="/assets/img/Lextext.png"
  alt="Lexington Ashworth Logo"
  style={{
    width: '100%',
    maxWidth: '500px',   // ✅ Large on desktop
    height: '150px',     // ✅ Visibly larger
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto',
  }}
  className="img-fluid"
/> */}
          </div>

          <div className="row g-4">
            {/* Main Heading */}
            <div className="col-12  col-lg-8 col-xl-9">
          <div className="hero-content home2 text-center text-lg-start">
<div className="hero-content home2 text-center text-lg-start">
  <h2
    className="mb-0 wow text-black fadeInUp responsive-spacing"
    style={{
      fontFamily: 'Roundo',
      letterSpacing: '0.04em',
      textAlign: 'left',
      marginTop: '60px',
      position: 'relative',
    }}
    data-wow-duration="1000ms"
    data-wow-delay="700ms"
  >
 "Specialist UK Immigration Solicitors"
 
  </h2>
</div>

</div>

            </div>

            {/* Description and CTA */}
            <div className="col-12 col-md-8 col-lg-4 col-xl-3">
              <div className="hero-content home2">
                <p
                  className="my-5 wow fadeInUp text-black"
                  data-wow-duration="1000ms"
                  style={{ fontFamily: 'Poppins', letterSpacing: '0.08em' , lineHeight: '1.9',  textAlign: 'left',color: '#000' }}
                  data-wow-delay="1100ms"
                >
                  Whether you are facing a Visa refusal, a Deportation order, or navigating complex
                  compliance issues, Lexington Ashworth Solicitors offers clear, expert legal help.
                  We specialise in appeals, human rights claims, family migration, and sponsor
                  licence solutions across the UK.
                </p>
                <a
                  href="/appointment"
                  className="btn btn-primary2 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <span style={{ padding: "7px" }}>Get an Appointment</span>
                             <span style={{ padding: "5px" }}>Get an Appointment</span>

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