'use client'
import { TransitionRouter } from "next-transition-router"
import { animate } from 'framer-motion/dom';
import { useRef } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null!)
    return (
        <TransitionRouter
        auto
        leave={(next) => {
          animate(
            wrapperRef.current,
            { opacity: [1, 0] },
            { duration: 0.5, onComplete: next }
          );
        }}
        enter={(next) => {
          animate(
            wrapperRef.current,
            { opacity: [0, 1] },
            { duration: 0.5, onComplete: next }
          );
        }}
      >
        <div ref={wrapperRef}>{children}</div>
      </TransitionRouter>
    )
}
export default Provider