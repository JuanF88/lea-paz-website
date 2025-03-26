"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function PazComoDerecho() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
                <Image
                    src="/imagenes/PazComoDerecho/FondoPaz.png"
                    alt="Camino hacia la paz"
                    fill
                    className="object-cover opacity-40 z-0 translate-y-10"
                />

                <div className="relative z-10">
                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold text-yellow-300"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        La Paz como un Derecho
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Explora el viaje hacia la Paz Total en Colombia, y descubre el rol transformador que ha tenido la Iglesia en este proceso.
                    </motion.p>
                </div>
            </section>

            {/* Primera Estacion - Llegando a la Paz Total */}
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-24 bg-[#1f1f1f]">
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: -100 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/imagenes/PazComoDerecho/Paloma.png"
                            alt="Llegando a la paz"
                            width={500}
                            height={400}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="md:w-1/2 text-left"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative"
                    >
                        <h2 className="text-4xl font-bold text-yellow-300 mb-6">
                            Llegando a la Paz Total
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            La propuesta de Paz Total se ha convertido en una hoja de ruta para generar espacios de diálogo con todos los actores armados. Este enfoque busca una paz más integral, involucrando tanto a guerrillas como a estructuras criminales organizadas, y priorizando la participación ciudadana.
                        </p>
                    </motion.div>
                </motion.div>

            </section>

            {/* Segunda Estación - La Iglesia en la Paz Total */}
            <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-8 py-24 bg-[#141414]">
                <motion.div
                    className="md:w-1/2 text-left"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >

                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative"
                    >
                        <h2 className="text-4xl font-bold text-yellow-300 mb-6">
                            La Iglesia en la Paz Total
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            La Iglesia ha desempeñado un papel fundamental como mediadora y promotora de reconciliación. Su voz ha sido clave para tender puentes entre las comunidades y los actores armados, construyendo caminos hacia la reconciliación y la verdad desde una perspectiva ética y espiritual.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="relative"
                    >
                        <Image
                            src="/imagenes/PazComoDerecho/Iglesia.png"
                            alt="Iglesia en la paz"
                            width={500}
                            height={400}
                        />
                    </motion.div>
                </motion.div>
            </section>

            <Footer className="w-full" />
        </div>
    );
}
