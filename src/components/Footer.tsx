"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslate } from "@/lib/langs/transaltion";

const Footer = () => {
  const [t] = useTranslate();

  const socialIcons = [
    { href: "#", icon: "/images/facebook.png", alt: "Facebook" },
    { href: "#", icon: "/images/instagram.png", alt: "Instagram" },
    { href: "#", icon: "/images/linkedin.png", alt: "LinkedIn" },
    { href: "#", icon: "/images/dribbble.png", alt: "Dribbble" },
    { href: "#", icon: "/images/twitter.png", alt: "Twitter" },
  ];

  const footerSections = [
    {
      title: t("services"),
      links: [
        t("service_1_title"),
        t("service_2_title"),
        t("service_3_title"),
        t("service_4_title"),
        t("service_5_title"),
        t("service_6_title"),
      ],
    },
    // {
    //   title: "Entreprise",
    //   links: [
    //     "Études de Cas",
    //     "Web design & Services",
    //     "A propos",
    //     "Nous contacter",
    //   ],
    // },
    // {
    //   title: "Informations Légales",
    //   links: ["Conditions Générales", "Confidentialité et Politique"],
    // },
  ];

  return (
    <footer className="pt-12 font-merriweather relative">
      <div className="cercle absolute hidden lg:block bottom-[20%] left-0 ">
        <svg
          width="400"
          height="400"
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
          ></rect>
        </svg>
      </div>
      <div className="cercle absolute hidden lg:block bottom-[20%] right-0 ">
        <svg
          width="350"
          height="350"
          viewBox="0 0 497 524"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="609" height="524" rx="262" fill="#EBF4F6" />
        </svg>
      </div>

      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid text-center md:text-start grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-navy-600">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="mb-4 mx-auto md:mx-0"
            />
            {/* <div className="flex space-x-4 mb-4 justify-center md:justify-start">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href}
                  className="text-navy-600 hover:text-teal-500 transition-colors"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div> */}
            <h2 className="font-bold mb-2">{t("address")}</h2>
            <p className="mb-1">+222 42001914</p>
            <p>contact@imz.mr</p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="text-navy-600">
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <span
                      // href="#"
                      className="hover:text-teal-500 transition-colors"
                    >
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="holder md:px-[4%] bg-navy-700">
        <div className="copyright flex flex-col md:flex-row justify-between items-center py-4 mx-auto text-[#fff]">
          <p>Copyright ©2026 Imz Agency. All Right Reserved</p>
          {/* <div className="flex gap-4 items-center">
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
