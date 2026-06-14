"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslate } from "@/lib/langs/transaltion";
import { staggerContainer, fadeUpItem } from "./scroll_in_animation";

interface Sponsor {
  name: string;
  logo: string;
}

const SponsorsSection: React.FC = () => {
  const [t] = useTranslate();

  const sponsors: Sponsor[] = [
    { name: "Direction Trésor Nouadhibou", logo: "/images/sponsors/rim.png" },
    { name: "Garde Côte Mauritanienne", logo: "/images/sponsors/gcm.png" },
    { name: "Bureau El Moustafa Consulting", logo: "/images/sponsors/bemc.jpeg" },
    { name: "Commune de Nouadhibou", logo: "/images/sponsors/nouad.jpeg" },
    { name: "Banque Centrale de Mauritanie", logo: "/images/sponsors/bcm.png" },
    { name: "ONISPA", logo: "/images/sponsors/onispa.png" },
    { name: "Port de Tanit", logo: "/images/sponsors/port_tanit.png" },
  ];

  return (
    <section id="RÉFÉRENCES" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-glow-navy blur-2xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{t("our_references")}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            {t("they_trust_us")}
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              variants={fadeUpItem}
              className="group flex flex-col items-center gap-4 rounded-2xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-500/40 hover:shadow-glow"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-xl bg-white/90 p-4 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={140}
                  height={90}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-sm font-medium leading-snug text-slate-300">
                {sponsor.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
