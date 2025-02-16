const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#272222]/90 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-24 h-24 relative">
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
  );
};

export default LoadingSpinner;