import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Downpipe Installation",
  serviceSlug: "downpipe-installation",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/downpipe-installation/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Downpipe Installation across Sydney",
    titleTop: "DOWNPIPE INSTALLATION",
    titleBottom: "SYDNEY",
    bullets: [
      "Downpipe replacement & new installs",
      "Fix overflow, pooling and water damage risks",
      "Match to gutters and stormwater where possible",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Downpipe installation & replacement in Sydney",
    paragraphs: [
      "Downpipes are critical for moving roof water away from your home or building. Poor drainage can cause overflow, dampness, erosion and damage to foundations or landscaping.",
      "We install and replace downpipes, repair connections, improve flow paths and help resolve overflow problems during heavy rain.",
      "If your gutters are fine but water still spills, the issue is often downpipe capacity, placement or blockages \u2014 we\u2019ll identify the root cause."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Downpipe Installation?",
    points: [
      {
        title: "Better drainage performance",
        text: "We size and place downpipes to improve flow, reducing overflow and helping gutters work as intended."
      },
      {
        title: "Neat finishing",
        text: "Clean alignment, secure fixings and tidy connections so the downpipes look good and last."
      },
      {
        title: "Practical problem-solving",
        text: "We look at the full water path \u2014 roof, gutters, downpipes and discharge \u2014 not just one component."
      }
    ]
  },
  process: {
    heading: "Our Downpipe Installation process",
    steps: [
      {
        title: "Assessment",
        text: "We check existing gutters, downpipe runs, blockages and discharge points."
      },
      {
        title: "Install / replace",
        text: "We install downpipes with secure fixings and correct fall, and ensure connections are watertight."
      },
      {
        title: "Verify flow",
        text: "We confirm water flows correctly and outline simple maintenance to prevent future blockages."
      }
    ]
  },
  testimonial: {
    name: "Mark L.",
    areaName: "Sydney",
    quote: "We had constant overflow in storms. They added an extra downpipe and replaced a crushed section \u2014 problem solved instantly.",
    rating: 5
  },
  cta: {
    heading: "Stop gutter overflow for good",
    text: "Book a free quote for downpipe installation in Sydney and we\u2019ll recommend the best drainage fix.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
