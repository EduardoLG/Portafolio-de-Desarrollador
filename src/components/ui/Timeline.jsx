import AnimatedSection from "./AnimatedSection";

export default function Timeline({ items }) {
  return (
    <div className="relative">
      {/* Línea vertical continua */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/40" />

      {items.map((item, index) => (
        <AnimatedSection
          key={item.id}
          animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
          delay={index * 150}
        >
          <div
            className={`relative flex items-start mb-12 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Punto en la línea */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 mt-2 glow" />

            {/* Contenido */}
            <div
              className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <div className="glass-strong glass-hover p-6 rounded-2xl transition-all duration-500">
                <span className="text-accent text-sm font-medium">
                  {item.period}
                </span>
                <h3 className="text-text-primary text-lg font-semibold mt-1">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  {item.subtitle}
                </p>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Espacio vacío para el otro lado */}
            <div className="hidden md:block md:w-5/12" />
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
