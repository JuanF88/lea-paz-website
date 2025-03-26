"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AbcPaz() {
  const sections = [
    "La paz desde la perspectiva de la iglesia",
    "12 acciones para construir la paz",
    "Los pasados intentos de paz: Una reseña histórica",
    "Acuerdo para la construcción de una paz estable y duradera: FARC-EP",
    "Derechos Humanos: Características fundamentales",
    "Derecho Internacional Humanitario"
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      
      
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6 pt-32 pb-20 min-h-screen">
        {/* Título principal */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ABC para la Paz
        </motion.h1>

        {/* Descripción */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          ¿Quieres saber los conceptos y aspectos generales de la paz y qué tiene que ver con Colombia? ¡Éste es el lugar!<br />
          Aspectos generales como la perspectiva de la iglesia, cómo se está violando el Derecho Internacional Humanitario (DIH) en el conflicto en Colombia y los pasados intentos de llegar a la paz.
        </motion.p>

        {/* Secciones principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-yellow-400 cursor-pointer transition transform hover:-translate-y-2 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">{section}</h3>
              <p className="text-sm text-gray-400">Haz clic para explorar esta sección.</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
