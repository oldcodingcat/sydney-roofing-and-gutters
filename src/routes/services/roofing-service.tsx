import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Roofing Service",
  serviceSlug: "roofing-service",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/roofing-service/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Roofing Service across Sydney",
    titleTop: "ROOFING SERVICE",
    titleBottom: "SYDNEY",
    bullets: [
      "Complete roofing & guttering solutions",
      "Repairs, restorations & re-roofing",
      "Licensed, insured & safety-focused",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Roofing service in Sydney you can rely on",
    paragraphs: [
      "If your roof is leaking, aging, noisy in storms or simply looking tired, a professional roofing service can restore performance and protect your home or business.",
      "Sydney Roofing & Gutters handles inspections, repairs, restorations, metal roofing, tile roofing and guttering \u2014 with a focus on long-term fixes rather than quick patches.",
      "We\u2019ll assess your roof type and condition, explain the options clearly, and quote the right scope for your budget and timeline."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Roofing Service?",
    points: [
      {
        title: "All-in-one team",
        text: "From roof repairs to gutter repairs and downpipes, you get one team and one clear scope \u2014 no chasing multiple trades."
      },
      {
        title: "Built for Sydney conditions",
        text: "We account for coastal exposure, heavy rain events and heat cycles, choosing materials and methods that last."
      },
      {
        title: "Clear process, tidy job sites",
        text: "We show up on time, communicate throughout the job and leave the site clean when we\u2019re done."
      }
    ]
  },
  process: {
    heading: "Our Roofing Service process",
    steps: [
      {
        title: "Roof inspection",
        text: "We inspect the roof and gutters, identify issues, and document what needs attention now vs. later."
      },
      {
        title: "Quote & scheduling",
        text: "You receive a clear quote with inclusions, options (if applicable) and an agreed start date."
      },
      {
        title: "Complete the work",
        text: "We complete the service, test/verify the result, and provide maintenance guidance to keep the roof performing."
      }
    ]
  },
  testimonial: {
    name: "Chris T.",
    areaName: "Sydney",
    quote: "Booked a full roofing service after storm damage. Quick response, clear quote, and the roof has been perfect since. Great communication.",
    rating: 5
  },
  cta: {
    heading: "Need a roofing service in Sydney?",
    text: "Tell us what\u2019s going on with your roof or gutters and we\u2019ll organise a free quote with practical recommendations.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
