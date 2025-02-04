import React from "react";

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  // Define the type of projectData to make TypeScript happy
  const projectData: Record<string, { title: string; description: string }> = {
    "ai-drug-pipeline": {
      title: "AI Drug Analysis Pipeline",
      description: "A machine learning pipeline for drug discovery.",
    },
  };

  // Safely access the project using params.slug
  const project = projectData[params.slug];

  if (!project) {
    return <h1 className="text-red-500 text-center text-2xl font-bold">Project not found!</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg">{project.description}</p>
    </div>
  );
}
