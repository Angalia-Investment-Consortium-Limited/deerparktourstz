import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  className: string = 'scroll-fade-in',
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Add the initial animation class
    element.classList.add(className);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [className, threshold, rootMargin, triggerOnce]);

  return ref;
};

// Multiple elements animation hook
export const useScrollAnimationMultiple = (
  selector: string,
  className: string = 'scroll-fade-in',
  options: UseScrollAnimationOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px', triggerOnce = true } = options;
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elements.forEach((element, index) => {
      // Add staggered delay
      (element as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      element.classList.add(className);
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, className, threshold, rootMargin, triggerOnce]);

  return containerRef;
};