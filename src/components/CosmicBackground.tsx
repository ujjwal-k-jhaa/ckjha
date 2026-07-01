import React, { useEffect, useRef } from 'react';

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    // Particles representing stars/dust
    const particles: { x: number, y: number, radius: number, speed: number, alpha: number }[] = [];
    const particleCount = Math.min(Math.floor(width * height / 10000), 200);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.1,
        speed: Math.random() * 0.2 + 0.05,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Slow upward drift like cosmic dust
        p.y -= p.speed;
        
        // Slight horizontal drift
        p.x += Math.sin(p.y * 0.01) * 0.2;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <div 
          className="absolute w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(83,211,102,0.15)_0,transparent_60%)] animate-cosmic-flow mix-blend-screen pointer-events-none"
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(83,211,102,0.1)_0,transparent_60%)] animate-[cosmic-flow_30s_cubic-bezier(0.4,0,0.2,1)_infinite_reverse] mix-blend-screen pointer-events-none"
        />
      </div>
      {/* Animated gradient orbs (Aurora effect) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full bg-emerald-800/10 blur-[150px] animate-[pulse_15s_ease-in-out_infinite_reverse]" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] rounded-full bg-brand/5 blur-[130px] animate-[pulse_12s_ease-in-out_infinite]" />
      
      {/* Starry dust canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-60" />

      {/* Noise texture overlay for premium feel */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
