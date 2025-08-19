import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import Sobre from "@/components/Sobre";
import Portfolio from "@/components/Portfolio";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Especialidades />
      <Sobre />
      <Portfolio />
      <Formulario />
      <Footer />
    </main>
  );
}
