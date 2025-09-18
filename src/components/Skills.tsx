"use client";
import { useState, useEffect } from "react";
import { Code2, Database, Globe, Palette, Zap, Shield } from "lucide-react";

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "text-primary",
      percentage: 95,
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "MYSQL"],
      color: "text-secondary",
      percentage: 88,
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
      color: "text-success",
      percentage: 92,
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "Canva", "Responsive Design", "Photoshop"],
      color: "text-primary",
      percentage: 78,
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      skills: ["Docker", "Git", "CI/CD", "Webpack"],
      color: "text-secondary",
      percentage: 82,
    },
    {
      icon: Shield,
      title: "Testing & Security",
      skills: ["Jest", "Unit test", "Security Best Practices", "Performance"],
      color: "text-success",
      percentage: 85,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skillCategories.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, index]);
        }, index * 200);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 relative z-10" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isVisible = visibleSkills.includes(index);
            
            return (
              <div
                key={category.title}
                className={`glass-effect rounded-xl p-6 glow-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`h-8 w-8 ${category.color} mr-3`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-2 mb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      style={{ 
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                        animation: isVisible ? `fade-in 0.3s ease-out forwards` : 'none'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? 'animate-glow-pulse' : ''
                    }`}
                    style={{
                      width: isVisible ? `${category.percentage}%` : '0%',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
                <div className="text-right mt-2">
                  <span className={`text-sm font-mono ${category.color}`}>
                    {isVisible ? category.percentage : 0}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;