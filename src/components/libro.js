"use client";
import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const pages = [
  "portada.jpg", // Portada
  "pag1.jpg",
  "pag2.jpg",
  "pag3.jpg",
  "pag4.jpg",
  "pag5.jpg",
  "pag6.jpg",
  "pag7.jpg",
  "pag8.jpg",
  "pag9.jpg",
  "pag10.jpg"
];

export default function LibroInteractivo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const flipbookWidth = isMobile ? window.innerWidth : 500;
  const flipbookHeight = isMobile ? window.innerHeight : 700;

  return (
    <div className={`flex justify-center items-center ${isMobile ? "w-screen h-screen" : "min-h-screen"} bg-black px-2 overflow-hidden`}>
      <div className={`relative flex justify-center ${isMobile ? "w-screen h-screen" : "w-[1100px]"}`}>
        <HTMLFlipBook
          width={flipbookWidth}
          height={flipbookHeight}
          size="fixed"
          minWidth={300}
          maxWidth={1200}
          minHeight={500}
          maxHeight={1600}
          showCover={true}
          drawShadow={true}
          clickEventForward={true}
          startPage={0}
          flippingTime={1000}
          maxShadowOpacity={0.3}
          showPageCorners={false}
          mobileScrollSupport={true}
          useMouseEvents={true}
          className="shadow-lg"
        >
          {pages.map((src, index) => (
            <div
              key={index}
              className={`w-full h-full flex justify-center items-center bg-white ${
                index === 0 ? "flex" : "grid grid-cols-2"
              }`}
            >
              <Image
                src={`/imagenes/libro/${src}`}
                alt={`Página ${index}`}
                layout="intrinsic"
                width={500}
                height={700}
                className="rounded-md"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
