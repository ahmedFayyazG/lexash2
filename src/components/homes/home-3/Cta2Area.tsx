
import React from 'react';

const Cta2Area = () => {
  return (
    <>
      <div className="cta-wrapper" style={{backgroundColor:"#FBF0DF"}} >
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms" style={{fontFamily:"Poppins", fontWeight:"400"}}>Ready to discuss your case?</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="900ms" style={{paddingTop:"64px"}}>Contact us today to schedule your free consultation. We will listen to your situation, answer your questions, and outline a clear plan moving forward. Take the first step towards a confident resolution by booking your consultation now.</p>
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

        <div className="divider"></div>
      </div>
    </>
  );
};

export default Cta2Area;