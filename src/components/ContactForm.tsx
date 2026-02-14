"use client";
import { useTranslate } from "@/lib/langs/transaltion";
import { useForm } from "@formspree/react";
import React from "react";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xanwaoyo");
  const [t] = useTranslate();
  return (
    <div
      id="CONTACT_NOW"
      className="w-full mx-auto px-4 py-32 sm:px-6 lg:px-8 font-merriweather"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="grow-[2]">
          <img
            src="/images/form.png"
            alt="Person working at desk"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div>
          {/* <h2 className="text-3xl font-bold text-navy-600 mb-2">Besoin </h2> */}
          <h3 className="text-3xl relative w-fit font-bold text-navy-600 mb-2">
            <p className="relative z-10">{t("contact_us")}</p>
            <span className="absolute -bottom-1 left-0 w-full h-4 bg-teal-500"></span>
          </h3>
          <p className="text-3xl font-bold text-navy-600 mb-2">
            {t("from_now")}
          </p>

          <form
            onSubmit={async (e) => {
              await handleSubmit(e);
            }}
            className="space-y-6 md:max-w-[80%]"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 bg-[#ebf4f6] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 bg-[#ebf4f6] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 bg-[#ebf4f6] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full disabled:opacity-30 font-bold flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm  text-white hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 ${state.succeeded ? "bg-green-700" : "bg-navy-600"}`}
              >
                {state.submitting
                  ? "..."
                  : state.succeeded
                    ? t("thanks")
                    : t("send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
