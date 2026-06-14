"use client";
import { useTranslate } from "@/lib/langs/transaltion";
import { useForm } from "@formspree/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";
import { ScrollInAnimation } from "./scroll_in_animation";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xanwaoyo");
  const [t] = useTranslate();

  const inputClass =
    "mt-2 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-teal-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-teal-500/20";

  const contactInfo = [
    { icon: Phone, label: "+222 42001914" },
    { icon: Mail, label: "contact@imz.mr" },
    { icon: MapPin, label: "Nouadhibou, Mauritanie" },
  ];

  return (
    <section
      id="CONTACT_NOW"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-glow-teal blur-2xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: heading + contact info */}
          <ScrollInAnimation type="left">
            <span className="eyebrow">{t("contact")}</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              {t("contact_us")}{" "}
              <span className="text-gradient">{t("from_now")}</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-400">
              {t("subTitle")}
            </p>

            <ul className="mt-10 space-y-4">
              {contactInfo.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300 ring-1 ring-teal-500/20">
                    <Icon size={18} />
                  </span>
                  <span className="text-slate-300">{label}</span>
                </li>
              ))}
            </ul>
          </ScrollInAnimation>

          {/* Right: form */}
          <ScrollInAnimation type="right" delay={0.1}>
            <div className="rounded-3xl glass-strong p-7 shadow-card sm:p-9">
              <form
                onSubmit={async (e) => {
                  await handleSubmit(e);
                }}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300"
                  >
                    {t("name")}
                  </label>
                  <input type="text" id="name" name="name" className={inputClass} />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={inputClass}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 disabled:opacity-40 ${
                    state.succeeded
                      ? "bg-green-500/90 text-white"
                      : "btn-primary !w-full"
                  }`}
                >
                  {state.submitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : state.succeeded ? (
                    t("thanks")
                  ) : (
                    <>
                      {t("send")}
                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollInAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
