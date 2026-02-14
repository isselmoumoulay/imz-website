"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollInAnimation } from "./scroll_in_animation";
import { useTranslate } from "@/lib/langs/transaltion";

const Experience: React.FC = () => {
  const [t] = useTranslate();
  return (
    <div className="px-[8%]">
      <ScrollInAnimation type="bot" duration={2}>
        <div className="bg-white  py-32 sm:px-6 lg:px-8 text-center md:text-start font-merriweather">
          <div className="mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-600 w-fit mb-4">
                {t("innovation_title_1")}

                <div className="relative">
                  <p className="relative z-20">{t("innovation_title_2")}</p>
                  <span className="absolute bottom-0 left-0 w-full h-5 bg-teal-500"></span>
                </div>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                {t("innovation_text")}
              </p>
              {/* <Link
                href="/"
                className="inline-block shadow-2xl bg-navy-600 text-white font-bold py-3 px-6 mt-16 mx-auto hover:bg-navy-700  transition duration-300"
              >
                En savoir plus
              </Link> */}
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <Image
                unoptimized
                src="/images/experiences.png"
                alt="Digital Creations Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </ScrollInAnimation>
    </div>
  );
};

export default Experience;
