"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Vertrauen",
    description:
      "A serviced website built for Vertrauen - an organization that aims to tackle the GCGO of Educcation in Kigali, Rwanda",
    tags: ["React", "Typescript", "Next.js", "Tailwind CSS"],
    github: "https://github.com/Ebi-Tech/Vertrauen",
    live: "https://vertrauen.vercel.app/",
    category: "systems",
  },
  {
    id: 2,
    title: "Due Diligence Tool",
    description:
      "A client onboarding tool for performing due diligence checks on clients",
    tags: ["Vue.js", "Redux", "Tailwind", "Javascript"],
    github: "https://github.com/Ebi-Tech/ddp",
  },
  {
    id: 3,
    title: "Rental",
    description: "A Rental management web app built for a clients in Rwanda",
    tags: ["React", "TypeScript", "Next.js", "Tailwind.css"],
    github: "https://github.com/Ebi-Tech/Rental",
  },
  {
    id: 4,
    title: "Tradey",
    description: "An E-commerce app built for a clients in Rwanda",
    tags: ["React", "Typescript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Ebi-Tech/Tradey",
    live: "https://tradey.vercel.app/",
  },
  {
    id: 5,
    title: "Submission Reminder App",
    description: "A submission reminder app built for a project submission",
    tags: ["Shell"],
    github: "https://github.com/d-k0de/submission_reminder_app_d-k0de",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-dark relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work spanning system-level programming to web and
            mobile applications
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="card group hover:border-primary/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-12 h-12 text-primary" />
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors z-10"
                        style={{ pointerEvents: "auto" }}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors z-10"
                        style={{ pointerEvents: "auto" }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-dark rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
