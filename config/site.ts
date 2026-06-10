export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Camp Messiah",
  title: "Camp Messiah Summer Camp | Temple Hills, MD",
  description:
    "Camp Messiah is a summer camp in Temple Hills, Maryland with robotics, STEAM, music, life skills, enrichment, and active play for ages 3-16.",
  address: "3214 Brinkley Road, Temple Hills, MD 20748",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Schedule",
      href: "/schedule",
    },
    {
      label: "Registration",
      href: "/registration",
    },
    {
      label: "FAQs",
      href: "/faq",
    },
  ],
  links: {
    phone: "tel:3013254397",
    map: "https://maps.google.com/?q=3214+Brinkley+Road+Temple+Hills+MD+20748",
  },
};
