import React, { useEffect, useRef, useState } from "react";
import canvasImage from "../assets/canvasimages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Canvas({ startIndex }) {
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + 149,
      duration: 3,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImage[index.value];
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, [index]);

  return (
    <canvas
      className="w-[14rem] h-[14rem]"
      ref={canvasRef}
      id="canvas"
    ></canvas>
  );
}

export default Canvas;
