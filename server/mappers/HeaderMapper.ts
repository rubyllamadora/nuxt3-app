import Header from "lib/types/Header";
import Menu from "lib/types/Menu";
import locales from "locales.json";

export const headerMapper = (locale: string): Header => {
  return {
    phoneNumber: fakerPhoneNumber(locale),
    mainMenu: fakerMainMenu(locale),
  };
};

function fakerPhoneNumber(localeCode: string): string {
  const regionalisedPhoneNumbers = [
    {
      code: "en",
      phoneNumber: "+1-510-285-0640",
    },
    {
      code: "au",
      phoneNumber: "1300 348 693",
    },
    {
      code: "eu",
      phoneNumber: "+44 (0) 203 308 9757",
    },
  ];

  // Check if phone number is in regionalized data
  const result = regionalisedPhoneNumbers.find(
    (phoneNumber) => phoneNumber.code === localeCode
  );

  return result?.phoneNumber ?? "+1-510-285-0640";
}

function fakerMainMenu(localeCode: string): Menu[] {
  if (!locales.find((locale) => locale.code === localeCode)) {
    localeCode = "en";
  }

  return [
    {
      name: `Home (${localeCode})`,
      href: "/",
    },
    {
      name: `Destinations (${localeCode})`,
      href: "/destinations",
      children: [
        {
          name: "Africa",
          href: "/destinations/africa",
          children: [
            {
              name: "Benin",
              href: "/destinations/benin",
            },
            {
              name: "Botswana",
              href: "/destinations/botswana",
            },
          ],
        },
        {
          name: "Asia",
          href: "/destinations/asia",
          children: [
            {
              name: "Armenia",
              href: "/destinations/armenia",
            },
          ],
        },
      ],
    },
    {
      name: `Ways to travel (${localeCode})`,
      href: "/theme",
      children: [
        {
          name: "Themes",
          href: "/theme",
          children: [
            {
              name: "18 to 29s",
              href: "/theme/18-to-29s-adventures",
            },
            {
              name: "Cycling",
              href: "/theme/cycling",
            },
          ],
        },
        {
          name: "Styles",
          href: "/about/trip-styles",
          children: [
            {
              name: "Premium",
              href: "/trip-styles/premium",
            },
            {
              name: "Comfort",
              href: "/trip-styles/comfort",
            },
          ],
        },
      ],
    },
    {
      name: `Deals (${localeCode})`,
      href: "/deals",
      children: [
        {
          name: "Last minute deals",
          href: "/last-minute",
        },
      ],
    },
    {
      name: `Purpose (${localeCode})`,
      href: "/purpose",
      children: [
        {
          name: "Our mission",
          href: "/mission",
        },
      ],
    },
  ];
}
