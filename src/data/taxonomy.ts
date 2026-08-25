export type Subcategory = {
  slug: string;
  name: string;
  summary: string;
};

export type Category = {
  slug: string;
  name: string;
  navLabel: string;
  summary: string;
  seoTitle: string;
  description: string;
  subcategories: Subcategory[];
};

export const categories: Category[] = [
  {
    slug: "axle-suspension",
    name: "Axle & Suspension",
    navLabel: "Axle & Suspension",
    summary: "Springs, equalizers, hangers, shackle links, spindles, and kits.",
    seoTitle: "Trailer Axle & Suspension Parts in Michigan",
    description:
      "Replacement springs, equalizers, hangers, axle seats, shackle links, spindles, and suspension kits for utility, cargo, and RV trailers. Call any Richfield location to confirm fitment and stock.",
    subcategories: [
      {
        slug: "equalizers",
        name: "Equalizers",
        summary: "Cast and fabricated equalizers for tandem and triple axles.",
      },
      {
        slug: "hangers-and-axle-seats",
        name: "Hangers and Axle Seats",
        summary: "Hangers, U-bolts, tie plates, and axle seats for leaf-spring setups.",
      },
      {
        slug: "shackle-links",
        name: "Shackle Links",
        summary: "Shackle links, bolts, nuts, and bronze bushings.",
      },
      {
        slug: "spindles",
        name: "Spindles",
        summary: "Wet and idler spindles in common trailer capacities.",
      },
      {
        slug: "springs",
        name: "Springs",
        summary: "Double-eye and slipper springs from light-duty to heavy-duty ratings.",
      },
      {
        slug: "suspension-kits",
        name: "Suspension Kits",
        summary: "Matched hanger, equalizer, and hardware kits for axle conversions.",
      },
    ],
  },
  {
    slug: "brakes-hubs",
    name: "Brakes & Hubs",
    navLabel: "Brakes & Hubs",
    summary: "Hubs, drums, electric brakes, bearings, seals, and grease.",
    seoTitle: "Trailer Brakes, Hubs & Drums in Michigan",
    description:
      "Electric and hydraulic trailer brakes, hub-and-drum assemblies, bearings, races, seals, hub covers, and packing grease. Bring the old part in if you are unsure of the number.",
    subcategories: [
      {
        slug: "bearing-and-race",
        name: "Bearing and Race",
        summary: "Inner and outer bearings and matching races by spindle size.",
      },
      {
        slug: "brake-parts",
        name: "Brake Parts",
        summary: "Magnets, shoes, springs, cylinders, and hydraulic line kits.",
      },
      {
        slug: "brakes",
        name: "Brakes",
        summary: "Electric and hydraulic brake assemblies, left and right.",
      },
      {
        slug: "hdb-mounting-hardware",
        name: "HDB Mounting Hardware",
        summary: "Hardware for hub, drum, and brake mounting.",
      },
      {
        slug: "hub-cover",
        name: "Hub Cover",
        summary: "Dust caps, oil caps, and decorative hub covers.",
      },
      {
        slug: "hubs-and-drums",
        name: "Hubs and Drums",
        summary: "Idler hubs, hub-and-drum kits, and drums from 1,750 lb to 15K.",
      },
      {
        slug: "seals-and-caps",
        name: "Seals and Caps",
        summary: "Grease seals, oil seals, and replacement caps.",
      },
      {
        slug: "grease-guns-grease",
        name: "Grease Guns & Grease",
        summary: "Trailer-grade grease and grease guns for hub packing.",
      },
    ],
  },
  {
    slug: "lighting",
    name: "Lighting",
    navLabel: "Lighting",
    summary: "LED tail lights, kits, markers, interior, and towing lights.",
    seoTitle: "Trailer Lighting, LED Kits & Markers in Michigan",
    description:
      "LED and incandescent trailer lighting: tail lights, kits, clearance markers, license plate lights, porch and interior lights, plus magnetic towing lights.",
    subcategories: [
      {
        slug: "interior-lights",
        name: "Interior Lights",
        summary: "Dome, cargo, and work lights for enclosed trailers and RVs.",
      },
      {
        slug: "license-plate-lights",
        name: "License Plate Lights",
        summary: "License lamp assemblies and LED plate lights.",
      },
      {
        slug: "lighting-accessories",
        name: "Lighting Accessories",
        summary: "Grommets, pigtails, guards, plugs, and mounting hardware.",
      },
      {
        slug: "lighting-kits",
        name: "Lighting Kits",
        summary: "Complete stop/tail/turn kits for utility and enclosed trailers.",
      },
      {
        slug: "porch-lights",
        name: "Porch Lights",
        summary: "RV and camper porch lights for entry and outdoor use.",
      },
      {
        slug: "tail-lights",
        name: "Tail Lights",
        summary: "Oval, round, and box-style stop/tail/turn lamps.",
      },
      {
        slug: "towing-lights",
        name: "Towing Lights",
        summary: "Magnetic light bars and temporary towing light kits.",
      },
      {
        slug: "markers-clearance-lights",
        name: "Markers Clearance Lights",
        summary: "3/4 in, 2.5 in, and LED clearance markers in red and amber.",
      },
    ],
  },
  {
    slug: "wheel-tire",
    name: "Wheel & Tire",
    navLabel: "Wheel & Tire",
    summary: "ST tires, wheels, mounted assemblies, tubes, and accessories.",
    seoTitle: "Trailer Tires and Wheels in Michigan",
    description:
      "Special trailer (ST) tires, steel and aluminum wheels, mounted tire-and-wheel assemblies, inner tubes, and wheel accessories. Load range and bolt pattern matter — call us with your size.",
    subcategories: [
      {
        slug: "inner-tubes",
        name: "Inner Tubes",
        summary: "Trailer inner tubes for common ST sizes.",
      },
      {
        slug: "mounted-tire-and-wheel",
        name: "Mounted Tire and Wheel",
        summary: "Balanced tire-and-wheel assemblies ready to bolt on.",
      },
      {
        slug: "tire-only",
        name: "Tire Only",
        summary: "ST radial and bias trailer tires sold unmounted.",
      },
      {
        slug: "wheel-accessories",
        name: "Wheel Accessories",
        summary: "Lug nuts, center caps, and mounting hardware.",
      },
      {
        slug: "wheel-only",
        name: "Wheel Only",
        summary: "White spoke, silver, and aluminum trailer wheels.",
      },
    ],
  },
  {
    slug: "towing",
    name: "Towing",
    navLabel: "Towing",
    summary: "Hitches, pintles, electrical, breakaway kits, and tow mirrors.",
    seoTitle: "Towing Hitches, Electrical & Pintle Hardware in Michigan",
    description:
      "Ball mounts, pintle hardware, receiver tubes, hitch pins, tow mirrors, and a full towing-electrical counter: brake controllers, breakaway kits, harnesses, and trailer ends.",
    subcategories: [
      {
        slug: "brake-controllers",
        name: "Brake Controllers",
        summary: "Electric trailer brake controllers for passenger vehicles and trucks.",
      },
      {
        slug: "breakaway-kits-and-parts",
        name: "Breakaway Kits and Parts",
        summary: "Breakaway switches, batteries, and replacement kits.",
      },
      {
        slug: "harnesses-and-extensions",
        name: "Harnesses and Extensions",
        summary: "4-way, 5-way, and 7-way harnesses and extensions.",
      },
      {
        slug: "vehicle-and-trailer-ends",
        name: "Vehicle and Trailer Ends",
        summary: "Vehicle-side and trailer-side plugs and sockets.",
      },
      {
        slug: "ball-mounts",
        name: "Ball Mounts",
        summary: "Class III–V ball mounts, drop shanks, and adjustable hitches.",
      },
      {
        slug: "hitch-pins-and-locks",
        name: "Hitch Pins and Locks",
        summary: "Receiver pins, coupler locks, and locking hitch pins.",
      },
      {
        slug: "pintle-mounts-and-hardware",
        name: "Pintle Mounts and Hardware",
        summary: "Pintle hooks, lunette rings, and combination ball/pintle mounts.",
      },
      {
        slug: "receiver-tubes-and-extensions",
        name: "Receiver Tubes and Extensions",
        summary: "2 in and 2.5 in receiver tubes, sleeves, and extensions.",
      },
      {
        slug: "tow-mirrors",
        name: "Tow Mirrors",
        summary: "Clip-on and replacement tow mirrors for wider trailers.",
      },
    ],
  },
  {
    slug: "trailer-equipment",
    name: "Trailer Equipment",
    navLabel: "Trailer Equipment",
    summary: "Couplers, chains, E-track, cargo control, and jacks.",
    seoTitle: "Trailer Couplers, Chains & Cargo Equipment in Michigan",
    description:
      "A-frame and straight couplers, safety chains, E-track and fittings, cargo control, jacks, and related trailer equipment for utility and enclosed trailers.",
    subcategories: [
      {
        slug: "cargo-management",
        name: "Cargo Management",
        summary: "Jacks, winches, and cargo-control hardware.",
      },
      {
        slug: "chains",
        name: "Chains",
        summary: "Safety chains, Grade 70 transport chain, and clevis hooks.",
      },
      {
        slug: "couplers",
        name: "Couplers",
        summary: "2 in and 2-5/16 in couplers, gooseneck couplers, and locks.",
      },
      {
        slug: "e-track-fittings",
        name: "E-track & Fittings",
        summary: "E-track lengths, D-rings, and strap fittings.",
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getSubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Subcategory | undefined {
  return getCategory(categorySlug)?.subcategories.find(
    (subcategory) => subcategory.slug === subcategorySlug,
  );
}
