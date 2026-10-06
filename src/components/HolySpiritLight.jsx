import React, { useEffect, useRef, useState } from 'react';

export default function HolySpiritLight() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled] = useState(true);

  // Position state with lerp interpolation
  const mouseRef = useRef({ x: -500, y: -500 });
  const lightRef = useRef({ x: -500, y: -500 });
  const particlesRef = useRef([]);
  const ripplesRef = useRef([]);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Spawn subtle grace particle trail if distance is noticeable
      const dx = mouseRef.current.x - lightRef.current.x;
      const dy = mouseRef.current.y - lightRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 6 && Math.random() < 0.6) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -Math.random() * 1.2 - 0.3, // Drift upward like prayer/incense
          size: Math.random() * 4 + 2,
          life: 1.0,
          decay: Math.random() * 0.025 + 0.02,
          color: Math.random() > 0.4 ? 'rgba(255, 230, 140, ' : 'rgba(212, 175, 55, ',
        });

        // Limit maximum active particles
        if (particlesRef.current.length > 35) {
          particlesRef.current.shift();
        }
      }
    };

    const handlePointerDown = (e) => {
      // Gentle divine light ripple upon interaction
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 75,
        life: 1.0,
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Canvas resize and render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    let pulseTime = 0;

    const render = () => {
      pulseTime += 0.03;

      // Smooth lag interpolation for the holy light halo
      lightRef.current.x += (mouseRef.current.x - lightRef.current.x) * 0.15;
      lightRef.current.y += (mouseRef.current.y - lightRef.current.y) * 0.15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (enabled && isVisible && lightRef.current.x > 0 && lightRef.current.y > 0) {
        const lx = lightRef.current.x;
        const ly = lightRef.current.y;
        const breathe = Math.sin(pulseTime) * 12;

        // 1. Large Heavenly Aureole (성령의 은총 후광)
        const outerRadius = 180 + breathe;
        const radialGrad = ctx.createRadialGradient(lx, ly, 0, lx, ly, outerRadius);
        radialGrad.addColorStop(0, 'rgba(255, 245, 205, 0.32)');
        radialGrad.addColorStop(0.25, 'rgba(240, 208, 120, 0.18)');
        radialGrad.addColorStop(0.55, 'rgba(182, 154, 99, 0.08)');
        radialGrad.addColorStop(0.85, 'rgba(182, 154, 99, 0.02)');
        radialGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = radialGrad;
        ctx.beginPath();
        ctx.arc(lx, ly, outerRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Focused Radiant Star Core (성령의 중심 빛)
        const coreRadius = 24 + Math.sin(pulseTime * 1.5) * 4;
        const coreGrad = ctx.createRadialGradient(lx, ly, 0, lx, ly, coreRadius);
        coreGrad.addColorStop(0, 'rgba(255, 255, 245, 0.65)');
        coreGrad.addColorStop(0.4, 'rgba(255, 225, 130, 0.35)');
        coreGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(lx, ly, coreRadius, 0, Math.PI * 2);
        ctx.fill();

        // 3. Delicate Holy Cross/Gleam Shimmer
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 250, 220, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        // Horizontal ray
        ctx.moveTo(lx - 12, ly);
        ctx.lineTo(lx + 12, ly);
        // Vertical ray
        ctx.moveTo(lx, ly - 12);
        ctx.lineTo(lx, ly + 12);
        ctx.stroke();
        ctx.restore();

        // 4. Click Ripples (은총의 파동)
        for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
          const rip = ripplesRef.current[i];
          rip.radius += 2.2;
          rip.life -= 0.028;

          if (rip.life <= 0 || rip.radius >= rip.maxRadius) {
            ripplesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.strokeStyle = `rgba(212, 175, 55, ${rip.life * 0.35})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // 5. Grace Particle Trail (상승하는 성령의 빛 은총 알갱이)
        for (let i = particlesRef.current.length - 1; i >= 0; i--) {
          const p = particlesRef.current[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;

          if (p.life <= 0) {
            particlesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.fillStyle = `${p.color}${p.life * 0.55})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [enabled, isVisible]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden transition-opacity duration-500"
      style={{ opacity: isVisible && enabled ? 1 : 0 }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
