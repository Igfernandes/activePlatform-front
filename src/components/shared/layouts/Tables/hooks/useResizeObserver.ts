import { useEffect, useRef, useState } from "react";

export function useResizeObserver() {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (ref.current) setWidth(ref.current.offsetWidth);
      }, 300);
    };

    // Initialize the ResizeObserver
    const resizeObserver = new ResizeObserver(handleResize);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, width };
}
