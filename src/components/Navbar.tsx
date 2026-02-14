"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslate } from "@/lib/langs/transaltion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [t] = useTranslate();

  return (
    <nav className="relative shadow-md">
      <div className="holder flex items-center justify-between w-full mx-auto px-4 py-2">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={100}
              height={40}
              alt="IMZ Logo"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <ul className="flex gap-8 uppercase">
            <NavItem href="#ACCUEIL">{t("home")}</NavItem>
            <NavItem href="#PROPOS">{t("about")}</NavItem>
            <NavItem href="#SERVICES">{t("services")}</NavItem>
            <NavItem href="#PORTFOLIO">{t("portfolio")}</NavItem>
            <NavItem href="#RÉFÉRENCES">{t("references")}</NavItem>
          </ul>
          <Link
            href="#CONTACT_NOW"
            className="ml-8 uppercase px-6 font-merriweather font-bold py-4 bg-navy-600 text-white hover:bg-navy-700 transition-colors"
          >
            {t("contact")}
          </Link>
          <div className="ml-8 mr-4">
            <LangageFlag />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <div className="mr-8">
            <LangageFlag />
          </div>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="text-gray-500"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="32"
              height="15"
              viewBox="0 0 32 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.23779"
                x2="32"
                y2="1.23779"
                stroke="#088395"
                strokeWidth="2"
              />
              <line
                y1="13.2378"
                x2="32"
                y2="13.2378"
                stroke="#088395"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="absolute z-10 bg-white md:hidden border-t-navy-600 top-16 left-0 right-0 shadow-md"
              role="navigation"
              aria-label="Menu mobile"
            >
              <ul className="flex uppercase flex-col font-merriweather mt-10">
                {Object.entries({
                  "#ACCUEIL": t("home"),
                  "#PROPOS": t("about"),
                  "#SERVICES": t("services"),
                  "#PORTFOLIO": t("portfolio"),
                  "#RÉFÉRENCES": t("references"),
                }).map(([key, value]) => (
                  <MobileNavItem
                    key={key}
                    href={value}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {value}
                  </MobileNavItem>
                ))}

                <li>
                  <Link
                    href="#CONTACT_NOW"
                    onClick={() => setIsMenuOpen(false)}
                    className="block uppercase font-merriweather mt-4 py-2 px-4 text-center bg-navy-600 text-white hover:bg-navy-700 transition-colors"
                  >
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li className="group">
    <Link
      href={href}
      className="text-navy-600 font-merriweather font-bold relative"
    >
      {children}
      <span className="absolute left-0 -bottom-2 font-merriweather w-full h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </Link>
  </li>
);

const MobileNavItem = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      className="block font-bold font-merriweather py-2 px-4 text-gray-700 hover:bg-gray-100 transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Navbar;

function LangageFlag() {
  const [_, lang, setLang] = useTranslate();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Sélectionner la langue"
      >
        <span className="text-sm font-medium">{currentLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setLang(language.code as "fr" | "en" | "ar");
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors ${
                lang === language.code ? "bg-teal-50 text-teal-600" : ""
              }`}
            >
              <span className="text-sm font-medium">{language.name}</span>
              {lang === language.code && (
                <svg className="w-4 h-4 ml-auto text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
