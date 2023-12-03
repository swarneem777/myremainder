import React from 'react';
import Features from './Features';
import Pricing from './Pricing';
import FAQs from './FAQs';
import calander1 from './logo/calander1.png';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="intro-box">
        <p>The best way to manage time!</p>
      </div>
      <h1 className="main-heading">Welcome to RemainderMate</h1>
      <p className="tagline">Manage your time seamlessly using RemainderMate</p>
      <img src={calander1} alt="calander1" style={{ width: '1000px', height: 'auto' }} /> 
      <h1><h1>What won't you miss now?</h1></h1>
      <Features />
      <Pricing />
      <FAQs />
    </main>
  );
};

export default MainContent;
