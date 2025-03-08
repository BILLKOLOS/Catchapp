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

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#272222] p-6 py-8">
      {/* Progress indicator */}
      <div className="w-full max-w-xs flex justify-center mb-8">
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentStep ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-between flex-grow w-full max-w-md">
        <div className="text-white/70 text-left self-start">
          <p>Here,</p>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center py-8">
          {/* Mobile illustration */}
          <div className="relative mb-12 w-full flex justify-center">
            {currentStep === 0 && (
              <>
                <div className="w-32 h-64 border-2 border-indigo-700 rounded-2xl relative bg-black/80 overflow-hidden shadow-lg">
                  {/* Phone camera */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-white"></div>
                  
                  {/* Event cards */}
                  <div className="absolute top-14 left-3 right-3 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-30 left-3 right-3 h-12 bg-indigo-900/50 rounded-lg mt-16 flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Event card illustration */}
                <div className="absolute right-4 top-1/4 transform translate-x-1/2">
                  <div className="w-32 h-24 bg-gray-900 rounded shadow-lg p-3">
                    <div className="border-b border-white w-full h-4 mb-2"></div>
                    <div className="border-b border-white/50 w-full h-1 mb-2"></div>
                    <div className="border-b border-white/50 w-full h-1 mb-2"></div>
                    <div className="border-b border-white/50 w-full h-1"></div>
                  </div>
                </div>
              </>
            )}
            
            {currentStep === 1 && (
              <div className="flex justify-center items-center relative">
                <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center -mr-4 z-10 shadow-lg">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                </div>
                <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center -mr-4 z-20 shadow-lg">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                </div>
                <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center z-30 shadow-lg relative">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-white transform rotate-45 border-t-0 border-r-0"></div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="flex flex-col items-center">
                <div className="w-48 h-32 bg-indigo-900/30 rounded-lg p-2 flex items-center justify-center mb-4 shadow-lg">
                  <div className="w-10 h-10 bg-white/80 rounded">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="w-12 h-12 bg-indigo-800/40 rounded"></div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="text-white text-center mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              {steps[currentStep].title}
            </h2>
            <p className="text-white/70 mb-4">{steps[currentStep].subtitle}</p>
            <p className="text-white/50 text-sm">{steps[currentStep].description}</p>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <button 
            onClick={() => navigate('/home')}
            className="py-2 px-4 text-white/50 font-medium hover:text-white/80"
          >
            Skip
          </button>
          
          <button 
            onClick={nextStep}
            className="py-3 px-8 rounded-full bg-white text-[#272222] font-medium hover:bg-gray-100 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;