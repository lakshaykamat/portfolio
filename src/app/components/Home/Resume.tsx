"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Section from "../Common/Section";
import { resume } from "../../../data";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <Section id="resume" number="02" title="Resume">
      <motion.a
        ref={ref}
        href={resume.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeOut }}
        whileHover={{ y: -3 }}
        className="group relative block overflow-hidden
                   border border-ink-300 rounded-2xl
                   bg-ink-50/40 hover:border-ash-faint
                   transition-colors duration-300"
      >
        <motion.span
          aria-hidden
          className="absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r
                     from-transparent via-bone/[0.05] to-transparent
                     skew-x-12 pointer-events-none"
          initial={{ x: "-100%" }}
          whileHover={{ x: "400%" }}
          transition={{ duration: 1.1, ease: easeOut }}
        />

        <div className="flex items-end justify-between gap-8 p-8 md:p-12">
          <div>
            <p className="meta">↳ {resume.updated}</p>
            <p className="mt-6 font-serif text-bone text-3xl md:text-4xl leading-[1.1] tracking-tightest
                          group-hover:italic transition-[font-style] duration-300">
              Open the live document
            </p>
          </div>
          <ArrowUpRight
            size={28}
            className="shrink-0 text-ash-soft transition-all duration-300
                       group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </motion.a>
    </Section>
  );
}
