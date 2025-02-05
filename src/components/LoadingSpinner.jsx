const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#272222]/90 flex items-center justify-center z-50">
      <div className="p-8 rounded-3xl backdrop-blur-sm">
        <div className="relative animate-spin-slow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-24 h-24">
            <rect 
              x="20" 
              y="20" 
              width="160" 
              height="160" 
              rx="50" 
              fill="#262727"
              stroke="white"
              strokeWidth="12"
              className="animate-pulse"
            />
            <path
              d="M 100 60
                 A 40 40 0 1 0 140 100
                 L 120 100
                 A 20 20 0 1 1 100 80
                 Z"
              fill="white"
              className="animate-bounce-subtle"
            />
            <circle 
              cx="75" 
              cy="100" 
              r="6" 
              fill="white"
              className="animate-ping-subtle"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;