"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    id: 1,
    title: "Teaching Assistant",
    company: "African Leadership University",
    duration: "July 2025 - Current",
    description: "Provide technical support to students and facilitators during lectures and practical sessions.",
    responsibilities: [
      "Support students with troubleshooting academic tools, platforms, and coursework-related technologies.",
      "Facilitate group activities and one-on-one sessions to enhance student understanding and participation.",
      "Offer regular feedback to facilitators regarding student progress and technical challenges."
    ],
    technologies: [
      "Technical Support",
      "Facilitation",
      "Feedback",
      "Academic Tools",
      "Communication"
    ],
  },
  {
    id: 2,
    title: "Project Officer",
    company: "KPMG Nigeria",
    duration: "Oct 2023 - May 2024",
    description: "Received and attended to Clients and Customers requests. Analysing, handling and distribution of confidential data.",
    responsibilities: [
      "Completed projects with Microsoft tools, including Power BI.",
      "Collaborated with Digital Team to build and upgrade the 'Intelligence Due Diligence tool' using Figma, Vue.js, Reactjs and Tailwind."
    ],
    technologies: [
      "Power BI",
      "Figma",
      "Vue.js",
      "React.js",
      "Tailwind",
      "Microsoft Tools"
    ],
  },
  {
    id: 3,
    title: "Code Tutor",
    company: "Jerclems Schools",
    duration: "May 2023 - Oct 2023",
    description: "Lead a summer Code Camp hosted by the School. Taught Grade 4-6 students introduction to Computer Literacy and Programming.",
    responsibilities: [
      "Created the learning curriculum for the program."
    ],
    technologies: [
      "Curriculum Design",
      "Teaching",
      "Computer Literacy"
    ],
  },
  {
    id: 4,
    title: "Operations Officer",
    company: "Eddyblinks Tech",
    duration: "Jan 2019 - Mar 2022",
    description: "Executed graphics design projects for various clients while developing competencies in CorelDraw, Photoshop, Canva, PowerPoint, and CapCut to create professional designs.",
    responsibilities: [
      "Developed Visual, Audio and text-based Research Project for Students, Schools and Organisations."
    ],
    technologies: [
      "CorelDraw",
      "Photoshop",
      "Canva",
      "PowerPoint",
      "CapCut"
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
