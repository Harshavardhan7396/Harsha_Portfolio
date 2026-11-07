import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const Cursor: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'hover'>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouch = !hasFinePointer || 'ontouchstart' in window;
    setIsTouchDevice(isTouch);

    if (isTouch || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or any ancestor has data-cursor="view" or is a project card
      const target = e.target as HTMLElement | null;
      if (target) {
        const viewElem = target.closest('[data-cursor="view"]');
        const clickableElem = target.closest('a, button, [role="button"], input, textarea');

        if (viewElem) {
          setCursorType('view');
        } else if (clickableElem) {
          setCursorType('hover');
        } else {
          setCursorType('default');
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [reducedMotion, isVisible]);

  if (isTouchDevice || reducedMotion || !isVisible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {cursorType === 'view' ? (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center px-3.5 py-1.5 rounded-full bg-[#9B1C31] text-[#F3EFE7] font-mono-tag font-semibold text-[11px] tracking-widest uppercase shadow-xl scale-100 transition-all duration-200">
          <span>VIEW ↗</span>
        </div>
      ) : cursorType === 'hover' ? (
        <div className="-translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-[#9B1C31]/50 bg-[#9B1C31]/10 scale-100 transition-all duration-150" />
      ) : (
        <div className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#9B1C31] transition-all duration-150" />
      )}
    </div>
  );
};
