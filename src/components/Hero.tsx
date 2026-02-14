"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollInAnimation } from "./scroll_in_animation";
import { motion } from "framer-motion";
import { useTranslate } from "@/lib/langs/transaltion";

const Line: React.FC = () => {
  function animatePath() {
    const svg = document.getElementById("svg");
    const path = document.querySelector(".svg-elem-1");
    svg?.classList.add("active");
  }

  return (
    <motion.svg
      onViewportEnter={animatePath}
      id="svg"
      // className="w-[685px] h-[640px]"
      className="w-full h-[640px] "
      viewBox="0 0 685 641"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M474.983 638C-521.644 219.07 312.536 -17.8405 684 4.44298"
        stroke="white"
        strokeWidth="5"
        className="svg-elem-1"
        aria-hidden="true"
      ></path>
    </motion.svg>
  );
};
const Hero: React.FC = () => {
  const [t, lang] = useTranslate();
  return (
    <div
      style={{
        background: `url('/images/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex px-[9%] w-full justify-between md:h-screen relative flex-col xl:flex-row items-center text-center lg:text-start font-merriweather"
      role="banner"
      aria-label="Section principale"
    >
      <div className="flex max-w-[800px] flex-col items-start">
        <ScrollInAnimation type="scale">
          <>
            <div className="max-w-[800px] flex lg:gap-y-[20px] flex-col lg:text-[50px] xl:text-[70px] mt-20 lg:mt-0 text-3xl font-merriweather lg:leading-[80px] font-black text-white mb-4">
              <h1>
                IMZ <span className="text-teal-500">{t("title_1")}</span>
              </h1>
              <h1>
                <span className="text-teal-500">{t("title_2")} </span>
                {t("on_demand")}
              </h1>
            </div>
            <p className=" text-white font-merriweather font-light mb-8 md:text-[18px] lg:text-[24px] leading-[50px]">
              {t("subTitle")}
            </p>
            <Link
              href="#CONTACT_NOW"
              className="font-merriweather bg-teal-500 text-white font-bold py-3 px-6 mt-16 hover:bg-navy-700 shadow-2xl transition duration-300"
              aria-label="Nous contacter maintenant"
            >
              {t("call_to_action")}
            </Link>
          </>
        </ScrollInAnimation>
      </div>

      <div className="lg:w-[40%]">
        <Line />
      </div>
    </div>
  );
};

export default Hero;
