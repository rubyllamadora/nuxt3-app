import { LocaleObject } from "@nuxtjs/i18n";
import { LinkPropertyHref } from "vue-meta/types";

const convertLocalePath = (
  localeRegex: RegExp,
  path: string,
  locale: LocaleObject
): string => {
  if (!locale.prefixLocale) {
    return `${locale.domain}${path.replace(localeRegex, "")}`;
  }

  if (!path.match(localeRegex)) {
    return `${locale.domain}/${locale.code}${path}`;
  }

  return `${locale.domain}${path.replace(localeRegex, `/${locale.code}`)}`;
};

export const convertHreflangLinks = (
  path: string,
  locales: LocaleObject[]
): LinkPropertyHref[] => {
  const links: LinkPropertyHref[] = [];

  const localeRegex = new RegExp(
    `^(/(${locales
      .map((locale: LocaleObject) => {
        return `${locale.code}`;
      })
      .join("|")}))`,
    "g"
  );

  locales.forEach((locale: LocaleObject) => {
    if (!locale.iso) {
      return;
    }

    links.push({
      rel: "alternate",
      href: convertLocalePath(localeRegex, path, locale),
      hreflang: locale.iso,
    });

    if (locale.includeHrefCountries && locale.countries) {
      const countries = locale.countries.split(",");
      const language = locale.iso.split("-")[0];

      countries.forEach((country: string) => {
        links.push({
          rel: "alternate",
          href: convertLocalePath(localeRegex, path, locale),
          hreflang: `${language}-${country}`,
        });
      });
    }

    if (locale.customHrefLangs) {
      const customHrefLangs = locale.customHrefLangs.split(",");
      customHrefLangs.forEach((customHreflang: string) => {
        links.push({
          rel: "alternate",
          href: convertLocalePath(localeRegex, path, locale),
          hreflang: customHreflang,
        });
      });
    }

    if (locale.default) {
      links.push({
        rel: "alternate",
        href: convertLocalePath(localeRegex, path, locale),
        hreflang: "x-default",
      });
    }
  });

  return links;
};
