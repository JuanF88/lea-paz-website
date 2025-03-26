import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

export default function About() {
  useEffect(() => {
    AOS.init(); // Inicializa AOS cuando el componente se monta
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <h1
          className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text animate-gradient"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Sobre Nosotros
        </h1>
        <p
          className="mt-4 text-lg text-gray-400 max-w-3xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Somos un equipo apasionado por la innovación y el diseño. Nuestra misión es crear experiencias digitales impactantes y funcionales.
        </p>
      </main>

      {/* Sección con imagen y texto */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 space-y-8 md:space-y-0 md:space-x-12">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
<img
  src="/imagenes/1.png"
  alt="Nuestro equipo"
  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
/>

        </div>
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
          <p className="text-lg text-gray-400">
            Desde nuestros inicios, hemos trabajado en la intersección de la creatividad y la tecnología para ofrecer soluciones innovadoras.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
