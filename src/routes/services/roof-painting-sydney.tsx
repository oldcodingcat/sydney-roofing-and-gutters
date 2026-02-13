import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Roof Painting",
  serviceSlug: "roof-painting-sydney",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/roof-painting-sydney/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Roof Painting across Sydney",
    titleTop: "ROOF PAINTING",
    titleBottom: "SYDNEY",
    bullets: [
      "Refresh appearance and protect roof surfaces",
      "Coatings designed for Australian conditions",
      "Great after roof cleaning and minor repairs",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Roof painting Sydney: protection and curb appeal",
    paragraphs: [
      "Roof painting can refresh the look of your home while adding an extra layer of protection against sun, moisture and surface wear.",
      "We start with proper preparation \u2014 cleaning and addressing minor repairs \u2014 so coatings bond well and deliver a lasting finish.",
      "If your roof is structurally sound but faded, stained or chalky, roof painting can be a cost-effective upgrade compared to replacement."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing & Gutters for Roof Painting?",
    points: [
      {
        title: "Preparation-first approach",
        text: "Cleaning and surface prep matter most. We focus on prep so the finish lasts longer and looks consistent."
      },
      {
        title: "Compatible coating systems",
        text: "We use coating systems suited to your roof material and local conditions."
      },
      {
        title: "A cleaner, sharper finish",
        text: "Even coverage, neat edges and attention to details around flashings and penetrations."
      }
    ]
  },
  process: {
    heading: "Our Roof Painting process",
    steps: [
      {
        title: "Clean & assess",
        text: "We clean the roof and check for issues that should be repaired before painting."
      },
      {
        title: "Prime / coat",
        text: "We apply suitable primers/coats as required for adhesion and durability."
      },
      {
        title: "Quality check",
        text: "We inspect the finish, tidy up and provide guidance for ongoing roof care."
      }
    ]
  },
  testimonial: {
    name: "Olivia D.",
    areaName: "Sydney",
    quote: "Our roof was faded and patchy. After painting it looks brand new and the whole house has better street appeal.",
    rating: 5
  },
  cta: {
    heading: "Get a roof painting quote in Sydney",
    text: "Request a free quote and we\u2019ll advise if roof painting is the right option for your roof condition.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;
