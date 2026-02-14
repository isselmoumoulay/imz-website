"use client";
import React from "react";
import Image from "next/image";
import { ScrollInAnimation } from "./scroll_in_animation";
import { useTranslate } from "@/lib/langs/transaltion";
interface Sponsor {
  name: string;
  logo: string;
  description: string;
}

const TeamMember: React.FC<Sponsor> = ({ name, logo, description }) => (
  <div
    className={
      "flex  relative flex-col items-center gap-y-8 py-10 p-4 bg-white rounded-[70px] border-2 " +
      (description ? "group" : "")
    }
  >
    <Image
      src={logo}
      alt={name}
      width={150}
      height={150}
      className="rounded-full mb-4 md:w-[150px] md:h-[150px] group-hover:opacity-30"
    />
    <h3 className="font-semibold text-center  text-slate-700 text-xl group-hover:opacity-30">
      {name}
    </h3>
    <p className="absolute font-medium font-merriweather mx-10 inset-x-0 top-20 flex items-center justify-center transition-all opacity-0 z-40 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0">
      {description}
    </p>
  </div>
);

const SponsorsSection: React.FC = () => {
  const [t] = useTranslate();
  const sponsors: Sponsor[] = [
    {
      name: "Direction tresor nouadhibou",
      logo: "/images/sponsors/rim.png",

      description: "",
    },
    {
      name: "Garde côte mauritanienne",
      logo: "/images/sponsors/gcm.png",
      description: "",
      // "adajsdjas`diasd asdas das dsad adajs djas`dias dasdas dasdsad adaj sdjas`dias dasdas dasd sad adaj sdjas`diasd asdas dasdsad adaj sdjas`dias dasdas das dsad adajs djas`dias dasdas dasd sad",
    },
    {
      name: "Bureau el moustafa consulting",
      logo: "/images/sponsors/bemc.jpeg",
      description: "",
    },
    {
      name: "Commue de nouadhibou",
      logo: "/images/sponsors/nouad.jpeg",

      description: "",
    },
    {
      name: "Banque Centrale De Mauritanie",
      logo: "/images/sponsors/bcm.png",

      description: "",
    },
    {
      name: "ONISPA",
      logo: "/images/sponsors/onispa.png",

      description: "",
    },
    {
      name: "Port de Tanit",
      logo: "/images/sponsors/port_tanit.png",

      description: "",
    },
  ];
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  return (
    <section id="RÉFÉRENCES" className=" py-12 px-[8%] font-merriweather">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl text-center font-bold w-fit mx-auto text-navy-600 relative">
          <p className="relative text-center z-40">{t("our_references")}</p>
          <span className="absolute bottom-0 left-0 w-full h-4 bg-teal-500"></span>
        </h2>
        <p className="text-xl md:text-3xl my-8 text-center font-semibold text-slate-700">
          {t("they_trust_us")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {sponsors.map((sponsor, index) => (
            <ScrollInAnimation
              key={index}
              type="rotate"
              delay={index * 0.1}
              duration={0.3}
            >
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={` transition-all rounded-[70px] ${
                  index === hoverIndex ? "scale-[1.05] shadow-xl" : ""
                } ${
                  hoverIndex !== null && index !== hoverIndex
                    ? "opacity-50"
                    : ""
                }`}
              >
                <TeamMember key={index} {...sponsor} />
              </div>
            </ScrollInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
