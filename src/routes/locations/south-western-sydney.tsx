import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.92092; // Liverpool
const AREA_LON = 150.92314;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "South Western Sydney",
  slug: "south-western-sydney",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
};

const content = {
  hero: {
    eyebrow: "South Western Sydney Roofing & Guttering",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SOUTH WESTERN SYDNEY",
    bullets: [
      "Roof repairs, restorations & re-roofing",
      "Gutter replacement, cleaning & downpipes",
      "Licensed, insured team across Liverpool & beyond",
      "Fast quotes and tidy work sites",
    ],
  },
  introBlock: {
    heading: "Roofing & Guttering Solutions for South Western Sydney Homes",
    paragraphs: [
      "South Western Sydney is a fast-growing mix of established neighbourhoods and new builds. From Liverpool and Casula to Prestons and Hoxton Park, roofs here take a beating from hot summers, sudden storms and windy rain.",
      "We provide end-to-end roofing and guttering services tailored to Western Sydney conditions—leaks, cracked tiles, rusted metal sheets, overflowing gutters, damaged flashing and stormwater issues.",
      "If your roof is ageing or your gutters can’t keep up during heavy rain, we’ll inspect, explain the options clearly and deliver a repair or restoration designed to last.",
    ],
    imageAlt: "Roof repairs and guttering in South Western Sydney",
  },
  problemsBlock: {
    heading: "Common Roof & Gutter Problems in South Western Sydney",
    subheading:
      "Heat, UV exposure and sudden downpours can quickly expose weak points—especially around valleys, penetrations and old gutter lines.",
    paragraphs: [
      "Typical issues we see include broken or slipped tiles, deteriorated pointing, rusting metal roofing, cracked skylight seals, and gutters that overflow because of poor falls or blockages.",
      "Our team identifies the root cause and fixes it properly—replacing damaged sections, sealing penetrations, upgrading gutters/downpipes, and restoring roof finishes to improve weather resistance.",
    ],
  },
  testimonial: {
    name: "Sarah M.",
    suburb: "Liverpool",
    quote:
      "We had leaks after a storm and our gutters were overflowing. The crew arrived on time, explained everything clearly, and the repair has held up perfectly through the next heavy rain.",
    rating: 5,
  },
  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock("South Western Sydney"),
};

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
