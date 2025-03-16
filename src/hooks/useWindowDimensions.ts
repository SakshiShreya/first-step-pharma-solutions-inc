import { useEffect, useState } from "react";
import { IDimensions } from "../types/genericTypes";
import { calculateDevice } from "../utils/genericFunctions";

function getWindowDimensions(): IDimensions {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
    device: calculateDevice(width)
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
