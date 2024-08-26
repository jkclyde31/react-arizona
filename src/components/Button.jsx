import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, maxWidth, minHeight, link, className }) => {
  const navigate = useNavigate();

  const buttonStyle = {
    fontFamily: '"Barlow", sans-serif',
    color: '#fff',
    backgroundColor: '#5ca9fb',
    backgroundImage: 'linear-gradient(to bottom, #1F1F1F , #000000 )',
    padding: '11px',
    margin: '0',
    fontSize: '18px',
    borderRadius: '0px',
    transition: 'all 0.5s linear',
    border: '0',
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%',
    maxWidth: maxWidth || '266px',
    minHeight: minHeight || '48px',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <button className={className} style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;