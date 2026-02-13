import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Re-Roofing",
  serviceSlug: "re-roofing-sydney",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/re-roofing-sydney/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Re-Roofing across Sydney",
    titleTop: "RE-ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Full roof replacement for Sydney homes & buildings",
      "Tile-to-metal conversions available",
      "Improve waterproofing, ventilation and value",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Re-roofing Sydney: replace an aging roof with confidence",
    paragraphs: [
      "When a roof reaches the end of its life, repeated repairs can become a cycle. Re-roofing replaces the roof covering so you can reset performance, waterproofing and appearance.",
      "We handle full roof replacements across Sydney, including tile-to-metal conversions, new flashings and drainage improvements.",
      "We\u2019ll assess structure, roof pitch, ventilation and insulation requirements so the new roof performs for decades \u2014 not just looks good on day one."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Re-Roofing?",
    points: [
      {
        title: "Clear replacement scope",
        text: "We define exactly what\u2019s included \u2014 removal, disposal, materials, flashings and finishing details."
      },
      {
        title: "Performance upgrades",
        text: "Re-roofing is the right time to improve ventilation, insulation build-up and drainage to reduce future issues."
      },
      {
        title: "Strong workmanship standards",
        text: "We treat flashing and waterproofing details as the core of the job, not an afterthought."
      }
    ]
  },
  process: {
    heading: "Our Re-Roofing process",
    steps: [
      {
        title: "Assessment & quote",
        text: "We inspect the existing roof and confirm the best replacement option (material, profile, detailing)."
      },
      {
        title: "Remove & install",
        text: "We remove old materials safely, then install the new roof system with correct flashings and fixings."
      },
      {
        title: "Final inspection",
        text: "We verify key waterproofing details and drainage performance, then hand over care guidance."
      }
    ]
  },
  testimonial: {
    name: "Ben H.",
    areaName: "Sydney",
    quote: "We decided to re-roof after too many leaks. The new roof is solid, looks great, and the whole process was well managed.",
    rating: 5
  },
  cta: {
    heading: "Ready to re-roof in Sydney?",
    text: "Get a free quote for re-roofing and we\u2019ll recommend the best long-term option for your property.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
