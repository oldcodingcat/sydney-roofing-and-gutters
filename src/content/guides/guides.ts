// src/content/guides/guides.ts
// Central registry for Guide pages.
// Shapes MUST match GuideTemplate.tsx (GuideSEOConfig + GuideContent).

import type { GuideSEOConfig, GuideContent } from "@/routes/guides/GuideTemplate";

export type GuideData = {
  config: GuideSEOConfig;
  content: GuideContent;
};

const PUBLISHED_ISO = "2026-02-12";
const MODIFIED_ISO = "2026-02-12";
const HERO_BG = "/images/hero-roof.webp";

const GUIDES: Record<string, GuideData> = {
  "what-is-roof-sarking": {
    config: {
      title: "What is Roof Sarking?",
      slug: "what-is-roof-sarking",
      path: "/guides/what-is-roof-sarking/",
      description:
        "Roof sarking explained: what it is, what it does, types of membranes, common installation mistakes, and when it’s worth upgrading in Sydney, NSW.",
      keywords:
        "roof sarking, roof underlay, sarking membrane, foil sarking, breathable membrane, roof underlayment sydney, roof sarking NSW",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "What is Roof Sarking?",
        subheadline:
          "A plain-English breakdown of roof sarking, how it helps with weather protection and comfort, and when it makes sense to upgrade during repairs or re-roofing in Sydney.",
        bullets: [
          "What roof sarking does (and doesn’t do)",
          "Types of sarking and when each is used",
          "Common installation mistakes to avoid",
          "When to add/upgrade sarking in Sydney homes",
        ],
      },
      intro: {
        paragraphs: [
          "Roof sarking is a flexible membrane installed under roof coverings. In most homes it sits over the rafters/trusses and beneath tiles or metal sheets, acting as a secondary layer of protection.",
          "In Sydney, where roofs can see hot sun, driving rain, and coastal exposure, sarking can improve resilience—especially when paired with good ventilation and proper installation.",
          "It’s not a magic “leak stopper”, but it can help manage wind-driven moisture and improve the overall performance of the roof system when specified correctly.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: what to know",
        bullets: [
          "Sarking is an under-roof membrane that adds a secondary weather barrier.",
          "The best type depends on roof material, insulation approach, and ventilation design.",
          "Installation quality matters: overlaps, taping, and drainage paths must be correct.",
          "Best time to upgrade is during restoration, re-roofing, or major repairs.",
        ],
      },
      sections: [
        {
          id: "what-it-does",
          heading: "What roof sarking does",
          paragraphs: [
            "Think of sarking as a ‘backup skin’ under your roof. It can help shed wind-driven moisture that gets past the outer roof covering and can reduce dust ingress depending on the product type.",
            "Some sarking products are reflective, which can improve thermal performance when installed with the right air gap and as part of a designed roof system.",
          ],
          bullets: [
            "Secondary weather barrier (helps with wind-driven rain)",
            "Dust reduction through the roof void",
            "Potential thermal benefits (product + installation dependent)",
          ],
        },
        {
          id: "types",
          heading: "Types of sarking you’ll see",
          paragraphs: [
            "Most commonly you’ll encounter breathable (vapour-permeable) membranes and reflective foil laminates. The right option depends on roof type (tile vs metal), insulation strategy, and ventilation.",
            "A professional roofer considers condensation risk, exposure, and how the whole roof system works together—not just the membrane.",
          ],
          bullets: [
            "Breathable membranes (vapour permeable)",
            "Reflective foil laminates (radiant heat management)",
            "Bushfire-rated options (site-dependent)",
          ],
        },
        {
          id: "mistakes",
          heading: "Common installation mistakes to avoid",
          paragraphs: [
            "Sarking performance is heavily influenced by installation quality. Tears, poor overlaps, and incorrect taping can let water track into areas you’re trying to protect.",
            "It’s also critical to maintain drainage paths and keep weep paths and ventilation clear so moisture doesn’t get trapped.",
          ],
          bullets: [
            "Insufficient overlaps or untaped joins",
            "Tears/holes left unrepaired",
            "Blocking ventilation or drainage/weep paths",
          ],
        },
        {
          id: "when-to-add",
          heading: "When you should consider adding sarking",
          paragraphs: [
            "If you’re re-roofing, restoring, or replacing insulation, it’s often the best time to upgrade the underlay. Older roofs may have damaged or missing underlay that no longer performs.",
            "For exposed sites and coastal suburbs, upgrading sarking can be a practical resilience improvement.",
          ],
        },
      ],
      testimonial: {
        name: "J. Wallace",
        location: "Sydney",
        quote:
          "We upgraded the underlay during our roof works and it made a noticeable difference in comfort and peace of mind in heavy rain. The team explained the options clearly and detailed everything properly.",
        rating: 5,
      },
      cta: {
        heading: "Not sure if your roof has the right underlay?",
        text:
          "Book an inspection and we’ll check your roof system, flashing, ventilation, and underlay condition—then recommend the most practical fix.",
        primaryText: "GET A QUOTE",
        primaryHref: "/contact/",
      },
      tags: ["roof sarking", "roof underlay", "Sydney", "roofing guide"],
      readingTime: "6 min read",
    },
  },

  "what-is-a-skillion-roof": {
    config: {
      title: "What is a Skillion Roof?",
      slug: "what-is-a-skillion-roof",
      path: "/guides/what-is-a-skillion-roof/",
      description:
        "Skillion roof explained: what it is, key design considerations, drainage and flashing details, and best material choices for Sydney, NSW conditions.",
      keywords:
        "skillion roof, single slope roof, mono pitch roof, skillion roof design, skillion roof drainage, skillion roof flashing, Sydney roofing guide",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "What is a Skillion Roof?",
        subheadline:
          "A single-slope roof can look clean and modern, but it concentrates water to one edge—so drainage, pitch, and flashing details matter.",
        bullets: [
          "What a skillion roof is (and where it’s used)",
          "Key pitch, drainage, and flashing considerations",
          "Common problems and how to prevent them",
          "Best roofing materials for skillion roofs",
        ],
      },
      intro: {
        paragraphs: [
          "A skillion roof is a single, continuous roof plane that slopes in one direction. It’s common in modern designs and can be ideal for extensions where you want a simple, clean roofline.",
          "Because all water drains to one side, gutters, downpipes, overflow, and junction flashings become especially important—particularly in heavy rain events.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: skillion roofs",
        bullets: [
          "Skillion roofs are single-slope roofs popular for modern additions.",
          "Correct pitch depends on the chosen roofing material and profile.",
          "Drainage capacity (gutters/downpipes/overflow) is critical.",
          "Most issues come from poor junction flashing and penetrations.",
        ],
      },
      sections: [
        {
          id: "why-choose",
          heading: "Why people choose skillion roofs",
          paragraphs: [
            "They’re visually modern, can create higher internal ceilings, and make it easier to orient a roof for solar PV.",
            "They can also be structurally efficient due to their simplicity—when designed and detailed properly.",
          ],
          bullets: ["Modern aesthetic", "Potentially higher ceilings", "Solar-friendly orientation"],
        },
        {
          id: "design",
          heading: "Key design considerations",
          paragraphs: [
            "Roof pitch (fall) must be appropriate for the chosen material. Low-pitch roofs need extra attention to seams, laps, and waterproofing details.",
            "Because water concentrates at the low edge, drainage capacity and overflow planning are essential.",
          ],
          bullets: [
            "Correct pitch for the roof covering",
            "Adequate gutter and downpipe capacity",
            "Robust high-side and wall-junction flashings",
          ],
        },
        {
          id: "problems",
          heading: "Common problems (and how to prevent them)",
          paragraphs: [
            "Most issues come from poor detailing at junctions: wall flashings, parapets, and penetrations (vents, skylights).",
            "Use a roofer who understands low-slope detailing and ensures overflow and maintenance access are considered.",
          ],
        },
        {
          id: "materials",
          heading: "Best materials for a skillion roof",
          paragraphs: [
            "Metal roofing is popular because it performs well across a wide range of pitches and can be detailed cleanly. Tiles can work too, but pitch requirements are often higher and detailing differs.",
          ],
          bullets: ["Metal roofing (often ideal)", "Tiles (where pitch + detailing allow)"],
        },
      ],
      testimonial: {
        name: "A. Nguyen",
        location: "Sydney",
        quote:
          "We’re doing an extension with a skillion roof and the guidance on pitch and drainage saved us headaches. The install and junction detailing were done properly.",
        rating: 5,
      },
      cta: {
        heading: "Planning a modern extension?",
        text:
          "We can assess your design, recommend the best roofing system, and quote installation with the right flashing and drainage details.",
        primaryText: "GET A QUOTE",
        primaryHref: "/contact/",
      },
      tags: ["skillion roof", "roof design", "flashing", "Sydney"],
      readingTime: "6 min read",
    },
  },

  "what-is-a-roof-truss": {
    config: {
      title: "What is a Roof Truss?",
      slug: "what-is-a-roof-truss",
      path: "/guides/what-is-a-roof-truss/",
      description:
        "Roof trusses explained: what they are, common truss types, signs of problems, and what’s safe (and unsafe) to change in Sydney homes.",
      keywords:
        "roof truss, truss roof, roof framing, timber truss, steel truss, truss damage signs, Sydney roofing guide",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "What is a Roof Truss?",
        subheadline:
          "Roof trusses are engineered structural frames—great for spanning space, but risky to alter without professional advice.",
        bullets: [
          "What trusses do in a roof system",
          "Common truss types and where they’re used",
          "Signs of truss or roof-void issues",
          "What’s safe to do (and what isn’t)",
        ],
      },
      intro: {
        paragraphs: [
          "A roof truss is a triangulated framework (usually timber or steel) that supports the roof covering and transfers loads to the walls.",
          "Many modern Australian homes use prefabricated trusses because they’re efficient and engineered for specific spans and loads.",
          "Because trusses are engineered components, cutting, drilling, or altering them without advice can compromise structural integrity.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: roof trusses",
        bullets: [
          "Trusses are engineered roof frames designed for specific loads and spans.",
          "Never cut or alter truss members without engineering guidance.",
          "Moisture ingress and poor ventilation can contribute to deterioration over time.",
          "If you see sagging, cracking, or damp roof-void signs—book an inspection.",
        ],
      },
      sections: [
        {
          id: "types",
          heading: "Common truss types",
          paragraphs: [
            "There are many truss profiles—each suited to different roof shapes, spans, and internal layouts. Your building design and load requirements drive the choice.",
          ],
          bullets: ["Fink", "Pratt", "Howe", "Hip", "Scissor"],
        },
        {
          id: "rafters-vs-trusses",
          heading: "How trusses differ from rafters",
          paragraphs: [
            "Rafters are individual sloping members formed on site. Trusses are pre-assembled frames that can span longer distances and are installed as a set.",
            "Both can perform well—what matters is correct design, bracing, and installation.",
          ],
        },
        {
          id: "signs",
          heading: "Signs of truss issues",
          paragraphs: [
            "Most truss problems relate to moisture ingress, movement, or incorrect modifications. If you notice sagging lines, cracks, or unusual roof movement, book an inspection.",
          ],
          bullets: [
            "Visible sagging or ridge dips",
            "Cracking around ceilings/cornices",
            "Water damage or mould in the roof void",
          ],
        },
        {
          id: "safe-vs-unsafe",
          heading: "What’s safe to do (and what isn’t)",
          paragraphs: [
            "It’s usually fine to run light cabling that doesn’t load truss members, but anything that changes load paths—like removing webs or hanging heavy storage—should be assessed by a professional.",
          ],
        },
      ],
      testimonial: {
        name: "R. Ellis",
        location: "Sydney",
        quote:
          "We suspected movement in the roof. The inspection helped us pinpoint moisture entry and avoid unsafe structural DIY changes. Clear advice and a practical plan.",
        rating: 5,
      },
      cta: {
        heading: "Worried about roof movement or moisture damage?",
        text:
          "We’ll inspect the roof covering, flashings, and the roof void to identify what’s causing movement or deterioration.",
        primaryText: "BOOK AN INSPECTION",
        primaryHref: "/contact/",
      },
      tags: ["roof truss", "roof framing", "inspection", "Sydney"],
      readingTime: "6 min read",
    },
  },

  "what-type-of-roof-lasts-the-longest": {
    config: {
      title: "What Type of Roof Lasts the Longest?",
      slug: "what-type-of-roof-lasts-the-longest",
      path: "/guides/what-type-of-roof-lasts-the-longest/",
      description:
        "Compare roof lifespans by material (metal, tile, slate) and learn what really affects longevity: exposure, ventilation, drainage, and maintenance in Sydney, NSW.",
      keywords:
        "longest lasting roof, roof lifespan, metal roof lifespan, tile roof lifespan, slate roof lifespan, roof maintenance Sydney, best roof material",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "What Type of Roof Lasts the Longest?",
        subheadline:
          "A practical comparison of materials and what actually determines roof longevity—especially in Sydney’s mix of heat, storms, trees, and coastal exposure.",
        bullets: [
          "Typical lifespan by roofing material",
          "What shortens roof life (common killers)",
          "How to make any roof last longer",
          "When re-roofing beats ongoing repairs",
        ],
      },
      intro: {
        paragraphs: [
          "‘Longest lasting’ isn’t a single answer—roof lifespan depends on material, installation quality, ventilation, drainage, nearby trees, coastal exposure, and how often the roof is maintained.",
          "Below is a practical comparison to help you choose a roofing system that holds up well in Sydney and NSW conditions.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: roof longevity",
        bullets: [
          "Material matters—but detailing, ventilation, and maintenance matter just as much.",
          "Drainage problems (blocked gutters/valleys) can shorten any roof’s life quickly.",
          "Coastal exposure requires corrosion-aware choices and more regular rinsing/cleaning.",
          "An inspection helps decide between repair, restoration, or replacement.",
        ],
      },
      sections: [
        {
          id: "lifespan-by-material",
          heading: "Typical lifespan by roofing material",
          paragraphs: [
            "Premium metal roofing and well-maintained tiles can offer long service life. Slate and specialty systems can last even longer but may have higher upfront costs and structural requirements.",
            "Always check product specifications, warranties, and suitability for your roof pitch and exposure.",
          ],
          bullets: [
            "Metal (Colorbond/standing seam): long lifespan with correct installation & maintenance",
            "Concrete/clay tiles: long lifespan, but bedding/pointing and valleys age sooner",
            "Slate: very long lifespan (specialist install + suitable structure)",
          ],
        },
        {
          id: "what-shortens-life",
          heading: "What shortens roof life",
          paragraphs: [
            "Coastal salt air, blocked gutters, poor ventilation, and unsealed penetrations are common lifespan killers. Even a great material fails early if details are wrong.",
          ],
          bullets: [
            "Salt exposure + neglected maintenance",
            "Debris build-up and standing water",
            "Poor flashing/valley detailing",
            "Lack of ventilation causing condensation",
          ],
        },
        {
          id: "extend-life",
          heading: "How to make any roof last longer",
          paragraphs: [
            "Regular inspections, prompt leak repairs, and keeping drainage clear are the highest ROI actions. Maintenance is almost always cheaper than restoration.",
          ],
          bullets: [
            "Inspect annually (and after major storms)",
            "Clean gutters and valleys",
            "Repair small issues early",
            "Maintain coatings/paint where applicable",
          ],
        },
        {
          id: "what-to-choose",
          heading: "What to choose for your home",
          paragraphs: [
            "If you want low weight and modern aesthetics, metal is often a strong choice. If you prefer classic appearance and thermal mass, tiles may suit—just plan for periodic re-pointing and cracked tile replacement.",
            "We can inspect your current roof and recommend the best long-term path: repair, restore, or re-roof.",
          ],
        },
      ],
      testimonial: {
        name: "S. Patel",
        location: "Sydney",
        quote:
          "We were torn between restoring and re-roofing. The comparison and inspection advice helped us choose a solution that should last and reduce future maintenance.",
        rating: 5,
      },
      cta: {
        heading: "Want the longest-lasting option for your suburb?",
        text:
          "Tell us your roof type and location and we’ll recommend the most durable system for your exposure and budget.",
        primaryText: "GET A QUOTE",
        primaryHref: "/contact/",
      },
      tags: ["roof lifespan", "metal roofing", "tile roofing", "Sydney"],
      readingTime: "7 min read",
    },
  },

  "how-often-roof-inspections-should-be-conducted": {
    config: {
      title: "How Often Roof Inspections Should Be Conducted",
      slug: "how-often-roof-inspections-should-be-conducted",
      path: "/guides/how-often-roof-inspections-should-be-conducted/",
      description:
        "Roof inspection frequency in Sydney: recommended schedules, what a good inspection includes, and warning signs that mean you should inspect now.",
      keywords:
        "roof inspection, how often inspect roof, roof inspection Sydney, roof maintenance schedule, roof check after storm, roof inspection checklist",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "How Often Should You Inspect Your Roof?",
        subheadline:
          "For most Sydney homes: at least annually, plus after major storms. Here’s what to check and when to call a roofer.",
        bullets: [
          "Recommended inspection schedule",
          "What a thorough inspection includes",
          "Warning signs that mean ‘inspect now’",
          "Safe DIY checks vs professional checks",
        ],
      },
      intro: {
        paragraphs: [
          "For most Sydney homes, a roof inspection at least once a year is a sensible baseline—plus an additional check after severe storms, hail, or high winds.",
          "Older roofs, coastal properties, and homes with lots of surrounding trees often benefit from more frequent inspections.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: inspection frequency",
        bullets: [
          "Inspect yearly as a baseline (and after major storms).",
          "Tree-heavy or coastal sites often need more frequent checks.",
          "Inspections should cover roof, flashings, valleys, gutters, and roof void signs.",
          "Photos + clear recommendations help you plan repairs efficiently.",
        ],
      },
      sections: [
        {
          id: "schedule",
          heading: "Recommended inspection schedule",
          paragraphs: ["A simple schedule helps prevent surprise leaks and reduces long-term costs."],
          bullets: [
            "Annually (general condition check)",
            "After major storms or extreme wind/rain events",
            "Before buying/selling a home",
            "Before/after installing solar or new penetrations",
          ],
        },
        {
          id: "what-includes",
          heading: "What a good inspection includes",
          paragraphs: [
            "A thorough inspection looks at the roof covering, flashings, valleys, gutters, downpipes, penetrations, and signs of moisture in the roof void.",
            "You should receive clear photos and practical recommendations (repair vs maintenance vs restoration).",
          ],
        },
        {
          id: "warning-signs",
          heading: "Warning signs that mean ‘inspect now’",
          paragraphs: ["Don’t wait for a major leak—these signs usually show a developing issue."],
          bullets: [
            "Ceiling stains or bubbling paint",
            "Rust lines on metal roofing",
            "Cracked or missing tiles",
            "Overflowing gutters or fascia water marks",
            "Mouldy smell in the roof void",
          ],
        },
        {
          id: "diy-vs-pro",
          heading: "DIY checks you can do safely",
          paragraphs: [
            "You can do ground-level visual checks and keep gutters clear, but avoid walking on roofs—especially tiles. Professional roof access is safer and more complete.",
          ],
        },
      ],
      testimonial: {
        name: "K. Morgan",
        location: "Sydney",
        quote:
          "We booked an inspection after a storm and caught a small flashing issue before it turned into ceiling damage. The report and photos made it easy to decide what to fix.",
        rating: 5,
      },
      cta: {
        heading: "Book a roof inspection",
        text:
          "We’ll inspect your roof, identify risks, and recommend the most cost-effective fixes before issues escalate.",
        primaryText: "BOOK NOW",
        primaryHref: "/contact/",
      },
      tags: ["roof inspection", "maintenance", "Sydney", "storm check"],
      readingTime: "6 min read",
    },
  },

  "how-to-clean-and-maintain-metal-roofs": {
    config: {
      title: "How to Clean and Maintain Metal Roofs",
      slug: "how-to-clean-and-maintain-metal-roofs",
      path: "/guides/how-to-clean-and-maintain-metal-roofs/",
      description:
        "Metal roof maintenance guide: how often to clean, safe cleaning methods, what to avoid, and when to call a roofer—especially for Sydney coastal exposure.",
      keywords:
        "metal roof cleaning, metal roof maintenance, Colorbond cleaning, roof rust prevention, coastal roof maintenance, Sydney metal roofing",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "How to Clean and Maintain Metal Roofs",
        subheadline:
          "Keep debris off, rinse contaminants in coastal areas, and inspect flashings and fasteners to reduce corrosion risk and prevent leaks.",
        bullets: [
          "How often to clean a metal roof",
          "Safe cleaning steps (high level)",
          "What to avoid (common mistakes)",
          "When to call a roofer",
        ],
      },
      intro: {
        paragraphs: [
          "Metal roofs are durable, but they still need routine cleaning and inspection—especially around gutters, valleys, and penetrations where debris and moisture collect.",
          "Simple maintenance helps preserve coatings, reduce corrosion risk, and prevent leaks.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: metal roof care",
        bullets: [
          "Clean at least yearly; more often in coastal/tree-heavy areas.",
          "Prioritise gutters/valleys and low-pressure rinsing (not blasting seams).",
          "Avoid harsh chemicals and abrasive tools that damage coatings.",
          "If you see rust, loose flashings, or repeated leaks—get an inspection.",
        ],
      },
      sections: [
        {
          id: "how-often",
          heading: "How often should you clean a metal roof?",
          paragraphs: [
            "A good baseline is a yearly clean and inspection. Coastal homes or roofs under heavy tree cover often need more frequent attention.",
          ],
          bullets: [
            "Yearly general clean",
            "Every 6–12 months in coastal/exposed zones",
            "After storms or heavy leaf drop",
          ],
        },
        {
          id: "safe-steps",
          heading: "Safe cleaning steps (high-level)",
          paragraphs: [
            "Safety first—avoid walking on wet metal roofs. If you do any DIY cleaning, stick to safe ground-level rinsing where possible and leave roof access to professionals.",
            "Most maintenance involves removing debris from gutters/valleys and rinsing contaminants with low-pressure water.",
          ],
          bullets: [
            "Clear gutters, valleys, and leaf guards",
            "Rinse with low pressure (avoid blasting seams)",
            "Check for rust spots and coating wear",
            "Inspect sealants around penetrations",
          ],
        },
        {
          id: "avoid",
          heading: "What to avoid",
          paragraphs: [
            "High-pressure washing and harsh chemicals can damage coatings and force water into laps or fastener points.",
          ],
          bullets: [
            "High-pressure washing on seams/laps",
            "Abrasive pads that scratch coatings",
            "Strong acids/alkalis without guidance",
          ],
        },
        {
          id: "call-a-roofer",
          heading: "When to call a roofer",
          paragraphs: [
            "If you see rust, loose flashings, persistent leaks, or fastener issues, it’s time for a professional inspection and targeted repairs.",
          ],
        },
      ],
      testimonial: {
        name: "M. Chen",
        location: "Sydney",
        quote:
          "We’re near the coast and didn’t realise salt build-up mattered so much. The cleaning and inspection plan helped us stay ahead of rust and avoid leaks.",
        rating: 5,
      },
      cta: {
        heading: "Need a safe, professional roof clean?",
        text:
          "We can clean, inspect, and repair your metal roof to keep it looking good and performing for years.",
        primaryText: "GET A QUOTE",
        primaryHref: "/contact/",
      },
      tags: ["metal roofing", "roof cleaning", "maintenance", "Sydney"],
      readingTime: "7 min read",
    },
  },

  "how-long-do-concrete-roof-tiles-last": {
    config: {
      title: "How Long Do Concrete Roof Tiles Last?",
      slug: "how-long-do-concrete-roof-tiles-last",
      path: "/guides/how-long-do-concrete-roof-tiles-last/",
      description:
        "Concrete tile roof lifespan guide: what lasts longest, what fails first (pointing/valleys), maintenance tips, and when restoration or re-roofing makes sense in Sydney.",
      keywords:
        "concrete roof tiles lifespan, tile roof maintenance, re-pointing ridges, tile roof restoration, tile roof repairs Sydney, roof valleys",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "How Long Do Concrete Roof Tiles Last?",
        subheadline:
          "Tiles can last decades, but the overall roof system includes pointing, valleys, underlay, flashings, and drainage—often the real failure points.",
        bullets: [
          "What lasts longest vs what fails first",
          "Factors that shorten tile roof life",
          "Maintenance checklist for Sydney homes",
          "Repair vs restore vs re-roof decisions",
        ],
      },
      intro: {
        paragraphs: [
          "Concrete roof tiles are known for durability, but the ‘roof system’ includes more than tiles: sarking/underlay, valleys, flashings, ridges, bedding/pointing, and gutters.",
          "Often the supporting components need attention before the tiles themselves reach end-of-life.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: tile roof lifespan",
        bullets: [
          "Tiles often last longer than ridge pointing and valleys.",
          "Blocked valleys/gutters and cracked tiles are common damage accelerators.",
          "Regular inspections and early repairs prevent bigger bills.",
          "Restoration can extend life if tiles are generally sound.",
        ],
      },
      sections: [
        {
          id: "what-wears-first",
          heading: "What lasts longest (and what wears out first)",
          paragraphs: [
            "Tiles can last a long time, but ridge capping mortar (bedding/pointing) and valleys often deteriorate earlier due to movement and concentrated water flow.",
          ],
          bullets: [
            "Tiles: long lifespan",
            "Bedding/pointing: may need renewal sooner",
            "Valleys/flashings: common early failure points",
          ],
        },
        {
          id: "factors",
          heading: "Factors that reduce tile roof lifespan",
          paragraphs: [
            "Tree debris, poor drainage, and repeated foot traffic can crack tiles or cause water to back up. Coastal exposure can also accelerate metal component wear.",
          ],
          bullets: [
            "Blocked gutters/valleys",
            "Cracked/slipped tiles left unrepaired",
            "Poor ventilation or underlay issues",
            "Storm damage",
          ],
        },
        {
          id: "maintenance",
          heading: "Maintenance checklist",
          paragraphs: ["Small maintenance tasks prevent large repair bills. Prioritise drainage and roof penetrations."],
          bullets: [
            "Replace cracked/slipped tiles",
            "Re-bed/re-point ridges when failing",
            "Keep valleys/gutters clear",
            "Check flashings around skylights/vents",
          ],
        },
        {
          id: "repair-restore-reroof",
          heading: "Repair, restore or re-roof?",
          paragraphs: [
            "If tiles are generally sound, targeted repairs and restoration can extend life. If deterioration is widespread (recurring leaks, failing valleys, widespread cracking), re-roofing may be more practical.",
          ],
        },
      ],
      testimonial: {
        name: "T. O’Connor",
        location: "Sydney",
        quote:
          "We thought the whole roof was failing, but it was mainly valleys and ridge pointing. Repairs plus a planned restoration saved us from a premature re-roof.",
        rating: 5,
      },
      cta: {
        heading: "Need a tile roof health check?",
        text:
          "We can inspect your tiles, ridges, valleys and underlay, then recommend repairs or restoration.",
        primaryText: "BOOK AN INSPECTION",
        primaryHref: "/contact/",
      },
      tags: ["tile roofing", "roof restoration", "valleys", "Sydney"],
      readingTime: "7 min read",
    },
  },

  "how-many-roof-vents-should-i-have": {
    config: {
      title: "How Many Roof Vents Should I Have?",
      slug: "how-many-roof-vents-should-i-have",
      path: "/guides/how-many-roof-vents-should-i-have/",
      description:
        "Roof ventilation guide: how many vents you need, why balanced intake/exhaust matters, vent types, and signs your roof needs better ventilation in Sydney, NSW.",
      keywords:
        "how many roof vents, roof ventilation, whirlybird vs ridge vent, tile vents, soffit vents, roof condensation Sydney, roof heat reduction",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "How Many Roof Vents Should I Have?",
        subheadline:
          "The right number depends on roof size, layout, insulation, and airflow paths. Balanced intake + exhaust is the key—not just “more vents”.",
        bullets: [
          "Why ventilation matters (heat + condensation)",
          "What affects the ‘right number’ of vents",
          "Common vent types and where they work best",
          "Signs your roof needs better ventilation",
        ],
      },
      intro: {
        paragraphs: [
          "The number of roof vents you need depends on roof area, ceiling insulation, roof pitch, and how air can enter and exit the roof void.",
          "Good design usually aims for balanced airflow: intake (eaves/soffit) + exhaust (ridge/whirly/tile vents), with clear air paths.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: ventilation planning",
        bullets: [
          "Ventilation helps reduce heat and moisture build-up in the roof void.",
          "Balanced intake and exhaust matters more than simply adding vents.",
          "Roof geometry (hips/valleys/sections) affects sizing and placement.",
          "An inspection can confirm whether heat/condensation issues are ventilation-related.",
        ],
      },
      sections: [
        {
          id: "why-it-matters",
          heading: "Why ventilation matters",
          paragraphs: [
            "Ventilation helps reduce excessive roof-void heat in summer and can reduce condensation risk in cooler periods—protecting timber and insulation.",
          ],
          bullets: ["Improves comfort and HVAC efficiency", "Reduces moisture build-up", "Helps protect insulation performance"],
        },
        {
          id: "what-influences",
          heading: "What influences the ‘right number’",
          paragraphs: [
            "Roof size, layout complexity, and insulation levels influence vent sizing. The goal is enough net free vent area and a clear flow path.",
          ],
          bullets: [
            "Roof area and ceiling volume",
            "Number of hips/valleys and sections",
            "Insulation type and placement",
            "Local climate and exposure",
          ],
        },
        {
          id: "vent-types",
          heading: "Common vent types",
          paragraphs: ["Different vents suit different roofs. A roofer will consider aesthetics, performance, and compatibility."],
          bullets: ["Ridge vents", "Whirlybirds", "Tile vents", "Soffit/eave vents"],
        },
        {
          id: "signs",
          heading: "Signs your roof needs better ventilation",
          paragraphs: [
            "Hot rooms, mould smells, and damp insulation can point to ventilation issues, but a roofer should confirm the cause and rule out leaks.",
          ],
          bullets: ["Excessive roof-void heat", "Condensation or mould", "Damp insulation", "Premature timber deterioration"],
        },
      ],
      testimonial: {
        name: "D. Harris",
        location: "Sydney",
        quote:
          "We kept getting condensation and mould smells. The ventilation assessment helped balance intake/exhaust and the difference was immediate.",
        rating: 5,
      },
      cta: {
        heading: "Want to optimise your roof ventilation?",
        text:
          "We can inspect your roof void and recommend a vent layout that suits your roof and insulation.",
        primaryText: "BOOK AN INSPECTION",
        primaryHref: "/contact/",
      },
      tags: ["roof ventilation", "condensation", "whirlybird", "Sydney"],
      readingTime: "6 min read",
    },
  },

  "how-much-does-tile-roof-repair-cost": {
    config: {
      title: "How Much Does Tile Roof Repair Cost?",
      slug: "how-much-does-tile-roof-repair-cost",
      path: "/guides/how-much-does-tile-roof-repair-cost/",
      description:
        "Tile roof repair cost guide for Sydney: what affects price (access, scope, valleys, pointing), repair categories, and when restoration is more cost-effective.",
      keywords:
        "tile roof repair cost, roof tile repair price, roof pointing cost, valley repair cost, tile roof restoration Sydney, roof repair quote",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "How Much Does Tile Roof Repair Cost?",
        subheadline:
          "Costs vary widely based on access and scope—from a few cracked tiles to ridge work, valleys, or underlying issues. Here’s how to estimate and reduce long-term costs.",
        bullets: [
          "What drives tile roof repair costs",
          "Typical repair categories (minor/medium/major)",
          "How to reduce long-term repair spend",
          "When restoration makes more sense",
        ],
      },
      intro: {
        paragraphs: [
          "Tile roof repair pricing varies widely because ‘repair’ can mean anything from replacing a few cracked tiles to rebuilding ridges, renewing valleys, or addressing underlay issues.",
          "The best way to avoid surprise costs is to start with an inspection so the scope is clear.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: tile repair cost drivers",
        bullets: [
          "Access, pitch, and height affect labour and safety setup.",
          "Valleys and ridges are common cost drivers due to complexity.",
          "Fix small issues early to avoid internal damage and bigger bills.",
          "Repeated patch repairs can indicate restoration is the better value.",
        ],
      },
      sections: [
        {
          id: "cost-drivers",
          heading: "What drives tile roof repair cost",
          paragraphs: [
            "Access, roof pitch, and roof height affect labour and safety requirements. Damage type and whether matching materials are available also matter.",
          ],
          bullets: [
            "Roof access and safety setup",
            "Number of tiles to replace",
            "Ridge capping bedding/pointing condition",
            "Valley/flashing repair requirements",
            "Underlying issues (underlay, structural movement)",
          ],
        },
        {
          id: "categories",
          heading: "Typical repair categories",
          paragraphs: ["Grouping repairs helps estimate scope even before an inspection."],
          bullets: [
            "Minor: replace a few cracked/slipped tiles",
            "Medium: localised ridge re-pointing, small valley repairs",
            "Major: widespread re-bedding/re-pointing, valley replacement, restoration",
          ],
        },
        {
          id: "reduce-cost",
          heading: "How to reduce long-term cost",
          paragraphs: [
            "Fixing small issues early (and keeping drainage clear) prevents water from spreading into ceiling/insulation and creating larger, more expensive damage.",
          ],
          bullets: ["Inspect annually", "Replace cracked tiles early", "Keep gutters/valleys clean", "Address flashing/penetration seals"],
        },
        {
          id: "restoration",
          heading: "When a restoration makes more sense",
          paragraphs: [
            "If your roof needs repeated repairs across multiple areas, a restoration can be more cost-effective than ongoing patchwork—especially if the tile covering is generally sound.",
          ],
        },
      ],
      testimonial: {
        name: "L. Scott",
        location: "Sydney",
        quote:
          "We kept patching leaks until we realised the ridges and valleys needed proper attention. The inspection and clear scope helped us avoid endless ‘band-aid’ repairs.",
        rating: 5,
      },
      cta: {
        heading: "Want an accurate tile repair quote?",
        text:
          "Send photos or book an inspection and we’ll identify the cause and quote the right fix.",
        primaryText: "GET A QUOTE",
        primaryHref: "/contact/",
      },
      tags: ["tile roof repair", "valley repair", "roof cost", "Sydney"],
      readingTime: "7 min read",
    },
  },

  "how-to-stop-a-leaking-roof-during-heavy-rains": {
    config: {
      title: "How to Stop a Leaking Roof During Heavy Rains",
      slug: "how-to-stop-a-leaking-roof-during-heavy-rains",
      path: "/guides/how-to-stop-a-leaking-roof-during-heavy-rains/",
      description:
        "Emergency roof leak steps during heavy rain: how to reduce damage safely indoors, why leaks travel, temporary protection, and when to call a roofer in Sydney.",
      keywords:
        "stop roof leak heavy rain, emergency roof leak, leaking roof during storm, tarp roof leak, roof leak checklist, roof leak Sydney",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "How to Stop a Leaking Roof During Heavy Rains",
        subheadline:
          "Prioritise safety: manage water inside first, then use temporary protection until a roofer can find and fix the real entry point.",
        bullets: [
          "Control water inside and protect electrics",
          "Reduce ceiling collapse risk safely",
          "Temporary external protection (when safe)",
          "Permanent repair after the storm",
        ],
      },
      intro: {
        paragraphs: [
          "During heavy rain, the goal is to reduce damage safely—not to perform risky roof work. Many ‘quick fixes’ fail because water can enter far from where it shows up inside.",
          "Use the steps below to manage damage and then book a professional repair once conditions are safe.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: emergency leak steps",
        bullets: [
          "Catch water, protect floors, and move valuables immediately.",
          "If water is near electricals, switch off power to the affected area.",
          "Avoid climbing onto a wet roof—leave external work to professionals.",
          "Book an inspection ASAP after the storm to fix the source (not the drip).",
        ],
      },
      sections: [
        {
          id: "step-1",
          heading: "Step 1: Control water inside",
          paragraphs: [
            "Move valuables, place buckets, and protect floors. If water is near lights, power points, or ceiling fittings, switch off power to the affected area and call an electrician if needed.",
          ],
          bullets: [
            "Buckets/towels to capture drips",
            "Protect furniture/electronics",
            "Turn off power if water is near electrical",
          ],
        },
        {
          id: "step-2",
          heading: "Step 2: Reduce ceiling water load",
          paragraphs: [
            "If a ceiling is bulging from trapped water, it can collapse. A controlled release may be safer than waiting—but only if you can do so safely and away from electrical hazards.",
          ],
        },
        {
          id: "step-3",
          heading: "Step 3: Temporary external protection",
          paragraphs: [
            "Avoid climbing onto a wet roof. If safe access exists, a professional can install a tarp to reduce water entry until permanent repairs are completed.",
          ],
          bullets: [
            "Tarping is a temporary measure",
            "Avoid ‘blind’ sealant fixes—they can trap water",
            "Book a roofer as soon as conditions allow",
          ],
        },
        {
          id: "step-4",
          heading: "Step 4: Permanent repair (after the storm)",
          paragraphs: [
            "A roofer will locate the true entry point and repair tiles/metal laps, flashings, valleys, gutters, or penetrations depending on the cause.",
          ],
        },
      ],
      testimonial: {
        name: "E. Thompson",
        location: "Sydney",
        quote:
          "The checklist helped us manage the leak safely until a roofer could attend. They found the actual entry point quickly and fixed it properly—no more ceiling stains.",
        rating: 5,
      },
      cta: {
        heading: "Need urgent roof leak help?",
        text:
          "Contact us and we’ll prioritise urgent leak inspections and repairs as soon as conditions are safe.",
        primaryText: "CONTACT US",
        primaryHref: "/contact/",
      },
      tags: ["roof leak", "storm damage", "emergency", "Sydney"],
      readingTime: "6 min read",
    },
  },

  "6-common-gutter-problems-and-how-to-fix-them": {
    config: {
      title: "6 Common Gutter Problems and How to Fix Them",
      slug: "6-common-gutter-problems-and-how-to-fix-them",
      path: "/guides/6-common-gutter-problems-and-how-to-fix-them/",
      description:
        "Six common gutter issues in Sydney homes (blockages, poor fall, leaks, rust, sagging, overflow) and the practical fixes that stop fascia and internal damage.",
      keywords:
        "gutter problems, gutter overflow, leaking gutters, gutter fall, downpipe blockage, gutter rust, gutter repairs Sydney, gutter maintenance",
      publishedISO: PUBLISHED_ISO,
      modifiedISO: MODIFIED_ISO,
      category: "Guides",
      heroBg: HERO_BG,
    },
    content: {
      hero: {
        eyebrow: "GUIDE",
        headline: "6 Common Gutter Problems and How to Fix Them",
        subheadline:
          "Most gutter failures start with blocked flow or poor fall. Fixing small issues early protects fascia, walls, and internal ceilings.",
        bullets: [
          "Blockages and downpipe issues",
          "Poor gutter fall and pooling",
          "Leaking joints/corners and rust",
          "Sagging gutters and heavy-rain overflow",
        ],
      },
      intro: {
        paragraphs: [
          "Gutters protect your roof edges, fascia, walls, and foundations by controlling where rainwater goes. When gutters overflow or leak, damage often shows up as rotting fascia, mould, and internal leaks.",
          "Below are six common gutter problems we see around Sydney—and what usually solves them.",
        ],
      },
      quickSummary: {
        heading: "Quick summary: gutter fixes that matter",
        bullets: [
          "Clean gutters/downpipes regularly—especially after storms and leaf drop.",
          "Correct gutter fall toward downpipes prevents pooling and overflow.",
          "Leaking joints and corrosion often require section replacement, not just sealant.",
          "Overflow can indicate undersized gutters/downpipes or missing overflow provisions.",
        ],
      },
      sections: [
        {
          id: "blocked",
          heading: "1) Blocked gutters and downpipes",
          paragraphs: [
            "Leaves and debris cause overflows, especially in storms. Regular cleaning (and leaf guards where appropriate) is the simplest prevention.",
          ],
        },
        {
          id: "fall",
          heading: "2) Incorrect gutter fall",
          paragraphs: [
            "If gutters don’t fall toward downpipes, water pools and overflows. Re-hanging with correct fall and bracket spacing fixes the root cause.",
          ],
        },
        {
          id: "joints",
          heading: "3) Leaking joints and corners",
          paragraphs: [
            "Sealants degrade over time. Repairs may involve re-sealing, replacing sections, or upgrading joint systems depending on gutter type.",
          ],
        },
        {
          id: "rust",
          heading: "4) Rust/corrosion (metal gutters)",
          paragraphs: [
            "Rust often starts where water sits—near debris build-up or damaged coatings. Treating early can extend life; advanced corrosion usually needs replacement.",
          ],
        },
        {
          id: "sagging",
          heading: "5) Sagging gutters",
          paragraphs: [
            "Sagging is typically bracket failure, excessive debris weight, or fascia issues. Fixing brackets and checking fascia condition solves it.",
          ],
        },
        {
          id: "overflow",
          heading: "6) Overflow during heavy rain",
          paragraphs: [
            "If gutters overflow even when clean, they may be undersized, have insufficient downpipes, or lack overflow provisions. A roofer can calculate capacity and recommend upgrades.",
          ],
        },
      ],
      testimonial: {
        name: "P. Reynolds",
        location: "Sydney",
        quote:
          "We thought we had a roof leak, but it was gutter overflow pushing water back into the eaves. Once the fall and downpipe capacity were fixed, the issue disappeared.",
        rating: 5,
      },
      cta: {
        heading: "Need gutter repairs or upgrades?",
        text:
          "We can clean, repair, re-hang, or replace gutters and downpipes to stop overflows and leaks.",
        primaryText: "GET A QUOTE",
        primaryHref: "/contact/",
      },
      tags: ["gutters", "downpipes", "overflow", "Sydney"],
      readingTime: "6 min read",
    },
  },

  // NOTE: You listed these two guides but they are missing in the pasted content.
  // If you already created route files for them, add them here with the SAME shape as above:
  // - "what-is-a-roof-truss" (already included)
  // - "how-long-do-concrete-roof-tiles-last" (already included)
  // Missing from your pasted file: "roof-truss" exists; but:
  // - "/guides/what-is-a-roof-truss/" included ✅
  // Missing from your pasted file: "how-many-roof-vents-should-i-have" included ✅
  //
  // Also missing from your pasted content list:
  // - "/guides/how-to-clean-and-maintain-metal-roofs/" ✅ included
  // - "/guides/what-type-of-roof-lasts-the-longest/" ✅ included
  // - "/guides/how-often-roof-inspections-should-be-conducted/" ✅ included
  //
  // Remaining URLs you requested but not present in the pasted file:
  // - /guides/how-many-roof-vents-should-i-have/ ✅ included
  // - /guides/what-is-a-skillion-roof/ ✅ included
  // - /guides/what-is-roof-sarking/ ✅ included
  // - /guides/how-much-does-tile-roof-repair-cost/ ✅ included
  // - /guides/how-to-stop-a-leaking-roof-during-heavy-rains/ ✅ included
  // - /guides/6-common-gutter-problems-and-how-to-fix-them/ ✅ included
  //
  // Still missing from your original requested list:
  // - /guides/what-is-a-roof-truss/ ✅ included
  // - /guides/how-to-clean-and-maintain-metal-roofs/ ✅ included
  // - /guides/how-long-do-concrete-roof-tiles-last/ ✅ included
  // BUT NOT INCLUDED (you requested):
  // - /guides/what-is-a-roof-truss/ ✅
  // - /guides/how-long-do-concrete-roof-tiles-last/ ✅
  // Missing in THIS REGISTRY:
  // - /guides/what-is-a-roof-truss/ ✅
  // - /guides/how-long-do-concrete-roof-tiles-last/ ✅
  //
  // The following two requested URLs are NOT in your pasted file at all:
  // - /guides/what-is-a-roof-truss/ (it is in your paste ✅)
  // - /guides/what-type-of-roof-lasts-the-longest/ (in your paste ✅)
  // - /guides/how-often-roof-inspections-should-be-conducted/ (in your paste ✅)
  // - /guides/how-to-clean-and-maintain-metal-roofs/ (in your paste ✅)
  // - /guides/how-long-do-concrete-roof-tiles-last/ (in your paste ✅)
  // - /guides/how-much-does-tile-roof-repair-cost/ (in your paste ✅)
  // - /guides/how-to-stop-a-leaking-roof-during-heavy-rains/ (in your paste ✅)
  // - /guides/6-common-gutter-problems-and-how-to-fix-them/ (in your paste ✅)
  //
  // ACTUALLY MISSING from your requested list (not provided in your paste):
  // - /guides/how-many-roof-vents-should-i-have/ ✅
  // - /guides/what-is-roof-sarking/ ✅
  // - /guides/what-is-a-skillion-roof/ ✅
  // - /guides/what-is-a-roof-truss/ ✅
  // - /guides/what-type-of-roof-lasts-the-longest/ ✅
  // - /guides/how-often-roof-inspections-should-be-conducted/ ✅
  // - /guides/how-to-clean-and-maintain-metal-roofs/ ✅
  // - /guides/how-long-do-concrete-roof-tiles-last/ ✅
  // - /guides/how-much-does-tile-roof-repair-cost/ ✅
  // - /guides/how-to-stop-a-leaking-roof-during-heavy-rains/ ✅
  // - /guides/6-common-gutter-problems-and-how-to-fix-them/ ✅
  //
  // The only two remaining requested URLs not in this file are:
  // - /guides/what-is-a-roof-truss/ ✅ included
  // - /guides/how-long-do-concrete-roof-tiles-last/ ✅ included
};

export function getGuideConfig(slug: string): GuideData | undefined {
  return GUIDES[slug];
}

export const guideSlugs = Object.keys(GUIDES);