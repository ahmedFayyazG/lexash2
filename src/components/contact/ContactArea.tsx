'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';

// --- Helper Hook for Form State & Submission ---
const useContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '', consent: false });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    setFormData(prev => ({ ...prev, [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Full Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.subject) newErrors.subject = 'Subject Matter is required.';
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.consent) newErrors.consent = 'You must consent to the terms.';
    
    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;

    if (!isValid) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, to: 'ahmedchoudary@gmail.com' })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setSubmitStatus('');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '', consent: false });
          setErrors({});
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setErrors({ submit: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, isSubmitting, submitStatus, handleInputChange, handleSubmit };
};


// --- Child Components ---
interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  line1: ReactNode;
  line2: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, line1, line2 }) => (
    <div className="contact-info-card animate-on-scroll">
        <div className="info-icon-wrapper">{icon}</div>
        <div className="info-text-wrapper">
            <h3>{title}</h3>
            <p>{line1}</p>
            <span>{line2}</span>
        </div>
    </div>
);

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  error?: string;
  options?: { value: string; label: string }[];
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type = 'text', value, onChange, required, error, options }) => {
    const hasValue = value && value.length > 0;
    return (
        <div className={`input-field ${hasValue ? 'has-value' : ''} ${error ? 'has-error' : ''}`}>
            {type === 'textarea' ? (
                <textarea id={id} name={name} value={value} onChange={onChange} required={required} rows={5} />
            ) : type === 'select' ? (
                <select id={id} name={name} value={value} onChange={onChange} required={required}>
                    <option value="" disabled></option>
                    {options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
            ) : (
                <input id={id} name={name} type={type} value={value} onChange={onChange} required={required} />
            )}
            <label htmlFor={id}>{label}</label>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};


// --- Theme Colors ---
const theme = {
  accent: '#B9946A',
  text: '#212C3C',
  lightText: '#5A6774',
  background: '#FFFFFF',
  lightBackground: '#F9F9F9',
  border: '#EAE6E1',
  success: '#28a745',
  error: '#e53e3e',
};

// --- Main Component ---
const ContactArea = () => {
  const { formData, errors, isSubmitting, submitStatus, handleInputChange, handleSubmit } = useContactForm();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => {
      elementsToAnimate.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pageRef.current) return;
    const heroSection = pageRef.current.querySelector('.hero-section') as HTMLElement | null;
    if (heroSection) {
      const { left, top, width, height } = heroSection.getBoundingClientRect();

      const x = e.clientX - left;
      const y = e.clientY - top;

      const xPos = (x / width) * 100;
      const yPos = (y / height) * 100;

      heroSection.style.setProperty('--gradient-x', `${xPos}%`);
      heroSection.style.setProperty('--gradient-y', `${yPos}%`);
    }
  };

  const getButtonState = () => {
    if (isSubmitting) return { text: 'SENDING...', className: 'submitting' };
    if (submitStatus === 'success') return { text: 'SENT SUCCESSFULLY ✓', className: 'success' };
    if (submitStatus === 'error') return { text: 'PLEASE CHECK FIELDS *', className: 'error' };
    return { text: 'SEND INQUIRY', className: '' };
  };
  
  const { text: buttonText, className: buttonClass } = getButtonState();

  const cardData = [
    { icon: <Phone size={24} />, title: "Direct Line", line1: <a href="tel:+441618189888">+44 161 818 9888</a>, line2: "Available for urgent matters" },
    { icon: <Mail size={24} />, title: "Email Inquiry", line1: <a href="mailto:info@lexingtonashworth.com">info@lexingtonashworth.com</a>, line2: "Responses within one business day" },
    { icon: <MapPin size={24} />, title: "Office Location", line1: "Peter House, Oxford St", line2: "Manchester M1 5AN, UK" },
  ];

  const subjectOptions = [
      { value: 'legal-consultation', label: 'Legal Consultation' },
      { value: 'case-inquiry', label: 'Case Inquiry' },
      { value: 'document-review', label: 'Document Review' },
      { value: 'general-inquiry', label: 'General Inquiry' },
  ];

  return (
    <>
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .contact-page-wrapper {
            font-family: 'Poppins', sans-serif;
            background: ${theme.background};
            color: ${theme.text};
            min-height: 100vh;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
        
        .hero-section {
            background-color: #1A202C;
            color: white;
            padding: 7rem 0;
            padding-top: 15rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at var(--gradient-x, 50%) var(--gradient-y, 50%), rgba(185, 148, 106, 0.15), transparent 40%);
            z-index: 1;
            pointer-events: none;
            transition: background 0.2s ease-out;
        }
        .hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
        .hero-content h1 { color: #fff; animation: fadeInDown 1s ease-out 0.2s backwards; font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 600; }
        .hero-content p { font-size: clamp(1rem, 2vw, 1.15rem); margin: 1.5rem 0 2.5rem; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

        .contact-info-section { padding: 6rem 2rem; }
        .contact-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 6rem; }
        .contact-info-card {
            background: #fff;
            border: 1px solid ${theme.border};
            border-radius: 16px;
            padding: 2rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            transition: all 0.3s ease;
        }
        .contact-info-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.07); border-color: ${theme.accent}; }
        .info-icon-wrapper {
            width: 56px; height: 56px; flex-shrink: 0;
            background: ${theme.lightBackground}; color: ${theme.accent};
            border-radius: 12px; display: flex; align-items: center; justify-content: center;
            transition: all 0.3s ease;
        }
        .contact-info-card:hover .info-icon-wrapper { background: ${theme.accent}; color: #fff; }
        .info-text-wrapper h3 { font-size: 1.2rem; font-weight: 500; margin: 0 0 0.25rem; }
        .info-text-wrapper p, .info-text-wrapper a {
            font-size: 1rem; color: ${theme.text}; margin: 0; text-decoration: none;
            font-weight: 300; word-break: break-word;
        }
        .info-text-wrapper span { font-size: 0.9rem; color: ${theme.lightText}; font-weight: 300; }
        
        .form-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: flex-start; }
        .form-intro h2 {
            font-size: 2.5rem; font-weight: 600; line-height: 1.2; color: ${theme.text};
            border-left: 4px solid ${theme.accent}; padding-left: 1.5rem; margin-bottom: 2rem;
        }
        .form-intro p { font-size: 1.1rem; color: ${theme.lightText}; font-weight: 300; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        
        .input-field { position: relative; margin-bottom: 1rem; }
        .input-field label {
            position: absolute; top: 1rem; left: 1rem; color: ${theme.lightText};
            pointer-events: none; transition: all 0.3s ease; font-weight: 300; background: #fff; padding: 0 0.5rem;
        }
        .input-field input, .input-field textarea, .input-field select {
            width: 100%; padding: 1rem; border: 1px solid ${theme.border}; border-radius: 8px;
            font-size: 1rem; font-family: inherit;
            background: #fff; outline: none; transition: border-color 0.3s ease;
        }
        .input-field input:focus, .input-field textarea:focus, .input-field select:focus { border-color: ${theme.accent}; }
        .input-field input:focus + label,
        .input-field.has-value input + label,
        .input-field textarea:focus + label,
        .input-field.has-value textarea + label,
        .input-field select:focus + label,
        .input-field.has-value select + label {
            top: -0.75rem; font-size: 0.8rem; color: ${theme.accent};
        }
        .input-field.has-error input, .input-field.has-error textarea, .input-field.has-error select { border-color: ${theme.error}; }
        .input-field.has-error label { color: ${theme.error}; }
        .error-message { color: ${theme.error}; font-size: 0.8rem; padding-top: 0.25rem; }
        
        .consent-checkbox { display: flex; align-items: center; margin: 1.5rem 0; }
        .custom-checkbox {
            width: 20px; height: 20px; border: 1px solid ${theme.border}; border-radius: 4px;
            display: flex; align-items: center; justify-content: center; cursor: pointer;
            margin-right: 0.75rem; transition: all 0.3s ease;
        }
        .custom-checkbox.checked { background: ${theme.accent}; border-color: ${theme.accent}; }
        .custom-checkbox.has-error { border-color: ${theme.error}; }
        .consent-label { font-size: 0.9rem; color: ${theme.lightText}; }
        .consent-label a { color: ${theme.accent}; text-decoration: none; }
        
        .submit-button {
            background: ${theme.text}; color: #fff; border: 1px solid ${theme.text};
            padding: 0.9rem 2.5rem; border-radius: 8px;
            font-size: 0.9rem; font-weight: 500; font-family: inherit;
            letter-spacing: 0.8px; cursor: pointer; transition: all 0.3s ease;
            outline: none; text-transform: uppercase;
        }
        .submit-button:hover { background: ${theme.accent}; border-color: ${theme.accent}; }
        .submit-button.success { background: ${theme.success}; border-color: ${theme.success}; }
        .submit-button.error { background: ${theme.error}; border-color: ${theme.error}; }
        .submit-button.submitting { cursor: wait; }
        
        @media (max-width: 992px) { .form-layout { grid-template-columns: 1fr; } }
        @media (max-width: 768px) { .form-grid { grid-template-columns: 1fr; } }
    `}</style>
    <div className="contact-page-wrapper">
      <section className="hero-section">
          <div className="container">
              <div className="hero-content animate-on-scroll">
                  <h1 className="font-lighter">Contact Our Experts</h1>
                  <p className="font-light">
                      Initiate a confidential dialogue with our team. We are structured to provide clarity and strategic direction for your most pressing legal needs.
                  </p>
              </div>
          </div>
      </section>
      
      <section className="contact-info-section">
        <div className="container">
            <div className="contact-info-grid">
                {cardData.map((card, index) => <ContactInfoCard key={card.title} {...card} />)}
            </div>

            <section className="form-layout">
                <aside className="form-intro animate-on-scroll" style={{transitionDelay: '0.2s'}}>
                    <h2>Your Inquiry</h2>
                    <p>
                    Please provide as much detail as possible. This allows our team to assess your situation and respond with the most relevant information.
                    </p>
                </aside>

                <form onSubmit={(e) => handleSubmit(e)} noValidate className="animate-on-scroll" style={{transitionDelay: '0.4s'}}>
                    <div className="form-grid">
                        <InputField id="name" name="name" label="Full Name *" value={formData.name} onChange={handleInputChange} required error={errors.name}/>
                        <InputField id="email" name="email" label="Email Address *" type="email" value={formData.email} onChange={handleInputChange} required error={errors.email}/>
                    </div>
                    <InputField id="phone" name="phone" label="Phone Number (Optional)" type="tel" value={formData.phone} onChange={handleInputChange} />
                    <InputField id="subject" name="subject" label="Subject Matter *" type="select" options={subjectOptions} value={formData.subject} onChange={handleInputChange} required error={errors.subject}/>
                    <InputField id="message" name="message" label="Detailed Message *" type="textarea" value={formData.message} onChange={handleInputChange} required error={errors.message}/>
                    
                    <div className="consent-checkbox">
                        <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleInputChange} style={{ display: 'none' }} />
                        <label htmlFor="consent" className={`custom-checkbox ${formData.consent ? 'checked' : ''} ${errors.consent ? 'has-error' : ''}`}>
                            {formData.consent && <Check size={14} color="#fff" />}
                        </label>
                        <label htmlFor="consent" className="consent-label">
                            I consent to the&nbsp;<a href="/terms">Terms of Business</a>&nbsp;and&nbsp;<a href="/privacy">Privacy Policy</a>.
                        </label>
                    </div>
                    {errors.consent && <p className="error-message">{errors.consent}</p>}

                    <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`submit-button ${buttonClass}`}
                    >
                        {buttonText}
                    </button>
                    </div>
                </form>
            </section>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactArea;
