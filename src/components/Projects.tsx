import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import growthImage from "@/assets/growthimage.jpg";
import mkulimaapp from "@/assets/mkulimaapp.jpg";
import farmproduce from "@/assets/farmproduce.jpg";
import momversation from "@/assets/momversation.jpeg";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "GrowthFullCircle Agency",
      description: "A digital platform promoting mental wellness in the workplace.",
      image: growthImage,
      technologies: ["React", "VanillaCSS", "Node.js", "PostgreSQL"],
      liveUrl: "https://growth-full-circle-agency-tn9j.vercel.app/",
      githubUrl: "https://github.com/mercie-ux/Growth-full-circle-agency.git",
      featured: true,
    },
    {
      title: "Mkulima",
      description: "web-app that helps farmers keep track of their crops status, plan, harvest, stay organized and make better decisions.",
      image: mkulimaapp,
      technologies: ["React", "Postgress", "Nodejs", "Tailwindcss"],
      liveUrl: "https://mkulima-cooperative-g9ie-mbxqyg5cc-mercie-uxs-projects.vercel.app/",
      githubUrl: "https://github.com/mercie-ux/mkulima-cooperative.git",
      featured: true,
    },
    {
      title: "Farm Produce",
      description: "Simple e-commerce platfrom where farmers get to list their crops for sale, buyers and sellers get to experience fresh organic products through purchases and organized delivery",
      image: farmproduce,
      technologies: ["Next.js", "Tailwindcss", "MongoDB"],
      liveUrl: "https://farm-produce-phi.vercel.app/",
      githubUrl: "https://github.com/mercie-ux/FarmProduce.git",
      featured: false,
    },
    {
      title: "Momversation AI",
      description: "Mom's ai platform using GPT integration for helping mom chat with ai, share thoughts, and offer mental support.",
      image: momversation,
      technologies: ["Typescript", "OpenAI API", "React", "Tailwind CSS"],
      liveUrl: "https://momversations-compassionate-chat.vercel.app/",
      githubUrl: "https://github.com/mercie-ux/momversations-compassionate-chat.git",
      featured: false,
    },
  ];

  return (
    <section className="py-20 px-6 relative z-10" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`glass-effect rounded-xl overflow-hidden glow-hover transition-all duration-500 ${
                project.featured ? 'lg:col-span-1' : ''
              } ${
                hoveredProject === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 50, scale: 0.9}}
              whileInView={{ opacity:1, y: 0, scale: 1}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${
                    hoveredProject === index ? 'scale-110' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-hover"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/mercie-ux?tab=repositories"
            target="_blank"           
            rel="noopener noreferrer" 
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-hover"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;