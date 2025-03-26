"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function GruposArmados() {
  const groupImages = [
    { src: "/imagenes/GruposArmados/Grupo1.png", nombre: "FARC-EP", descripcion: "Guerrilla histórica con fines políticos, actualmente en proceso de reintegración." },
    { src: "/imagenes/GruposArmados/Grupo2.png", nombre: "ELN", descripcion: "Grupo guerrillero activo con presencia en zonas rurales del país." },
    { src: "/imagenes/GruposArmados/Grupo3.png", nombre: "Clan del Golfo", descripcion: "Organización criminal con vínculos en narcotráfico y minería ilegal." },
    { src: "/imagenes/GruposArmados/Grupo4.png", nombre: "Disidencias de las FARC", descripcion: "Fracciones que no aceptaron el acuerdo de paz con el gobierno." },
    { src: "/imagenes/GruposArmados/Grupo5.png", nombre: "Autodefensas Gaitanistas", descripcion: "Grupo paramilitar involucrado en el control territorial y crimen organizado." }
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      <main className="flex flex-col justify-center items-center flex-grow w-full text-center px-6 relative">
        <section ref={titleRef} className="min-h-screen flex flex-col justify-center items-center">
          <motion.h1
            className="text-7xl md:text-[10rem] font-extrabold bg-clip-text text-transparent bg-[url('/imagenes/GruposArmados/camuflaje.png')] bg-cover bg-blend-multiply"
            initial={{ opacity: 0, y: -50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
          >
            Grupos Armados
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Recorre esta historia interactiva para conocer cómo operan los grupos armados en Colombia, su clasificación, sus áreas de influencia y el impacto que generan en las comunidades. Comprender su origen y transformaciones permite reflexionar sobre los desafíos de la paz en el país.
          </motion.p>
        </section>

        <section ref={sectionRef} className="min-h-screen flex items-center justify-center w-full relative z-20">
          <div className="w-full max-w-7xl relative z-20">
            <div className="flex md:flex-wrap flex-nowrap overflow-x-auto md:overflow-visible justify-start md:justify-center items-center gap-6 px-4 scrollbar-hide">
              {groupImages.map((group, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] relative transition-all duration-300 rounded-lg ${
                    hoveredIndex !== null && hoveredIndex !== index ? "blur-sm opacity-60 z-10" : "z-30"
                  }`}
                  variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 border-4 border-yellow-400 rounded-lg opacity-0 hover:opacity-100 transition-all duration-300 z-40"></div>
                  <Image
                    src={group.src}
                    alt={`Grupo ${index + 1}`}
                    width={200}
                    height={200}
                    className={`transition-all duration-700 rounded-lg object-contain shadow-lg z-20 ${
                      hoveredIndex === index ? "grayscale-0" : "grayscale"
                    }`}
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      className={`absolute ${index < 3 ? "right-[-320px]" : "left-[-320px]"} top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-95 text-white p-4 w-72 rounded-lg shadow-xl text-left z-50 hidden md:block`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-yellow-300 font-bold mb-2">{group.nombre}</h4>
                      <p className="text-sm text-gray-300">{group.descripcion}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-gray-500 mt-8 text-center">Haz clic en un grupo armado para más información.</p>
          </div>
        </section>
      </main>
      <Footer className="w-full hidden" />
    </div>
  );
}
