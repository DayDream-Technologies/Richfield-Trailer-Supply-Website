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

type CategoryDef = {
  slug: string;
  name: string;
  navLabel?: string;
  summary: string;
  seoTitle: string;
  description: string;
  subcategories: [string, string, string][];
};

const defs: CategoryDef[] = [
  {
    slug: "hub-drum-and-brakes",
    name: "Hub, Drum, and Brakes",
    summary: "Hubs, drums, bearings, seals, brakes, grease, and mounting hardware.",
    seoTitle: "Trailer Hubs, Drums & Brakes Near You in Michigan",
    description:
      "Hubs, drums, bearings, races, seals, hub covers, electric and hydraulic brakes, grease, and HDB mounting hardware. Call Flint, Grand Rapids, or Traverse City to confirm fitment and stock.",
    subcategories: [
      ["hubs-and-drums", "Hubs and Drums", "Idler hubs, hub-and-drum kits, and drums from light-duty to heavy-duty ratings."],
      ["bearings-and-races", "Bearings and Races", "Inner and outer bearings and matching races by spindle size."],
      ["seals-and-caps", "Seals and Caps", "Grease seals, oil seals, and replacement caps."],
      ["hub-covers", "Hub Covers", "Dust caps, oil caps, and decorative hub covers."],
      ["brakes-and-brake-parts", "Brakes & Brake Parts", "Electric and hydraulic brake assemblies, magnets, shoes, springs, and hardware."],
      ["grease-guns-grease", "Grease Guns & Grease", "Trailer-grade grease and grease guns for hub packing."],
      ["hdb-mounting-hardware", "HDB Mounting Hardware", "Hardware for hub, drum, and brake mounting."],
    ],
  },
  {
    slug: "axle-and-suspension",
    name: "Axle and Suspension",
    summary: "Axles, springs, U-bolts, spindles, equalizers, hangers, and kits.",
    seoTitle: "Trailer Axle & Suspension Parts Near You in Michigan",
    description:
      "Axles and tubes, springs, U-bolts, spindles, suspension kits, bushings, equalizers, shackle links, hangers, and axle seats. Call any Richfield location to confirm fitment.",
    subcategories: [
      ["axles-and-tubes", "Axles and Tubes", "Straight and drop axles and replacement tubes in common capacities."],
      ["springs", "Springs", "Double-eye and slipper springs from light-duty to heavy-duty ratings."],
      ["u-bolts-and-tie-plates", "U-Bolts and Tie Plates", "U-bolts, tie plates, and related spring-seat hardware."],
      ["spindles", "Spindles", "Wet and idler spindles in common trailer capacities."],
      ["suspension-kits", "Suspension Kits", "Matched hanger, equalizer, and hardware kits for axle conversions."],
      ["suspension-bushings-nuts-and-bolts", "Suspension Bushings Nuts & Bolts", "Bronze bushings, shackle bolts, nuts, and suspension fasteners."],
      ["equalizers", "Equalizers", "Cast and fabricated equalizers for tandem and triple axles."],
      ["shackle-links", "Shackle Links", "Shackle links for leaf-spring trailer suspensions."],
      ["hangers-and-axle-seats", "Hangers and Axle Seats", "Hangers and axle seats for leaf-spring setups."],
    ],
  },
  {
    slug: "tires-and-wheels",
    name: "Tires and Wheels",
    summary: "ST tires, wheels, mounted assemblies, tubes, and accessories.",
    seoTitle: "Trailer Tires and Wheels Near You in Michigan",
    description:
      "Special trailer (ST) tires, steel and aluminum wheels, mounted tire-and-wheel assemblies, inner tubes, and wheel accessories. Load range and bolt pattern matter — call us with your size.",
    subcategories: [
      ["tires-only", "Tires Only", "ST radial and bias trailer tires sold unmounted."],
      ["wheels-only", "Wheels Only", "White spoke, silver, and aluminum trailer wheels."],
      ["mounted-tires-and-wheels", "Mounted Tires and Wheels", "Balanced tire-and-wheel assemblies ready to bolt on."],
      ["inner-tubes", "Inner Tubes", "Trailer inner tubes for common ST sizes."],
      ["wheel-accessories", "Wheel Accessories", "Lug nuts, center caps, and mounting hardware."],
    ],
  },
  {
    slug: "towing-and-safety",
    name: "Towing and Safety",
    summary: "Hitches, ball mounts, pintles, weight distribution, and hitch hardware.",
    seoTitle: "Trailer Towing Hitches & Safety Parts Near You in Michigan",
    description:
      "Vehicle hitches, 5th-wheel and gooseneck, ball mounts, pintle hardware, tow mirrors, weight distribution, bike racks, receiver tubes, and hitch pins. Call the store closest to you.",
    subcategories: [
      ["vehicle-hitches", "Vehicle Hitches", "Receiver hitches and vehicle-side towing hitches by class and vehicle."],
      ["5th-wheel-and-gooseneck", "5th Wheel and Gooseneck", "Fifth-wheel and gooseneck hitches, plates, and related hardware."],
      ["ball-mounts", "Ball Mounts", "Class III–V ball mounts, drop shanks, and adjustable hitches."],
      ["pintle-mounts-and-hardware", "Pintle Mounts and Hardware", "Pintle hooks, lunette rings, and combination ball/pintle mounts."],
      ["tow-mirrors", "Tow Mirrors", "Clip-on and replacement tow mirrors for wider trailers."],
      ["weight-distribution", "Weight Distribution", "Weight-distribution hitches and related sway-control hardware."],
      ["bike-racks-and-carriers", "Bike Racks and Carriers", "Receiver-mount bike racks and cargo carriers."],
      ["receiver-tubes-and-extensions", "Receiver Tubes and Extensions", "2 in and 2.5 in receiver tubes, sleeves, and extensions."],
      ["hitch-pins-and-locks", "Hitch Pins and Locks", "Receiver pins, coupler locks, and locking hitch pins."],
    ],
  },
  {
    slug: "towing-electrical",
    name: "Towing (Electrical)",
    summary: "Adapters, harnesses, brake controllers, breakaway kits, and trailer wire.",
    seoTitle: "Trailer Towing Electrical Parts Near You in Michigan",
    description:
      "Wiring adapters, vehicle and trailer ends, brake controllers, T-connectors, harnesses, breakaway kits, SBTF wire, connectors, and fuses. Bring the old plug if you are unsure of the pattern.",
    subcategories: [
      ["wiring-adapters", "Wiring Adapters", "4-way, 5-way, and 7-way towing adapters."],
      ["vehicle-and-trailer-ends", "Vehicle and Trailer Ends", "Vehicle-side and trailer-side plugs and sockets."],
      ["brake-controllers", "Brake Controllers", "Electric trailer brake controllers for passenger vehicles and trucks."],
      ["t-connectors", "T-Connectors", "T-connectors for vehicle-side trailer lighting circuits."],
      ["harnesses-and-extensions", "Harnesses and Extensions", "4-way, 5-way, and 7-way harnesses and extensions."],
      ["breakaway-kits-and-parts", "Breakaway Kits and Parts", "Breakaway switches, batteries, and replacement kits."],
      ["sbtf-wire", "SBTF Wire", "Trailer cable and SBTF primary wire by gauge and jacket."],
      ["connectors-and-fuse", "Connectors and Fuse", "Trailer connectors, fuse holders, and replacement fuses."],
    ],
  },
  {
    slug: "trailer-equipment",
    name: "Trailer Equipment",
    summary: "Couplers, chains, fenders, jacks, cargo control, and E-track.",
    seoTitle: "Trailer Couplers, Jacks & Cargo Equipment Near You in Michigan",
    description:
      "Couplers, safety chains, fenders, jacks, cargo management, and E-track fittings for utility and enclosed trailers. Call for stock and fitment.",
    subcategories: [
      ["couplers", "Couplers", "2 in and 2-5/16 in couplers, gooseneck couplers, and locks."],
      ["chains", "Chains", "Safety chains, Grade 70 transport chain, and clevis hooks."],
      ["fenders", "Fenders", "Steel and tandem trailer fenders and replacement fender hardware."],
      ["jacks", "Jacks", "A-frame, side-wind, and drop-leg trailer jacks."],
      ["cargo-management", "Cargo Management", "Straps, chocks, and cargo-control hardware."],
      ["e-track-fittings", "E-track & Fittings", "E-track lengths, D-rings, and strap fittings."],
    ],
  },
  {
    slug: "lighting",
    name: "Lighting",
    summary: "Tail lights, markers, kits, bulbs, interior, and towing lights.",
    seoTitle: "Trailer Lighting, LED Kits & Markers Near You in Michigan",
    description:
      "LED and incandescent trailer lighting: tail lights, markers, license plate lights, kits, towing lights, bulbs, accessories, reflectors, interior lights, and porch lights.",
    subcategories: [
      ["tail-lights", "Tail Lights", "Oval, round, and box-style stop/tail/turn lamps."],
      ["markers-clearance-lights", "Markers/Clearance Lights", "3/4 in, 2.5 in, and LED clearance markers in red and amber."],
      ["license-plate-lights", "License Plate Lights", "License lamp assemblies and LED plate lights."],
      ["lighting-kits", "Lighting Kits", "Complete stop/tail/turn kits for utility and enclosed trailers."],
      ["towing-lights", "Towing Lights", "Magnetic light bars and temporary towing light kits."],
      ["light-bulbs", "Light Bulbs", "Incandescent and LED replacement bulbs for trailer lamps."],
      ["lighting-accessories", "Lighting Accessories", "Grommets, pigtails, guards, plugs, and mounting hardware."],
      ["reflectors", "Reflectors", "DOT reflectors and reflective tape for trailers and RVs."],
      ["interior-lights", "Interior Lights", "Dome, cargo, and work lights for enclosed trailers and RVs."],
      ["porch-lights", "Porch Lights", "RV and camper porch lights for entry and outdoor use."],
    ],
  },
  {
    slug: "marine-accessories",
    name: "Marine Accessories",
    summary: "Boat rollers, West System products, and winches.",
    seoTitle: "Boat Trailer Rollers, Winches & Marine Supplies in Michigan",
    description:
      "Boat rollers, West System epoxy supplies, and winches for boat trailers and marine repair. Call Traverse City, Flint, or Grand Rapids for stock.",
    subcategories: [
      ["boat-rollers", "Boat Rollers", "Keel rollers, bunk brackets, and related boat-trailer rollers."],
      ["west-systems", "West Systems", "West System epoxy resins, hardeners, and marine repair supplies."],
      ["winches", "Winches", "Boat-trailer and utility winches, straps, and related hardware."],
    ],
  },
  {
    slug: "rv-electrical",
    name: "RV Electrical",
    summary: "Power adapters, cords, converters, hatches, and voltage protection.",
    seoTitle: "RV Electrical Adapters, Cords & Converters Near You in Michigan",
    description:
      "RV power adapters, extension cords, generator adapters, voltage protectors, converters, cord ends, and electrical hatches. Call for amperage and plug type.",
    subcategories: [
      ["power-adapters", "Power Adapters", "30-amp and 50-amp RV dogbone adapters and pigtails."],
      ["extension-cords", "Extension Cords", "RV shore-power extension cords by length and amperage."],
      ["generator-adapters", "Generator Adapters", "Adapters between generator outlets and RV inlets."],
      ["voltage-protectors", "Voltage Protectors", "Portable and hardwired RV surge and voltage protectors."],
      ["convertor", "Convertor", "RV converters and converter replacement parts."],
      ["rv-cord-ends-and-acc", "RV Cord Ends & Acc.", "Replacement RV plugs, inlets, and cord accessories."],
      ["elec-hatches-and-boxes", "Elec Hatches & Boxes", "Electrical hatches, junction boxes, and exterior power boxes."],
    ],
  },
  {
    slug: "rv-sewer-and-sanitation",
    name: "RV Sewer and Sanitation",
    summary: "Sewer hose, tank treatments, toilets, and plumbing fittings.",
    seoTitle: "RV Sewer Hose, Toilets & Sanitation Supplies in Michigan",
    description:
      "Sewer hose, tank treatments, tote tanks, toilets, repair parts, toilet paper, and plumbing fittings. Call the counter for holding-tank chemicals and hose kits.",
    subcategories: [
      ["sewer-hose-and-accessories", "Sewer Hose and Accessories", "Sewer hose, fittings, supports, and dump-station accessories."],
      ["tank-treatment-and-cleaners", "Tank Treatment and Cleaners", "Holding-tank treatments, enzymes, and tank cleaners."],
      ["tote-tanks", "Tote Tanks", "Portable waste tote tanks and related fittings."],
      ["other-accessories", "Other Accessories", "Sewer and sanitation extras that do not fit the other classes."],
      ["toilets", "Toilets", "RV toilets and replacement toilet assemblies."],
      ["toilet-repair-parts", "Toilet Repair Parts", "Seals, valves, pedals, and other RV toilet repair parts."],
      ["toilet-paper", "Toilet Paper", "Rapid-dissolve RV and marine toilet paper."],
      ["plumbing-fittings", "Plumbing Fittings", "Waste and drain fittings for RV sanitation plumbing."],
    ],
  },
  {
    slug: "rv-exterior-parts-and-maintenance",
    name: "RV Exterior Parts & Maintenance",
    navLabel: "RV Exterior Parts & Maintenance",
    summary: "Steps, awnings, doors, cleaners, wax, and roof coating.",
    seoTitle: "RV Steps, Awnings, Doors & Exterior Maintenance in Michigan",
    description:
      "Entry steps, patio rugs, antennas, awning parts, doors and screens, repair hardware, cleaners, wax, and roof coating. Call for brand and size before you drive in.",
    subcategories: [
      ["steps", "Steps", "Manual and electric RV entry steps and related parts."],
      ["patio-and-step-rugs", "Patio & Step Rugs", "Outdoor patio mats and step rugs."],
      ["antennas-and-parts", "Antennas & Parts", "RV TV and radio antennas and replacement parts."],
      ["awning-parts", "Awning Parts", "Awning fabric hardware, arms, and replacement parts."],
      ["doors-and-screens", "Doors and Screens", "Entry doors, screen doors, and related hardware."],
      ["repair-hardware-and-main", "Repair Hardware & Main", "Exterior fasteners, moldings, and general repair hardware."],
      ["cleaners-and-brushes", "Cleaners and Brushes", "RV washes, brushes, and exterior cleaning supplies."],
      ["wax-and-protectant", "Wax and Protectant", "Wax, UV protectant, and exterior finish products."],
      ["roof-coating-and-wash", "Roof Coating and Wash", "Rubber-roof coating, cleaner, and roof-wash supplies."],
    ],
  },
  {
    slug: "rv-interior-parts-and-maintenance",
    name: "RV Interior Parts and Maintenance",
    summary: "Appliance, drawer, table, vent, and interior hardware.",
    seoTitle: "RV Interior Hardware, Appliances & Housewares in Michigan",
    description:
      "Appliance parts, drawer hardware, registers, interior hardware, table parts, and housewares for campers and motorhomes. Bring the old part when you can.",
    subcategories: [
      ["appliance-parts", "Appliance Parts", "Replacement parts for RV refrigerators, ranges, and related appliances."],
      ["drawer-parts", "Drawer Parts", "Drawer slides, catches, and related interior hardware."],
      ["registers-and-vents", "Registers and Vents", "Interior heat and A/C registers and related vents."],
      ["interior-hardware", "Interior Hardware", "Latches, knobs, hinges, and general interior fasteners."],
      ["table-parts", "Table Parts", "Pedestals, table legs, and dinette hardware."],
      ["housewares", "Housewares", "Interior housewares and small living supplies for the camper."],
    ],
  },
  {
    slug: "rv-vents-and-trim",
    name: "RV Vents and Trim",
    summary: "Roof vents, lids, trim, refrigerator vents, and plumbing vents.",
    seoTitle: "RV Roof Vents, Trim & Vent Repair Parts in Michigan",
    description:
      "Roof vents, lids, repair parts, trim insert, trim and rail, refrigerator vents, plumbing vents, and vent doors. Call with the brand and opening size.",
    subcategories: [
      ["roof-vents", "Roof Vents", "12-volt and manual RV roof vents."],
      ["roof-vent-lids", "Roof Vent Lids", "Replacement lids for common roof-vent openings."],
      ["roof-vent-repair-parts", "Roof Vent Repair Parts", "Motors, cranks, gaskets, and other roof-vent repair parts."],
      ["trim-insert", "Trim Insert", "Insert strip for RV trim and molding channels."],
      ["trim-and-rail", "Trim and Rail", "Exterior trim, beltline, and rail moldings."],
      ["refrigerator-vents", "Refrigerator Vents", "Upper and lower refrigerator access vents and doors."],
      ["plumbing-vents", "Plumbing Vents", "Roof plumbing vents and related fittings."],
      ["other-vents-and-vent-doors", "Other Vents and Vent Doors", "Furnace, water-heater, and other access vents and doors."],
    ],
  },
  {
    slug: "rv-fresh-water",
    name: "RV Fresh Water",
    summary: "Filters, hoses, faucets, heaters, pumps, and winterizing fluids.",
    seoTitle: "RV Water Filters, Pumps, Heaters & Winterizing in Michigan",
    description:
      "Fresh-water filters, hoses, fittings, faucets, water-heater parts, pumps, and winterizing fluids. Call for hose thread and pump voltage.",
    subcategories: [
      ["water-filters", "Water Filters", "Canister and in-line RV drinking-water filters."],
      ["water-hoses", "Water Hoses", "Potable-water hoses and related hose accessories."],
      ["fittings", "Fittings", "Fresh-water fittings, valves, and adapters."],
      ["faucets", "Faucets", "RV galley and lavatory faucets."],
      ["water-heater-parts", "Water Heater Parts", "Anodes, elements, switches, and other water-heater parts."],
      ["water-pumps-and-parts", "Water Pumps & Parts", "Demand pumps, strainers, and pump repair parts."],
      ["winterizing-fluids", "Winterizing Fluids", "RV antifreeze and related winterizing supplies."],
    ],
  },
  {
    slug: "propane-gas",
    name: "Propane Gas",
    summary: "LP tanks, regulators, mounting, gas lights, and cylinder refills.",
    seoTitle: "RV Propane Tanks, Regulators & LP Refills in Michigan",
    description:
      "LP tanks, regulators, tank accessories, mounting hardware, gas lights, and propane cylinder refills. Call for tank size and refill hours.",
    subcategories: [
      ["lp-tanks", "LP Tanks", "DOT LP cylinders and related tank assemblies."],
      ["regulators", "Regulators", "Single- and two-stage RV propane regulators."],
      ["lp-tank-acc", "LP Tank Acc", "Pigtails, gauges, POL fittings, and other tank accessories."],
      ["tank-mounting", "Tank Mounting", "Tank trays, collars, and mounting hardware."],
      ["gas-lights", "Gas Lights", "LP gas lights and related fixtures."],
      ["propane-cylinder-refills", "Propane cylinder refills", "LP cylinder refills at the counter. Call to confirm hours and accepted tank sizes."],
    ],
  },
];

export const categories: Category[] = defs.map((category) => ({
  slug: category.slug,
  name: category.name,
  navLabel: category.navLabel ?? category.name,
  summary: category.summary,
  seoTitle: category.seoTitle,
  description: category.description,
  subcategories: category.subcategories.map(([slug, name, summary]) => ({
    slug,
    name,
    summary,
  })),
}));

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
