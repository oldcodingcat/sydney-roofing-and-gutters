// src/lib/locationContent.ts
// Shared, SEO-friendly content blocks used by LocationTemplate-based pages.

import type { LocationContent } from "@/routes/locations/LocationTemplate";

export function getDefaultServicesInclude(): string[] {
  return [
    "Roof Repairs",
    "Roof Restoration",
    "Tile Roofing",
    "Metal Roofing",
    "Re-Roofing",
    "Roof Painting",
    "Gutter Repairs",
    "Gutter Cleaning",
    "Downpipes",
    "Gutter Replacement",
    "Gutter Guard",
    "Leak Detection",
  ];
}

export function getBenefitsBlock(areaName: string): LocationContent["benefits"] {
  return {
    heading: "Benefits of Hiring Sydney Roofing & Gutters",
    items: [
      {
        id: "expert-services",
        title: "Our Expert Roofing & Guttering Services",
        body:
          `From roof repairs and roof restoration to gutter cleaning and downpipe replacement, our team covers the full scope of roofing work in ${areaName}.\n\nWe focus on clear communication, safe work practices, and finishes that stand up to Sydney weather.`,
      },
      {
        id: "professional-roofers",
        title: "Professional Roofers & On-Time Projects",
        body:
          `You get a licensed, insured crew that shows up when we say we will. We keep the job site tidy and we respect your home or building in ${areaName}.\n\nFor strata, commercial and residential clients, we can plan access, safety and timing to minimise disruption.`,
      },
      {
        id: "experience",
        title: "Years of Experience Across Sydney Homes",
        body:
          `Sydney roofs vary a lot—tile, Colorbond®, slate, and more. Our experience helps us diagnose leaks quickly and recommend the most cost-effective fix for properties in ${areaName}.\n\nWe’ll explain options in plain language so you can choose with confidence.`,
      },
      {
        id: "gutter-install",
        title: `Gutter Installation & Repairs in ${areaName}`,
        body:
          `Old, sagging gutters or overflowing downpipes can lead to damp walls, mould and foundation issues. We install and repair gutters to improve drainage performance in ${areaName}.\n\nWe can also recommend gutter guards and maintenance schedules where leaf build-up is common.`,
      },
      {
        id: "equipped",
        title: "Equipped for All Roofing Jobs",
        body:
          `From small roof leak repairs to full re-roofing projects, we come prepared with the right tools, materials and safety gear.\n\nIf your roof needs emergency attention, we can secure the area and provide a clear plan for repairs.`,
      },
      {
        id: "flashing",
        title: "Roof Flashing, Valleys & Leak Prevention",
        body:
          `Many leaks start around flashing, valleys, skylights, chimneys and penetrations. We inspect these high-risk areas and repair or replace components as needed.\n\nThis detail work is one of the best ways to extend roof life in ${areaName}.`,
      },
      {
        id: "repair-maint",
        title: `Roof Repair & Maintenance in ${areaName}`,
        body:
          `Preventative maintenance helps avoid costly surprises. We can check tiles, ridge capping, pointing, screws, sealants and drainage so minor issues don’t become major leaks.\n\nAsk us about seasonal inspections—especially after storms or high winds.`,
      },
      {
        id: "tile",
        title: "Tile Roofing Repairs",
        body:
          `Cracked tiles, slipped tiles and failing bedding can allow water ingress. We match and replace damaged tiles and reseal key areas to restore protection.\n\nTile roofs are common across Sydney, and we service tile roofing throughout ${areaName}.`,
      },
      {
        id: "metal",
        title: "Metal Roofing (Colorbond®) Solutions",
        body:
          `Metal roofs are durable, but they still need the right fix when screws, laps, flashings or sheets fail. We repair and replace Colorbond® and other metal roofing systems.\n\nIf you’re considering an upgrade, we can quote re-roofing options for ${areaName}.`,
      },
      {
        id: "storm",
        title: "Storm Damage & Insurance-Friendly Reports",
        body:
          `After severe weather, we can provide inspections, photos and a clear scope of works to help you plan repairs.\n\nIf you need documentation for strata or insurance, we can assist with practical reporting for properties in ${areaName}.`,
      },
      {
        id: "skylight",
        title: "Skylights, Ventilation & Roof Accessories",
        body:
          `We can repair or install skylights, whirlybirds and roof ventilation to improve comfort and reduce condensation issues.\n\nProper ventilation supports roof longevity and indoor comfort for homes in ${areaName}.`,
      },
      {
        id: "slate",
        title: "Slate Roofing Repairs",
        body:
          `Slate is a premium material often found on older or heritage properties. We handle slate repairs with care, including replacing cracked pieces and sealing vulnerable junctions.\n\nIf you have a slate roof in ${areaName}, we’ll provide a tailored approach to protect its character and performance.`,
      },
    ],
  };
}
