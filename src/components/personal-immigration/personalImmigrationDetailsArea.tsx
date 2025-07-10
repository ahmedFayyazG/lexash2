import Link from 'next/link';
import React from 'react';

const PersonalimmigraionArea = () => {
  if (typeof window !== 'undefined') {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="service-details-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xxl-5">

            <div className="col-12 col-lg-8">
              <div className="service-details-content">
                <img className="rounded-lg mb-4" src="/assets/img/services/personal-immigration.jpg" alt="UK Personal Immigration" />

                <h2 className="mb-4 text-black">Personal Immigration</h2>
                <p>
                  At <strong>Lexington Ashworth</strong>, we provide compassionate, tailored legal support for individuals navigating the UK immigration system. Whether you're applying for a family visa, seeking Indefinite Leave to Remain (ILR), or facing complex human rights issues, our experienced immigration solicitors are here to guide you every step of the way.
                </p>

                <p>
                  We take pride in simplifying complex immigration rules and offering strategic advice based on the latest Home Office regulations. Our team ensures your application is meticulously prepared, minimizing delays and increasing approval success.
                </p>

                <ul className="list-unstyled mt-4">
                  <li><span className="material-symbols-outlined">check_circle</span> Family and Spouse Visas</li>
                  <li><span className="material-symbols-outlined">check_circle</span> Indefinite Leave to Remain (ILR)</li>
                  <li><span className="material-symbols-outlined">check_circle</span> British Citizenship & Naturalisation</li>
                  <li><span className="material-symbols-outlined">check_circle</span> Human Rights & Asylum Applications</li>
                  <li><span className="material-symbols-outlined">check_circle</span> Visa Extensions & Appeals</li>
                </ul>

                <div className="row g-4 my-4">
                  <div className="col-6">
                    <img src="/assets/img/services/visa-support.jpg" alt="Visa Legal Support" className="rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/services/family-visa.jpg" alt="Family Visa Lawyers" className="rounded" />
                  </div>
                </div>

                <p>
                  We understand the emotional and financial impact of immigration matters. That’s why we approach every case with empathy, professionalism, and a relentless commitment to achieving results for our clients.
                </p>
              </div>

              <div className="divider-sm"></div>

              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">Frequently Asked Questions</h3>
                <div className="accordion" id="faqAccordion">

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true">
                        How long does it take to get a UK family visa?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        On average, family visa applications are processed within 8–12 weeks, depending on the type and completeness of your documents. We help ensure everything is accurate and timely.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                        Can I switch from a visitor visa to a spouse visa in the UK?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        In most cases, you cannot switch from a visitor visa to a spouse visa while in the UK. Our solicitors can advise the best route for your circumstances.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-5">

                <div className="service-widget">
                  <h4 className="mb-4">Explore Other Services</h4>
                  <ul className="service-list">
                    <li><Link href="/services/business-immigration">Business Immigration <span className="material-symbols-outlined">arrow_forward</span></Link></li>
                    <li><Link href="/services/self-sponsorship">Self-Sponsorship <span className="material-symbols-outlined">arrow_forward</span></Link></li>
                    <li><Link href="/services/will-writing">Will Writing <span className="material-symbols-outlined">arrow_forward</span></Link></li>
                  </ul>
                </div>

                <div className="service-widget brochures">
                  <h4 className="mb-4">Helpful Resources</h4>
                  <div className="d-flex gap-3">
                    <img src="/assets/img/icons/brochure.svg" width={50} height={50} alt="Brochure" />
                    <div>
                      <p>Download our Immigration Services Brochure for detailed guidance on visa types and eligibility.</p>
                      <a href="/downloads/personal-immigration-brochure.pdf" className="btn-link">Download Brochure</a>
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

export default PersonalimmigraionArea;
