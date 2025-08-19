import { Instagram, Github, Linkedin } from "lucide-react";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="interface">
        <div className="flex">
          <div className="img-sobre">
            <div className="w-80 h-80 bg-red-500/20 rounded-full flex items-center justify-center">
              <span className="text-6xl text-red-500 font-bold">BS</span>
            </div>
          </div>

          <div className="txt-sobre">
            <h2>
              Muito prazer, <span>Me chamo Brenno Souza.</span>
            </h2>
            <p>
              Sou um desenvolvedor backend júnior, apaixonado por tecnologia e
              soluções criativas. Tenho experiência em HTML, CSS, JavaScript,
              Java, PHP e Git, ferramentas que utilizo para criar sistemas
              robustos e eficientes.
            </p>
            <p>
              Sempre comprometido com a evolução profissional, busco
              constantemente aprimorar meus conhecimentos e acompanhar as
              melhores práticas do mercado. Meu objetivo é contribuir para o
              desenvolvimento de projetos impactantes, unindo habilidades
              técnicas e dedicação para superar desafios e gerar resultados.
            </p>

            <div className="btn-social">
              <a
                href="https://www.instagram.com/souza.bm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Instagram />
                </button>
              </a>
              <a
                href="https://github.com/NcX-Tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Github />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ncx-tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Linkedin />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
