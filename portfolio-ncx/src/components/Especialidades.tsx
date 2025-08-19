import { Code2, Palette, Award } from "lucide-react";

export default function Especialidades() {
  return (
    <section className="especiliadades" id="especialidades">
      <div className="interface">
        <h2 className="titulo">
          MINHAS <span>ESPECIALIDADES:</span>
        </h2>

        <div className="flex">
          <div className="especialidades-box">
            <Code2 />
            <h3>Desenvolvimento</h3>
            <p>
              Focado em desenvolvimento backend, eu possuo experiência em PHP,
              Java e C#. Permitindo uma boa execução do sistema especificado.
            </p>
          </div>

          <div className="especialidades-box">
            <Palette />
            <h3>UX/UI</h3>
            <p>
              Possuo grandes conhecimentos em web design, despertando o melhor e
              mais refinado estilo para o seu site/aplicação.
            </p>
          </div>

          <div className="especialidades-box">
            <Award />
            <h3>Mentoria</h3>
            <p>
              Caso necessário, posso executar uma mentoria em equipe, levando a
              um melhor desempenho e aprimorando soft skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
