"use client";

import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      ctx.scale(scale, scale);
    };

    updateCanvasSize();

    // Dynamic particle count based on screen size
    const width = window.innerWidth;
    const height = window.innerHeight;
    const particleCount = Math.floor((width * height) / 5000); // Adjust density
    const maxDist = width < 768 ? 80 : 150; // Reduce connections on mobile

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25,
      radius: Math.random() * 3 + 1,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          );
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 150, 255, ${1 - dist / maxDist})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 150, 255, 1)";
        ctx.fill();
      });

      // Move particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default AnimatedBackground;
