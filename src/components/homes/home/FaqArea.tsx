import React from 'react';

const FaqArea = ({ style_2 }: any) => {
  return (
    <>
      <div className={`faq-wrapper ${style_2 ? 'bg-secondary' : ''}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-0">Frequently Asked Questions</h2>
              </div>

              <div className="divider-sm"></div>

              <div className="faq-image">
                <img src="/assets/img/core-img/FaqImage.png" alt="" />

                <div className="faq-info d-flex align-items-center">
                  <h2 className="mb-0">A.I</h2>
                  <p className="mb-0">powered</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                        What documents do I need for a UK visa application?
                      </button>
                    </h2>
                    <div id="faqQuestion1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        You’ll typically need a passport, financial proof, accommodation details, and visa-specific documents. We ensure everything is complete to reduce delays or refusals.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                        Can I sponsor myself to live and work in the UK?
                      </button>
                    </h2>
                    <div id="faqQuestion2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Yes. Through Self-Sponsorship, you can open a UK company, apply for a Sponsor Licence, and sponsor yourself. We handle all steps from business setup to visa filing.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                        How long does it take to get Indefinite Leave to Remain (ILR)?
                      </button>
                    </h2>
                    <div id="faqQuestion3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Most applicants qualify for ILR after 5 years, depending on their visa type and history. We advise you on eligibility, timelines, and how to prepare your case effectively.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                        Are Islamic Wills valid under UK law?
                      </button>
                    </h2>
                    <div id="faqQuestion4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Yes, as long as they meet UK legal requirements. We prepare Shariah-compliant wills that align with UK law and reflect your personal beliefs and wishes.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                        What if my visa application was refused?
                      </button>
                    </h2>
                    <div id="faqQuestion5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body pt-0">
                        Depending on the reason, you may request an administrative review, appeal, or judicial review. We assess your case and recommend the best path forward.
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

export default FaqArea;
