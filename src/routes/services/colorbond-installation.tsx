import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Colorbond Installation",
  serviceSlug: "colorbond-installation",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/colorbond-installation/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Colorbond Installation across Sydney",
    titleTop: "COLORBOND INSTALLATION",
    titleBottom: "SYDNEY",
    bullets: [
      "Colorbond\u00ae roofing and gutters installed correctly",
      "Wide colour range with modern profiles",
      "Designed for Australian conditions",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Colorbond\u00ae installation in Sydney",
    paragraphs: [
      "Colorbond\u00ae is a trusted choice for Sydney roofing thanks to its durability, modern appearance and suitability for Australian conditions.",
      "We install Colorbond\u00ae roofs and gutters with the right accessories and detailing \u2014 including flashings, sarking options and correct fixings \u2014 to maximise performance and longevity.",
      "Whether it\u2019s a new roof, a replacement or an upgrade from tiles, we\u2019ll guide you through profiles, colours and the best build-up for your property."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Colorbond Installation?",
    points: [
      {
        title: "Manufacturer-aligned install",
        text: "Correct fixings, flashings and detailing to reduce leaks and maintain long-term performance."
      },
      {
        title: "Colour & profile guidance",
        text: "We help you choose a look that suits your home and coordinates with gutters, fascia and trims."
      },
      {
        title: "A complete roof system",
        text: "We consider ventilation, insulation and drainage so your Colorbond\u00ae roof performs in all seasons."
      }
    ]
  },
  process: {
    heading: "Our Colorbond Installation process",
    steps: [
      {
        title: "Consultation",
        text: "We confirm roof requirements, measure accurately and discuss colours and profiles."
      },
      {
        title: "Installation",
        text: "We install the roof/gutters with proper detailing at penetrations, valleys and transitions."
      },
      {
        title: "Final check",
        text: "We inspect key details, confirm drainage performance and provide maintenance tips."
      }
    ]
  },
  testimonial: {
    name: "Jason P.",
    areaName: "Sydney",
    quote: "The Colorbond roof and gutters look amazing. The crew were professional, tidy and finished exactly when they said they would.",
    rating: 5
  },
  cta: {
    heading: "Visualise your Colorbond\u00ae upgrade",
    text: "Request a free Sydney quote for Colorbond\u00ae installation and we\u2019ll help you choose the right colour and profile.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
