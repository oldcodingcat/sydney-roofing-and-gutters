import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.8926; // Bondi Junction
const AREA_LON = 151.2501;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const { Page, route } = createLocationRoute(
  {
    suburb: "Eastern Suburbs",
    slug: "eastern-suburbs",
    latitude: officeGeo.latitude,
    longitude: officeGeo.longitude,
  },
  {
    hero: {
      eyebrow: "Roofing & guttering across Sydney’s coastal east",
      titleTop: "ROOFING SERVICES",
      titleBottom: "EASTERN SUBURBS",
      bullets: [
        "Licensed & insured local roofers",
        "Roof repairs, restoration & re-roofing",
        "Gutter cleaning, repairs & downpipes",
        "Fast quotes across Bondi, Randwick, Coogee & beyond",
      ],
    },

    introBlock: {
      heading: "Reliable Roofing & Guttering in the Eastern Suburbs",
      paragraphs: [
        "From Bondi and Bronte to Randwick and Paddington, homes in the Eastern Suburbs face a mix of salt air, strong winds, and sudden storm bursts. These conditions can accelerate rust, lift flashing, and push water into weak points around valleys and penetrations.",
        "We handle everything from urgent roof leak repairs to full roof restorations, plus gutter cleaning and replacement that keeps water moving away from your property. If your gutters overflow during heavy rain or your roof is showing early signs of corrosion, we’ll help you fix it before it becomes structural damage.",
        "Our crews work with tile, Colorbond and metal roofing, and we’re used to tight driveways, heritage streets, and multi-storey homes common in the east. You’ll get clear options, transparent pricing, and workmanship that’s built for coastal Sydney.",
      ],
      imageAlt: "Roofing project in Sydney’s Eastern Suburbs",
    },

    problemsBlock: {
      heading: "Common roof & gutter problems in the Eastern Suburbs",
      subheading: "Coastal exposure + heavy downpours can turn small issues into expensive repairs.",
      paragraphs: [
        "Salt spray and constant moisture can speed up corrosion on metal roof sheets, screws and guttering. This often shows up as rust spots, pinholes, and staining on fascia boards.",
        "Older terraces and renovated homes can also suffer from mismatched roof lines and poorly sealed flashings around skylights, chimneys and exhaust vents—leading to hidden leaks.",
        "We pinpoint the cause, repair it properly, and recommend preventive maintenance (cleaning, resealing, repainting or targeted replacements) to keep your roof system performing through Sydney storms.",
      ],
    },

    testimonial: {
      name: "Samantha R.",
      suburb: "Eastern Suburbs",
      quote:
        "We’re near Coogee and our gutters were overflowing every storm. The team cleaned everything, fixed a leak near the valley, and gave us a plan to prevent it happening again. Super professional.",
      rating: 5,
    },

    servicesInclude: getDefaultServicesInclude(),

    benefits: getBenefitsBlock("Eastern Suburbs"),
  }
);

export { route };
export default Page;
