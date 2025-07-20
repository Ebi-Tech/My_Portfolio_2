"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Cpu, Code2, Container, Cloud, GraduationCap } from "lucide-react";

const ProfileSlideshow = () => {
  const images = ["/a.png", "/b.png", "/c.png", "/d.png", "/e.png", "/f.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="aspect-square rounded-lg overflow-hidden bg-dark relative">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          fill
          priority
          className={`object-cover transition-transform duration-1000 ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
        />
      ))}
    </div>
  );
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [eduRef, eduInView] = useInView({
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
    <>
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
              <ProfileSlideshow />
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
                  I am a results-driven Software Developer with expertise in frontend (React, JavaScript, TypeScript) and backend (Python, Node.js, SQL, RESTful APIs) development. I am passionate about UI/UX design, web development, and database integration, and I thrive in collaborative, project-driven environments.
                </p>
                <p className="text-gray-400">
                  I am committed to applying my experience to develop innovative digital solutions and contribute meaningful impact while growing in a dynamic environment.
                </p>
                <p className="text-gray-400">
                  <a href="/Resume_Divine_Ifechukwude.pdf" target="_blank" rel="noopener noreferrer" className="underline text-primary">View my full resume (PDF)</a>
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

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-dark to-dark-lighter relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        
        <motion.div
          ref={eduRef}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={eduInView ? "visible" : "hidden"}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuous learning and skill development journey
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-dark/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark/30 hover:bg-dark/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold">BSc. Hons Software Engineering</h3>
                    <p className="text-primary font-medium">African Leadership University</p>
                    <span className="text-gray-400 text-sm">(Expected 2027)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark/30 hover:bg-dark/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold">National Diploma</h3>
                    <p className="text-primary font-medium">Auchi Polytechnic</p>
                    <span className="text-gray-400 text-sm">(2019-2022)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark/30 hover:bg-dark/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold">Software Engineering</h3>
                    <p className="text-primary font-medium">ALX</p>
                    <span className="text-gray-400 text-sm">(2022-2023)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark/30 hover:bg-dark/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold">AI Career Essentials</h3>
                    <p className="text-primary font-medium">ALX</p>
                    <span className="text-gray-400 text-sm">(2024)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark/30 hover:bg-dark/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold">Mckinsey Forward Learning Program</h3>
                    <p className="text-primary font-medium">McKinsey & Company</p>
                    <span className="text-gray-400 text-sm">(2025)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-dark/30 hover:bg-dark/50 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold">Stanford Medicine Data Science</h3>
                    <p className="text-primary font-medium">Stanford University</p>
                    <span className="text-gray-400 text-sm">(2025)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="https://drive.google.com/drive/folders/14uCKin4NUupuRaOmCBLsn38TX3-o8LhN?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  View Certifications
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}