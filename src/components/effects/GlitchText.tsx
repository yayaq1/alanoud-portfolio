"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  isGlitching?: boolean;
}

export default function GlitchText({ 
  text, 
  className = "", 
  isGlitching = false 
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isGlitching) {
      setDisplayText(text);
      return;
    }

    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
    let frame = 0;
    const maxFrames = 8;

    const interval = setInterval(() => {
      if (frame >= maxFrames) {
        setDisplayText(text);
        clearInterval(interval);
        return;
      }

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (Math.random() < 0.3) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join("");

      setDisplayText(newText);
      frame++;
    }, 50);

    return () => clearInterval(interval);
  }, [text, isGlitching]);

  return (
    <span className={className} data-text={text}>
      {displayText}
    </span>
  );
}

