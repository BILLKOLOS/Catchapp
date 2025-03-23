import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#272222] p-6">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        {/* Logo */}
        <div className="rounded-xl border border-white/20 p-4 mb-8 bg-[#272222]/80 shadow-lg">
          <div className="w-24 h-24 md:w-26 md:h-26">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 200 200" 
              className="w-full h-full"
            >
              {/* Background Square with Pulse Animation */}
              <rect 
                x="20" 
                y="20" 
                width="160" 
                height="160" 
                rx="50" 
                fill="#262727"
                stroke="#D9D9D9"
                strokeWidth="12"
              >
                <animate
                  attributeName="stroke-opacity"
                  values="0.3;0.8;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                />
              </rect>

              {/* Rotating Pac-man like shape */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="1.5s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
                <path
                  d="M 100 60
                    A 40 40 0 1 0 140 100
                    L 120 100
                    A 20 20 0 1 1 100 80
                    Z"
                  fill="#D9D9D9"
                >
                  <animate
                    attributeName="fill-opacity"
                    values="0.5;1;0.5"
                    dur="1.5s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="0.9;1.1;0.9"
                    dur="1.5s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                    additive="sum"
                  />
                </path>
              </g>
            </svg>
          </div>
        </div>
        
        <div className="text-white text-center mb-10">
          <p className="text-md mb-4 opacity-80">welcome to</p>
          <h1 className="text-4xl font-cursive" style={{ fontFamily: 'cursive' }}>Catchapp</h1>
        </div>
        
        <div className="flex flex-col gap-4 w-full items-center mt-6">
          <button 
            onClick={() => navigate('/signup')}
            className="py-3 px-8 rounded-full bg-white text-[#272222] font-medium w-48 hover:bg-gray-100 transition-colors"
          >
            Get Started
          </button>
          
          <button 
            onClick={() => navigate('/signin')}
            className="py-3 px-8 rounded-full border border-white/30 text-white font-medium w-48 hover:bg-white/10 transition-colors"
          >
            Sign In
          </button>
          
          <button 
            onClick={() => navigate('/onboarding')}
            className="py-2 px-4 text-white/70 font-medium hover:underline mt-2"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;