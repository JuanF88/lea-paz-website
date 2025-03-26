"use client";
import React, { useEffect, useState } from "react";

export default function VideoModal({ selectedVideo, setSelectedVideo }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (!selectedVideo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div
        className={`relative ${
          isMobile ? "w-full h-full px-4 pt-12" : "w-full max-w-3xl px-4"
        } flex flex-col items-center justify-center`}
      >
        {/* Contenedor del video */}
        <div className={`w-full ${isMobile ? "h-[50vh]" : "h-[500px]"} rounded-lg shadow-xl relative`}>
          {/* Botón de cerrar sobre el video */}
          <button
            className="absolute top-2 right-2 bg-red-600 text-white w-12 h-12 rounded-full text-3xl font-bold hover:bg-red-800 transition z-50 flex items-center justify-center"
            onClick={() => setSelectedVideo(null)}
          >
            ✕
          </button>

          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=1`}
            title="Video en reproducción"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
