"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  // Fecha o menu ao clicar no overlay
  const handleOverlayClick = () => {
    closeMenu();
  };

  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="#">
            <Image
              src="/IMG/ncx.svg"
              alt="Logotipo NcX"
              width={150}
              height={80}
            />
          </a>
        </div>

        <nav className="menu-desktop">
          <ul>
            <li>
              <a href="#header">Início</a>
            </li>
            <li>
              <a href="#especialidades">Especialidades</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </nav>

        <div className="btn-contato">
          <button onClick={() => scrollToSection("footer")}>Contato</button>
        </div>

        <div
          className="btn-abrir-menu"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <Menu size={40} />
        </div>

        <div className={`menu-mobile ${isMenuOpen ? "abrir-menu" : ""}`}>
          <div
            className="btn-fechar"
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <X size={30} />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#header" onClick={() => scrollToSection("header")}>
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#especialidades"
                  onClick={() => scrollToSection("especialidades")}
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={() => scrollToSection("sobre")}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" onClick={() => scrollToSection("projetos")}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#footer" onClick={() => scrollToSection("footer")}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`overlay-menu ${isMenuOpen ? "active" : ""}`}
          onClick={handleOverlayClick}
        />
      </div>
    </header>
  );
}
