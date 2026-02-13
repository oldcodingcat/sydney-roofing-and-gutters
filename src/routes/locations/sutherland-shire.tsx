import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.0310; // Sutherland
const AREA_LON = 151.0580;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Sutherland Shire",
  slug: "sutherland-shire",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
};

const content = {
  hero: {
    eyebrow: "Sutherland Shire Roofing & Guttering",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SUTHERLAND SHIRE",
    bullets: [
      "Roof repairs, restorations & re-roofing",
      "Gutter repairs, cleaning & downpipes",
      "Coastal-grade materials & neat workmanship",
      "Fast quotes across the Shire",
    ],
  },
  introBlock: {
    heading: "Roofing & Guttering Services Across Sutherland Shire",
    paragraphs: [
      "Sutherland Shire homes sit close to the coast and bushland — which means roofs here take a beating from salt air, strong winds, and leaf debris. From Cronulla and Caringbah to Miranda, Gymea, and Engadine, we help homeowners stay ahead of leaks and corrosion with practical, preventative maintenance.",
      "We work on metal, tile, and slate roofing, and we handle the full scope: roof repairs, roof restoration, re-roofing, gutter repairs, downpipes, and gutter cleaning. If your gutters overflow after a storm or your roof shows rust spots around flashing and valleys, we’ll inspect, explain options clearly, and quote transparently.",
      "Need a reliable team for a small repair or a full roof upgrade? We focus on clean sites, clear communication, and durable finishes — so your roof performs season after season.",
    ],
    imageSrc: "/images/hero-roof.webp",
    imageAlt: "Roof restoration example in Sutherland Shire",
  },
  problemsBlock: {
    heading: "Common Roofing Problems in Sutherland Shire",
    subheading: "Salt air, wind-driven rain, and blocked gutters can cause hidden damage quickly.",
    paragraphs: [
      "Coastal conditions accelerate corrosion on metal roofing and gutters, especially around fixings, ridges, and valleys. If paint is chalking, screws are lifting, or flashings are failing, water can track into the roof space and damage insulation and timber.",
      "Leaf build-up from surrounding bushland is another major culprit. Blocked gutters and downpipes lead to overflow, fascia rot, and damp patches. Regular cleaning and targeted repairs are a simple way to reduce long-term costs.",
      "We diagnose the cause, not just the symptom — then recommend the most cost-effective fix, from sealing and flashing repairs to partial re-roofing or a full restoration.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },
  testimonial: {
    name: "Mark D.",
    suburb: "Sutherland Shire",
    quote:
      "After a couple of big storms we had leaks near the valley and the gutters were overflowing. The team repaired the flashing, cleaned everything out, and left the place spotless. No issues since.",
    rating: 5,
  },
  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock("Sutherland Shire"),
};

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
