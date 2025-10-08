// src/components/LetterMove.jsx
import React, { useEffect, useState } from "react";
import "@/assets/styles/textStyle.css"; // tu estilo existente

function LetterMove({ letter, fontSize }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta tamaño de pantalla como hacía useMediaQuery
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // sm breakpoint en Tailwind
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="letra flex justify-center items-center">
      <svg viewBox="0 0 100 20" className="letra-svg">
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="black" />
            <stop offset="95%" stopColor="black" />
          </linearGradient>

          <pattern
            id="wave"
            x="0"
            y="0"
            width="120"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              mask="url(#mask)"
              fill="url(#gradient)"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1.5s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>

        {/* Texto con animación */}
        <text
          textAnchor="middle"
          x="50"
          y="15"
          className="letra-text"
          style={{ fontSize: isMobile ? fontSize * 0.7 : fontSize }}
          fill="url(#wave)"
          fillOpacity="0.7"
        >
          {letter}
        </text>

        {/* Texto base */}
        <text
          textAnchor="middle"
          x="50"
          y="15"
          className="letra-text"
          style={{ fontSize: isMobile ? fontSize * 0.7 : fontSize }}
          fill="url(#gradient)"
          fillOpacity="0.4"
        >
          {letter}
        </text>
      </svg>
    </div>
  );
}

export { LetterMove };
