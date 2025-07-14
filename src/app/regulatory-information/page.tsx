'use client';

import React from 'react';
import Link from 'next/link';

export default function RegulatoryInformation() {
  return (
    <main
      style={{
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#212C3C',
        color: '#FFFFFF',
        padding: '60px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fff',
          color: '#212C3C',
          padding: '60px 40px',
          borderRadius: '10px',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            marginBottom: '30px',
            fontWeight: 700,
            color: '#212C3C',
            fontFamily: 'Poppins',
          }}
        >
          Our Regulatory Information
        </h1>

        <p>
          The information on this page is required by the Electronic Commerce
          (EC Directive) Regulations 2002.
        </p>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            Trading Name
          </h2>
          <p>Lexington Ashworth Solicitors</p>

          <h2 style={{ fontSize: '1.5rem', margin: '15px 0 10px' }}>
            Registered Name
          </h2>
          <p>Lexington Ashworth Ltd</p>

          <h2 style={{ fontSize: '1.5rem', margin: '15px 0 10px' }}>
            Legal Identity
          </h2>
          <p>Private Limited Company</p>

          <h2 style={{ fontSize: '1.5rem', margin: '15px 0 10px' }}>Status</h2>
          <p>Law Firm</p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            Registered Address
          </h2>
          <address>
            231, Spaces, Peter House,
            <br />
            Oxford Street, Manchester,
            <br />
            England, M1 5AN
          </address>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Contact</h2>
          <p>
            Telephone:{' '}
            <a
              href="tel:+441613880878"
              style={{
                color: '#212C3C',
                textDecoration: 'none',
                fontWeight: 500,
                fontFamily: 'Poppins',

              }}
            >
              0161 388 0878
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:info@lexingtonashworth.com"
              style={{
                color: '#212C3C',
                textDecoration: 'none',
                fontWeight: 500,
                fontFamily: 'Poppins',

              }}
            >
              info@lexingtonashworth.com
            </a>
          </p>
          <p>
            Website:{' '}
            <Link
              href="https://www.lexingtonashworth.com"
              style={{
                color: '#212C3C',
                textDecoration: 'none',
                fontWeight: 500,
                fontFamily: 'Poppins',
              }}
            >
              www.lexingtonashworth.com
            </Link>
          </p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>VAT</h2>
          <p>Lexington Ashworth Solicitors Not VAT registered.</p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <p>
            Lexington Ashworth Solicitors is a trading name of Lexington
            Ashworth Ltd and registered as a Private Limited Company in England
            & Wales, under Company Number 16166008. Lexington Ashworth
            Solicitors is authorised and regulated by the Solicitors Regulation
            Authority (SRA authorisation No. [Your SRA Number]).
          </p>

          <p>
            Lexington Ashworth Solicitors is registered with Information
            Commission as a data processor and authorised under ICO No: [Your
            ICO Number].
          </p>

          <p>
            Lexington Ashworth Solicitors does not provide financial advice or
            recommend indemnity insurance to clients therefore not registered
            with Financial Conduct Authority.
          </p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            Relevant Regulatory Codes
          </h2>
          <p>Relevant codes of conduct are available from:</p>
          <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
            <li>
              <Link
                href="https://www.sra.org.uk"
                target="_blank"
                style={{
                  color: '#212C3C',
                  textDecoration: 'none',
                  fontWeight: 500,
                fontFamily: 'Poppins',

                }}
              >
                Solicitors Regulation Authority
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lawsociety.org.uk/en"
                target="_blank"
                style={{
                  color: '#212C3C',
                  textDecoration: 'none',
                  fontWeight: 500,
                fontFamily: 'Poppins',

                }}
              >
                The Law Society of England and Wales
              </Link>
            </li>
          </ul>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
            Indemnity Insurance
          </h2>
          <p>
            This firm maintains professional Indemnity Insurance in accordance
            with the rules of the Solicitors Regulation Authority. Details of
            the insurers and the territorial coverage of the policy are
            available for inspection at our offices.
          </p>
        </section>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            padding: 40px 15px;
          }
          div {
            padding: 40px 20px;
          }
        }
      `}</style>
    </main>
  );
}
