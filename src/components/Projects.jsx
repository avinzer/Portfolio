import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    link: "https://moderen-music-player.vercel.app",
    img: "https://moderen-music-player.vercel.app/Gamer.jpg",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    link: "https://example.com/project-two",
    img: "https://moderen-music-player.vercel.app/Gamer.jpg",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    link: "https://example.com/project-three",
    img: "https://moderen-music-player.vercel.app/Gamer.jpg",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my skills and experience in web
          development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.title && (
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {project.title}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div>
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/avinzer"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            View all projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
