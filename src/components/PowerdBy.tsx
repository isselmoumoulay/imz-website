"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ScrollInAnimation } from "./scroll_in_animation";
import { useTranslate } from "@/lib/langs/transaltion";

const PowerdBy: React.FC = () => {
  const [t, lang] = useTranslate();

  const highlights = [
    t("service_2_title"),
    t("service_1_title"),
    t("service_3_title"),
    t("service_4_title"),
  ];

  return (
    <section
      id="PROPOS"
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-ink-600 to-ink-700 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-glow-navy blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Visual */}
        <ScrollInAnimation type="left">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-glow-teal blur-2xl" />
            <div className="overflow-hidden rounded-3xl glass p-6">
              <Image
                src="/images/power.png"
                alt="IMZ - agence digitale"
                width={580}
                height={580}
                className="h-auto w-full"
              />
            </div>
          </div>
        </ScrollInAnimation>

        {/* Copy */}
        <div className="text-center lg:text-start">
          <ScrollInAnimation type="right">
            <span className="eyebrow">{t("about")}</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              {t("about")} <span className="text-gradient">{lang === "fr" ? "d'" : ""}IMZ</span>
            </h2>
          </ScrollInAnimation>

          <ScrollInAnimation type="right" delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              {t("about_imz_text_1")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              {t("about_imz_text_2")}
            </p>
          </ScrollInAnimation>

          <ScrollInAnimation type="right" delay={0.2}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-start text-sm text-slate-300"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-teal-400"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </ScrollInAnimation>
        </div>
      </div>
    </section>
  );
};

export default PowerdBy;
