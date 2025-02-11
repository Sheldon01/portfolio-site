"use client";

import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null); // Track animation frame
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number }[]>([]); // Store particles

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Function to update canvas size dynamically
    const updateCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      ctx.scale(scale, scale);
    };

    updateCanvasSize();

    const width = window.innerWidth;
    const height = window.innerHeight;
    const particleCount = Math.floor((width * height) / 5000); // Adjust density dynamically
    const maxDist = width < 768 ? 80 : 150; // Reduce connections on mobile

    // Create particles and store them in ref
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25,
      radius: Math.random() * 3 + 1,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dist = Math.hypot(
            particlesRef.current[i].x - particlesRef.current[j].x,
            particlesRef.current[i].y - particlesRef.current[j].y
          );
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 150, 255, ${1 - dist / maxDist})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 150, 255, 1)";
        ctx.fill();
      });

      // Move particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId.current = requestAnimationFrame(drawParticles);
    };

    // Start the animation
    drawParticles();

    // Handle window resizing
    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function: Stop animation & remove event listeners
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default AnimatedBackground;
