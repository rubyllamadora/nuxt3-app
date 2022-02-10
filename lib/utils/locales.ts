import locales from "~/nuxt3-app/locales.json";

const BOOKING_ENGINE_URL =
  process.env.BOOKING_ENGINE_URL ??
  "https://bookings.intrepidtravel.com/bookings/@lang_@region";
const AGENT_PORTAL_LOGIN_URL =
  process.env.AGENT_PORTAL_LOGIN_URL ??
  "https://bookings.intrepidtravel.com/bookings/@locale/agent/login";
const DEFAULT_LOCALE = process.env.DEFAULT_LOCALE ?? "en";

export type Locale = {
  code: string;
  iso: string;
  name: string;
  countries: string;
  customHrefLangs: string;
  includeHrefCountries: boolean;
  fakerLocale: string;
  prefixLocale: boolean;
  domain: string;
  bookingEngineLocale: string;
  agentPortalLocale: string;
  default?: boolean;
};

export const getDefaultRegion = () => {
  return locales.filter((locale: Locale) => {
    return locale.code === DEFAULT_LOCALE;
  })[0];
};

export const getRegionByCountry = (country: string) => {
  const locale = locales.find((locale: Locale) => {
    const countries = locale.countries;
    return countries.includes(country?.toLowerCase());
  });

  if (locale) {
    return locale;
  }

  return getDefaultRegion();
};

const getRegionalisedBookingEngineUrl = (region: string): string => {
  const defaultLocale = getDefaultRegion().bookingEngineLocale ?? "en_US";
  const bookingEngineLocale =
    locales.find((locale: Locale) => locale.code === region)
      ?.bookingEngineLocale ?? defaultLocale;
  const regex = /@lang_@region/i;

  return BOOKING_ENGINE_URL.replace(regex, bookingEngineLocale);
};

export const getBookingEngineViewBookingUrl = (region: string): string => {
  const bookingEngineUrl = getRegionalisedBookingEngineUrl(region);
  return `${bookingEngineUrl}/booking_engine/viewBooking`;
};

export const getBookingEngineFeedbackUrl = (region: string): string => {
  const bookingEngineUrl = getRegionalisedBookingEngineUrl(region);
  return `${bookingEngineUrl}/feedback`;
};

export const getRegionalisedAgentPortalUrl = (region: string): string => {
  const defaultLocale = getDefaultRegion().agentPortalLocale ?? "en_US";
  const agentPortalLocale =
    locales.find((locale: Locale) => locale.code === region)
      ?.agentPortalLocale ?? defaultLocale;

  return AGENT_PORTAL_LOGIN_URL.replace(/@locale/i, agentPortalLocale);
};

export const getLocaleStringOrDefault = (
  locale: string | string[] | undefined
) => {
  if (typeof locale === "string") {
    return locale;
  }

  return "en";
};
