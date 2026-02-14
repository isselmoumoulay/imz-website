"use client";
import fr_file from "./fr.json";
import en_file from "./en.json";
import ar_file from "./ar.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

//fr_file is json read from fr.json

const langs = {
  fr: fr_file,
  en: en_file,
  ar: ar_file,
};

type Langs = keyof typeof langs;

// export keyof typeof fr_file

export type Langage_key = keyof typeof fr_file;
export function useTranslate(): [
  (key: Langage_key) => string,
  Langs,
  (new_lang: Langs) => void,
] {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  let lang = searchParams?.get("lang") || "fr";

  if (!Object.keys(langs).includes(lang)) {
    lang = "fr";
  }

  return [
    (key: keyof typeof fr_file) => langs[lang as Langs][key] ?? "",
    lang as Langs,
    (new_lang: Langs) => {
      if (!searchParams) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", new_lang);
      router.push(pathName + "?" + params.toString());
    },
  ];
}
