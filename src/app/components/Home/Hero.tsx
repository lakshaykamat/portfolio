"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useRef } from "react";
import { hero } from "../../../data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const words = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const word = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: easeOut } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [first, ...rest] = hero.name.split(" ");
  const last = rest.join(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-10 overflow-hidden"
    >
      {/* Ambient glow — barely there, gives the black some depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2
                   h-[60vh] w-[90vw] rounded-full bg-bone/[0.03] blur-[120px]"
      />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-5xl w-full px-6 md:px-10 flex flex-col items-center text-center"
      >
        {/* Eyebrow — role + focus */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
          className="eyebrow mb-6 md:mb-8"
        >
          {hero.role} — {hero.focus}
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={words}
          initial="hidden"
          animate="show"
          aria-label={hero.name}
          className="font-display text-bone tracking-tightest leading-[1]
                     text-[clamp(2rem,9vw,7rem)]"
        >
          <span className="inline-block overflow-hidden align-bottom pb-[0.2em] -mb-[0.2em]">
            <motion.span
              variants={word}
              className="inline-block will-change-transform"
            >
              {first}
            </motion.span>
          </span>{" "}
          <span className="inline-block overflow-hidden align-bottom pb-[0.2em] -mb-[0.2em]">
            <motion.span
              variants={word}
              className="inline-block text-accent will-change-transform"
            >
              {last}.
            </motion.span>
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: easeOut }}
          className="mt-8 md:mt-10 max-w-xl text-ash text-base md:text-lg leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* Status */}
        {hero.status.available && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.05, ease: easeOut }}
            className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ash"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            {hero.status.label}
            {hero.status.currentlyAt && (
              <span className="text-ash-soft">· {hero.status.currentlyAt}</span>
            )}
          </motion.p>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: easeOut }}
          className="mt-10 md:mt-12 flex flex-wrap justify-center gap-3"
        >
          <Link href="#contact" className="btn-primary">
            Get in touch <Mail size={16} />
          </Link>
          <Link href="#about" aria-label="Scroll to about" className="btn-ghost">
            <ArrowDown size={16} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats strip — proof, not adjectives */}
      <motion.dl
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1.4 } } }}
        className="mx-auto max-w-5xl w-full px-6 md:px-10 mt-16 md:mt-20
                   grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-ink-300 pt-8"
      >
        {hero.stats.map((s) => (
          <motion.div
            key={s.label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
            }}
            className="text-center md:text-left"
          >
            <dd className="font-display text-bone text-3xl md:text-4xl tracking-tightest">
              {s.value}
            </dd>
            <dt className="meta mt-1.5">{s.label}</dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}
