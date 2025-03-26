"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);

      // Detecta si llegó al fondo
      if (window.innerHeight + scrollTop >= document.body.offsetHeight - 5) {
        setIsAtBottom(true);
      } else if (scrollTop < lastScrollY) {
        setIsAtBottom(false); // Está subiendo
      }

      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getHeaderColor = () => {
    if (scrollPercentage < 20) {
      return "rgba(145, 145, 145, 0.05)";
    } else if (scrollPercentage < 60) {
      return "rgba(165, 39, 39, 0.44)";
    } else {
      return "rgba(58, 144, 133, 0.7)";
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out transform ${
        isAtBottom ? "-translate-y-full" : "translate-y-0"
      } ${scrollPercentage > 5 ? "py-2 shadow-md" : "py-4"}`}
    >
      <div
        className="absolute inset-0 w-full h-full backdrop-blur-sm transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: getHeaderColor() }}
      />

      <div className="relative flex items-center justify-between px-6 container mx-auto">
        <div className="flex items-center z-10">
          <Link href="/" passHref>
            <Image
              src="/imagenes/logo2.png"
              alt="Logo"
              width={scrollPercentage > 10 ? 50 : 50}
              height={scrollPercentage > 10 ? 50 : 50}
              className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 text-white font-medium z-10">
          <div className="flex space-x-6">
            <div
              className="relative group"
              onMouseEnter={() => setHoveredSection("abc")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <Link href="/abc-para-la-paz">ABC para la paz</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              {hoveredSection === "abc" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-72 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 text-justify">
                  Aquí encontrarás la noción de paz desde la iglesia, un acercamiento histórico sobre las negociaciones de paz en Colombia y cuáles son los Derechos Humanos fundamentales para sostener la Paz.
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setHoveredSection("paz")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <Link href="/paz-como-derecho">La paz como un derecho</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              {hoveredSection === "paz" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-72 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 text-justify">
                  Aquí encuentras no solamente lo que tiene que ver con la ley de Paz Total emitida por el gobierno, sino también lo que resultó de esta ley – las conversaciones y negociaciones con los grupos armados.
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setHoveredSection("grupos")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <Link href="/grupos-armados">Grupos armados</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              {hoveredSection === "grupos" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-72 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 text-justify">
                  Conoce cómo los actores armados están calificados, se agrupan y están organizados y en qué momento de las conversaciones se encuentran con el gobierno, así como los avances y desafíos.
                </div>
              )}
            </div>

            <Link href="/semaforo" className="relative group">
              Semáforo
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </nav>

        <div className="hidden lg:flex space-x-4 z-10">
          <Link
            href="/libroPage"
            className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="px-4 py-1 bg-yellow-300 text-gray-900 rounded-full hover:bg-yellow-400 transition"
          >
            Contacto
          </Link>
        </div>

        <button
  className="lg:hidden text-white z-10"
  onClick={() => setMenuOpen(!menuOpen)}
>

          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white z-40 flex flex-col justify-evenly items-center text-2xl font-semibold lg:hidden overflow-hidden"
      >
      {/* Botón de cierre */}
      <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
        <X size={40} />
      </button>

      {/* Links con animaciones */}
      {[
        { href: "/abc-para-la-paz", text: "ABC para la paz" },
        { href: "/paz-como-derecho", text: "La paz como un derecho" },
        { href: "/grupos-armados", text: "Grupos armados" },
        { href: "/semaforo", text: "Semáforo" },
        { href: "/libroPage", text: "Nosotros" },
        { href: "/contacto", text: "Contacto" },
      ].map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Link
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-300 transition-colors duration-300"
          >
            {link.text}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
