import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.9670; // Kogarah
const AREA_LON = 151.1330;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "St George Area",
  slug: "st-george-area",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
};

const content = {
  hero: {
    eyebrow: "Roof repairs & guttering across the St George region",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ST GEORGE AREA",
    bullets: [
      "Prompt leak detection & roof repairs",
      "Tile, metal & Colorbond roofing",
      "Gutter repairs, cleaning & downpipes",
      "Free quotes across St George",
    ],
  },

  introBlock: {
    heading: "Reliable roof repairs & guttering for the St George Area",
    paragraphs: [
      "From Kogarah and Hurstville to Rockdale, Bexley and Brighton-Le-Sands, the St George region blends older brick homes, renovated semis, and busy commercial strips. That variety means roofing issues can range from cracked tiles and aging flashing to blocked box gutters and failing valley lines.",
      "Because many streets are lined with mature trees, gutters can fill quickly after windy days—leading to overflow, water staining and foundation issues. Regular gutter cleaning and preventative maintenance is often the cheapest way to avoid emergency callouts.",
      "We provide tailored roofing and guttering solutions designed for St George homes and small businesses—clear advice, tidy workmanship and a finish that lasts.",
    ],
    imageAlt: "Roofing and guttering work in the St George Area",
  },

  problemsBlock: {
    heading: "Roofing & gutter problems common in St George",
    subheading: "If you’re seeing leaks, overflow or rust, it’s usually a sign the system needs attention—not just another patch.",
    paragraphs: [
      "Common issues we see in St George include cracked or slipped tiles, deteriorated bedding and pointing, rusted metal edges, and gutters overflowing during heavy rain. These problems can escalate quickly—especially around valleys, skylights and wall junctions.",
      "We inspect the cause, explain the options, and recommend the most cost-effective fix—whether that’s a targeted repair, re-bedding, gutter replacement or a full restoration.",
      "Need a quote? Send your details and we’ll get back to you fast.",
    ],
  },

  testimonial: {
    name: "Michael R.",
    suburb: "St George Area",
    quote:
      "We had water coming in near the valley after every downpour. The team found the root cause, repaired it properly and also cleaned the gutters. No leaks since—highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock("St George Area"),
};

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
