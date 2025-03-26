import Semaforo from "@/components/Semaforo"; // Asegúrate de que la ruta sea correcta
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SemaforoPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <Semaforo />
      </main>
      <Footer />
    </div>
  );
}
