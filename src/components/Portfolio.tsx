export default function Portfolio() {
  const projetos = [
    {
      id: 1,
      titulo: "Projeto 1",
      imagem: "/images/imagem.jpg",
      descricao: "Descrição do projeto 1",
    },
    {
      id: 2,
      titulo: "Projeto 2",
      imagem: "/images/imagem.jpg",
      descricao: "Descrição do projeto 2",
    },
    {
      id: 3,
      titulo: "Projeto 3",
      imagem: "/images/imagem.jpg",
      descricao: "Descrição do projeto 3",
    },
  ];

  return (
    <section className="portfolio" id="projetos">
      <div className="interface">
        <h2 className="titulo">
          MEU <span>PORTFÓLIO:</span>
        </h2>

        <div className="flex">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="img-port"
              style={{
                backgroundImage: `url(${projeto.imagem})`,
              }}
            >
              <div className="overlay">{projeto.titulo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
