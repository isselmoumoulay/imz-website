"use client";
import React from "react";
import Image from "next/image";
import { ScrollInAnimation } from "./scroll_in_animation";
import { Langage_key, useTranslate } from "@/lib/langs/transaltion";

const Stuff: React.FC = () => {
  const [t] = useTranslate();

  //list.generate(6)
  const solutions = [1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    title: t(`service_${id}_title` as Langage_key),
    description: t(`service_${id}_text` as Langage_key),
  }));

  return (
    <div id="SERVICES" className="relative py-16 px-[8%] mt-32 ">
      <div className="absolute left-0 top-[190px] lg:top-[190px] w-1/2 h-1/2 z-10 hidden md:block">
        <div className="w-full h-full ">
          <svg
            className="lg:w-[580px] lg:h-[671px] w-[500px] h-[500px]"
            viewBox="0 0 580 671"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-200"
              y="0.0458984"
              width="780"
              height="670"
              rx="335"
              fill="#EBF4F6"
            />
          </svg>
        </div>
      </div>
      <div className="bg-white py-16 px-4 relative sm:px-6 lg:px-8 font-merriweather">
        <div className="mx-auto">
          <h2 className="text-4xl sm:text-5xl text-center font-bold text-navy-600 mb-8 relative inline-block">
            <p className="relative text-center mx-auto z-40">
              {t("our_services")}
            </p>
            <span className="absolute bottom-0 left-0 w-full h-4 bg-teal-500"></span>
          </h2>

          <div className="holder flex relative z-40 md:gap-[120px] md:flex-row flex-col-reverse">
            <div className="relative mt-14">
              {solutions.slice(3, 6).map((solution, index) => (
                <ScrollInAnimation
                  key={solution.id}
                  type="left"
                  delay={1.2 + index * 0.4}
                >
                  <div
                    key={solution.id}
                    className="flex flex-col md:items-start mt-10 md:text-left"
                  >
                    <div className="row flex flex-col md:flex-row gap-4">
                      <div className="text-5xl text-teal-500 mb-2 stroke font-semibold">
                        {solution.id}
                      </div>
                      <div className="text">
                        <h3 className="text-[28px] font-bold text-navy-700 mb-2 ">
                          {solution.title}
                        </h3>
                        <p className="text-navy-600 text-[18px]">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollInAnimation>
              ))}
            </div>
            <div className="relative">
              {solutions.slice(0, 3).map((solution, index) => (
                <ScrollInAnimation
                  key={solution.id}
                  type="right"
                  delay={index * 0.4}
                >
                  <div
                    key={solution.id}
                    className="flex flex-col md:items-start mt-10 md:text-left"
                  >
                    <div className="row flex flex-col md:flex-row gap-4">
                      <div className="text-5xl text-teal-500 mb-2 stroke font-semibold">
                        {solution.id}
                      </div>
                      <div className="text">
                        <h3 className="text-[28px] font-bold text-navy-700 mb-2 ">
                          {solution.title}
                        </h3>
                        <p className="text-navy-600 text-[18px]">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollInAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stuff;
