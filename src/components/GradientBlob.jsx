/*
* Created based on https://codepen.io/Iseyaaaaa/pen/qBMNEGN
*/

import { useEffect, useRef } from "react";
import '@/css/Blob.css';

export default function GradientBlob() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (blobRef.current) {
        blobRef.current.style.transform =
          `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={blobRef} className="blob"></div>;
}
