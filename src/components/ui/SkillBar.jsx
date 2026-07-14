import { useEffect, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function SkillBar({ name, level, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary font-medium text-sm">{name}</span>
        <span className="text-accent font-semibold text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
        <div
          className="h-full gradient-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
