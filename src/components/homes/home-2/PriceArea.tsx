import React from 'react';
import Link from 'next/link';

const PriceArea = ({ style_2 }: any) => {
  return (
    <>
      <div className={`price-table-wrapper ${style_2 ? "" : "bg-secondary"}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-heading text-center">
                <h2 className="mb-4">Ready to discuss your case?</h2>
                <p className="mb-4">
                  <span className="fs-20 fw-medium">Whether you're seeking expert immigration guidance or estate planning support, we're here to help. Let’s explore how our experienced legal team can support your journey.</span>
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default PriceArea;
