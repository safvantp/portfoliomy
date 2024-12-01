
function Projects() {
  const projects = [
    {
      name: "E-commerce Website",
      description: "An e-commerce platform for online shopping.",
      imageUrl: "data:image/png;base64,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", // Replace with your image URL

      githubLink: "https://github.com/project1"
    },
    {
      name: "POS System",
      description: "A point-of-sale system for retail stores.",
      imageUrl: "data:image/png;base64,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", // Replace with your image URL
      githubLink: "https://github.com/project2"
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase work.",
      imageUrl: "data:image/png;base64,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", // Replace with your image URL
      githubLink: "https://github.com/project3"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-white mb-10">My Projects</h1>

      <div className="flex flex-col gap-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 lg:gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold text-white mb-2 text-center">
                {project.name}
              </h2>
              <p className="text-lg text-gray-300 mb-4 text-center">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
