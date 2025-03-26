"use client";
import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const pages = [
  "portada.jpg",
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

  // 🔒 Eliminar scroll del body mientras el libro está activo
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const flipbookWidth = isMobile ? window.innerWidth : 500;
  const flipbookHeight = isMobile ? window.innerHeight : 700;

  return (
    <div
      className={`${isMobile
          ? "relative w-screen h-screen flex items-center justify-center overflow-hidden bg-transparent"
          : "flex justify-center items-center min-h-screen bg-transparent overflow-hidden"
        } px-2`}
    >
      <div className={`${isMobile ? "w-screen h-screen" : "w-[1100px]"} relative flex justify-center`}>
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
          showPageCorners={true}
          mobileScrollSupport={true}
          useMouseEvents={true}
        //className="shadow-xl bg-transparent"
        >
          {pages.map((src, index) => (
            <div
              key={index}
              className={`relative w-full h-full overflow-hidden ${index === 0
                  ? "flex items-center justify-center shadow-[0_0_60px_rgba(0,0,0,1)] rounded-md"
                  : "grid grid-cols-2"
                }`}
              style={{ backgroundColor: "transparent" }}
            >

              <div className="relative w-full h-full">
                <Image
                  src={`/imagenes/libro/${src}`}
                  alt={`Página ${index}`}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {isMobile && (
        <div className="absolute bottom-2 text-sm text-gray-400 animate-pulse z-50">
          Desliza para pasar página →
        </div>
      )}
    </div>
  );
}
