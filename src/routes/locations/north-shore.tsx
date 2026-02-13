import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.7970; // Chatswood
const AREA_LON = 151.1830;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const { Page, route } = createLocationRoute(
  {
    suburb: "North Shore",
    slug: "north-shore",
    latitude: officeGeo.latitude,
    longitude: officeGeo.longitude,
  },
  {
    hero: {
      eyebrow: "Leafy suburbs, big trees, and roofs that need regular care",
      titleTop: "ROOFING SERVICES",
      titleBottom: "NORTH SHORE",
      bullets: [
        "Licensed & insured roofing contractors",
        "Repairs, restorations, painting & re-roofing",
        "Gutter cleaning, replacement & guards",
        "Servicing Chatswood, Lane Cove, Mosman & surrounds",
      ],
    },

    introBlock: {
      heading: "Roof Repairs & Maintenance for Sydney’s North Shore",
      paragraphs: [
        "The North Shore is known for established, leafy streets—great for shade, but tough on gutters. Falling leaves, seed pods and moss build-up can block downpipes and cause overflow that rots fascia boards and creates internal leaks.",
        "We provide practical, preventative roof maintenance across the North Shore: gutter cleaning, leak detection, flashing repairs and roof restorations that extend the life of your roof. If you’re seeing water marks on ceilings, rust around fasteners, or gutters spilling during rain, we’ll fix the root cause.",
        "Our team works on tile, slate and Colorbond/metal roofs, including multi-level homes and strata properties. You’ll get a clear scope, photos where helpful, and quality workmanship that holds up through Sydney weather.",
      ],
      imageAlt: "North Shore roofing and guttering service",
    },

    problemsBlock: {
      heading: "North Shore roof & gutter issues we fix every week",
      subheading: "Blocked gutters and hidden leaks are common in tree-dense suburbs.",
      paragraphs: [
        "Leaf litter and roof debris can clog gutters quickly, forcing water back under the first course of tiles or into eaves. Over time this can damage timber and insulation.",
        "Many North Shore homes also have complex rooflines, skylights and valleys—areas where flashing failures and sealant breakdown can cause slow, hard-to-spot leaks.",
        "We clean, repair and restore the complete roof drainage system (roof surface, valleys, gutters and downpipes) so water is directed away from your home the way it should be.",
      ],
    },

    testimonial: {
      name: "David L.",
      suburb: "North Shore",
      quote:
        "We’re in Lane Cove and the gutters were constantly blocking. They cleaned everything, repaired a section of guttering and added guards. Haven’t had an overflow since.",
      rating: 5,
    },

    servicesInclude: getDefaultServicesInclude(),

    benefits: getBenefitsBlock("North Shore"),
  }
);

export { route };
export default Page;
