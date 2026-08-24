"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
     value: number;
     suffix?:string
};

function Counter({ value, suffix="+" }: CounterProps) {
     const [count, setCount] = useState(0);
     const [isVisible, setIsVisible] = useState(false);

     const ref = useRef<HTMLSpanElement | null>(null);

     useEffect(() => {
          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         setIsVisible(true);
                         observer.disconnect();
                    }
               },
               {
                    threshold: 0.5,
               },
          );

          if (ref.current) {
               observer.observe(ref.current);
          }

          return () => observer.disconnect();
     }, []);

     useEffect(() => {
          if (!isVisible) return;

          let startTime: number | null = null;
          let animationFrame: number;

          const duration = 1800;

          const animate = (currentTime: number) => {
               if (startTime === null) {
                    startTime = currentTime;
               }

               const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1,
               );

               const easedProgress = 1 - Math.pow(1 - progress, 3);

               setCount(Math.floor(easedProgress * value));

               if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
               }
          };

          animationFrame = requestAnimationFrame(animate);

          return () => {
               cancelAnimationFrame(animationFrame);
          };
     }, [isVisible, value]);

     return <span ref={ref}>{count}{suffix}</span>;
}

export default Counter;
