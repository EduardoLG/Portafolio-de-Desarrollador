import AnimatedSection from "../components/ui/AnimatedSection";
import Timeline from "../components/ui/Timeline";
import { education, experience } from "../data/education";

const allItems = [
  ...education.map((item) => ({
    ...item,
    title: item.degree,
    subtitle: item.institution,
  })),
  ...experience.map((item) => ({
    ...item,
    title: item.role,
    subtitle: item.company,
  })),
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/50 to-bg-primary" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Experiencia
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Formación y trayectoria
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Mi camino en el desarrollo web, desde la formación académica hasta
              la experiencia práctica.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline unificada */}
        <AnimatedSection animation="fade-in-up" delay={200}>
          <Timeline items={allItems} />
        </AnimatedSection>
      </div>
    </section>
  );
}
