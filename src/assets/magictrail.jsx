



// src/components/SmoothTrail.jsx
import React, { useEffect, useRef } from 'react';
import '../assets/magictrail.css';

const MagicTrail = () => {
  const canvasRef = useRef(null);
  const trails = useRef([]);
  const lastPos = useRef({ x: null, y: null });
  const colorIndex = useRef(0);

  // Aesthetic color palette (non-rainbow)
  const colors = [
    '#e3f70eff', // Cyan
    '#7a00ff', // Purple
    '#00ffe5', // Teal
    '#86005cff', // Blue
    '#920d01ff', // Pinkish purple
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const addTrail = (x, y) => {
      const last = lastPos.current;
      const color = colors[colorIndex.current % colors.length];

      trails.current.push({
        x1: last.x ?? x,
        y1: last.y ?? y,
        x2: x,
        y2: y,
        color,
        alpha: 1,
      });

      lastPos.current = { x, y };
      colorIndex.current++;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trails.current.forEach((trail, i) => {
        ctx.beginPath();
        
        ctx.moveTo(trail.x1, trail.y1);
        ctx.lineTo(trail.x2, trail.y2);
        ctx.strokeStyle = trail.color;
        ctx.globalAlpha = trail.alpha;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.globalAlpha = 1;
        trail.alpha -= 0.015;
        ctx.lineWidth = 3.5; 

        // Reduce alpha for fade effect
        trail.alpha -= 0.02;
        if (trail.alpha <= 0) {
          trails.current.splice(i, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      addTrail(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    

    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
    
  
  );
};
export default MagicTrail;