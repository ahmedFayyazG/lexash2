'use client';

import React from 'react';

interface VideoAreaProps {
  style_2?: boolean; // this allows <VideoArea style_2={true} /> to compile
}

const VideoArea = ({ style_2 }: VideoAreaProps) => {
  return (
    <section
      style={{
        padding: '64px 16px',
        backgroundColor: 'white',
        fontFamily: 'Roundo, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
        }}
      >
        {/* Right Column: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingLeft: '16px', paddingRight: '16px' }}>
          <h2
            style={{
              fontSize: '55px',
              fontWeight: 400,
              color: '#111827',
              fontFamily: 'poppins, sans-serif',
            }}
          >
            Why We Exist
          </h2>
          <p
            style={{
              color: 'black',
              fontSize: '18px',
              lineHeight: '1.7',
              fontWeight: '300',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Our mission is to deliver outstanding legal service guided by our core values of insight,
            integrity, and impact. We exist to simplify complex legal challenges, empowering clients
            with clear guidance and confidence. Each case we undertake is an opportunity to provide
            meaningful support and create positive outcomes for individuals and businesses navigating
            critical immigration decisions.
          </p>
        </div>

        {/* Left Column: Video */}
        <div
          style={{
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            maxHeight: '400px',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          >
            <source src="/assets/img/core-img/BG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <style>
        {`
          @media(min-width: 1024px) {
            section > div {
              grid-template-columns: 1fr 1fr !important;
            }
          }

          @font-face {
            font-family: 'Roundo';
            src: url('/fonts/Roundo.ttf') format('truetype');
            font-display: swap;
          }
        `}
      </style>
    </section>
  );
};

export default VideoArea;
