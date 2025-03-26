"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroBenefits from "./HeroBenefits";
import HeroCarousel from "./HeroCarousel";
import VideoModal from "./VideoModal";
import HeroIntro from "./HeroIntro";
import AlliesSection from "./HeroAliados";

export default function Hero() {
  const backgrounds = [
    "/imagenes/Fondo.jpg",
    "/imagenes/Fondo2.jpg",
    "/imagenes/Fondo3.jpg",
    "/imagenes/Fondo4.jpg"
  ];

  const [currentBackground, setCurrentBackground] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null); // ✅ Definir setSelectedVideo correctamente

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen py-40 pb-0 px-0 text-white overflow-hidden">
      
      {/* Contenedor del fondo con animación suave */}
      <div className="absolute inset-0 w-full h-full min-h-screen">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-[3000ms] ${
              index === currentBackground ? "opacity-50" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: typeof window !== "undefined" && window.innerWidth < 768 ? "scroll" : "fixed"
            }}
            
          />
        ))}
      </div>

      {/* Contenido de Hero */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col justify-start items-center w-full min-h-screen px-4 md:px-8 pt-16 pb-10">
          <HeroIntro />
          <HeroBenefits />
        </div>
        {/* Carrusel de Testimonios */}
        <HeroCarousel setSelectedVideo={setSelectedVideo} /> {/* ✅ Pasar setSelectedVideo correctamente */}
        
        {/* Modal para video */}
        {selectedVideo && <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />}
        
        {/* Sección de Aliados */}
        <AlliesSection />
      </div>
      
    </section>
  );
}
