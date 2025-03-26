"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LibroInteractivo from "@/components/libro";

export default function ThreeDView() {
  const [showIframe, setShowIframe] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-col items-center justify-center flex-grow text-center relative">
        {showIframe && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col">
            <button
              onClick={() => setShowIframe(false)}
              className="absolute top-1 left-2 text-white text-3xl font-bold bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-50"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <iframe
              src="/vista3d/app-files/index.html"
              className="w-full h-full border-none"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Sección con fondo expandido */}
        <section
          ref={sectionRef}
          className="relative w-full h-screen flex items-center justify-center overflow-hidden z-10"
        >
          {/* Fondo con imagen expandida */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/imagenes/libro/fondolibro.jpg')",
              backgroundSize: "cover", // Usamos cover, pero lo expandimos con scale si se quiere más
              transform: "scale(1.1)", // ✅ Expansión visual sin perder proporción
            }}
          />

          {/* Capa de oscurecimiento */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Contenido encima */}
          <motion.div
  className="relative z-20 flex flex-wrap justify-center items-center gap-10 px-6 max-w-7xl w-full mt-12"
  initial={{ opacity: 0, y: 100 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <LibroInteractivo />
</motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
