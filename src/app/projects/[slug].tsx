import React from "react";

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const projectData = {
    "ai-drug-pipeline": {
      title: "AI Drug Analysis Pipeline",
      description: "A machine learning pipeline for drug discovery.",
    },
    "titanic-survival": {
      title: "Titanic Survival Prediction",
      description: "Predicting survival rates on the Titanic using ML.",
    },
  };

  const project = projectData[params.slug];

  if (!project) return <h1>Project not found!</h1>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg">{project.description}</p>
    </div>
  );
}
