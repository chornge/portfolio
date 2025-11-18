import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Christian <span className="gradient-text">Mbaba</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Android Software Engineer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating excellent tools to help, inspire, and improve the world
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button variant="default" size="lg" className="glow-primary" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center text-muted-foreground mb-8">
          <a 
            href="https://github.com/chornge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/chornge_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/christian-mbaba-6095ba174" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:christianmbaba@live.com"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://medium.com/@chornge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="Medium"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>
          <a 
            href="https://stackoverflow.com/users/1008011/chornge" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="Stack Overflow"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com/chornge_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-smooth hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
