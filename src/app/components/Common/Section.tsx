"use client";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  id?: string;
  number?: string;  // "01"
  title: string;    // single word ideally — "About", "Resume", "Contact"
  children: ReactNode;
  className?: string;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Section({
  id,
  number,
  title,
  children,
  className = "",
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section id={id} className={`section ${className}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.header
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mb-10 md:mb-20 flex items-end justify-between gap-6 border-b border-ink-300 pb-5"
        >
          <div className="flex items-baseline gap-5">
            {number && (
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  show:   { opacity: 1, transition: { duration: 0.9, ease: easeOut } },
                }}
                aria-hidden
                className="font-mono text-xs text-ash-faint select-none"
              >
                /{number}
              </motion.span>
            )}
            <span className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show:   { y: "0%", transition: { duration: 0.9, ease: easeOut } },
                }}
                className="block font-display text-bone text-4xl sm:text-5xl md:text-6xl leading-[1] tracking-tightest will-change-transform"
              >
                {title}
              </motion.span>
            </span>
          </div>
          <motion.span
            variants={{
              hidden: { scaleX: 0 },
              show:   { scaleX: 1, transition: { duration: 0.9, ease: easeOut } },
            }}
            className="hidden md:block flex-1 max-w-[120px] h-px bg-bone/40 origin-left mb-3"
            aria-hidden
          />
        </motion.header>
        {children}
      </div>
    </section>
  );
}
