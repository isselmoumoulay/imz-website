"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollInAnimation } from "./scroll_in_animation";
import { useTranslate } from "@/lib/langs/transaltion";

const PowerdBy: React.FC = () => {
  const [t, lang] = useTranslate();
  return (
    <div
      id="PROPOS"
      className=" py-16 px-[9%] w-full text-center md:text-start font-merriweather"
    >
      <div className="gap-10 md:gap-52 flex justify-between flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <ScrollInAnimation type="left">
            <>
              <Image
                src="/images/power.png"
                alt="Digital Creations Illustration"
                width={580}
                height={580}
                // className="w-full h-auto"
              />
            </>
          </ScrollInAnimation>
        </div>
        <div className="lg:w-[600px] lg:pr-8 ">
          <ScrollInAnimation type="right">
            <h1
              // this will be used to scroll to this section with #ABOUT US TITLE
              className="text-4xl sm:text-5xl font-bold text-navy-600 mb-4 "
            >
              {t("about")}
              <div className="relative w-fit mx-auto md:mx-0">
                <p className="relative z-10  text-center">
                  {lang === "fr" ? "d`" : ""}IMZ
                </p>
                <span className="absolute bottom-0 left-0 w-full h-4 bg-teal-500"></span>
              </div>
            </h1>
          </ScrollInAnimation>
          <ScrollInAnimation type="right" delay={0.2}>
            <p className="text-lg text-gray-700 mb-8">
              {t("about_imz_text_1")}
              <br />
              <br />
              {t("about_imz_text_2")}
            </p>
          </ScrollInAnimation>
          {/* <ScrollInAnimation type="right" delay={0.4}>
            <div className="links flex items-center md:flex-row flex-col">
              <Link
                href="/portfolio"
                className="inline-block bg-navy-600 text-white font-bold py-3 px-6 hover:bg-navy-700 shadow-2xl transition duration-300"
              >
                En savoir plus
              </Link>
              <Link
                href="/portfolio"
                className="inline-block text-navy-600 flex items-center gap-4 font-bold mt-4 md:mt-0 py-3 px-6 mx-autoshadow-2xl "
              >
                <img
                  className="w-[50px]"
                  src="/images/play.png"
                  alt="play.png"
                />
                <p>Regarder la vidéo</p>
              </Link>
            </div>
          </ScrollInAnimation> */}
        </div>
      </div>
    </div>
  );
};

export default PowerdBy;
