
import React from 'react';

const AboutArea = () => {
  return (
    <>
      <div className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">

 


            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0" style={{fontFamily:"poppins", fontWeight:"400"}}>Driven by Integrity. Defined by Legal Excellence.</h2>
                </div>
                <p
                  className="mb-0"
                  style={{
                    fontFamily: "poppins",
                    // textAlign: "justify",
                    // textJustify: "inter-word",
                    // hyphens: "auto",
                    // maxWidth: "600px",
                    // margin: "0 auto",
                    fontWeight: "300",
                  }}
                >
                  At Lexington Ashworth, we are a dedicated team of legal professionals committed to providing expert guidance in UK immigration law. Based in the United Kingdom, we offer tailored legal solutions for individuals, families, and businesses navigating the complex UK immigration system.

                  With a client-first approach, our experienced solicitors and paralegals handle a wide range of services—from visa applications and human rights cases to sponsor licences and self-sponsorship routes. We understand the importance of getting it right the first time, and we work meticulously to ensure every case is approached with clarity, compassion, and confidence.

                  Whether you're applying for a Skilled Worker Visa, planning a business move to the UK, or seeking assistance with indefinite leave to remain (ILR), Lexington Ashworth is here to help you achieve your legal goals.

                  Our commitment to transparency, fixed-fee services, and ongoing support has earned us the trust of clients across the UK and internationally. At Lexington Ashworth, your legal peace of mind is our priority.
                </p>


                <div>
                  <a href="/contact" className="btn btn-primary mt-1"><span>Contact Us</span><span>Contact Us</span></a>

                </div>
              </div>
            </div> 

                       <div className="col-12 col-md-6" style={{ display: "flex", justifyContent: "center" , height: "10%" }}>
              <div className="about-us-thumbnail">
                <img src="/assets/aboutimage.png" alt="" />


              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

{/* 
        <div className="our-partners-wrapper">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-3">
                <h4 className="mb-0">
                  <span className="text-primary">2337+</span> {' '}
                  Our Trusted & Valuable Clients</h4>
              </div>

              <div className="col-12 col-md-9">
                <div className="partners-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                  <img src="/assets/img/partner-img/1.png" alt="" />
                  <img src="/assets/img/partner-img/2.png" alt="" />
                  <img src="/assets/img/partner-img/3.png" alt="" />
                  <img src="/assets/img/partner-img/4.png" alt="" />
                  <img src="/assets/img/partner-img/3.png" alt="" />
                  <img src="/assets/img/partner-img/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AboutArea;