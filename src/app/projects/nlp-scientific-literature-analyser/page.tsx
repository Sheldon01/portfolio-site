import React from "react";
import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground"; // Import AnimatedBackground

// Dynamically set the page metadata
export const generateMetadata = (): Metadata => {
  return {
    title: "NLP Scientific Literature Analyser",
    description:
      "Extract meaningful insights from scientific literature using natural language processing for enhanced drug discovery workflows.",
  };
};

export default function NLPScientificLiteratureAnalyser() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Page Content */}
      <div className="relative z-10 p-6">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">
            NLP Scientific Literature Analyser
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Extract meaningful insights from scientific literature using natural
            language processing for enhanced drug discovery workflows.
          </p>
        </section>

        {/* Coming Soon Section */}
        <section className="py-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-500">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-300">
              Stay tuned for the launch of this project, where cutting-edge NLP
              will revolutionise scientific research.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Check Back Later!</h2>
          <p className="text-gray-400">
            This exciting project is currently under development...
          </p>
        </section>
      </div>
    </div>
  );
}
