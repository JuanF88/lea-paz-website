import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "@/components/Hero/Hero";

import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

export default function Home() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detecta el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true); // Está bajando
      } else {
        setScrollingDown(false); // Está subiendo
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup del event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init(); // Inicializa AOS cuando el componente se monta
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
