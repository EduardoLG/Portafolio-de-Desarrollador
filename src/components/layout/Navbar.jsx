import { useState, useEffect } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const navLinks = [
  { name: "Inicio", href: "#welcome" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const { scrollDirection, scrollY } = useScrollDirection();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollDirection === "down" && scrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setIsScrolled(scrollY > 50);
  }, [scrollDirection, scrollY]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#welcome"
          onClick={(e) => scrollToSection(e, "#welcome")}
          className="text-text-primary font-bold text-xl tracking-tight"
        >
          <span className="text-accent">E</span>duardo
        </a>

        {/* Links de navegación - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-text-secondary text-sm font-medium hover:text-text-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Botón CTA */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="hidden md:block px-5 py-2 text-sm font-medium text-text-primary glass glass-hover rounded-full transition-all duration-300 hover:border-accent/30"
        >
          Contactar
        </a>

        {/* Menú móvil */}
        <button
          className="md:hidden text-text-primary p-2"
          aria-label="Menú"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu?.classList.toggle("hidden");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        id="mobile-menu"
        className="hidden md:hidden glass mt-2 mx-4 rounded-2xl p-4"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              scrollToSection(e, link.href);
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="block py-3 px-4 text-text-secondary text-sm font-medium hover:text-text-primary hover:bg-white/5 rounded-xl transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
