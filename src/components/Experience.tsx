"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollInAnimation } from "./scroll_in_animation";
import { useTranslate } from "@/lib/langs/transaltion";

const Experience: React.FC = () => {
  const [t] = useTranslate();

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-ink-600 to-ink-700 py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-glow-teal blur-2xl opacity-70" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-glow-navy blur-2xl opacity-70" />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-start">
              <ScrollInAnimation type="left">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                  {t("innovation_title_1")}{" "}
                  <span className="text-gradient">{t("innovation_title_2")}</span>
                </h2>
              </ScrollInAnimation>
              <ScrollInAnimation type="left" delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-slate-400">
                  {t("innovation_text")}
                </p>
                <Link
                  href="#CONTACT_NOW"
                  className="btn-primary group mt-8 inline-flex"
                >
                  {t("call_to_action")}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </ScrollInAnimation>
            </div>

            <ScrollInAnimation type="right">
              <div className="relative mx-auto max-w-md">
                <Image
                  unoptimized
                  src="/images/experiences.png"
                  alt="Innovation IMZ"
                  width={500}
                  height={500}
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
            </ScrollInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
