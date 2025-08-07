'use client';
import React from 'react';

const MissionArea = () => {
  const sectionStyle: React.CSSProperties = {
    position: 'relative',
    height: '90vh',
    minHeight: '600px',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the left
    padding: '2rem',
  };

  const videoBackgroundStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(17, 24, 39, 0.5)',
    zIndex: 2,
  };

  const contentWrapperStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'flex-left',
    alignItems: 'start',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const contentContainerStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.43)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: 'clamp(2rem, 6vw, 4rem)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '700px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    marginLeft: '2rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: 300,
    color: '#212C3C',
    fontFamily: "'Poppins', sans-serif",
    marginBottom: '1.5rem',
    lineHeight: 1.2,
  };

  const paragraphStyle: React.CSSProperties = {
    color: '#212C3C',
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    lineHeight: 1.7,
    fontWeight: 300,
    fontFamily: "'Poppins', sans-serif",
  };

  return (
    <section style={sectionStyle}>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={videoBackgroundStyle}
        src="/assets/img/whywe.mp4"
      />



      {/* Left-aligned content */}
      <div style={contentWrapperStyle}>
        <div style={contentContainerStyle}>
          <h2 style={headingStyle}>Why We Exist</h2>
          <p style={paragraphStyle}>
            Our mission is to deliver outstanding legal service guided by our core values of insight,
            integrity, and impact. We exist to simplify complex legal challenges, empowering clients
            with clear guidance and confidence. Each case we undertake is an opportunity to provide
            meaningful support and create positive outcomes for individuals and businesses navigating
            critical immigration decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionArea;
