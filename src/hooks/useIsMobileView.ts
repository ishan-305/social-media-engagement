"use client";
import { useState, useEffect } from "react";

function useIsMobileView(): { isMobile: boolean; windowWidth: number } {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, windowWidth };
}

export default useIsMobileView;
