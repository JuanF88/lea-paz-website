"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react"; // Íconos de redes sociales

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Contenedor flexible para adaptarse a móviles y escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* Nuestra Compañía */}
          <div>
            <h3 className="text-lg font-bold mb-3">Lea Paz</h3>
            <ul className="space-y-1 text-xs sm:text-sm md:text-base">
              <li><Link href="/ThreeDView" className="hover:underline">Entorno 3D</Link></li>
              <li><Link href="/careers" className="hover:underline">Carreras</Link></li>
              <li><Link href="/press" className="hover:underline">Prensa</Link></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-lg font-bold mb-3">Soporte</h3>
            <ul className="space-y-1 text-xs sm:text-sm md:text-base">
              <li><Link href="/faq" className="hover:underline">Preguntas Frecuentes</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contáctanos</Link></li>
              <li><Link href="/claims" className="hover:underline">Reclamos</Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-bold mb-3">Síguenos</h3>
            <div className="flex justify-center space-x-6 sm:space-x-4">
              <Link href="#" className="hover:text-blue-500 transition">
                <Facebook className="w-6 h-6 sm:w-5 sm:h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-500 transition">
                <X className="w-6 h-6 sm:w-5 sm:h-5" />
              </Link>
              <Link href="#" className="hover:text-pink-500 transition">
                <Instagram className="w-6 h-6 sm:w-5 sm:h-5" />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                <Linkedin className="w-6 h-6 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Derechos de Autor */}
        <p className="text-gray-400 text-xs sm:text-sm mt-6">
          Copyright © 2025 | Todos los derechos reservados - LEAPAZ
        </p>
      </div>
    </footer>
  );
}
