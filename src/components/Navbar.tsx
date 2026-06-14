"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Check, Globe } from "lucide-react";
import { useTranslate } from "@/lib/langs/transaltion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [t] = useTranslate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#ACCUEIL", label: t("home") },
    { href: "#PROPOS", label: t("about") },
    { href: "#SERVICES", label: t("services") },
    { href: "#PORTFOLIO", label: t("portfolio") },
    { href: "#RÉFÉRENCES", label: t("references") },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          <Link href="/" className="relative flex items-center" aria-label="IMZ - Accueil">
            <Image
              src="/images/logo.png"
              width={96}
              height={38}
              alt="IMZ Logo"
              className="h-9 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavItem key={link.href} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LangageFlag />
            <Link href="#CONTACT_NOW" className="btn-primary !px-5 !py-2.5 text-sm">
              {t("contact")}
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <LangageFlag />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-100 transition-colors hover:bg-white/10"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/95 backdrop-blur-xl lg:hidden"
            role="navigation"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col p-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-teal-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 p-1">
                <Link
                  href="#CONTACT_NOW"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group relative rounded-lg px-4 py-2 text-sm font-medium uppercase tracking-wide text-slate-300 transition-colors hover:text-white"
  >
    {children}
    <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-teal-400 to-teal-500 transition-transform duration-300 group-hover:scale-x-100" />
  </Link>
);

export default Navbar;

function LangageFlag() {
  const [_, lang, setLang] = useTranslate();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: "fr", name: "Français", short: "FR" },
    { code: "en", name: "English", short: "EN" },
    { code: "ar", name: "العربية", short: "AR" },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
        aria-label="Sélectionner la langue"
      >
        <Globe size={15} className="text-teal-400" />
        <span>{currentLang.short}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-ink-800/95 p-1.5 shadow-card backdrop-blur-xl"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setLang(language.code as "fr" | "en" | "ar");
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5 ${
                    lang === language.code ? "text-teal-300" : "text-slate-200"
                  }`}
                >
                  <span className="font-medium">{language.name}</span>
                  {lang === language.code && (
                    <Check size={15} className="ml-auto text-teal-400" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
