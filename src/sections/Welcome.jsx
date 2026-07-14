import AnimatedSection from "../components/ui/AnimatedSection";
import { personalInfo } from "../data/personal";

export default function Welcome() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatedSection animation="blur-in">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
            Desarrollador Web Full Stack
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-6 leading-tight">
            Hola, soy{" "}
            <span className="gradient-text">Eduardo</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.phrase}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 gradient-accent text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Conocer más
            </button>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 glass glass-hover text-text-primary font-medium rounded-full transition-all duration-300"
            >
              Ver proyectos
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
