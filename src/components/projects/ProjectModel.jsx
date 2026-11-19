export default function ProjectModel({
  projectName,
  projectPath,
  projectImage,
  projectInfo,
  projectRepo,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      {/* Imagem do Projeto com Moldura */}
      <div
        className="w-full lg:w-1/2 pr-4 lg:pr-8 mb-4 lg:mb-0"
        style={{ minHeight: "50vh", overflow: "hidden" }}
      >
        <a
          href={projectPath}
          target="_blank"
          rel="noopener noreferrer"
          className=" h-full"
        >
          <img
            src={projectImage}
            alt={projectName}
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* Detalhes do Projeto */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl font-bold mb-8">{projectName}</h3>

        {/* Tecnologias Usadas */}
        <div>
          <h4 className="text-xl font-bold mr-20 mb-2">{projectInfo}</h4>
        </div>

        <a
          href={projectPath}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-700"
        >
          Acessar Projeto
        </a>

        <a
          href={projectRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded inline-block hover:bg-blue-700"
        >
          Acessar Repositório
        </a>
      </div>
    </div>
  );
}
