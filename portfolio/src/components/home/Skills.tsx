"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Terminal, Server, Cloud, Monitor } from "lucide-react";

const skills = [
  {
    category: "Technical Skills",
    icon: Terminal,
    skills: [
      { name: "Frontend Development", level: 90 },
      { name: "Backend Development", level: 80 },
      { name: "Database (SQL & NoSQL)", level: 75 },
      { name: "UI/UX", level: 87 },
      { name: "Data Analysis", level: 70 },
      { name: "Microsoft Tools", level: 93 },
      { name: "Google Tools", level: 93 },
    ],
  },
  {
    category: "Soft Skills",
    icon: Monitor,
    skills: [
      { name: "Project Management", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Research", level: 90 },
      { name: "Communication", level: 91 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-dark-lighter relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills <span className="gradient-text">Set</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set spanning system programming to modern web
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                className="card hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <Icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
