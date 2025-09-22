import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const skills = ["Frontend Developer", "React", "MERN Developer", "Blockchain Enthusiast"];

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6" id="hero">
      <div className="container mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Mercy</span>{" "}
            <span className="text-foreground">Mbao</span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-8">
            <TypingEffect 
              texts={skills}
              className="text-muted-foreground font-mono"
              speed={80}
              pauseTime={2000}
            />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and pushing the boundaries of web development.
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Button 
              variant="gradient"
              size="lg"
              className="font-semibold px-8"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          <a href="/Mercy-cv.pdf" target="_blank" rel="noopener noreferrer">  
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 glow-hover"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/mercie-ux" 
              className="text-muted-foreground hover:text-primary transition-colors glow-hover"
              aria-label="GitHub Profile"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mercy-njeri-979201162/" 
              className="text-muted-foreground hover:text-primary transition-colors glow-hover"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:njerimercy77@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors glow-hover"
              aria-label="Email Contact"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;