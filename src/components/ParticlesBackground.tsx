import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  isGlowing?: boolean;
  isFlashing?: boolean;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const currentParticles = particlesRef.current;

      // --- KORAK 1: Resetujemo stanja za sve partikle na početku svakog frejma
      currentParticles.forEach(particle => {
        particle.isGlowing = false;
        particle.isFlashing = false; // Resetujemo i bljesak
      });

      // --- KORAK 2: Prolazimo kroz sve partikle da nađemo konekcije
      currentParticles.forEach((particle, index) => {
        currentParticles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Udaljenost za povezivanje
            // Označi oba partikla kao sijajuće I KAO BLJESKAJUĆE
            particle.isGlowing = true;
            otherParticle.isGlowing = true;
            particle.isFlashing = true; // <-- UKLJUČUJEMO BLJESAK
            otherParticle.isFlashing = true; // <-- UKLJUČUJEMO BLJESAK

            // Iscrtaj liniju
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // --- KORAK 3: Iscrtavamo sve partikle, sa bljeskom ili sjajem
      currentParticles.forEach(particle => {
        // Pomeramo partikl
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Vraćamo ga na ekran ako izađe van okvira
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Resetujemo senku pre crtanja
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';

        // --- NOVO: Logika za Bljesak i Sjaj ---
        // Prvo proveravamo da li partikl treba da bljesne, jer je to jači efekat.
        
        // <-- PODESAVANJE 4: EFEKAT BLJESKA (FLASH)
        if (particle.isFlashing) {
          // Jak, kratak bljesak
          ctx.shadowBlur = particle.size * 3; // Veći blur za jači efekat
          ctx.shadowColor = 'rgba(255, 223, 150, 1)'; // Svetlija, skoro neprovidna boja za "bljesak"
        } 
        // Ako ne bljesne, proveravamo da li treba "normalno" da sija.
        else if (particle.isGlowing) {
          // Standardni, konstantni sjaj
          ctx.shadowBlur = particle.size * 1.5; // Intenzitet sjaja
          ctx.shadowColor = 'rgba(212, 175, 55, 0.8)'; // Boja sjaja
        }

        // Iscrtaj sam partikl
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
