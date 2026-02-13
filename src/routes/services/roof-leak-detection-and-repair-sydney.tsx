import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Roof Leak Detection and Repair",
  serviceSlug: "roof-leak-detection-and-repair-sydney",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/roof-leak-detection-and-repair-sydney/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Roof Leak Detection and Repair across Sydney",
    titleTop: "ROOF LEAK DETECTION",
    titleBottom: "& REPAIR",
    bullets: [
      "Find the leak source fast \u2014 not just the symptom",
      "Repairs for flashing, valleys, penetrations & gutters",
      "Emergency support after storms",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Roof leak detection and repair in Sydney",
    paragraphs: [
      "A roof leak can be deceptive \u2014 water often travels before it shows inside. Quick patch jobs may hide the issue while damage continues.",
      "We locate the likely leak source, explain what\u2019s happening, and complete repairs that restore waterproofing \u2014 whether it\u2019s flashing, valleys, ridge capping, penetrations or drainage.",
      "If you\u2019ve had storm damage or sudden water ingress, contact us and we\u2019ll prioritise safe, practical repairs to stop further damage."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Roof Leak Detection and Repair?",
    points: [
      {
        title: "Root-cause diagnosis",
        text: "We look beyond the stain on the ceiling and trace the water path to the true entry point."
      },
      {
        title: "Repair-focused detailing",
        text: "We repair the waterproofing details that matter \u2014 flashings, seal points, transitions and drainage."
      },
      {
        title: "Advice to prevent repeats",
        text: "We highlight maintenance steps (like clearing gutters) that reduce the risk of recurring leaks."
      }
    ]
  },
  process: {
    heading: "Our Roof Leak Detection and Repair process",
    steps: [
      {
        title: "Inspection",
        text: "We assess the roof, gutters and key leak zones, then explain the most likely cause."
      },
      {
        title: "Targeted repairs",
        text: "We complete repairs designed to restore waterproofing and withstand heavy rain."
      },
      {
        title: "Verification",
        text: "Where possible, we confirm the repair and provide notes on future prevention."
      }
    ]
  },
  testimonial: {
    name: "Michael G.",
    areaName: "Sydney",
    quote: "Leak appeared after a storm and we couldn\u2019t find the cause. They located a flashing issue, fixed it quickly, and it\u2019s been dry since.",
    rating: 5
  },
  cta: {
    heading: "Need urgent leak help?",
    text: "Request a free quote for roof leak detection and repair in Sydney and we\u2019ll help you stop the leak properly.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
