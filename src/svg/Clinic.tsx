import React from "react";

const Clinic = ({ isHover }: any) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_184_771)">
        <path
          d="M38 16V8.656C38 7.054 37.376 5.546 36.242 4.414L33.586 1.758C32.454 0.626 30.946 0 29.342 0H18C13.588 0 10 3.588 10 8V12C4.486 12 0 16.486 0 22V38C0 43.514 4.486 48 10 48H38C43.514 48 48 43.514 48 38V26C48 20.486 43.514 16 38 16ZM14 8C14 5.794 15.794 4 18 4H28V8C28 9.104 28.896 10 30 10H34V16H23.944C23.636 16 23.324 15.928 23.048 15.79L16.738 12.634C15.908 12.22 14.926 12.002 14 12.002V8ZM44 38C44 41.308 41.308 44 38 44H10C6.692 44 4 41.308 4 38V22C4 18.692 6.692 16 10 16H14.056C14.364 16 14.676 16.072 14.95 16.21L21.26 19.366C22.09 19.78 23.016 19.998 23.942 19.998H37.998C41.306 19.998 43.998 22.69 43.998 25.998V37.998L44 38ZM32 32C32 33.106 31.104 34 30 34H26V38C26 39.106 25.104 40 24 40C22.896 40 22 39.106 22 38V34H18C16.896 34 16 33.106 16 32C16 30.894 16.896 30 18 30H22V26C22 24.894 22.896 24 24 24C25.104 24 26 24.894 26 26V30H30C31.104 30 32 30.894 32 32Z"
          fill="url(#paint0_linear_184_771)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_184_771"
          x1="0.836603"
          y1="-3.79336e-06"
          x2="30.2253"
          y2="13.9123"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stop-color={isHover ? "white" : "#083D6A"}
            className="stop-transition"
          />
          <stop
            offset="1"
            stop-color={isHover ? "white" : "#1078D0"}
            className="stop-transition"
          />
        </linearGradient>
        <clipPath id="clip0_184_771">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Clinic;
