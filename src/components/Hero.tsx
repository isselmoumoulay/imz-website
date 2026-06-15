"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Smartphone, Layers } from "lucide-react";
import { useTranslate } from "@/lib/langs/transaltion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { ease: EASE, duration: 0.7 } },
};

const Hero: React.FC = () => {
  const [t] = useTranslate();

  return (
    <section
      id="ACCUEIL"
      role="banner"
      aria-label="Section principale"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-900 pt-28 pb-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* grid */}
        <div className="absolute inset-0 bg-grid-faint bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* animated glows */}
        <motion.div
          aria-hidden
          className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-glow-teal blur-2xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-glow-navy blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-start"
        >
          <motion.div variants={item} className="flex justify-center lg:justify-start">
            <span className="eyebrow">
              <Sparkles size={13} />
              {t("tagline")}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl xl:text-6xl"
          >
            IMZ <span className="text-gradient">{t("title_1")}</span>
            <br />
            <span className="text-gradient">{t("title_2")}</span> {t("on_demand")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 lg:mx-0"
          >
            {t("subTitle")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link href="#CONTACT_NOW" className="btn-primary group w-full sm:w-auto">
              {t("call_to_action")}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link href="#PORTFOLIO" className="btn-ghost w-full sm:w-auto">
              {t("portfolio")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: floating visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            {/* glowing ring */}
            <div className="absolute inset-8 rounded-full border border-teal-500/20" />
            <div className="absolute inset-16 rounded-full border border-teal-500/10" />
            <motion.div
              className="absolute inset-0 rounded-full bg-glow-teal blur-2xl"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* central glass card */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-3xl glass-strong p-6 shadow-card"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="h-2.5 w-24 rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="mt-5 space-y-2.5">
                <div className="h-2.5 w-full rounded-full bg-white/10" />
                <div className="h-2.5 w-4/5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2/3 rounded-full bg-teal-500/30" />
              </div>
              <div className="mt-6 flex gap-2">
                <div className="h-8 flex-1 rounded-lg bg-gradient-to-r from-teal-400/80 to-teal-500/80" />
                <div className="h-8 w-8 rounded-lg bg-white/10" />
              </div>
            </motion.div>

            {/* floating chips */}
            <FloatingChip
              icon={<Smartphone size={18} />}
              className="left-0 top-10"
              delay={0}
            />
            <FloatingChip
              icon={<Layers size={18} />}
              className="bottom-12 right-0"
              delay={1.4}
            />
          </div>
        </motion.div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
};

function FloatingChip({
  icon,
  className,
  delay,
}: {
  icon: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl glass text-teal-300 shadow-glow-sm ${className}`}
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {icon}
    </motion.div>
  );
}

export default Hero;
