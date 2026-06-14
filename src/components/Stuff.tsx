"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Palette, LifeBuoy, Gauge } from "lucide-react";
import { Langage_key, useTranslate } from "@/lib/langs/transaltion";
import { staggerContainer, fadeUpItem } from "./scroll_in_animation";

const ICONS = [Smartphone, Globe, Code2, Palette, LifeBuoy, Gauge];

const Stuff: React.FC = () => {
  const [t] = useTranslate();

  const solutions = [1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    Icon: ICONS[id - 1],
    title: t(`service_${id}_title` as Langage_key),
    description: t(`service_${id}_text` as Langage_key),
  }));

  return (
    <section id="SERVICES" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-glow-teal blur-2xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {t("services")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl"
          >
            {t("our_services")}
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map(({ id, Icon, title, description }) => (
            <motion.article
              key={id}
              variants={fadeUpItem}
              className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/40 hover:shadow-glow"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-glow-teal opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-300 ring-1 ring-teal-500/20 transition-colors duration-300 group-hover:bg-teal-500/20">
                  <Icon size={26} />
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-sm font-semibold text-teal-500/70">
                    0{id}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stuff;
