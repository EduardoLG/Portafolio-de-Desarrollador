import AnimatedSection from "../components/ui/AnimatedSection";
import { personalInfo, generalData } from "../data/personal";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/50 to-bg-primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Sobre Mí
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Conoce mi historia
            </h2>
          </div>
        </AnimatedSection>

        {/* Layout principal - Dos columnas */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Columna izquierda - Descripción */}
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="space-y-8">
              {/* Descripción personal */}
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  {personalInfo.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {personalInfo.description}
                </p>
              </div>

              {/* Metas y aspiraciones */}
              <div className="glass-strong glass-hover p-8 rounded-3xl transition-all duration-500">
                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  Mis Metas
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {personalInfo.goals}
                </p>
              </div>

              {/* Capacidades */}
              <div className="glass-strong glass-hover p-8 rounded-3xl transition-all duration-500">
                <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </span>
                  Mis Capacidades
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {personalInfo.capabilities}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Columna derecha - Datos generales */}
          <AnimatedSection animation="slide-in-right" delay={400}>
            <div className="glass-strong glass-hover p-8 rounded-3xl lg:sticky lg:top-28 transition-all duration-500">
              <h3 className="text-2xl font-semibold text-text-primary mb-8">
                Datos Generales
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Nombre</p>
                    <p className="text-text-primary font-medium">
                      {generalData.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Edad</p>
                    <p className="text-text-primary font-medium">
                      {generalData.age} años
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Ubicación</p>
                    <p className="text-text-primary font-medium">
                      {generalData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Email</p>
                    <p className="text-text-primary font-medium">
                      {generalData.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">
                      Años desarrollando
                    </p>
                    <p className="text-text-primary font-medium">
                      {generalData.yearsDeveloping} años
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Formación</p>
                    <p className="text-text-primary font-medium">
                      {generalData.currentlyStudying}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-text-secondary text-sm">
                      {generalData.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
