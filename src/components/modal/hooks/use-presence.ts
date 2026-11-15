import { RefObject, useEffect, useState } from 'react';

/**
 * Custom hook that keeps a component rendered until its closing animations finish.
 * It waits for the animations of the container and its direct children only,
 * so an endless animation deeper inside, such as a loading spinner, does not keep the component rendered.
 * Without running animations the component stops rendering right away.
 *
 * @param isOpen - Whether the component is open.
 * @param containerRef - The element whose animations, along with the ones of its direct children, are awaited.
 * @returns Whether the component should be rendered.
 */
export function usePresence(isOpen: boolean, containerRef: RefObject<Element | null>): boolean {
  const [isRendered, setIsRendered] = useState(isOpen);

  if (isOpen && !isRendered) {
    setIsRendered(true);
  }

  useEffect(() => {
    if (isOpen || !isRendered) return;

    const container = containerRef.current;
    const elements = container ? [container, ...Array.from(container.children)] : [];
    const animations = elements.flatMap((element) => element.getAnimations());
    let cancelled = false;

    Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
      if (!cancelled) {
        setIsRendered(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isOpen, isRendered, containerRef]);

  return isRendered;
}
