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
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-5xl w-full px-6 md:px-10 flex flex-col items-center text-center"
      >
        {/* Name */}
        <motion.h1
          variants={words}
          initial="hidden"
          animate="show"
          aria-label={hero.name}
          className="font-serif text-bone tracking-tightest leading-[1]
                     text-[clamp(2.5rem,9vw,7rem)] whitespace-nowrap"
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
              className="inline-block italic will-change-transform"
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: easeOut }}
          className="mt-10 md:mt-12 flex gap-3"
        >
          <Link href="#contact" className="btn-primary">
            Get in touch <Mail size={16} />
          </Link>
          <Link href="#about" aria-label="Scroll to about" className="btn-ghost">
            <ArrowDown size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
