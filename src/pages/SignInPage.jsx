import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock authentication logic
      if (email === 'demo@catchapp.com' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ email, name: 'Demo User' }));
        localStorage.setItem('isAuthenticated', 'true');
        setIsLoading(false);
        navigate('/home');
      } else {
        setError('Invalid email or password');
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulate Google auth
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ 
        email: 'user@gmail.com', 
        name: 'Google User' 
      }));
      localStorage.setItem('isAuthenticated', 'true');
      setIsLoading(false);
      navigate('/home');
    }, 1000);
  };
  
  const continueAsGuest = () => {
    navigate('/onboarding');
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#272222] p-6 pt-8">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center gap-4">
          <Link 
            to="/signup"
            className="px-8 py-2 border border-white/30 rounded-full text-white/70 font-medium hover:bg-white/10"
          >
            Sign Up
          </Link>
          <Link 
            to="/signin"
            className="px-8 py-2 border border-white/30 rounded-full text-white font-medium bg-white/10"
          >
            Sign In
          </Link>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-white text-center mb-6 text-xl">
            Welcome back
          </h2>
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 rounded-full bg-gray-400/10 text-white border border-gray-700 focus:border-white/40 outline-none"
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 rounded-full bg-gray-400/10 text-white border border-gray-700 focus:border-white/40 outline-none"
            required
          />
          
          <div className="flex justify-end">
            <a href="#" className="text-white/70 text-sm hover:text-white">Forgot password?</a>
          </div>

          <div className="pt-4 text-center text-white/80">
            Or continue with
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="py-3 px-4 rounded-full bg-gray-400/10 text-center text-white border border-gray-700 hover:bg-gray-700/30 transition-colors flex items-center justify-center gap-2"
          >
            <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-xs font-bold text-gray-800">G</span>
            Google
          </button>

          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-12 py-3 rounded-full bg-white text-[#272222] font-medium ${isLoading ? 'opacity-70' : 'hover:bg-gray-100'} transition-colors relative`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <span className="animate-spin h-5 w-5 border-2 border-gray-500 border-t-transparent rounded-full mr-2"></span>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
          
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={continueAsGuest}
              className="text-white/60 hover:text-white/90 transition-colors text-sm"
            >
              Continue as guest
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-white/60 text-sm text-center">
          Don't have an account? <Link to="/signup" className="text-white underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;