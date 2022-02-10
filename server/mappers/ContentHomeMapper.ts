// import { LocaleObject } from "@nuxtjs/i18n";
import themes from "../mocks/Themes";
// import { convertHreflangLinks } from "./LinkMapper";
import { imageMapper } from "./ImageMapper";
import ContentHome from "lib/types/ContentHome";

export const contentHomeMapper = (
  path: string,
  localeCode: string = "en",
  locales: Array<any>
): ContentHome => {
  if (!locales.find((locale) => locale.code === localeCode)) {
    localeCode = "en";
  }

  return {
    title: `It’s time for a new journey (${localeCode})`,
    banner: imageMapper(
      "https://images.contentstack.io/v3/assets/blt1c7660199c8c0021/blt0495bdee43af38b8/61a7eca2d3b0c82a791e6b6e/home-banner-original.jpg",
      "Mexico",
      1920,
      1285
    ),
    introduction: "Creating positive change through the joy of travel",
    tagline:
      "People & planet-friendly adventures. For the real. For the curious. For you.",
    // links: convertHreflangLinks(path, locales),
    metadata: {
      ogUrl: {
        property: "og:url",
        content: "https://www.intrepidtravel.com/en",
      },
      description: {
        name: "description",
        content:
          "The best small group tour means you’ll travel the local way. Affordable travel packages and the experience of a lifetime. Book an Intrepid tour today.",
      },
      ogType: {
        property: "og:type",
        content: "website",
      },
      ogTitle: {
        property: "og:title",
        content: "Small Group Tours & Travel, Big Adventures | Intrepid Travel",
      },
      ogDescription: {
        property: "og:description",
        content:
          "A small group style of travel means you’ll stay under the radar, travel the local way, eat the local way and sleep the local way. You’ll have the unsurpassed knowledge of a local leader, taking you out of the guidebooks and into a world you’re waiting to discover. Book an Intrepid tour today.",
      },
    },
    themes: themes(localeCode),
  };
};
