import { Instagram, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="interface">
        <div className="line-footer">
          <div className="flex">
            <div className="logo-footer">
              <Image
                src="/IMG/ncx.svg"
                alt="Logotipo NcX"
                width={200}
                height={200}
                style={{ height: "120px" }}
              />
            </div>

            <div className="btn-social">
              <a
                href="https://www.instagram.com/souza.bm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <button>
                  <Instagram />
                </button>
              </a>
              <a
                href="https://github.com/NcX-Tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <button>
                  <Github />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/ncx-tech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <button>
                  <Linkedin />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="line-footer borda"
          style={{ textAlign: "center", color: "white" }}
        >
          <p>© 2024 Brenno Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
