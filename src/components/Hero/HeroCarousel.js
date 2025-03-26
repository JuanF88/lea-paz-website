import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const testimonials = [
  { videoId: "k5U0dofKwoU", title: "Noticia 1", desc: "Captura en plena negociación: Alias Araña." },
  { videoId: "9dpP9tI1pU8", title: "Noticia 2", desc: "La situación en el Cauca (emergencia humanitaria en el país) Parte l." },
];

export default function HeroCarousel({ setSelectedVideo }) {
  return (
    <motion.div
        className="mt-20 bg-white w-full py-20 px-8 relative overflow-visible"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Actualidad</h2>

        <div className="relative w-full overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            freeMode={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              waitForTransition: false
            }}
            className="max-w-full mx-auto custom-swiper overflow-visible relative z-20"
          >
            {[
              { videoId: "k5U0dofKwoU", title: "Noticia 1", desc: "Captura en plena negociación: Alias Araña." },
              { videoId: "9dpP9tI1pU8", title: "Noticia 2", desc: "La situación en el Cauca (emergencia humanitaria en el país) Parte l." },
              { videoId: "Gpgl7qGUJcw", title: "Noticia 3", desc: "Catatumbo | Un sufrimiento sin precedentes." },
              { videoId: "dQw4w9WgXcQ", title: "Testimonio 4", desc: "La transformación " },
              { videoId: "9YuWqpqcZS4", title: "Noticia 5", desc: "¿La paz en Colombia sigue en juego?" }
            ].map((testimonial, index) => (
              <SwiperSlide key={index} className="w-auto overflow-visible relative z-40">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg text-center w-[350px] hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-300 relative z-50 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedVideo(testimonial.videoId)}
                >
                  <div className="relative overflow-visible rounded-lg shadow-md">
                    <img
                      src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                      alt={testimonial.title}
                      className="rounded-lg w-full h-[200px] object-cover cursor-pointer"
                      width="100%"
                      height="200"
                      title={testimonial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      onMouseEnter={(e) => e.target.closest(".swiper").swiper.autoplay.stop()}
                      onMouseLeave={(e) => e.target.closest(".swiper").swiper.autoplay.start()}
                    />
                  </div>
                  <h3 className="text-lg font-bold mt-4">{testimonial.title}</h3>
                  <p className="text-gray-600 mt-2">{testimonial.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
  );
}
