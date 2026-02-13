import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.7544; // Dee Why
const AREA_LON = 151.2854;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Northern Beaches",
  slug: "northern-beaches",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
};

const content = {
  hero: {
    eyebrow: "Coastal Roofing & Guttering",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NORTHERN BEACHES",
    bullets: [
      "Salt-air resistant materials & fixings",
      "Roof leaks, repairs, restorations & re-roofing",
      "Gutter cleaning, guards, downpipes & replacements",
      "Fast quotes across Manly, Dee Why, Brookvale & beyond",
    ],
  },
  introBlock: {
    heading: "Coastal Roofing Specialists Across the Northern Beaches",
    paragraphs: [
      "From Manly to Palm Beach, homes on the Northern Beaches deal with ocean winds, driving rain and salt spray—conditions that can accelerate rust, lift flashing and shorten the life of cheaper fasteners.",
      "We install and repair tile, Colorbond® and other metal roof systems using best-practice detailing to handle coastal weather and keep your roof watertight year-round.",
      "If your gutters overflow during storms or you notice damp ceiling stains, we can inspect, document the cause and recommend the most cost-effective fix—whether that’s targeted repairs, resealing or a full restoration.",
    ],
    imageAlt: "Coastal roof and gutter maintenance on Sydney’s Northern Beaches",
  },
  problemsBlock: {
    heading: "Common Roof & Gutter Problems in the Northern Beaches",
    subheading: "Coastal conditions can expose small issues fast—catch them early and save on bigger repairs.",
    paragraphs: [
      "Salt exposure can corrode metal valleys, fixings and gutter joints, while strong winds can loosen ridge capping and flashings. These issues often show up as leaks around skylights, chimneys or roof penetrations.",
      "Leaf build-up from surrounding greenery (plus fine sand in some areas) can block gutters and downpipes, leading to water backing up under the roof edge or spilling close to foundations.",
      "We focus on preventive maintenance: clean-outs, sealing, replacing worn sections and improving drainage so your roof handles the next downpour without surprises.",
    ],
  },
  testimonial: {
    name: "Chris M.",
    suburb: "Dee Why",
    quote:
      "After a few windy storms, we had leaks near the valley and overflowing gutters. The team fixed the flashing, resealed key sections and improved the downpipe run. Super professional and the roof is now solid.",
    rating: 5,
  },
  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock("Northern Beaches"),
};

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
