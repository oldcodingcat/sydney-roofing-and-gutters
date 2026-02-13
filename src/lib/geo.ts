// src/lib/geo.ts
// Helper to choose the nearest Google Business Profile location (office) to an area.
// Used to populate LocationSEOConfig latitude/longitude.

export type OfficeLocation = {
  id: string;
  name: string;
  mapsUrl: string;
  latitude: string;
  longitude: string;
};

// Two Google Maps listings (GBP) used across location pages.
export const OFFICES: OfficeLocation[] = [
  {
    id: "north-sydney",
    name: "Sydney Roofing & Gutters (North Sydney)",
    mapsUrl: "https://maps.app.goo.gl/dicLsaDTYNdXFqAs5",
    latitude: "-33.8329453",
    longitude: "151.2056332",
  },
  {
    id: "western-sydney",
    name: "Sydney Roofing & Gutters (Western Sydney)",
    mapsUrl: "https://maps.app.goo.gl/Ks1zArpnX8gHiRo88",
    latitude: "-33.6925056",
    longitude: "150.8748634",
  },
];

type Num = number;

type LatLonInput = number | string;

function toNum(v: LatLonInput): Num {
  if (typeof v === "number") return v;
  const n = Number.parseFloat(String(v));
  if (Number.isNaN(n)) throw new Error(`Invalid lat/lon: ${v}`);
  return n;
}

function haversineKm(lat1: Num, lon1: Num, lat2: Num, lon2: Num): Num {
  const R = 6371; // km
  const toRad = (d: Num) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/** Returns the nearest OfficeLocation to the given area lat/lon. */
export function getNearestOffice(
  areaLatitude: LatLonInput,
  areaLongitude: LatLonInput,
  offices: OfficeLocation[] = OFFICES
): OfficeLocation {
  if (!offices.length) throw new Error("OFFICES list is empty");

  const aLat = toNum(areaLatitude);
  const aLon = toNum(areaLongitude);

  let best = offices[0];
  let bestDist = Number.POSITIVE_INFINITY;

  for (const o of offices) {
    const d = haversineKm(aLat, aLon, toNum(o.latitude), toNum(o.longitude));
    if (d < bestDist) {
      bestDist = d;
      best = o;
    }
  }

  return best;
}

/** Convenience helper: returns { latitude, longitude } for LocationSEOConfig. */
export function getNearestOfficeGeo(areaLatitude: LatLonInput, areaLongitude: LatLonInput) {
  const o = getNearestOffice(areaLatitude, areaLongitude);
  return { latitude: o.latitude, longitude: o.longitude, officeId: o.id };
}
