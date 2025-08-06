"use client";
import React from 'react';
import { useContactForm } from './useContactForm';
import { ContactInfoCard } from './ContactInfoCard';
import { InputField } from './InputField';
import { useMediaQuery } from './useMediaQuery';// <<< 1. IMPORT THE NEW HOOK

// --- Theme Colors and Styles defined once ---
const theme = {
  accent: '#B9946A',
  text: '#2A2A2A',
  lightText: '#5A5A5A',
  background: '#FDFBF8',
  border: '#D1D1D1',
  success: '#28a745',
  error: '#e53e3e',
};

// --- Main Component ---
const ContactArea = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactForm();

  // <<< 2. USE THE HOOK TO DETECT SCREEN SIZE
  const isDesktop = useMediaQuery('(min-width: 992px)');

  const pageStyle: React.CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    background: theme.background,
    backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23EAE6E1" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
    color: theme.text,
    minHeight: '100vh',
    padding: 'clamp(4rem, 10vw, 8rem) 2rem',
  };

  // <<< 3. DEFINE RESPONSIVE STYLES
  const formSectionStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr', // Default for mobile
    gap: '5rem',
    alignItems: 'flex-start',
    // Apply desktop styles conditionally
    ...(isDesktop && {
      gridTemplateColumns: '1fr 1.2fr',
    }),
  };

  const buttonStyle: React.CSSProperties = {
    background: theme.text,
    color: theme.accent,
    border: `1px solid ${theme.text}`,
    padding: '0.9rem 2.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    letterSpacing: '0.8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    outline: 'none',
    textTransform: 'uppercase',
  };

  const getButtonState = () => {
    if (isSubmitting) {
      return { text: 'SENDING...', style: { ...buttonStyle, cursor: 'wait' } };
    }
    switch (submitStatus) {
      case 'success':
        return { text: 'SENT SUCCESSFULLY ✓', style: { ...buttonStyle, background: theme.success, color: '#fff', borderColor: theme.success } };
      case 'error':
        return { text: 'PLEASE CHECK FIELDS *', style: { ...buttonStyle, background: theme.error, color: '#fff', borderColor: theme.error } };
      default:
        return { text: 'SEND INQUIRY', style: buttonStyle };
    }
  };
  
  const { text: buttonText, style: currentButtonStyle } = getButtonState();

  const cardData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      title: "Direct Line",
      line1: <a href="tel:+441618189888" style={{color: 'inherit', textDecoration: 'none'}}>+44 161 818 9888</a>,
      line2: "Available for urgent matters"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      title: "Email Inquiry",
      line1: <a href="mailto:consult@lexingtonashworth.com" style={{color: 'inherit', textDecoration: 'none'}}>consult@lexingtonashworth.com</a>,
      line2: "Responses within one business day"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
      title: "Office Location",
      line1: "Peter House, Oxford St",
      line2: "Manchester M1 5AN, UK"
    },
  ];

  const subjectOptions = [
      { value: 'legal-consultation', label: 'Legal Consultation' },
      { value: 'case-inquiry', label: 'Case Inquiry' },
      { value: 'document-review', label: 'Document Review' },
      { value: 'general-inquiry', label: 'General Inquiry' },
  ];

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', fontWeight: 700, color: theme.text, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Contact Our Experts
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: theme.lightText, maxWidth: '750px', margin: '0 auto' }}>
            Initiate a confidential dialogue with our team. We are structured to provide clarity and strategic direction for your most pressing legal needs.
          </p>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>
          {cardData.map(card => <ContactInfoCard key={card.title} {...card} />)}
        </section>

        {/* <<< 4. APPLY THE STYLE OBJECT HERE */}
        <section style={formSectionStyle}>
          <aside>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, color: theme.text, borderLeft: `4px solid ${theme.accent}`, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
              Your Inquiry
            </h2>
            <p style={{ fontSize: '1.1rem', color: theme.lightText }}>
              Please provide as much detail as possible. This allows our team to assess your situation and respond with the most relevant information.
            </p>
            <p style={{ fontSize: '1.1rem', color: theme.lightText }}>
              All submissions are encrypted and treated with the strictest confidentiality, protected by attorney-client privilege from the outset.
            </p>
          </aside>

          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0 2rem' }}>
                <InputField id="name" name="name" label="Full Name" value={formData.name} onChange={handleInputChange} required error={submitStatus === 'error' && !formData.name}/>
                <InputField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleInputChange} required error={submitStatus === 'error' && !formData.email}/>
            </div>
            <InputField id="phone" name="phone" label="Phone Number (Optional)" type="tel" value={formData.phone} onChange={handleInputChange} />
            <InputField id="subject" name="subject" label="Subject Matter" type="select" options={subjectOptions} value={formData.subject} onChange={handleInputChange} required error={submitStatus === 'error' && !formData.subject}/>
            <InputField id="message" name="message" label="Detailed Message" type="textarea" value={formData.message} onChange={handleInputChange} required error={submitStatus === 'error' && !formData.message}/>
            
            <div style={{ textAlign: 'left', marginTop: '1rem' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={currentButtonStyle}
                onMouseEnter={(e) => {
                  if (!isSubmitting && submitStatus !== 'success' && submitStatus !== 'error') {
                    e.currentTarget.style.background = theme.accent;
                    e.currentTarget.style.color = theme.background;
                    e.currentTarget.style.borderColor = theme.accent;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting && submitStatus !== 'success' && submitStatus !== 'error') {
                    e.currentTarget.style.background = theme.text;
                    e.currentTarget.style.color = theme.accent;
                    e.currentTarget.style.borderColor = theme.text;
                  }
                }}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactArea;