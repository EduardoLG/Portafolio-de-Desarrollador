import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
}) {
  const { ref, isVisible } = useScrollReveal();

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
    "blur-in": "animate-blur-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation] || "animate-fade-in-up"} ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
