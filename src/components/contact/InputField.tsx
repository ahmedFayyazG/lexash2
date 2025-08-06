import React, { useState } from 'react';

// Define a shared style object for colors to ensure consistency
const themeColors = {
  accent: '#B9946A',
  text: '#2A2A2A',
  lightText: '#5A5A5A',
  border: '#D1D1D1',
  background: '#FDFBF8'
};

interface InputFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  required?: boolean;
  options?: { value: string; label: string }[];
  error?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ id, label, type = 'text', name, value, onChange, required, options, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    marginBottom: '2rem',
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: '0.875rem',
    color: themeColors.lightText,
    marginBottom: '0.5rem',
    display: 'block',
  };

  const baseInputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${error ? '#e53e3e' : isFocused ? themeColors.accent : themeColors.border}`,
    padding: '0.75rem 0.25rem',
    fontSize: '1rem',
    color: themeColors.text,
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: isFocused ? `0 1px 0 0 ${themeColors.accent}` : 'none',
    resize: 'vertical',
    fontFamily: "'Poppins', sans-serif"
  };

  const renderInput = () => {
    const commonProps = {
      id,
      name,
      value,
      onChange,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      style: baseInputStyle,
      required,
    };

    if (type === 'textarea') {
      return <textarea {...commonProps} rows={5} />;
    }
    if (type === 'select') {
      return (
        <select {...commonProps}>
          <option value="" disabled>Please select...</option>
          {options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      );
    }
    return <input type={type} {...commonProps} />;
  };

  return (
    <div style={containerStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label}{required && <span style={{ color: themeColors.accent }}> *</span>}
      </label>
      {renderInput()}
    </div>
  );
};