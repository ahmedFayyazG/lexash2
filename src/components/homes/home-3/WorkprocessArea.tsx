
import React from 'react';

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                
                <h2 className="mb-4" style={{fontFamily:"poppins", fontWeight:"400"}}>Our Working Process</h2>
                <p className="mb-5" style={{fontFamily:"poppins", fontWeight:"300"}}>
                  At Lexington Ashworth, we believe that achieving the best legal outcomes starts with a clear, structured, and collaborative process. Our working process is built on transparency, communication, and a commitment to delivering practical legal solutions tailored to your individual circumstances. From the very first consultation through to final resolution, we guide you with clarity, integrity, and care — ensuring you understand each step and feel fully supported throughout your legal journey.
                </p>
                <a href="#" className="btn btn-primary"><span>READ MORE</span><span>READ MORE</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number" style={{color:"black", backgroundColor:"#E4B77A"}}>1</div>
                  <div className="process-text">
                    <h4 style={{fontFamily:"poppins", fontWeight:"400"}}>Initial Consultation</h4>
                    <p className="mb-0" style={{fontFamily:"poppins", fontWeight:"300"}}>We begin with a thorough consultation to understand your situation, goals, and any legal challenges you’re facing. This allows us to offer honest, strategic advice from the outset.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number" style={{color:"black", backgroundColor:"#E4B77A"}}>2</div>
                  <div className="process-text">
                    <h4 style={{fontFamily:"poppins", fontWeight:"400"}}>Tailored Legal Strategy</h4>
                    <p className="mb-0" style={{fontFamily:"poppins", fontWeight:"300"}}>Following our assessment, we develop a clear, customised legal plan aligned with your objectives. We outline timelines, costs, and anticipated outcomes, ensuring you stay informed throughout.</p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number" style={{color:"black", backgroundColor:"#E4B77A"}}>3</div>
                  <div className="process-text">
                    <h4 style={{fontFamily:"poppins", fontWeight:"400"}}>Expert Execution</h4>
                    <p className="mb-0" style={{fontFamily:"poppins", fontWeight:"300"}}>
                      Our experienced legal team manages your case with precision, drawing on our expertise in UK law to protect your interests and achieve the best possible results.
                    </p>
                  </div>
                </div>


                <div className="process-card">
                  <div className="number" style={{color:"black", backgroundColor:"#E4B77A"}}>4</div>
                  <div className="process-text">
                    <h4 style={{fontFamily:"poppins", fontWeight:"400"}}>Ongoing Communication</h4>
                    <p className="mb-0" style={{fontFamily:"poppins", fontWeight:"300"}}>
                      We keep you updated at every stage, offering clear guidance, regular updates, and prompt responses to your questions or concerns.
                    </p>
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

export default WorkprocessArea;