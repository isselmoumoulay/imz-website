"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import { Langage_key, useTranslate } from "@/lib/langs/transaltion";

const VISITORS_BASE = 1755;

function VisitorCounter() {
  const [t] = useTranslate();
  const [count, setCount] = useState(VISITORS_BASE);

  useEffect(() => {
    let cancelled = false;
    let controls: { stop: () => void } | undefined;

    const ns = "imz-website";
    const key = "visits";
    const visited =
      typeof window !== "undefined" && sessionStorage.getItem("imz_visited");
    const url = visited
      ? `https://abacus.jasoncameron.dev/get/${ns}/${key}`
      : `https://abacus.jasoncameron.dev/hit/${ns}/${key}`;

    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        sessionStorage.setItem("imz_visited", "1");
        const target =
          VISITORS_BASE + (typeof d?.value === "number" ? d.value : 0);
        controls = animate(VISITORS_BASE, target, {
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => setCount(Math.round(v)),
        });
      })
      .catch(() => {
        /* affichage de la base si le service est indisponible */
      });

    return () => {
      cancelled = true;
      controls?.stop();
    };
  }, []);

  return (
    <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-300 ring-1 ring-teal-500/20">
        <Eye size={16} />
      </span>
      <div>
        <div className="font-display text-lg font-bold leading-none text-white">
          {count.toLocaleString("fr-FR")}
        </div>
        <div className="mt-1 text-xs text-slate-400">{t("visitors")}</div>
      </div>
    </div>
  );
}

const Footer = () => {
  const [t] = useTranslate();

  const socials = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Twitter, label: "Twitter" },
  ];

  const navLinks = [
    { href: "#ACCUEIL", label: t("home") },
    { href: "#PROPOS", label: t("about") },
    { href: "#SERVICES", label: t("services") },
    { href: "#PORTFOLIO", label: t("portfolio") },
    { href: "#RÉFÉRENCES", label: t("references") },
    { href: "#CONTACT_NOW", label: t("contact") },
  ];

  const services = [1, 2, 3, 4, 5, 6].map(
    (id) => t(`service_${id}_title` as Langage_key)
  );

  const contact = [
    { icon: Phone, label: "+222 42001914", href: "tel:+22242001914" },
    { icon: Mail, label: "contact@imz.mr", href: "mailto:contact@imz.mr" },
    { icon: MapPin, label: "Nouadhibou, Mauritanie", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-800">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-glow-teal blur-2xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/images/logo.png"
              alt="IMZ"
              width={110}
              height={42}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              {t("subTitle")}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300"
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>

            <VisitorCounter />
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t("services")}
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#SERVICES"
                    className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t("contact")}
            </h3>
            <ul className="mt-5 space-y-4">
              {contact.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-teal-300"
                  >
                    <Icon
                      size={17}
                      className="mt-0.5 shrink-0 text-teal-400"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#CONTACT_NOW"
              className="btn-ghost mt-6 inline-flex !py-2.5 !px-4 text-sm"
            >
              {t("call_to_action")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} IMZ Agency. Tous droits réservés.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer transition-colors hover:text-slate-300">
              Politique de confidentialité
            </span>
            <span className="cursor-pointer transition-colors hover:text-slate-300">
              Conditions d&apos;utilisation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
