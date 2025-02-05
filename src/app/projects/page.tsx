import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import AnimatedBackground from "@/components/AnimatedBackground"; // Import AnimatedBackground

// Dynamically set the page metadata
export const generateMetadata = (): Metadata => {
  return {
    title: "Projects | Sheldon's AI Portfolio",
    description: "Browse through a collection of AI and machine learning projects by Sheldon West.",
  };
};

const projects = [
  { title: "AI Drug Analysis Pipeline", slug: "ai-drug-pipeline" },
  { title: "NLP-Powered Scientific Literature Analyser", slug: "nlp-scientific-literature-analyser" },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Page Content */}
      <div className="relative z-10 p-4">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectCard title={project.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
