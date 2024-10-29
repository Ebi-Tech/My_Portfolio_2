"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Cpu, Code2, Container, Cloud } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { icon: Cpu, label: "Web development", desc: "React, TypeScript, Next.js" },
    { icon: Code2, label: "Mobile Development", desc: "React Native" },
    { icon: Container, label: "UI/UX", desc: "Figma, Canva" },
    { icon: Cloud, label: "Version Control", desc: "Git & Github" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-dark-lighter relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark opacity-50" />

      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bridging the gap between intuitive design and responsive,
            cross-platform development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { x: -20, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-dark relative">
              <Image
                src="/profile.jpeg"
                alt="Divine - Profile Picture"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 border border-primary/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { x: 20, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-lg text-gray-300">
                Driven by a passion for user-focused design and modern frontend
                technologies, I bring a unique perspective to cross-platform
                development. Starting in frontend development, I developed a
                strong foundation in creating responsive, intuitive interfaces.
              </p>
              <p className="text-gray-400">
                Now, I apply these skills across both web and mobile, crafting
                cohesive digital experiences that blend design with smooth
                functionality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  className="p-4 rounded-lg bg-dark hover:bg-dark/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-semibold text-white mb-1">{label}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "TypeScript",
                "Javascript",
                "React",
                "React Native",
                "Shell",
                "AI",
                "Html/CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-dark rounded-full text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}