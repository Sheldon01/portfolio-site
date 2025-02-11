"use client";

import { useEffect, useRef } from "react";

const AnimatedBackground = ({ speedMultiplier = 1 }: { speedMultiplier?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; radius: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ensures the canvas properly scales within its parent container
    const updateCanvasSize = () => {
      const scale = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;

      if (parent) {
        canvas.width = parent.clientWidth * scale;
        canvas.height = parent.clientHeight * scale;
      } else {
        canvas.width = window.innerWidth * scale;
        canvas.height = window.innerHeight * scale;
      }

      ctx.scale(scale, scale);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    updateCanvasSize();

    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    const particleCount = Math.floor((width * height) / 5000);
    const maxDist = width < 768 ? 80 : 150;

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * 0.5 - 0.25) * speedMultiplier,
      vy: (Math.random() * 0.5 - 0.25) * speedMultiplier,
      radius: Math.random() * 3 + 1,
    }));

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.forEach((p2, j) => {
          if (i !== j) {
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < maxDist) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 150, 255, ${1 - dist / maxDist})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

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

    drawParticles();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [speedMultiplier]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default AnimatedBackground;
