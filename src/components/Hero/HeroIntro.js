import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <motion.div
    className="max-w-4xl"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl text-white py-10 font-extrabold ">¿Qué es Lea Paz?</h1>
    <p className="text-lg text-gray-300 mt-4 text-justify">
      Esta iniciativa de comunicación; como un modelo de plataforma colaborativa, nace de la necesidad de proveer un servicio de información verídica y actualizada acompañada de procesos formativos, en respuesta a la ausencia de mecanismos y herramientas de información amplia y clara.
    </p>
    <p className="text-lg text-gray-300 mt-2 text-justify">
      LeaPAZ busca responder a las realidades de los territorios, informar de manera oportuna y acompañar a las jurisdicciones eclesiásticas, en las acciones y esfuerzos por contribuir a las iniciativas de construcción de PAZ.
    </p>
  </motion.div>
  );
}
