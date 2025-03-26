"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipo: "Comentario",
    mensaje: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setStatus({ success: false, message: "Por favor, completa todos los campos." });
      return;
    }

    const templateParams = {
      from_name: formData.nombre,
      from_email: formData.email,
      tipo_mensaje: formData.tipo,
      message: formData.mensaje,
      to_email: "juanfhurtado@unicauca.edu.co",
    };

    emailjs
      .send(
        "service_er4sl5c",
        "template_01p7low",
        templateParams,
        "u1ljnvlXqpqBdJRNW"
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito:", response);
          setStatus({ success: true, message: "✅ ¡Mensaje enviado con éxito!" });
          setTimeout(() => setStatus({ success: null, message: "" }), 3000);
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          setStatus({ success: false, message: "❌ Error al enviar el mensaje. Inténtalo de nuevo." });
        }
      );

    setFormData({ nombre: "", email: "", tipo: "Comentario", mensaje: "" });
  };

  return (
    <section className="flex flex-col items-center text-gray-800 justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-2 flex-grow mt-0">
      <form
        className="w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-gray-200 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-duration="2000"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none"
            placeholder="tucorreo@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Tipo de Mensaje</label>
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none"
            required
          >
            <option value="Comentario">Comentario</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-800 text-sm font-semibold">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-2 sm:py-3 rounded-md bg-white border border-gray-300 focus:border-yellow-400 focus:outline-none"
            rows="4"
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 sm:py-3 text-lg sm:text-base rounded-md shadow-md transition-transform transform hover:scale-105"
        >
          Enviar Mensaje
        </button>

        {status.message && (
          <div className={`mt-4 text-center font-semibold ${status.success ? "text-green-500" : "text-red-500"}`}>
            {status.message}
          </div>
        )}
      </form>
    </section>
  );
}
