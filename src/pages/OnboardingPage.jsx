import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = ({ onComplete }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Catch up with Events near you",
      subtitle: "Discover local events happening around you",
      description: "Find concerts, workshops, meetups and more in your area"
    },
    {
      title: "Host and attend events",
      subtitle: "Create your own events or join others",
      description: "Connect with people who share your interests"
    },
    {
      title: "Share memorable moments",
      subtitle: "Capture and share event highlights",
      description: "Build your personal collection of event memories"
    }
  ];

  const handleComplete = () => {
    // Complete onboarding and redirect to home
    onComplete();
    navigate('/home');
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  // SVG Components for each step
  const Step1SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className="w-full h-64">
      {/* Phone mockup */}
      <g transform="translate(50, 20) scale(0.8)">
        <rect width="250" height="450" rx="30" fill="#2D2B3A" />
        <rect x="20" y="60" width="210" height="330" rx="5" fill="#1A1825" />
        
        {/* Screen content */}
        <rect x="40" y="100" width="170" height="80" rx="5" fill="#5B4FFF" opacity="0.7" />
        <path d="M70 120 L120 90 L170 120" fill="#7367FF" />
        
        <rect x="40" y="200" width="170" height="20" rx="2" fill="#fff" opacity="0.6" />
        <rect x="40" y="230" width="170" height="10" rx="2" fill="#fff" opacity="0.4" />
        <rect x="40" y="250" width="170" height="10" rx="2" fill="#fff" opacity="0.4" />
        <rect x="40" y="270" width="170" height="10" rx="2" fill="#fff" opacity="0.4" />
        <rect x="40" y="290" width="170" height="10" rx="2" fill="#fff" opacity="0.4" />
        
        <circle cx="125" cy="350" r="20" stroke="#fff" strokeWidth="2" fill="none" />
        <path d="M115 350 L125 360 L140 340" stroke="#fff" strokeWidth="2" fill="none" />
      </g>
      
      {/* Person illustration */}
      <g transform="translate(400, 50)">
        {/* Body */}
        <rect x="50" y="180" width="120" height="180" rx="10" fill="#2D2B3A" />
        
        {/* Head */}
        <circle cx="110" cy="150" r="40" fill="#8C6D62" />
        <path d="M90 130 Q110 110 130 130" fill="#1A1825" />
        
        {/* Shirt */}
        <rect x="70" y="180" width="80" height="100" rx="5" fill="#5B4FFF" />
        <rect x="60" y="200" width="20" height="60" rx="10" fill="#5B4FFF" />
        <rect x="140" y="200" width="20" height="60" rx="10" fill="#5B4FFF" />
        
        {/* Legs */}
        <rect x="80" y="280" width="30" height="100" fill="#2D2B3A" />
        <rect x="120" y="280" width="30" height="100" fill="#2D2B3A" />
        
        {/* Shoes */}
        <rect x="75" y="380" width="40" height="15" rx="5" fill="#1A1825" />
        <rect x="115" y="380" width="40" height="15" rx="5" fill="#1A1825" />
      </g>
    </svg>
  );

  const Step2SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="w-full h-64">
      <g transform="translate(100, 50)">
        {/* First profile card */}
        <rect x="0" y="0" width="100" height="120" rx="10" fill="#fff" stroke="#E0E0E0" strokeWidth="1" />
        <rect x="25" y="15" width="50" height="50" rx="25" fill="#8C6D62" />
        <rect x="15" y="75" width="70" height="8" rx="4" fill="#E0E0E0" />
        <rect x="15" y="90" width="70" height="8" rx="4" fill="#E0E0E0" />
      
        {/* Middle profile card */}
        <rect x="120" y="20" width="100" height="150" rx="10" fill="#fff" stroke="#5B4FFF" strokeWidth="2" />
        <rect x="145" y="35" width="50" height="50" rx="25" fill="#8C6D62" />
        <path d="M145 35 Q170 15 195 35" fill="#1A1825" />
        <rect x="135" y="95" width="70" height="8" rx="4" fill="#5B4FFF" />
        <rect x="135" y="110" width="70" height="8" rx="4" fill="#E0E0E0" />
        <circle cx="170" cy="140" r="15" fill="#5B4FFF" />
        <path d="M160 140 L170 150 L185 135" stroke="#fff" strokeWidth="2" fill="none" />
      
        {/* Third profile card */}
        <rect x="240" y="0" width="100" height="120" rx="10" fill="#fff" stroke="#E0E0E0" strokeWidth="1" />
        <rect x="265" y="15" width="50" height="50" rx="25" fill="#8C6D62" />
        <path d="M275 25 Q290 10 305 25" fill="#1A1825" />
        <rect x="255" y="75" width="70" height="8" rx="4" fill="#E0E0E0" />
        <rect x="255" y="90" width="70" height="8" rx="4" fill="#E0E0E0" />
      </g>
    </svg>
  );

  const Step3SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" className="w-full h-64">
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B4FFF" />
          <stop offset="100%" stopColor="#8A84FF" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect x="0" y="0" width="500" height="300" fill="url(#blueGradient)" />
      <path d="M0 50 L500 200 L500 300 L0 300 Z" fill="#4A3FEE" opacity="0.3" />
      
      {/* Phone */}
      <rect x="100" y="50" width="180" height="320" rx="20" fill="#2D2B3A" />
      <rect x="110" y="60" width="160" height="300" rx="5" fill="#1A1825" />
      <circle cx="190" cy="40" r="5" fill="#1A1825" />
      
      {/* Gallery elements */}
      <rect x="120" y="80" width="140" height="70" rx="5" fill="#333" />
      <path d="M150 100 L180 90 L210 110" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="200" cy="95" r="10" fill="#5B4FFF" opacity="0.7" />
      
      <rect x="120" y="160" width="140" height="70" rx="5" fill="#333" />
      <path d="M150 180 C160 165, 180 195, 210 180" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M150 190 C170 205, 190 175, 210 190" stroke="#5B4FFF" strokeWidth="3" fill="none" />
      
      {/* Image grid */}
      <rect x="120" y="240" width="45" height="45" rx="5" fill="#5B4FFF" opacity="0.7" />
      <rect x="172" y="240" width="45" height="45" rx="5" fill="#333" />
      <rect x="224" y="240" width="45" height="45" rx="5" fill="#5B4FFF" opacity="0.5" />
      <rect x="120" y="292" width="45" height="45" rx="5" fill="#333" />
      <rect x="172" y="292" width="45" height="45" rx="5" fill="#5B4FFF" opacity="0.6" />
      <rect x="224" y="292" width="45" height="45" rx="5" fill="#333" />
      
      {/* Decorative elements */}
      <circle cx="360" cy="90" r="15" fill="none" stroke="#fff" strokeWidth="2" />
      <rect x="380" cy="150" width="20" height="20" fill="#fff" opacity="0.5" transform="rotate(45 390 160)" />
      <circle cx="350" cy="220" r="8" fill="none" stroke="#fff" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#272222] to-[#1a1a1a] p-6 py-8">
      {/* Progress indicator */}
      <div className="w-full max-w-xs flex justify-center mb-8">
        <div className="flex gap-3">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep ? 'bg-indigo-500 w-6' : 
                index < currentStep ? 'bg-indigo-400/60' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-between flex-grow w-full max-w-md">
        <div className="text-white/70 text-left self-start">
          <p className="text-lg font-light tracking-wide">Welcome</p>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center py-6 w-full">
          {/* SVG Illustrations */}
          <div className="relative mb-8 w-full flex justify-center transition-all duration-500 transform">
            {currentStep === 0 && <Step1SVG />}
            {currentStep === 1 && <Step2SVG />}
            {currentStep === 2 && <Step3SVG />}
          </div>

          <div className="text-white text-center mb-8 transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
              {steps[currentStep].title}
            </h2>
            <p className="text-white/80 mb-4 text-lg">{steps[currentStep].subtitle}</p>
            <p className="text-white/60 text-sm max-w-sm">{steps[currentStep].description}</p>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-4">
          <button 
            onClick={() => navigate('/home')}
            className="py-2 px-4 text-white/50 font-medium hover:text-white/80 transition-colors"
          >
            Skip
          </button>
          
          <button 
            onClick={nextStep}
            className="py-3 px-8 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium hover:from-indigo-500 hover:to-indigo-400 transition-colors shadow-lg shadow-indigo-600/30"
          >
            {currentStep === steps.length - 1 ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;