import AnimatedSection from "../components/ui/AnimatedSection";
import { projectScreenshots } from "../data/projects";

export default function ProjectViews() {
  return (
    <section id="project-views" className="section-padding relative">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Vistas previas
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Mis proyectos en acción
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Una muestra visual de los proyectos que he desarrollado, mostrando
              interfaces modernas y funcionales.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de capturas */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectScreenshots.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 150}
            >
              <div className="group glass-strong rounded-3xl overflow-hidden transition-all duration-500">
                {/* Imagen */}
                <div className="aspect-video bg-bg-tertiary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 gradient-accent rounded-2xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-8 h-8 text-white"
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
                        Captura del proyecto
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
