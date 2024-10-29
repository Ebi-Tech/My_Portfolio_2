"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    id: 1,
    title: "Project Officer/Frontend Engineer",
    company: "KPMG Nigeria",
    duration: "2023 - 2024",
    description:
      "Functioned In the Advisory-Forensic unit as a Project officer.",
    responsibilities: [
      "Handling and distributing confidential data",
      "Completing projects with Microsoft tools, including Power BI",
      "Collaborating with Digital Factory to build and upgrade the 'Intelligence Due Diligence tool' using Vue.js, React.js, and Tailwind",
      "Implementing best development practices",
    ],
    technologies: [
      "React",
      "Vue.js",
      "TypeScript",
      "Javascript",
      "Tailwind",
      "Shell",
      "Version Control",
      "Microsoft Tools",
      "Collaboration",
    ],
  },
  {
    id: 2,
    title: "Lead Code Tutor",
    company: "Jerclems School",
    duration: "2023",
    description:
      "Lead programming tutor for Jerclems School, teaching students how to code",
    responsibilities: [
      "Created and implemented the curriculum for the coding classes",
      "Taught Grade 4-6 students introduction to Computer Literacy and Programming",
      "Guided Students to become proficient in HTML, CSS and JavaScript",
      "Lead the students to build their first website",
    ],
    technologies: [
      "Html",
      "CSS",
      "Javascript",
      "VsCode",
      "Version Control",
      "Communication",
      "Collaboration",
    ],
  },
  {
    id: 3,
    title: "Lead Operations Officer",
    company: "Eddyblinks Tech	",
    duration: "2019 - 2022",
    description: "Overseeing the day-to-day operations of the company",
    responsibilities: [
      "Executed graphics design projects for various clients using CorelDraw and Photoshop.",
      "Developed competencies in the use of CorelDraw, Powerpoint, Photoshop and Canva to create graphics and designs.",
      "Collaborating with educators to create learning materials for students",
      "Developed Visual, Audio and text-based Research Project for Students, Schools and Organisations",
    ],
    technologies: [
      "Photoshop",
      "CorelDraw",
      "Microsoft Tools",
      "Google Suite",
      "Canva",
      "Research and Data Analysis",
      "Collaboration",
      "Communication",
    ],
  },
  {
    id: 4,
    title: "Freelance Software Developer",
    company: "Ebi-Tech",
    duration: "2023 - Present",
    description: "Building and Collaborating on various software projects",
    responsibilities: [
      "Build responsive Web and Mobile applications",
      "Design and Develop User Interfaces",
      "Build and collaborate on shell, python and C projects",
      "Use Firebase to store and retrieve data",
    ],
    technologies: [
      "React",
      "React Native",
      "Figma",
      "Tailwind",
      "NativeWind",
      "Shell",
      "Python",
      "C",
      "Firebase",
      "Collaboration",
      "Communication",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-dark relative">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800" />

              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary" />

              <div className="card hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-400">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start">
                      <span className="mr-2 text-primary">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
