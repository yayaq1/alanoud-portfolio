"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

interface NeuralNetworkProps {
  nodeCount?: number;
}

export default function NeuralNetwork({ nodeCount = 30 }: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Initialize nodes
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const connections: number[] = [];
      // Each node connects to 2-4 random other nodes
      const connectionCount = Math.floor(Math.random() * 3) + 2;
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !connections.includes(target)) {
          connections.push(target);
        }
      }

      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2,
        connections,
      });
    }

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          if (target) {
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              target.x,
              target.y
            );
            gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
            gradient.addColorStop(1, "rgba(139, 92, 246, 0.2)");

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();

            // Animated pulse effect
            const pulseProgress = (Date.now() / 2000 + i * 0.1) % 1;
            const pulseX = node.x + (target.x - node.x) * pulseProgress;
            const pulseY = node.y + (target.y - node.y) * pulseProgress;

            ctx.fillStyle = "rgba(96, 165, 250, 0.8)";
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Draw node
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius
        );
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.8)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0.4)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node glow
        ctx.strokeStyle = "rgba(96, 165, 250, 0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
}

