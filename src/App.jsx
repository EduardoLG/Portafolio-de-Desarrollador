import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import ProjectViews from "./sections/ProjectViews";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Skills />
        <Experience />
        <ProjectViews />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
