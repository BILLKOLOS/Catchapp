import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Here you would typically handle the signup process with a real API
      localStorage.setItem('user', JSON.stringify({ email, name }));
      setIsLoading(false);
      navigate('/onboarding');
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    setIsLoading(true);
    // Simulate Google auth
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ 
        email: 'user@gmail.com', 
        name: 'Google User' 
      }));
      setIsLoading(false);
      navigate('/onboarding');
    }, 1000);
  };
  
  const continueAsGuest = () => {
    navigate('/onboarding');
  };

  // SVG Illustration for the signup page
  const SignUpIllustration = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" className="w-full h-40 mb-8">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A3FEE" />
          <stop offset="100%" stopColor="#7B6FFF" />
        </linearGradient>
      </defs>
      
      {/* Background elements */}
      <rect x="0" y="0" width="500" height="200" fill="transparent" />
      <circle cx="100" cy="50" r="20" fill="#5B4FFF" opacity="0.2" />
      <circle cx="400" cy="150" r="30" fill="#5B4FFF" opacity="0.1" />
      <path d="M50 180 C100 120, 200 220, 450 80" stroke="#5B4FFF" strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Main elements */}
      <g transform="translate(160, 20)">
        <rect x="0" y="0" width="180" height="150" rx="15" fill="#2D2B3A" opacity="0.8" />
        <rect x="20" y="20" width="60" height="60" rx="10" fill="#333" />
        <rect x="95" y="20" width="70" height="10" rx="5" fill="#5B4FFF" />
        <rect x="95" y="40" width="50" height="10" rx="5" fill="#fff" opacity="0.5" />
        
        <circle cx="40" cy="40" r="15" fill="#8C6D62" />
        <path d="M30 30 Q40 20 50 30" fill="#1A1825" />
        
        <circle cx="140" cy="90" r="20" fill="url(#purpleGradient)" />
        <path d="M130 90 L140 100 L155 80" stroke="#fff" strokeWidth="2" fill="none" />
      </g>
      
      {/* Side profile cards */}
      <g transform="translate(70, 40)">
        <rect x="0" y="0" width="70" height="100" rx="10" fill="#fff" opacity="0.9" />
        <rect x="10" y="10" width="50" height="50" rx="25" fill="#8C6D62" />
        <path d="M15 25 Q35 5 55 25" fill="#1A1825" />
        <rect x="10" y="70" width="50" height="5" rx="2.5" fill="#333" opacity="0.5" />
        <rect x="10" y="80" width="30" height="5" rx="2.5" fill="#333" opacity="0.5" />
      </g>
      
      <g transform="translate(360, 40)">
        <rect x="0" y="0" width="70" height="100" rx="10" fill="#fff" opacity="0.9" />
        <rect x="10" y="10" width="50" height="50" rx="25" fill="#8C6D62" />
        <rect x="25" y="20" width="20" height="10" rx="5" fill="#1A1825" />
        <rect x="10" y="70" width="50" height="5" rx="2.5" fill="#333" opacity="0.5" />
        <rect x="10" y="80" width="30" height="5" rx="2.5" fill="#333" opacity="0.5" />
      </g>
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-[#272222] to-[#1a1a1a] p-6 pt-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center gap-4">
          <Link 
            to="/signup"
            className="px-8 py-2 border border-indigo-500/50 rounded-full text-white font-medium bg-indigo-500/20 shadow-lg shadow-indigo-600/10"
          >
            Sign Up
          </Link>
          <Link 
            to="/signin"
            className="px-8 py-2 border border-white/30 rounded-full text-white/70 font-medium hover:bg-white/10 transition-colors"
          >
            Sign In
          </Link>
        </div>

        <SignUpIllustration />

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-white text-center mb-6 text-2xl font-light">
            Create your account
          </h2>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-3 px-4 pl-10 rounded-full bg-gray-400/10 text-white border border-gray-700 focus:border-indigo-400 focus:shadow-md focus:shadow-indigo-600/20 outline-none w-full transition-all"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 pl-10 rounded-full bg-gray-400/10 text-white border border-gray-700 focus:border-indigo-400 focus:shadow-md focus:shadow-indigo-600/20 outline-none w-full transition-all"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 px-4 pl-10 rounded-full bg-gray-400/10 text-white border border-gray-700 focus:border-indigo-400 focus:shadow-md focus:shadow-indigo-600/20 outline-none w-full transition-all"
              required
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="pt-4 text-center text-white/80 flex items-center justify-center gap-4 before:content-[''] before:h-px before:w-16 before:bg-gray-700 after:content-[''] after:h-px after:w-16 after:bg-gray-700">
            Or continue with
          </div>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="py-3 px-4 rounded-full bg-gray-400/10 text-center text-white border border-gray-700 hover:bg-indigo-900/30 hover:border-indigo-400/40 transition-all flex items-center justify-center gap-3"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-xs font-bold text-gray-800">G</span>
            Google
          </button>

          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-16 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium ${
                isLoading ? 'opacity-70' : 'hover:from-indigo-500 hover:to-indigo-400'
              } transition-all relative shadow-lg shadow-indigo-600/30`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Processing...
                </span>
              ) : (
                'Continue'
              )}
            </button>
          </div>
          
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={continueAsGuest}
              className="text-white/60 hover:text-white/90 transition-colors text-sm hover:underline"
            >
              Skip and continue as guest
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-white/60 text-sm text-center">
          By signing up, you agree to our <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;