
import { useEffect, useRef } from "react";

export const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let planets: Planet[] = [];
    let particles: Particle[] = [];

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.z -= 2;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        this.twinklePhase += this.twinkleSpeed;
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
        const size = this.size * (1000 / this.z);
        const alpha = this.opacity * (Math.sin(this.twinklePhase) * 0.3 + 0.7);

        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = size * 2;
          ctx.shadowColor = '#60a5fa';
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    class Planet {
      x: number;
      y: number;
      size: number;
      color: string;
      rotationSpeed: number;
      rotation: number;
      orbitRadius: number;
      orbitSpeed: number;
      orbitAngle: number;
      centerX: number;
      centerY: number;

      constructor() {
        this.centerX = Math.random() * canvas.width;
        this.centerY = Math.random() * canvas.height;
        this.orbitRadius = Math.random() * 100 + 50;
        this.orbitSpeed = Math.random() * 0.01 + 0.005;
        this.orbitAngle = Math.random() * Math.PI * 2;
        this.size = Math.random() * 20 + 10;
        this.color = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ef4444'][Math.floor(Math.random() * 4)];
        this.rotationSpeed = Math.random() * 0.02 + 0.01;
        this.rotation = 0;
        this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius;
        this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius;
      }

      update() {
        this.orbitAngle += this.orbitSpeed;
        this.rotation += this.rotationSpeed;
        this.x = this.centerX + Math.cos(this.orbitAngle) * this.orbitRadius;
        this.y = this.centerY + Math.sin(this.orbitAngle) * this.orbitRadius;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Planet glow
        ctx.shadowBlur = this.size;
        ctx.shadowColor = this.color;
        
        // Planet body
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet rings (for some planets)
        if (Math.random() > 0.7) {
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 2;
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 1.5, this.size * 0.3, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.maxLife = 60;
        this.life = this.maxLife;
        this.color = ['#60a5fa', '#06b6d4', '#8b5cf6'][Math.floor(Math.random() * 3)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      stars = [];
      planets = [];
      particles = [];
      
      // Create stars
      for (let i = 0; i < 200; i++) {
        stars.push(new Star());
      }
      
      // Create planets
      for (let i = 0; i < 3; i++) {
        planets.push(new Planet());
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      
      // Update and draw planets
      planets.forEach(planet => {
        planet.update();
        planet.draw();
      });
      
      // Update and draw particles
      particles = particles.filter(particle => {
        particle.update();
        particle.draw();
        return particle.life > 0;
      });
      
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 10; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    resize();
    init();
    animate();

    window.addEventListener("resize", () => {
      resize();
      init();
    });
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    />
  );
};
