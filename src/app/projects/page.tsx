import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { title: "AI Drug Analysis Pipeline", slug: "ai-drug-pipeline" },
  { title: "Titanic Survival Prediction", slug: "titanic-survival" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <ProjectCard title={project.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
