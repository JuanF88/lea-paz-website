"use client";
import React from "react";
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
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 overflow-hidden">
      {/* Contenedor que ajusta el tamaño según si es la portada o el libro abierto */}
      <div className="relative flex justify-center w-[1100px]">
        <HTMLFlipBook
          width={500} // Ancho de cada página individual
          height={700} // Altura de la página
          size="fixed"
          minWidth={300}
          maxWidth={1200}
          minHeight={500}
          maxHeight={1600}
          showCover={true} // Muestra la portada como una sola página
          drawShadow={true}
          clickEventForward={true}
          startPage={0}
          flippingTime={1000}
          maxShadowOpacity={0.3}
          showPageCorners={false}
          mobileScrollSupport={false}
          useMouseEvents={true}
          //style={{ boxShadow: "0 0 40px rgba(255, 255, 255, 0.65)" }}
        >
          {pages.map((src, index) => (
            <div
              key={index}
              className={`w-full h-full flex justify-center items-center bg-white ${
                index === 0 ? "flex" : "grid grid-cols-2"
              }`} // Ajuste visual para la portada
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
