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
                <h2
                  className="mb-0"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="divider-sm"></div>

              <div className="faq-image">
                <img src="/assets/img/core-img/FaqImage.png" alt="FAQ Illustration" />
                <div className="faq-info d-flex align-items-center">
                  <h2
                    className="mb-0"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                  >
                    A.I
                  </h2>
                  <p
                    className="mb-0"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                  >
                    powered
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">

                  {[
                    {
                      id: 1,
                      question: "What documents do I need for a UK visa application?",
                      answer:
                        "You’ll typically need a passport, financial proof, accommodation details, and visa-specific documents. We ensure everything is complete to reduce delays or refusals.",
                    },
                    {
                      id: 2,
                      question: "Can I sponsor myself to live and work in the UK?",
                      answer:
                        "Yes. Through Self-Sponsorship, you can open a UK company, apply for a Sponsor Licence, and sponsor yourself. We handle all steps from business setup to visa filing.",
                    },
                    {
                      id: 3,
                      question: "How long does it take to get Indefinite Leave to Remain (ILR)?",
                      answer:
                        "Most applicants qualify for ILR after 5 years, depending on their visa type and history. We advise you on eligibility, timelines, and how to prepare your case effectively.",
                    },
                    {
                      id: 4,
                      question: "Are Islamic Wills valid under UK law?",
                      answer:
                        "Yes, as long as they meet UK legal requirements. We prepare Shariah-compliant wills that align with UK law and reflect your personal beliefs and wishes.",
                    },
                    {
                      id: 5,
                      question: "What if my visa application was refused?",
                      answer:
                        "Depending on the reason, you may request an administrative review, appeal, or judicial review. We assess your case and recommend the best path forward.",
                    },
                  ].map(({ id, question, answer }) => (
                    <div className="accordion-item" key={id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${id !== 1 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqQuestion${id}`}
                          aria-expanded={id === 1 ? 'true' : 'false'}
                          aria-controls={`faqQuestion${id}`}
                          style={{
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {question}
                        </button>
                      </h2>
                      <div
                        id={`faqQuestion${id}`}
                        className={`accordion-collapse collapse ${id === 1 ? 'show' : ''}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div
                          className="accordion-body pt-0"
                          style={{ fontFamily: 'poppins, sans-serif', fontWeight: 300 }}
                        >
                          {answer}
                        </div>
                      </div>
                    </div>
                  ))}

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
