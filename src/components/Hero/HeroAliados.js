"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const allies = [
  { src: "/imagenes/Aliados/1.png", alt: "Aliado 1" },
  { src: "/imagenes/Aliados/2.png", alt: "Aliado 2" },
  { src: "/imagenes/Aliados/3.png", alt: "Aliado 3" },
  { src: "/imagenes/Aliados/4.png", alt: "Aliado 4" },
  { src: "/imagenes/Aliados/5.png", alt: "Aliado 5" },
  { src: "/imagenes/Aliados/6.png", alt: "Aliado 6" },
  { src: "/imagenes/Aliados/7.png", alt: "Aliado 7" },
  { src: "/imagenes/Aliados/8.png", alt: "Aliado 8" },
  { src: "/imagenes/Aliados/9.png", alt: "Aliado 9" },
  { src: "/imagenes/Aliados/10.png", alt: "Aliado 10" },
];

export default function AlliesSection() {
  return (
    <motion.div
      className="w-full py-16 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Aliados</h2>
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={7} // Ahora avanza 7 logos a la vez
          loop={true}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          className="w-full max-w-none"
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 7 }, // Para pantallas grandes, 7 logos a la vez
          }}
        >
          {allies.map((ally, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center h-[180px]"
              >
                <Image
                  src={ally.src}
                  alt={ally.alt}
                  width={190} // Aumentamos el tamaño
                  height={100}
                  className="object-contain w-48 h-24 aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
