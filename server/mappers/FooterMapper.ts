import Footer from "lib/types/Footer";
import Menu from "lib/types/Menu";

export const footerMapper = (locale: string): Footer => {
  return {
    footerMenu: fakerFooterMenu(locale),
    acknowledgement: acknowledgement(locale),
    accreditations: fakerAccreditations(locale),
  };
};

const acknowledgement = (localeCode: string): string => {
  let acknowledgement: string = "";

  if (localeCode === "au") {
    acknowledgement =
      "As an Australian-owned business, we acknowledge the Traditional Owners of Country throughout Australia and their continuing connection to land, waters and community. We pay our respects to them and their cultures, and to their Elders past, present and future.";
  }

  return acknowledgement;
};

const fakerFooterMenu = (localeCode: string): Menu[] => {
  return [
    {
      name: "Booking",
      href: "<nolink>",
      children: [
        {
          name: "Booking conditions",
          href: "/" + localeCode + "/booking-intrepid/booking-conditions",
        },
        {
          name: "My Booking ",
          href: "/booking/view-booking",
        },
        {
          name: "Submit trip feedback",
          href: "/booking/feedback",
        },
        {
          name: "Safe Travels",
          href: "/" + localeCode + "/covid19",
        },
        {
          name: "Vaccination & testing",
          href: "/" + localeCode + "/covid19#OurPolicy",
        },
        {
          name: "Flexible bookings",
          href: "/" + localeCode + "/flexible-bookings",
        },
        {
          name: "Agent login",
          href: "/booking/agent-login",
        },
      ],
    },
    {
      name: "Company",
      href: "<nolink>",
      children: [
        {
          name: "About us",
          href: "/" + localeCode + "/about",
        },
        {
          name: "Intrepid Group",
          href: "https://www.intrepidgroup.travel/",
        },
        {
          name: "Peak DMC",
          href: "https://www.peakdmc.com/",
        },
        {
          name: "Employment",
          href: "/" + localeCode + "/about/work-for-us",
        },
        {
          name: "Privacy policy",
          href: "/" + localeCode + "/booking-intrepid/privacy",
        },
      ],
    },
    {
      name: "Contact",
      href: "<nolink>",
      children: [
        {
          name: "Get in touch",
          href: "/" + localeCode + "/contact-us",
        },
        {
          name: "Live chat",
          href: "/" + localeCode + "/contact-us",
        },
        {
          name: "FAQ",
          href: "/" + localeCode + "/contact-us/frequently-asked-questions",
        },
        {
          name: "Reviews",
          href: "/" + localeCode + "/reviews",
        },
        {
          name: "Media",
          href: "/" + localeCode + "/about/media",
        },
      ],
    },
    {
      name: "Purpose",
      href: "/" + localeCode + "/purpose",
      children: [
        {
          name: "Responsible travel",
          href: "/" + localeCode + "/about/responsible-travel",
        },
        {
          name: "Responsible business",
          href: "/" + localeCode + "/about/responsible-business",
        },
        {
          name: "B Corp",
          href: "/" + localeCode + "/b-corp",
        },
        {
          name: "The Intrepid Foundation",
          href: "/" + localeCode + "/about/intrepid-foundation",
        },
        {
          name: "People",
          href: "/" + localeCode + "/diversity-and-inclusion",
        },
        {
          name: "Planet",
          href: "/" + localeCode + "/climate",
        },
        {
          name: "Wildlife",
          href: "/" + localeCode + "/animal-welfare",
        },
      ],
    },
  ];
};

const fakerAccreditations = (localeCode: string) => {
  if (localeCode === "uk") {
    return [
      {
        image: {
          src: "/tempImages/accreditations/abta.svg",
          alt: "ABTA",
          height: 50,
          width: 118,
        },
      },
      {
        image: {
          src: "/tempImages/accreditations/atol.svg",
          alt: "ATOL",
          height: 50,
          width: 50,
        },
      },
      {
        image: {
          src: "/tempImages/accreditations/global-compact.svg",
          alt: "Global Compact",
          height: 50,
          width: 50,
        },
      },
    ];
  }

  return [];
};
