"use client";
import React, { useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThreeDView() {
  const [showIframe, setShowIframe] = useState(false);


    return (
      <div className="bg-black text-white min-h-screen flex flex-col">
            <Header />

            <main className="flex items-center justify-center flex-grow text-center px-6 py-12 relative min-h-screen">
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
</main>


      <Footer />
    </div>
  );
}
