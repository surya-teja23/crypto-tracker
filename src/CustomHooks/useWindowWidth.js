import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [ windowWidth , setWindowWidth ] = useState(window.innerWidth)

  function detectResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", detectResize);

    return () => {
      window.removeEventListener("resize", detectResize);
    };
  }, [windowWidth]);
  return windowWidth;
};
