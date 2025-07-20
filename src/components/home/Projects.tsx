"use client";
import { motion } from "framer-motion";
import { ExternalLink, Folder, Github, Star, GitFork } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

async function fetchPinnedRepos() {
  const res = await fetch("/api/github-pinned");
  if (!res.ok) throw new Error("Failed to fetch pinned repos");
  return await res.json();
}

interface Repo {
  id: string;
  name: string;
  description: string;
  url: string;
  homepageUrl?: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage?: { name: string };
  languages?: { nodes: { name: string }[] };
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    fetchPinnedRepos()
      .then(setRepos)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

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
            A collection of my work spanning system-level programming to web and mobile applications
          </p>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card animate-pulse h-64" />
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group card hover:border-primary/30 transition-colors h-full p-6 rounded-lg bg-dark/80 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary flex flex-col"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  {repo.homepageUrl && (
                    <button
                      type="button"
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(repo.homepageUrl, '_blank');
                      }}
                      className="text-gray-400 hover:text-primary transition-colors z-10"
                      tabIndex={-1}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {repo.name}
                </h3>
                <p className="text-gray-400 mb-4 min-h-[48px]">{repo.description || "No description available"}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {repo.languages?.nodes?.map((lang: any) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 text-sm bg-dark rounded-full text-gray-300 border border-gray-700"
                    >
                      {lang.name}
                    </span>
                  ))}
                  {repo.primaryLanguage && !repo.languages?.nodes?.some((l: any) => l.name === repo.primaryLanguage.name) && (
                    <span className="px-3 py-1 text-sm bg-dark rounded-full text-gray-300 border border-gray-700">
                      {repo.primaryLanguage.name}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 mt-auto">
                  <span className="text-gray-400 text-sm flex items-center">
                    <Star className="w-4 h-4 mr-1" /> {repo.stargazerCount}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <GitFork className="w-4 h-4 mr-1" /> {repo.forkCount}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
} 