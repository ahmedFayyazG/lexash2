import { useState } from 'react';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const isValid = requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '');

    if (!isValid) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
      return;
    }

    setSubmitStatus('sending');
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // On success:
    setSubmitStatus('success');
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  };
};