import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Commercial Roofing Service",
  serviceSlug: "commercial-roofing-service",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/commercial-roofing-service/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Commercial Roofing Service across Sydney",
    titleTop: "COMMERCIAL ROOFING SERVICE",
    titleBottom: "SYDNEY",
    bullets: [
      "Commercial roof repairs, maintenance & replacement",
      "Minimise downtime with staged works",
      "Metal roofing, flashings, box gutters & drainage",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Commercial roofing services in Sydney",
    paragraphs: [
      "Commercial roofs need a practical plan: safe access, minimal disruption and durable outcomes that protect your building and operations.",
      "We service warehouses, retail, strata and industrial sites across Sydney \u2014 including leak repairs, preventative maintenance, roof restorations and re-roofing.",
      "You\u2019ll get a clear scope, timeline and safety-focused delivery \u2014 with communication that keeps stakeholders aligned."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Commercial Roofing Service?",
    points: [
      {
        title: "Safety & compliance",
        text: "We prioritise safe access, correct fall protection and clear site controls for commercial environments."
      },
      {
        title: "Preventative maintenance options",
        text: "Regular checks, gutter/box gutter cleaning and minor repairs help avoid expensive emergency call-outs."
      },
      {
        title: "Staged delivery",
        text: "We can plan works in stages to reduce impact on tenants, customers and daily operations."
      }
    ]
  },
  process: {
    heading: "Our Commercial Roofing Service process",
    steps: [
      {
        title: "Site inspection & reporting",
        text: "We assess roof condition, drainage, penetrations and high-risk leak zones, then report findings and options."
      },
      {
        title: "Scope & scheduling",
        text: "We define a scope that fits your operational constraints and schedule work to minimise disruption."
      },
      {
        title: "Works & handover",
        text: "We complete the job, provide completion notes/photos as needed, and outline recommended next steps."
      }
    ]
  },
  testimonial: {
    name: "Operations Manager",
    areaName: "Sydney",
    quote: "They repaired multiple leaks on our warehouse roof and improved drainage. Work was organised, safe and completed with minimal disruption.",
    rating: 5
  },
  cta: {
    heading: "Book a commercial roofing quote",
    text: "Tell us about your building and roof issues \u2014 we\u2019ll propose a practical, compliant solution with clear pricing.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
