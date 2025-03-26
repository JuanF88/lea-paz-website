"use client";
import { motion } from "framer-motion";
import { Handshake, Sprout, Target } from "lucide-react";

const benefits = [
  { 
    icon: Handshake, 
    title: "¿Quiénes somos?", 
    desc: "Lea Paz es una iniciativa que promueve la paz mediante información verificada y educación comunitaria.", 
    bgColor: "bg-blue-100" 
  },
  { 
    icon: Sprout, 
    title: "¿Cómo surge?", 
    desc: "Nace de la necesidad de combatir la desinformación y generar herramientas para la convivencia pacífica.", 
    bgColor: "bg-green-100" 
  },
  { 
    icon: Target, 
    title: "Objetivos", 
    desc: "Nuestro objetivo es acompañar, informar y fortalecer iniciativas de construcción de paz en las comunidades.", 
    bgColor: "bg-yellow-100" 
  }
];

export default function HeroBenefits() {
  return (
    <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {benefits.map((item, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center text-center p-6 ${item.bgColor} text-black rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 w-[320px] h-[280px]`}
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <item.icon className="w-16 h-16 text-[#3a9085]" />
          <h3 className="text-xl font-bold mt-4">{item.title}</h3>
          <p className="text-gray-700 text-lg mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
