import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Residential Roofing",
  serviceSlug: "residential-roofing",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/residential-roofing/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Residential Roofing across Sydney",
    titleTop: "RESIDENTIAL ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Repairs, restorations & re-roofing for homes",
      "Tile, metal & Colorbond\u00ae specialists",
      "Prevent leaks, improve comfort & value",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Residential roofing for Sydney homes",
    paragraphs: [
      "Your home\u2019s roof is your first line of defence against Sydney\u2019s rain, wind and heat. When it starts to fail, small issues can quickly become expensive damage.",
      "We work on tile and metal roofs, ridge capping, valleys, flashing, gutters and downpipes \u2014 focusing on watertight details and a clean finish.",
      "Whether you need targeted repairs, a full restoration or a complete re-roof, we\u2019ll recommend the most cost-effective option for your home."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Residential Roofing?",
    points: [
      {
        title: "Home-focused approach",
        text: "We plan around access, noise and safety so the job is efficient and respectful of your household."
      },
      {
        title: "Materials that suit your roof",
        text: "We match compatible materials and fixings to your roof type, reducing future issues and extending service life."
      },
      {
        title: "Maintenance guidance included",
        text: "You\u2019ll get practical advice to prevent recurring leaks, blockages and premature wear."
      }
    ]
  },
  process: {
    heading: "Our Residential Roofing process",
    steps: [
      {
        title: "Assessment",
        text: "We inspect roof areas prone to leaks \u2014 flashings, valleys, penetrations, gutters and fall/flow paths."
      },
      {
        title: "Repair / restore / replace",
        text: "We carry out the agreed scope with attention to waterproofing details and workmanship standards."
      },
      {
        title: "Final check & clean-up",
        text: "We test where relevant, tidy all debris, and confirm the roof is ready for the next big Sydney storm."
      }
    ]
  },
  testimonial: {
    name: "Samantha K.",
    areaName: "Sydney",
    quote: "Our tiled roof had recurring leaks. The team pinpointed the cause, fixed the flashing and ridge capping, and it\u2019s been dry ever since.",
    rating: 5
  },
  cta: {
    heading: "Get a free residential roofing quote",
    text: "Share your suburb and roof issues and we\u2019ll provide a clear, no-obligation quote for your Sydney home.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
