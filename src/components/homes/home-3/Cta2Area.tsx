
import React from 'react';

const Cta2Area = () => {
  return (
    <>
      <div className="cta-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms" style={{fontFamily:"Poppins"}}>Ready to discuss your case?</h2>
            </div>
            <div className="col-12 col-lg-6">
              <p className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="900ms" style={{paddingTop:"64px"}}>Contact us today to schedule your free consultation. We will listen to your situation, answer your questions, and outline a clear plan moving forward. Take the first step towards a confident resolution by booking your consultation now.</p>
             <a href="tel:+441234567890" className="btn btn-primary wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1100ms">
  <span>Call Us</span><span>Call Us</span>
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