import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.9051; // Marrickville
const AREA_LON = 151.1551;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Inner West Sydney",
  slug: "inner-west-sydney",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "INNER WEST SYDNEY",
    bullets: [
      "Heritage-friendly repairs for older terraces",
      "Gutter cleaning, replacements & downpipes",
      "Leak detection, flashing & roof sealing",
      "Fast quotes across Newtown, Marrickville & Leichhardt",
    ],
  },

  introBlock: {
    heading: "Roof Repairs & Gutter Work for Inner West Homes",
    paragraphs: [
      "The Inner West is full of older homes—terraces, semi-detached cottages, and renovation projects—so roofing work here often comes down to detail: flashing, valleys, parapets, and careful waterproofing around skylights and extensions.",
      "Leaf build-up from street trees is a big factor in blocked gutters and overflowing downpipes, especially before heavy Sydney storms. Preventive gutter maintenance helps protect fascia boards, eaves, and internal ceilings from avoidable water damage.",
      "From Newtown and Enmore to Marrickville, Leichhardt and Ashfield, our team handles practical repairs and clean, long-lasting finishes—whether you need a small leak fixed or a full gutter replacement.",
    ],
    imageAlt: "Roof repairs and guttering across Inner West Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing Problems in the Inner West",
    subheading: "Older rooflines + extensions + gutters = leaks if details are missed.",
    paragraphs: [
      "Many Inner West roofs have complex junctions: box gutters, valley lines, and multiple roof planes meeting at different angles. Small issues at these junctions often show up as ceiling stains, damp walls, or water entering through the eaves.",
      "If your gutters overflow, water can track behind the fascia and rot timber over time. We’ll check gutter fall, downpipe capacity, and the condition of your flashing so the whole system drains correctly.",
      "Need a quote? Tell us what you’re seeing and we’ll recommend the most cost-effective fix for your property.",
    ],
  },

  testimonial: {
    name: "Alex R.",
    suburb: "Marrickville",
    quote:
      "We had a stubborn leak around an extension—turns out the flashing was the issue. The team explained it clearly, fixed it fast, and the next storm was the real test. Totally dry.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),

  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);

export { route };
export default Page;
