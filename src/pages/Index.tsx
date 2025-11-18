import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Christian Mbaba. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Index;
