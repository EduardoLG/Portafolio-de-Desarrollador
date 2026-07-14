import AnimatedSection from "../components/ui/AnimatedSection";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Encabezado */}
      <div className="section-padding pb-0">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                Portafolio
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                Proyectos destacados
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Cada proyecto representa un desafío superado y una oportunidad
                de aprendizaje. Aquí muestro mi mejor trabajo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Lista de proyectos - Pantalla completa alternada */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="min-h-screen flex items-center section-padding relative"
          >
            {/* Fondo alternado */}
            <div
              className={`absolute inset-0 ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-bg-primary via-bg-secondary/50 to-bg-primary"
                  : "bg-gradient-to-bl from-bg-primary via-bg-secondary/50 to-bg-primary"
              }`}
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 0 ? "" : "lg:[direction:rtl]"
                }`}
              >
                {/* Imagen */}
                <AnimatedSection
                  animation={
                    index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  }
                  delay={200}
                  className="lg:[direction:ltr]"
                >
                  <div className="aspect-[4/3] glass-strong rounded-3xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 gradient-accent rounded-2xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-text-muted text-sm">
                          Imagen del proyecto
                        </p>
                      </div>
                    </div>

                    {/* Overlay hover */}
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </AnimatedSection>

                {/* Información */}
                <AnimatedSection
                  animation={
                    index % 2 === 0 ? "slide-in-right" : "slide-in-left"
                  }
                  delay={400}
                  className="lg:[direction:ltr]"
                >
                  <div className="space-y-6">
                    {/* Número del proyecto */}
                    <span className="text-accent text-sm font-medium">
                      Proyecto {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Título */}
                    <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
                      {project.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div>
                      <p className="text-text-muted text-sm mb-3">
                        Tecnologías utilizadas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 glass-strong text-text-secondary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Habilidades aprendidas */}
                    <div>
                      <p className="text-text-muted text-sm mb-3">
                        Habilidades aprendidas
                      </p>
                      <ul className="space-y-2">
                        {project.skillsLearned.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-center gap-3 text-text-secondary"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botón GitHub */}
                    <div className="pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 glass-strong glass-hover text-text-primary font-medium rounded-full transition-all duration-500 group"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        Ver en GitHub
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
