// src/components/StarBackground.jsx
import React from 'react';
import './star-background.css';

const StarBackground = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="stars" />
      <div className="stars1" />
      <div className="stars2" />
      <div className="shooting-stars" />
    </div>
  );
};

export default StarBackground;
