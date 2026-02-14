"use client";

import Hero from "@/components/Hero";
import { Suspense, lazy, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Lazy loading pour les composants lourds
const PowerdBy = lazy(() => import("@/components/PowerdBy"));
const Stuff = lazy(() => import("@/components/Stuff"));
const Experience = lazy(() => import("@/components/Experience"));
const Projects = lazy(() => import("@/components/Work"));
const SponsorsSection = lazy(() => import("@/components/Team"));
const ContactForm = lazy(() => import("@/components/ContactForm"));

// Composant de chargement
const LoadingSection = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-teal-500 text-xl">Chargement...</div>
  </div>
);

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams?.get("lang") || "fr";

  useEffect(() => {
    // Appliquer la direction RTL pour l'arabe
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <Suspense fallback={<LoadingSection />}>
        <PowerdBy />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Stuff />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <SponsorsSection />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
