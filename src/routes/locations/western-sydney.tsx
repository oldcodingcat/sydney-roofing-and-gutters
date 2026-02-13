import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.8150; // Parramatta
const AREA_LON = 151.0011;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Western Sydney",
  slug: "western-sydney",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
};

const content = {
  hero: {
    eyebrow: "Western Sydney Roofing & Guttering",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WESTERN SYDNEY",
    bullets: [
      "Roof repairs, leak detection & storm damage fixes",
      "Metal roofing, tile roofing & restorations",
      "Gutters, downpipes, guards & maintenance",
      "Local service around Parramatta, Blacktown & beyond",
    ],
  },
  introBlock: {
    heading: "Roofing & Guttering Services Across Western Sydney",
    paragraphs: [
      "Western Sydney homes deal with harsh summer heat, sudden storms, and leaf debris from established streets. That mix can accelerate cracked tiles, blocked gutters, and hidden leaks that show up after heavy rain.",
      "Our team services Western Sydney daily, including Parramatta, Blacktown, Penrith, and surrounding suburbs. We work on tiled roofs, Colorbond and other metal roofs, and older roofs that need staged maintenance rather than a full replacement.",
      "If you want a roof that performs year-round, we focus on the fundamentals: correct drainage, proper flashing, sealed penetrations, and preventative gutter cleaning. That’s how you avoid repeat call-outs and protect ceilings, insulation and timber framing.",
    ],
    imageSrc: "/images/hero-roof.webp",
    imageAlt: "Roof repairs and guttering work in Western Sydney",
  },
  problemsBlock: {
    heading: "Roof & Gutter Issues in Western Sydney?",
    subheading: "Get a practical plan—repair, restore or replace—based on what your roof actually needs.",
    paragraphs: [
      "Heat expansion and sudden downpours can expose weak points around ridge capping, valleys, skylights, and older flashing. If water is entering the roof cavity, acting early is the difference between a simple repair and a bigger internal restoration.",
      "Gutters that overflow during storms can cause fascia rot and water staining, and in some areas, poor drainage can push water back under tiles or sheets. We assess the fall, downpipes, and connection points to make sure the system can handle Sydney storm events.",
      "Whether you need a quick leak fix or a full roof restoration in Western Sydney, we’ll explain the options clearly and provide a transparent quote before work starts.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },
  testimonial: {
    name: "Daniel R.",
    suburb: "Western Sydney",
    quote:
      "We had recurring leaks after storms and the gutters were constantly overflowing. The team found the real issue, fixed the flashing, cleaned everything up, and the roof has been perfect since.",
    rating: 5,
  },
  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock("Western Sydney"),
};

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
