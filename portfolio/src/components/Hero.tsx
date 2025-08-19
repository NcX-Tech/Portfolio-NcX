"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("footer");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="topo-do-site" id="header">
      <div className="interface">
        <div className="flex">
          <div className="txt-topo-site">
            <h1>
              TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span>
            </h1>
            <p>
              Criatividade e inovação andam lado a lado. Com uma combinação
              única de design impactante, funcionalidade intuitiva e otimização
              para resultados, estou pronto(a) para criar a presença online dos
              seus sonhos.
            </p>

            <div className="btn-contato">
              <button onClick={scrollToForm}>Entre em contato</button>
            </div>
          </div>

          <div className="img-topo-site">
            <Image
              src="/IMG/LOGO.svg"
              alt="Imagem de destaque do portfólio NcX"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
