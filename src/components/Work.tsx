"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, FolderCheck, CalendarClock, Heart } from "lucide-react";
import { useTranslate } from "@/lib/langs/transaltion";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const Projects: React.FC = () => {
  const [t] = useTranslate();

  const stats = [
    { icon: Users, value: 12, suffix: "+", label: t("experts_dev") },
    { icon: FolderCheck, value: 11, suffix: "+", label: t("projects_realized") },
    { icon: CalendarClock, value: 3, suffix: "", label: t("years_of_experience") },
    { icon: Heart, value: 7, suffix: "", label: t("unique_clients") },
  ];

  return (
    <section id="PORTFOLIO" className="relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t("our_experience")}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            {t("our_experience")}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl glass p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/40 hover:shadow-glow"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300 ring-1 ring-teal-500/20">
                <Icon size={22} />
              </div>
              <div className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
                <CountUp to={value} suffix={suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
