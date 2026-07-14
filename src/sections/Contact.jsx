import AnimatedSection from "../components/ui/AnimatedSection";
import { socialLinks, generalData } from "../data/personal";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/50 to-bg-primary" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Encabezado */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Contacto
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Conectemos
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              ¿Interesado en mi perfil? No dudes en contactarme a través de
              estas plataformas profesionales.
            </p>
          </div>
        </AnimatedSection>

        {/* Tarjetas de contacto */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* LinkedIn */}
          <AnimatedSection animation="slide-in-left" delay={200}>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-strong glass-hover p-8 rounded-3xl transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    LinkedIn
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Conecta conmigo profesionalmente y conoce mi trayectoria en
                    el mundo del desarrollo.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                    Ver perfil
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
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>

          {/* CompuTrabajo */}
          <AnimatedSection animation="slide-in-right" delay={400}>
            <a
              href={socialLinks.computrabajo}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-strong glass-hover p-8 rounded-3xl transition-all duration-500 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    CompuTrabajo
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Encuéntrame en esta plataforma de empleo y revisa mi perfil
                    profesional disponible.
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                    Ver perfil
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
                  </span>
                </div>
              </div>
            </a>
          </AnimatedSection>
        </div>

        {/* Información de contacto directo */}
        <AnimatedSection animation="fade-in-up" delay={600}>
          <div className="glass-strong p-8 rounded-3xl text-center">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Información de contacto
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
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
                <span className="text-text-secondary text-sm">
                  {generalData.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  {generalData.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
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
                <span className="text-text-secondary text-sm">
                  {generalData.location}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
