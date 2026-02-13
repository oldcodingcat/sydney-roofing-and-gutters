import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Roof Cleaning Services",
  serviceSlug: "roof-cleaning-services",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/roof-cleaning-services/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Roof Cleaning Services across Sydney",
    titleTop: "ROOF CLEANING SERVICES",
    titleBottom: "SYDNEY",
    bullets: [
      "Remove moss, lichen, dirt and debris safely",
      "Improve roof drainage and reduce premature wear",
      "Low-pressure and appropriate methods per roof type",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Professional roof cleaning across Sydney",
    paragraphs: [
      "Roof cleaning isn\u2019t just about looks \u2014 built-up moss, lichen and debris can hold moisture, block drainage and accelerate roof deterioration.",
      "We clean roofs using methods appropriate to your roof type and condition, helping to protect materials while restoring a clean finish.",
      "If your gutters are frequently blocked, roof cleaning is often the missing step to keep water flowing correctly during heavy rain."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Roof Cleaning Services?",
    points: [
      {
        title: "Roof-type appropriate methods",
        text: "We select safe cleaning approaches for tile, metal and Colorbond\u00ae roofs to avoid unnecessary damage."
      },
      {
        title: "Better drainage performance",
        text: "Removing debris helps gutters and downpipes work properly, reducing overflow and water ingress risks."
      },
      {
        title: "Prepares for repairs/painting",
        text: "A clean roof provides a better surface for inspections, repairs, sealing or roof painting."
      }
    ]
  },
  process: {
    heading: "Our Roof Cleaning Services process",
    steps: [
      {
        title: "Inspection & setup",
        text: "We assess roof condition and set up safe access and protection for surrounding areas."
      },
      {
        title: "Cleaning",
        text: "We remove debris, treat growth where appropriate and clean surfaces carefully."
      },
      {
        title: "Gutter check & tidy",
        text: "We confirm drainage paths are clear and tidy the site thoroughly."
      }
    ]
  },
  testimonial: {
    name: "Natalie B.",
    areaName: "Sydney",
    quote: "Our roof looked terrible with moss and staining. After the clean it looks years younger, and our gutters stopped overflowing.",
    rating: 5
  },
  cta: {
    heading: "Book roof cleaning in Sydney",
    text: "Request a free quote and we\u2019ll recommend the safest, most effective cleaning approach for your roof type.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
