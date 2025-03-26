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
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });


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

      <main className="flex flex-col items-center justify-center flex-grow text-center px-6 py-80 relative">
        {!showIframe && (
          <button
            onClick={() => setShowIframe(true)}
            className="px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
          >
            Ver entorno 3D
          </button>
        )}

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
        




 <section ref={sectionRef} className="min-h-screen flex items-center justify-center w-full relative z-20">
          <div className="flex flex-wrap justify-center items-center gap-10 px-6 max-w-7xl relative z-20">
          <LibroInteractivo/>


          </div>
        </section>








      </main>

      <Footer />
    </div>
  );
}
