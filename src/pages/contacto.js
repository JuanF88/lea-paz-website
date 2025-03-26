"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"; // ✅ Importación del formulario
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      {/* Contenedor principal centrado */}
      <main className="flex flex-col items-center text-center px-6 py-14 flex-grow mt-24">
        <h1
          className="text-5xl font-extrabold text-white"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Contáctanos
        </h1>
        <p
          className="mt-2 mb-4 text-lg text-white max-w-3xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          ¿Tienes alguna pregunta o propuesta? Envíanos un mensaje y te responderemos lo antes posible.
        </p>

        {/* Ajuste en el margen superior para evitar espacios innecesarios */}
        <div className="w-full flex justify-center mt-4">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
