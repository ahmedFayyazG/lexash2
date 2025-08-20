import React from 'react';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  line1: React.ReactNode;
  line2: string;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, line1, line2 }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const cardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '2.5rem',
    textAlign: 'center',
    border: '1px solid #EAE6E1',
    borderRadius: '12px',
    fontWeight: 400,
    fontFamily: "'Poppins', sans-serif",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.08)' : '0 4px 15px rgba(0, 0, 0, 0.04)',
  };

  const iconContainerStyle: React.CSSProperties = {
    margin: '0 auto 1.5rem auto',
    height: '60px',
    width: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    borderRadius: '50%',
    background: '#F7F4EF',
    color: '#B9946A',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    ...(isHovered && {
      background: '#B9946A',
      color: '#FFFFFF'
    })
  };

  return (
    <div 
      style={cardStyle} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconContainerStyle}>{icon}</div>
      <h3 style={{ margin: '0 0 0.5rem 0', fontWeight: 600, fontSize: '1.2rem', color: '#2A2A2A' }}>{title}</h3>
      <div style={{ margin: 0, color: '#2A2A2A', fontWeight: 400, fontSize: '1.1rem' }}>{line1}</div>
      <div style={{ margin: '0.25rem 0 0 0', color: '#5A5A5A', fontSize: '0.95rem' }}>{line2}</div>
    </div>
  );
};