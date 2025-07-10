"use client" 

const MissionArea = () => {

  if(typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

 


  return (
    <>
      <div className="mission-vision-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">

            <div className="col-12 col-lg-6">
              <div className="mission-vision-img-container">
                <img src="/assets/img/core-img/whyImage.png" alt="" />

                <div className="experience">
                  <h3 className="mb-0">15+</h3>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>


            <div className="col-12 col-lg-6">
              <div className="mission-vision-content">
                <h2 style={{ fontFamily: 'Roundo',
    fontWeight: 900, // or 800, 900 depending on what's available
    fontSize: '3.5rem',

                }}
                
                
                
                
                >Why Choose Us</h2>
                <p className="mb-4">  Lexington Ashworth delivers expert legal guidance with a personal touch. We combine decades of experience with a client-first approach you can trust.</p>

                {/* <div className="mission-vision-accordion">
                  <div className="accordion" id="missionVision">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Experienced Team
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show"
                        data-bs-parent="#missionVision">
                        <div className="accordion-body">
                      Each of our solicitors has over 15 years of experience in immigration and estate law, offering deep knowledge and a proven track record of success.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Responsive Service
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#missionVision">
                        <div className="accordion-body">
                          We prioritise clear, responsive communication. Clients benefit from prompt updates and practical advice at every stage, backed by a dedicated, client-focused approach.
                        </div>
                      </div>
                    </div>


                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Cross-Jurisdictional Insight
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#missionVision">
                        <div className="accordion-body">
         Our team’s international backgrounds give us a global perspective. We handle cross-border and multi-jurisdiction cases seamlessly, guiding clients through complex international issues.  </div>
                      </div>
                    </div>

<div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Free Consultation
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#missionVision">
                        <div className="accordion-body">
         Begin with a complimentary, no-obligation consultation. Discuss your situation with our solicitors and receive clear, straightforward advice on your best options.
         
          </div>
                      </div>
                    </div>

                  </div>
                </div> */}

<div className="mission-vision-accordion">
  <div className="accordion" id="missionVision">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          style={{ fontFamily: 'Roundo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}
        >
          Experienced Team
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#missionVision"
      >
        <div className="accordion-body" style={{ fontFamily: 'Roundo, sans-serif' }}>
          Each of our solicitors has over 15 years of experience in immigration and estate law,
          offering deep knowledge and a proven track record of success.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          style={{ fontFamily: 'Roundo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}
        >
          Responsive Service
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#missionVision"
      >
        <div className="accordion-body" style={{ fontFamily: 'Roundo, sans-serif' }}>
          We prioritise clear, responsive communication. Clients benefit from prompt updates and
          practical advice at every stage, backed by a dedicated, client-focused approach.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          style={{ fontFamily: 'Roundo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}
        >
          Cross-Jurisdictional Insight
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#missionVision"
      >
        <div className="accordion-body" style={{ fontFamily: 'Roundo, sans-serif' }}>
          Our team’s international backgrounds give us a global perspective. We handle cross-border
          and multi-jurisdiction cases seamlessly, guiding clients through complex international
          issues.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
          style={{ fontFamily: 'Roundo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}
        >
          Free Consultation
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#missionVision"
      >
        <div className="accordion-body" style={{ fontFamily: 'Roundo, sans-serif' }}>
          Begin with a complimentary, no-obligation consultation. Discuss your situation with our
          solicitors and receive clear, straightforward advice on your best options.
        </div>
      </div>
    </div>
  </div>
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

export default MissionArea;