import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.8688; // Sydney CBD
const AREA_LON = 151.2093;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const { Page, route } = createLocationRoute(
  {
    suburb: "Sydney CBD",
    slug: "sydney-cbd",
    latitude: officeGeo.latitude,
    longitude: officeGeo.longitude,
  },
  {
    hero: {
      eyebrow: "Commercial, strata and tight access — handled professionally",
      titleTop: "ROOFING SERVICES",
      titleBottom: "SYDNEY CBD",
      bullets: [
        "Licensed & insured roofing contractors",
        "Repairs & leak detection for CBD buildings",
        "Gutter cleaning, downpipes & stormwater solutions",
        "Clear scheduling, site safety and clean work areas",
      ],
    },

    introBlock: {
      heading: "Reliable Roofing & Guttering for Sydney CBD Properties",
      paragraphs: [
        "In the Sydney CBD, roof work often means limited access, strict building rules and time-sensitive scheduling. We’re set up to work efficiently on commercial, strata and mixed-use buildings—without cutting corners on safety or finish quality.",
        "From persistent roof leaks and box-gutter overflow to flashing failures around plant rooms and penetrations, we diagnose the cause and recommend a repair that lasts. We can also assist with roof maintenance plans that reduce emergency call-outs.",
        "If you manage a building in the CBD, we’ll provide a clear scope of works, practical options and a tidy site handover. Ask us about after-hours or low-disruption scheduling where possible.",
      ],
      imageAlt: "Sydney CBD roofing and guttering service",
    },

    problemsBlock: {
      heading: "Roofing & Guttering Problems in the CBD?",
      subheading:
        "We help reduce downtime and prevent water damage with practical repairs and maintenance.",
      paragraphs: [
        "Common CBD issues include blocked box gutters, failed flashings around penetrations, and water tracking behind parapets. These problems can show up as stains, bubbling paint, rust and mould — and they typically get worse with each heavy rain event.",
        "Our team uses a systematic approach: locate the entry point, inspect the drainage path, and repair or upgrade the weak spots. Where appropriate we can recommend gutter guards, overflow measures and routine cleaning to prevent repeat blockages.",
      ],
    },

    testimonial: {
      name: "Alex M.",
      suburb: "Sydney CBD",
      quote:
        "We needed a leak fixed quickly on a CBD building with limited access. The team communicated clearly, worked safely and resolved it without disruption to tenants.",
      rating: 5,
    },

    servicesInclude: getDefaultServicesInclude(),
    benefits: getBenefitsBlock("Sydney CBD"),
  }
);

export { route };
export default Page;
