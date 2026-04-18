'use client';

import { useEffect } from 'react';

export default function CursorFx() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let rx = 0, ry = 0, tx = 0, ty = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.left = tx + 'px';
      dot.style.top  = ty + 'px';
    };

    const onOver = (e: MouseEvent) => {
      const hovered = (e.target as Element).closest('a,button,.project-row,.stack-cell');
      ring.style.width   = hovered ? '56px' : '36px';
      ring.style.height  = hovered ? '56px' : '36px';
      ring.style.opacity = hovered ? '0.9'  : '0.5';
    };

    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    loop();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
