"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Common/Section";
import Reveal from "../Common/Reveal";
import { about } from "../../../data";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const pillsRef = useRef(null);
  const pillsInView = useInView(pillsRef, { once: true, margin: "-15% 0px" });

  return (
    <Section id="about" number="01" title="About">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-7 space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-bone-dim text-xl md:text-2xl leading-relaxed font-light"
                  : "text-ash text-[17px] leading-relaxed"
              }
            >
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5 space-y-8">
          <div ref={pillsRef}>
            <p className="eyebrow mb-3">Stack</p>
            <motion.ul
              initial="hidden"
              animate={pillsInView ? "show" : "hidden"}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-wrap gap-x-4 gap-y-1"
            >
              {about.stack.map((s) => (
                <motion.li
                  key={s}
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
                  }}
                  className="font-mono text-[12px] text-bone-dim"
                >
                  {s}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
