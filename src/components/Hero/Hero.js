"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroBenefits from "./HeroBenefits";
import HeroCarousel from "./HeroCarousel";
import VideoModal from "./VideoModal";
import HeroIntro from "./HeroIntro";
import AlliesSection from "./HeroAliados";
import { Analytics } from "@vercel/analytics/react"

export default function Hero() {
  const backgrounds = [
    "/imagenes/Fondo.jpg",
    "/imagenes/Fondo2.jpg",
    "/imagenes/Fondo3.jpg",
    "/imagenes/Fondo4.jpg"
  ];

  const [currentBackground, setCurrentBackground] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta si es móvil
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section className={`relative flex flex-col items-center justify-center text-center min-h-screen px-0 text-white overflow-hidden ${isMobile ? "bg-black" : ""}`}>
      <Analytics />

      {/* ✅ Solo mostrar fondo animado si NO es móvil */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full min-h-screen">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-[3000ms] ${index === currentBackground ? "opacity-50" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: "fixed",
              }}
            />
          ))}
        </div>
      )}

      {/* Contenido de Hero */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 md:px-8 pt-16 pb-10">
          <HeroIntro />
          <HeroBenefits />
        </div>

        <HeroCarousel setSelectedVideo={setSelectedVideo} />
        {selectedVideo && <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />}
        <AlliesSection />
      </div>
    </section>
  );
}
