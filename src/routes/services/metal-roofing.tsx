import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Metal Roofing",
  serviceSlug: "metal-roofing",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/metal-roofing/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Metal Roofing across Sydney",
    titleTop: "METAL ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Colorbond\u00ae & metal roof installation and replacement",
      "Lightweight, durable and low maintenance",
      "Great for Sydney\u2019s coastal and storm conditions",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Metal roofing specialists in Sydney",
    paragraphs: [
      "Metal roofing is a popular choice across Sydney for its durability, modern look and low maintenance. It\u2019s lightweight, weather-resistant and ideal for many roof pitches.",
      "We install and replace metal roofs using quality materials and correct fixings, with careful attention to flashings, valleys and drainage.",
      "If you\u2019re considering tile-to-metal conversion, we\u2019ll assess structure, ventilation and insulation so the result performs as well as it looks."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Metal Roofing?",
    points: [
      {
        title: "Correct detailing matters",
        text: "Most metal roof issues come from poor detailing. We focus on flashings, penetrations and drainage to prevent leaks."
      },
      {
        title: "Material guidance",
        text: "We help you choose profiles, colours and options that suit your property and local exposure (coastal/salt, shade, debris)."
      },
      {
        title: "Clean, modern finish",
        text: "Straight lines, neat trims and a tidy site \u2014 the details that make a metal roof look premium."
      }
    ]
  },
  process: {
    heading: "Our Metal Roofing process",
    steps: [
      {
        title: "Measure & design",
        text: "We confirm roof geometry, drainage, penetrations and specify appropriate metal profile and accessories."
      },
      {
        title: "Install / replace",
        text: "We install sheeting, flashings and fixings to manufacturer guidance and best practice."
      },
      {
        title: "Final inspection",
        text: "We check fasteners, flashings and drainage flow, then clean up and hand over maintenance tips."
      }
    ]
  },
  testimonial: {
    name: "Daniel R.",
    areaName: "Sydney",
    quote: "Switched from tiles to metal. The finish is sharp, noise is minimal, and we\u2019ve had no issues through heavy rain.",
    rating: 5
  },
  cta: {
    heading: "Thinking about a metal roof?",
    text: "Get a free Sydney quote for metal roofing installation, replacement or conversion \u2014 with practical advice on the best option.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
