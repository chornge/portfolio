import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Kmpli",
    description: "Generate Kotlin/Compose Multiplatform projects with custom configurations & tests from the command-line.",
    status: "In Production",
    tech: ["Kotlin", "Compose Multiplatform", "Gradle", "Ktor", "Amper", "GitHub Actions"],
    github: "https://github.com/chornge/kmpli"
  },
  {
    title: "Wish and Swish",
    description: "Makes waste disposals hands-free by automatically opening a trash bin when the word 'KOBE' is spoken.",
    status: "Ongoing",
    tech: ["Rust", "Raspberry Pi", "FFmpeg", "Rustpotter-cli", "rppal"],
    github: "https://github.com/chornge/wish_and_swish"
  },
  {
    title: "Drone-VAR (SkyJudge)",
    description: "A user with 'any' video drone can detect offsides occurring in realtime during a soccer match.",
    status: "Coming Soon",
    tech: ["Rust", "MavLink", "Candle", "ONNX"],
    github: "https://github.com/chornge/sky-judge"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Side <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth group hover:scale-[1.02] hover:glow-primary"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <Badge variant="secondary" className="text-xs">
                  {project.status}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
