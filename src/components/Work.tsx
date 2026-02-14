"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { use, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslate } from "@/lib/langs/transaltion";

type ProjectCategory =
  | "TOUT"
  | "SITE_WEB"
  | "APPLICATION_MOBILE"
  | "SYSTEME_DE_GESTION";

const ProjectCategoryNames: {
  [key: string]: string;
} = {
  TOUT: "Tout",
  SITE_WEB: "Site Web",
  APPLICATION_MOBILE: "Application Mobile",
  SYSTEME_DE_GESTION: "Système de Gestion",
};

function ProjectCard({ project }: { project: ProjectInterface }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {
        <Dialog.Root open={open}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-20 flex items-center justify-center bg-black opacity-70" />
            <AnimatePresence>
              <Dialog.Content
                className="fixed left-1/2 top-1/2 z-50 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 lg:h-max items-center justify-center lg:max-h-[90%] lg:w-max lg:rounded-2xl"
                forceMount
                onClick={() => setOpen(false)}
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={
                    {
                      // ease: "easeInOut",
                    }
                  }
                  src={project.image}
                  alt=""
                  className="object-contain rounded w-[90vw]"
                />
              </Dialog.Content>
            </AnimatePresence>
          </Dialog.Portal>
        </Dialog.Root>
      }
      <AnimatePresence>
        <motion.img
          onClick={() => setOpen(true)}
          key={project.image}
          src={project.image}
          alt=""
          // exit={{ opacity: 0 }}

          layout
          className={`rounded cursor-zoom-in border border-gray-200 object-contain bg-gray-50 h-full max-h-[600px] w-full min-h-[250px] lg:col-span-${project.colSpan} lg:row-span-${project.rowSpan}`}
        />
      </AnimatePresence>
    </>
  );
}

interface ProjectInterface {
  image: string;
  colSpan: number;
  rowSpan: number;
  category: ProjectCategory;
}

const Projects: React.FC = () => {
  const [t] = useTranslate();

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("TOUT");

  const projects: ProjectInterface[] = [
    {
      image: "/images/projects/gcm.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SITE_WEB",
    },
    {
      image: "/images/projects/gcm 2.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SITE_WEB",
    },
    {
      image: "/images/projects/gcm_mobile.png",
      colSpan: 1,
      rowSpan: 2,
      category: "APPLICATION_MOBILE",
    },
    {
      image: "/images/projects/gestion 1.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SYSTEME_DE_GESTION",
    },
    {
      image: "/images/projects/gestion 2.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SYSTEME_DE_GESTION",
    },
    {
      image: "/images/projects/gestion 3.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SYSTEME_DE_GESTION",
    },
    {
      image: "/images/projects/gestion 4.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SYSTEME_DE_GESTION",
    },
    {
      image: "/images/projects/gestion 5.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SYSTEME_DE_GESTION",
    },
    {
      image: "/images/projects/gvim.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SITE_WEB",
    },
    {
      image: "/images/projects/ma_maison.jpg",
      colSpan: 1,
      rowSpan: 1,
      category: "APPLICATION_MOBILE",
    },
    {
      image: "/images/projects/tresor_1.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SITE_WEB",
    },
    {
      image: "/images/projects/tresor_2.png",
      colSpan: 1,
      rowSpan: 1,
      category: "SITE_WEB",
    },
  ];
  let map: { [key: string]: string } = {};
  map[t("experts_dev")] = "12";
  map[t("projects_realized")] = "11";
  map[t("years_of_experience")] = "3";
  map[t("unique_clients")] = "7";

  return (
    <div id="PORTFOLIO" className="mx-auto py-32 w-full">
      <h2 className="text-4xl sm:text-5xl text-center font-bold w-fit mx-auto text-navy-600 mb-16 relative">
        <p className="relative text-center z-40">{t("our_experience")}</p>
        <span className="absolute bottom-0 left-0 w-full h-4 bg-teal-500"></span>
      </h2>
      <div className="w-full py-14 bg-[url('/images/noise.png')] gap-y-8 bg-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-evenly">
        {Object.entries(map).map(([key, value], index) => (
          <div
            key={key}
            className="flex flex-col items-center gap-y-2 md:gap-y-6 text-white"
          >
            <h2 className="text-3xl md:text-5xl text-navy-700">{value}</h2>
            <p className="text-xs md:text-lg font-semibold text-black ">
              {key}
            </p>
          </div>
        ))}
      </div>
      {/* <h2 className="text-4xl sm:text-5xl text-center font-bold w-fit mx-auto text-navy-600 mb-16 relative">
        <p className="relative text-center z-40">Projets Réalisés</p>
        <span className="absolute bottom-0 left-0 w-full h-4 bg-teal-500"></span>
      </h2>
      <div className="flex flex-wrap md:text-xl mb-10 justify-center">
        {Object.entries(ProjectCategoryNames).map(([key, value], index) => (
          <button
            key={value}
            className={`mr-4 mb-2 px-1 py-2 font-medium rounded-sm transition-colors ${
              key === activeCategory
                ? "bg-teal-700 text-white"
                : "text-navy-700 hover:bg-teal-500"
            }`}
            onClick={() => {
              setActiveCategory(key as ProjectCategory);
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="container mx-auto p-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4"
          layout
        >
          {projects
            .filter((p) => {
              if (activeCategory === "TOUT") return true;
              return p.category === activeCategory;
            })
            .map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </motion.div>
      </div>
     */}
    </div>
  );
};

export default Projects;
