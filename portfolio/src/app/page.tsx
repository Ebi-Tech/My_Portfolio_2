import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Github from "@/components/home/Github";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/h.png",
  },
  title: "Home | Frontend Developer & Mobile App Designer",
  description: "Portfolio showcasing Software development skills and projects",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Github />
      <Contact />
    </>
  );
}
