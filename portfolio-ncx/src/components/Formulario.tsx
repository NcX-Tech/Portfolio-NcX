"use client";

import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <section className="formulario" id="footer">
      <div className="interface">
        <h2 className="titulo">
          FALE <span>COMIGO:</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome completo:"
            required
            value={formData.nome}
            onChange={handleChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu e-mail:"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Seu celular:"
            value={formData.telefone}
            onChange={handleChange}
          />

          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Sua mensagem"
            required
            value={formData.mensagem}
            onChange={handleChange}
          />

          <div className="btn-enviar">
            <input type="submit" value="ENVIAR" />
          </div>
        </form>
      </div>
    </section>
  );
}
