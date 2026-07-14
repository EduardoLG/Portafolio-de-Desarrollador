import AnimatedSection from "../components/ui/AnimatedSection";
import SkillBar from "../components/ui/SkillBar";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <AnimatedSection animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Habilidades
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Mi stack tecnológico
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones web
              modernas y eficientes.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection
              key={category.name}
              animation="fade-in-up"
              delay={catIndex * 150}
            >
              <div className="glass-strong p-10 rounded-3xl h-full">
                {/* Título de categoría */}
                <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
                  {category.name}
                </h3>

                {/* Lista de habilidades */}
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 150 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
