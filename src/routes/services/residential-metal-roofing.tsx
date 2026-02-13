import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Residential Metal Roofing",
  serviceSlug: "residential-metal-roofing",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/residential-metal-roofing/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Residential Metal Roofing across Sydney",
    titleTop: "RESIDENTIAL METAL ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Modern, low-maintenance roofing for homes",
      "Colorbond\u00ae profiles and colour options",
      "Better performance with correct insulation & ventilation",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Residential metal roofing for Sydney homes",
    paragraphs: [
      "A residential metal roof can upgrade your home\u2019s look while improving durability in Sydney\u2019s changing weather. With the right build-up, it can also improve comfort and reduce maintenance.",
      "We install and replace residential metal roofs, including Colorbond\u00ae options, with careful attention to flashings, valleys, gutters and roof penetrations.",
      "If you\u2019re converting from tiles, we\u2019ll assess structure and recommend insulation/ventilation so the roof performs quietly and efficiently."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Residential Metal Roofing?",
    points: [
      {
        title: "Built for live-in homes",
        text: "We keep the site tidy, plan works around access and protect areas around your home throughout the install."
      },
      {
        title: "Comfort-first recommendations",
        text: "We consider sarking, insulation and ventilation \u2014 key factors for reducing noise and improving thermal performance."
      },
      {
        title: "Long-term value",
        text: "A well-installed metal roof can reduce future repair costs and add strong curb appeal."
      }
    ]
  },
  process: {
    heading: "Our Residential Metal Roofing process",
    steps: [
      {
        title: "Consult & quote",
        text: "We discuss your goals (aesthetics, budget, durability) and quote the right scope."
      },
      {
        title: "Installation",
        text: "We install metal roofing, flashings and drainage details to best practice and manufacturer guidance."
      },
      {
        title: "Handover",
        text: "We complete finishing details, clean up and share maintenance guidance for years of trouble-free performance."
      }
    ]
  },
  testimonial: {
    name: "Emily S.",
    areaName: "Sydney",
    quote: "We chose Colorbond for our home. The team helped with colour selection, installed quickly, and the roof looks incredible.",
    rating: 5
  },
  cta: {
    heading: "Get a residential metal roofing quote",
    text: "Tell us your suburb and roof type \u2014 we\u2019ll provide a clear Sydney quote and recommended options.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
