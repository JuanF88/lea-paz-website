"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import Image from "next/image";

// Estados del semáforo con metáforas de paz
const states = [
  {
    id: 0,
    color: "bg-red-600",
    text: "¡Alerta! El proceso de paz está en riesgo. 🚨",
    description: "Hay conflictos activos y pocas negociaciones en curso.",
    image: "/imagenes/conflicto.jpg",
    map: "/imagenes/MapaRojo.png"
  },
  {
    id: 1,
    color: "bg-yellow-400",
    text: "Precaución: Se han logrado algunos avances. ⚠️",
    description: "Hay diálogos abiertos, pero aún existen tensiones.",
    image: "/imagenes/dialogo.jpg",
    map: "/imagenes/MapaAmarillo.png"
  },
  {
    id: 2,
    color: "bg-green-500",
    text: "¡Avance! La paz está en camino. ✅",
    description: "Los acuerdos se están cumpliendo y la estabilidad mejora.",
    image: "/imagenes/paz.jpg",
    map: "/imagenes/MapaVerde.png"
  }
];

export default function Semaforo() {
  const [currentState, setCurrentState] = useState(0);

  // Función para cambiar el estado al hacer clic en un color
  const handleStateChange = (stateId) => {
    setCurrentState(stateId);

  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-8 lg:px-20 py-16 gap-16 relative overflow-hidden w-full">
      {/* Panel de Información (Izquierda) */}
      <motion.div
        className="flex flex-col items-center lg:items-start bg-gray-800 p-8 rounded-lg shadow-xl lg:w-1/3 max-w-lg text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold">{states[currentState].text}</h2>
        <p className="text-gray-300 mt-4">{states[currentState].description}</p>
        <Image
          src={states[currentState].image}
          alt="Contexto de la situación"
          width={350}
          height={250}
          className="mt-6 rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Semáforo Interactivo (Centro) */}
      <motion.div
        className="relative w-40 h-96 bg-gray-800 rounded-3xl flex flex-col items-center justify-around p-6 border-4 border-gray-600 shadow-2xl hover:shadow-white transition-all"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {states.map((state) => (
          <motion.div
            key={state.id}
            className={`w-24 h-24 rounded-full cursor-pointer flex items-center justify-center transition-all duration-500 border-2 border-gray-500 ${
              state.id === currentState ? state.color : "bg-gray-700"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => handleStateChange(state.id)}
          />
        ))}
      </motion.div>

      {/* Mapa de Colombia (Derecha) */}
      <motion.div
        className="relative flex items-center justify-center lg:w-1/3 max-w-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={states[currentState].map}
          alt="Mapa de Colombia"
          width={400}
          height={450}
          className="rounded-lg shadow-xl border border-gray-500"
        />
      </motion.div>
    </div>
  );
}
