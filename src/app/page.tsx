import React from "react";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

// Dynamically set the page metadata
export const generateMetadata = (): Metadata => {
  return {
    title: "Home | Sheldon's AI Portfolio",
    description: "Explore Sheldon West's portfolio of cutting-edge AI and machine learning projects.",
  };
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Use the AnimatedBackground component */}
      <AnimatedBackground />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Sheldon West's AI Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">
          Showcasing cutting-edge AI & ML projects.
        </p>
        <Link href="/projects">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md">
            View Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

