"use client"
import React, { useEffect, useRef, useState } from 'react';

const ContactArea = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const contactCardsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for card animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.classList.add('animated');
          }, index * 200);
        }
      });
    }, observerOptions);

    contactCardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const isValid = requiredFields.every(field => formData[field].trim());
    
    if (!isValid) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactCardStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(218, 177, 115, 0.1)',
    borderRadius: '20px',
    padding: '3.5rem 2.5rem',
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)',
    willChange: 'transform, opacity',
    opacity: '0',
    transform: 'translateY(50px) scale(0.95)',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const formSectionStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '5rem 4rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(218, 177, 115, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '3rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '1.3rem 1.6rem',
    border: '2px solid rgba(218, 177, 115, 0.15)',
    borderRadius: '12px',
    fontSize: '1rem',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '400',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    background: 'rgba(248, 250, 251, 0.5)',
    backdropFilter: 'blur(10px)',
    outline: 'none',
    letterSpacing: '0.3px',
    lineHeight: '1.5'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #dab173 0%, #c9a96e 100%)',
    color: 'white',
    border: 'none',
    padding: '1.3rem 4rem',
    borderRadius: '30px',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '1.5px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 30px rgba(218, 177, 115, 0.3)',
    textTransform: 'uppercase',
    fontFamily: "'Poppins', sans-serif"
  };

  const getButtonText = () => {
    if (submitStatus === 'sending') return 'SENDING...';
    if (submitStatus === 'success') return 'MESSAGE SENT SUCCESSFULLY ✓';
    if (submitStatus === 'error') return 'PLEASE FILL ALL REQUIRED FIELDS';
    return 'SEND MESSAGE';
  };

  const getButtonStyle = () => {
    if (submitStatus === 'success') {
      return { ...buttonStyle, background: 'linear-gradient(135deg, #27ae60, #219a52)' };
    }
    if (submitStatus === 'error') {
      return { ...buttonStyle, background: 'linear-gradient(135deg, #e74c3c, #c0392b)' };
    }
    return buttonStyle;
  };

  return (
    <div style={{ 
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", 
      background: 'linear-gradient(135deg, #f8fafb 0%, #ffffff 100%)', 
      minHeight: '100vh',
      fontWeight: '400',
      lineHeight: '1.6'
    }}>
      {/* Contact Details Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ 
            fontSize: '3.2rem', 
            fontWeight: '300', 
            color: '#2c3e50', 
            marginBottom: '1.5rem',
            letterSpacing: '-1px',
            fontFamily: "'Poppins', sans-serif",
            lineHeight: '1.2'
          }}>
            Get In Touch
          </h2>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '1.2rem', 
            fontWeight: '300',
            maxWidth: '650px',
            margin: '0 auto',
            fontFamily: "'Poppins', sans-serif",
            lineHeight: '1.7',
            letterSpacing: '0.2px'
          }}>
            We're here to provide expert legal counsel and representation tailored to your unique needs
          </p>
        </div>

        {/* Contact Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2.5rem', 
          marginBottom: '6rem' 
        }}>
          
          {/* Phone Card */}
          <div 
            ref={el => contactCardsRef.current[0] = el}
            style={contactCardStyle}
            onMouseEnter={(e) => {
              if (e.target.classList.contains('animated')) {
                e.target.style.transform = 'translateY(-12px) scale(1.02)';
                e.target.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.1)';
                e.target.style.borderColor = 'rgba(218, 177, 115, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (e.target.classList.contains('animated')) {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.04)';
                e.target.style.borderColor = 'rgba(218, 177, 115, 0.1)';
              }
            }}
          >
            <div>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 2rem',
                background: 'linear-gradient(135deg, rgba(218, 177, 115, 0.1), rgba(201, 169, 110, 0.1))',
                border: '2px solid rgba(218, 177, 115, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#dab173',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_1_3077)">
                    <path d="M39.8523 29.6017C39.5773 28.0233 38.2257 26.765 36.564 26.5433L27.349 25.31C25.6773 25.0817 24.0207 25.97 23.329 27.46C23.1523 27.84 23.004 28.235 22.884 28.6417C20.3023 27.565 17.9857 26.01 15.9857 24.0117C13.9857 22.0133 12.4323 19.6967 11.3557 17.115C11.764 16.9933 12.1573 16.845 12.5373 16.6667C14.0273 15.9733 14.909 14.3217 14.6857 12.6483L13.4523 3.435C13.2307 1.77333 11.974 0.42 10.3657 0.141667C9.78067 0.045 9.29401 0 8.82901 0C5.80401 0 2.94234 1.59833 1.36067 4.17333C-0.349328 6.96 -0.110994 10.5267 0.285672 13.3217C1.18734 19.6517 4.43901 26.0167 9.20901 30.7867C12.754 34.3317 17.1357 36.9883 21.879 38.4683C24.294 39.2233 27.3173 40.01 30.2273 40.01C32.4057 40.01 34.5207 39.5683 36.269 38.3433C38.6057 36.7033 39.999 34.0217 39.999 31.1667C39.999 30.7017 39.954 30.2133 39.8523 29.6017Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3077">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#8a9ba8', 
                marginBottom: '1rem', 
                fontWeight: '500', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Phone number
              </p>
              <h4 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#2c3e50', 
                marginBottom: '1.2rem', 
                lineHeight: '1.3',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.3px'
              }}>
                <a href="tel:+447774264578" style={{ 
                  color: 'inherit', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  +44 7774 264578
                </a>
              </h4>
              <div style={{ 
                color: '#6c757d', 
                fontSize: '0.95rem', 
                fontWeight: '400',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.2px',
                lineHeight: '1.5'
              }}>
                <span>Available 24/7 for urgent matters</span>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div 
            ref={el => contactCardsRef.current[1] = el}
            style={contactCardStyle}
            onMouseEnter={(e) => {
              if (e.target.classList.contains('animated')) {
                e.target.style.transform = 'translateY(-12px) scale(1.02)';
                e.target.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.1)';
                e.target.style.borderColor = 'rgba(218, 177, 115, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (e.target.classList.contains('animated')) {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.04)';
                e.target.style.borderColor = 'rgba(218, 177, 115, 0.1)';
              }
            }}
          >
            <div>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 2rem',
                background: 'linear-gradient(135deg, rgba(218, 177, 115, 0.1), rgba(201, 169, 110, 0.1))',
                border: '2px solid rgba(218, 177, 115, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#dab173',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <path d="M32.5 4.16602H19.1667C15.9117 4.16602 13.1633 6.26268 12.1267 9.16602H20.8333C25.8867 9.16602 30 13.2777 30 18.3327V24.166H32.5C36.635 24.166 40 20.801 40 16.666V11.666C40 7.53102 36.635 4.16602 32.5 4.16602ZM28.3333 18.3327C28.3333 14.1977 24.9683 10.8327 20.8333 10.8327H7.5C3.365 10.8327 0 14.1977 0 18.3327V23.3327C0 27.4677 3.365 30.8327 7.5 30.8327H8.33333V34.9993C8.33333 35.336 8.53667 35.641 8.84833 35.7693C8.95167 35.8127 9.06 35.8327 9.16667 35.8327C9.38333 35.8327 9.59667 35.7477 9.75667 35.5893L14.5133 30.8327H20.835C24.97 30.8327 28.335 27.4677 28.335 23.3327V19.9993L28.3333 18.3327Z" fill="currentColor"/>
                </svg>
              </div>
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#8a9ba8', 
                marginBottom: '1rem', 
                fontWeight: '500', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Email address
              </p>
              <h4 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#2c3e50', 
                marginBottom: '1.2rem', 
                lineHeight: '1.3',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.3px'
              }}>
                <a href="mailto:info@lexingtonashworth.com" style={{ 
                  color: 'inherit', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  info@lexingtonashworth.com
                </a>
              </h4>
              <div style={{ 
                color: '#6c757d', 
                fontSize: '0.95rem', 
                fontWeight: '400',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.2px',
                lineHeight: '1.5'
              }}>
                <span>We respond within 2 hours</span>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div 
            ref={el => contactCardsRef.current[2] = el}
            style={contactCardStyle}
            onMouseEnter={(e) => {
              if (e.target.classList.contains('animated')) {
                e.target.style.transform = 'translateY(-12px) scale(1.02)';
                e.target.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.1)';
                e.target.style.borderColor = 'rgba(218, 177, 115, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (e.target.classList.contains('animated')) {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.04)';
                e.target.style.borderColor = 'rgba(218, 177, 115, 0.1)';
              }
            }}
          >
            <div>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                margin: '0 auto 2rem',
                background: 'linear-gradient(135deg, rgba(218, 177, 115, 0.1), rgba(201, 169, 110, 0.1))',
                border: '2px solid rgba(218, 177, 115, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#dab173',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <path d="M20.0026 0C12.1909 0 5.83594 6.355 5.83594 14.1667C5.83594 27.8633 18.9009 39.3167 19.4576 39.7967C19.6143 39.9317 19.8093 40 20.0026 40C20.1959 40 20.3909 39.9317 20.5476 39.7967C21.1043 39.315 34.1693 27.8617 34.1693 14.1667C34.1693 6.355 27.8143 0 20.0026 0ZM20.0026 21.6667C15.8609 21.6667 12.5026 18.3083 12.5026 14.1667C12.5026 10.025 15.8609 6.66667 20.0026 6.66667C24.1443 6.66667 27.5026 10.025 27.5026 14.1667C27.5026 18.3083 24.1443 21.6667 20.0026 21.6667Z" fill="currentColor"/>
                </svg>
              </div>
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#8a9ba8', 
                marginBottom: '1rem', 
                fontWeight: '500', 
                letterSpacing: '1px', 
                textTransform: 'uppercase',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Office Address
              </p>
              <h4 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '600', 
                color: '#2c3e50', 
                marginBottom: '1.2rem', 
                lineHeight: '1.4',
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: '0.3px'
              }}>
                Peter House, Oxford St,<br />
                Manchester M1 5AN, UK.
              </h4>
            </div>
          </div>
        </div>



        {/* Contact Form */}
        <div style={formSectionStyle}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #dab173, transparent)'
          }} />
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '300',
              color: '#2c3e50',
              marginBottom: '1.5rem',
              letterSpacing: '-0.8px',
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.2'
            }}>
              Have Questions?<br />Contact us!
            </h2>
            <p style={{
              color: '#6c757d',
              fontWeight: '400',
              fontSize: '1.15rem',
              maxWidth: '650px',
              margin: '0 auto',
              fontFamily: "'Poppins', sans-serif",
              lineHeight: '1.7',
              letterSpacing: '0.2px'
            }}>
              Please provide details about your legal matter and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  color: '#2c3e50', 
                  marginBottom: '0.8rem', 
                  letterSpacing: '0.5px',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
                    borderColor: submitStatus === 'error' && !formData.name ? '#e74c3c' : 'rgba(218, 177, 115, 0.15)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#dab173';
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(218, 177, 115, 0.08)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(218, 177, 115, 0.15)';
                    e.target.style.background = 'rgba(248, 250, 251, 0.5)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  color: '#2c3e50', 
                  marginBottom: '0.8rem', 
                  letterSpacing: '0.5px',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
                    borderColor: submitStatus === 'error' && !formData.email ? '#e74c3c' : 'rgba(218, 177, 115, 0.15)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#dab173';
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(218, 177, 115, 0.08)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(218, 177, 115, 0.15)';
                    e.target.style.background = 'rgba(248, 250, 251, 0.5)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  color: '#2c3e50', 
                  marginBottom: '0.8rem', 
                  letterSpacing: '0.5px',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Your Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#dab173';
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(218, 177, 115, 0.08)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(218, 177, 115, 0.15)';
                    e.target.style.background = 'rgba(248, 250, 251, 0.5)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}
                />
              </div>
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  color: '#2c3e50', 
                  marginBottom: '0.8rem', 
                  letterSpacing: '0.5px',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  Select Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    borderColor: submitStatus === 'error' && !formData.subject ? '#e74c3c' : 'rgba(218, 177, 115, 0.15)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#dab173';
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(218, 177, 115, 0.08)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(218, 177, 115, 0.15)';
                    e.target.style.background = 'rgba(248, 250, 251, 0.5)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="legal-consultation">Legal Consultation</option>
                  <option value="case-inquiry">Case Inquiry</option>
                  <option value="document-review">Document Review</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#2c3e50', marginBottom: '0.8rem', letterSpacing: '0.3px' }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message..."
                style={{
                  ...inputStyle,
                  minHeight: '150px',
                  resize: 'vertical',
                  borderColor: submitStatus === 'error' && !formData.message ? '#e74c3c' : 'rgba(218, 177, 115, 0.15)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#dab173';
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.boxShadow = '0 0 0 4px rgba(218, 177, 115, 0.08)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(218, 177, 115, 0.15)';
                  e.target.style.background = 'rgba(248, 250, 251, 0.5)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0)';
                }}
                required
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={getButtonStyle()}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 45px rgba(218, 177, 115, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 30px rgba(218, 177, 115, 0.3)';
                  }
                }}
              >
                {getButtonText()}
              </button>
            </div>
          </form>
        </div>

        {/* Office Hours */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(248, 250, 251, 0.8), rgba(255, 255, 255, 0.9))',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '3.5rem',
          marginTop: '4rem',
          textAlign: 'center',
          border: '1px solid rgba(218, 177, 115, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)',
          
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '300',
            color: '#2c3e50',
            marginBottom: '2rem',
            letterSpacing: '-0.3px',
            fontFamily: "'Poppins', sans-serif",
          }}>
            Office Hours
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(218, 177, 115, 0.15)'
              }}>
                <span style={{ fontWeight: '500', color: '#2c3e50' }}>Monday - Friday</span>
                <span style={{ color: '#6c757d', fontWeight: '300' }}>9:00 AM - 6:00 PM</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0',
                borderBottom: '1px solid rgba(218, 177, 115, 0.15)'
              }}>
                <span style={{ fontWeight: '500', color: '#2c3e50' }}>Saturday</span>
                <span style={{ color: '#6c757d', fontWeight: '300' }}>10:00 AM - 4:00 PM</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0'
              }}>
                <span style={{ fontWeight: '500', color: '#2c3e50' }}>Sunday</span>
                <span style={{ color: '#6c757d', fontWeight: '300' }}>By Appointment</span>
              </div>
            </div>
          </div>
        </div>
                {/* Google Maps */}
        <div style={{ margin: '6rem 0' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '500px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(218, 177, 115, 0.1)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.3649474174215!2d-2.2401546841494636!3d53.47658237614306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1f13761c1c1%3A0x83e71e46b3642d37!2sPeter%20House%2C%20Oxford%20St%2C%20Manchester%20M1%205AN%2C%20UK!5e0!3m2!1sen!2suk!4v1720317771717!5m2!1sen!2suk"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                filter: 'grayscale(20%) contrast(1.1)'
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea