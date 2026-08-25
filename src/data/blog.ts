export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "trailer-types-and-weight-capacities",
    title: "Trailer types and weight capacities, explained",
    description:
      "How GVWR, axle ratings, and tire load range work together — and why the lowest-rated part on the trailer sets the real limit.",
    date: "2025-03-12",
    readingMinutes: 6,
    body: [
      "A trailer is only as strong as its lowest-rated component. Gross Vehicle Weight Rating (GVWR) is the maximum the trailer is designed to weigh when loaded, including the trailer itself. That number is not a suggestion, and it is not the same as the axle sticker, the tire sidewall, or the coupler rating.",
      "Utility and landscape trailers often sit in the 2,000–7,000 lb GVWR range, with 3,500 lb axles as the most common single-axle setup. Tandem 3,500 lb or 5,200 lb axles show up on enclosed cargo and mid-size equipment trailers. Gooseneck and dump trailers frequently use 7,000 lb and heavier axles, with some 12-foot units still limited near 3,000 lb of cargo if the frame and tires are light-duty.",
      "Tire size and load range change the picture quickly. A trailer with adequate axles and undersized tires will fail at the tire first. The reverse is also true. When you add a second axle or step up spring ratings, confirm the hubs, drums, brakes, and coupler can follow.",
      "If you are unsure of the rating, look for the VIN/certification label on the tongue or frame, then the axle tag near the spring seat. Bring those numbers — or a photo — to any Richfield counter in Flint, Grand Rapids, or Traverse City. We will match springs, hubs, and tires to the capacity you actually have, not the capacity you wish you had.",
    ],
  },
  {
    slug: "most-commonly-replaced-trailer-parts",
    title: "The trailer parts we replace most often",
    description:
      "Bearings, seals, lights, brakes, and tires fail on a predictable schedule. Here is what to inspect before the season starts.",
    date: "2025-04-02",
    readingMinutes: 5,
    body: [
      "Trailer owners and fleet managers tend to replace the same parts for the same reasons: water in the hubs, corroded grounds, glazed brake shoes, and dry-rotted ST tires. Knowing that list makes spring service faster.",
      "Wheel bearings and grease seals are at the top. Even a trailer that only moves a few weekends a year should have hubs inspected annually. Pack or replace bearings, replace the seal every time the hub comes off, and check races for pitting. A rumble on the highway or a hub that is too hot to touch after a trip is a warning, not a quirk.",
      "Lighting is next. Grounds fail, pigtails crack, and marker lamps fill with water. LED conversions solve some of those problems, but only if the harness and connector are sound. Brake magnets and shoes wear with mileage and with sitting — rust-locked brakes are common after a Michigan winter.",
      "Couplers, safety chains, and jack feet take abuse every hitch-up. If the coupler latch does not close cleanly on the ball, do not wire it shut. Replace the coupler or the latch kit. We stock the wear items above in depth because they are the jobs most people walk in with.",
    ],
  },
  {
    slug: "signs-you-need-new-trailer-tires",
    title: "Five signs your trailer tires need to be replaced",
    description:
      "Trailer tires age even when the trailer sits. Cracking, cupping, weather checking, and date codes matter as much as tread depth.",
    date: "2025-04-18",
    readingMinutes: 5,
    body: [
      "Passenger-car habits do not apply cleanly to trailers. ST (special trailer) tires carry more load with stiffer sidewalls, and they often sit in the sun for months. Many failures happen with tread still showing.",
      "Watch for weather checking — small cracks in the sidewall or between treads. Look at the date code (the last four digits of the DOT number are week and year). Many manufacturers treat six or seven years as the outer limit, even with leftover tread. Uneven wear, cupping, and a trailer that wanders can point to alignment, a bent axle, or a tire that has taken a set from sitting.",
      "Bulges, exposed cord, and a tire that will not hold air are immediate replacements. Mixing a radial with bias-ply tires on the same axle is a bad idea; constructions flex differently and load ratings stop meaning what the sidewall says.",
      "If you need a mounted assembly, we carry common ST sizes as tire-and-wheel combinations so you can bolt on a balanced unit and get back on the road. Bring the size, load range, and bolt pattern — or the wheel itself.",
    ],
  },
  {
    slug: "rv-accessories-to-check-before-a-trip",
    title: "RV and trailer accessories to check before a trip",
    description:
      "A short pre-trip list: lights, breakaway, tires, hitch hardware, and the small parts that strand people at a rest area.",
    date: "2025-05-06",
    readingMinutes: 5,
    body: [
      "A weekend trip is a poor time to discover a dead breakaway battery or a cracked 7-way plug. Walk the trailer the night before you leave.",
      "Confirm every lamp: tails, brake, turn, markers, and license plate. Cycle the breakaway switch and make sure the battery holds a charge. Inspect the coupler, latch, safety chains, and hitch pin. Look at tire sidewalls and pressure when the tires are cold. If you use a weight-distribution hitch or adjustable ball mount, confirm the drop and the ball size match the coupler.",
      "Inside the RV, check the porch light, holding-tank chemicals, and any 12V interior lamps you actually use after dark. A spare pigtail, a few fuses, and a grease seal that matches your hub take almost no space and solve the failures we see most at the counter.",
      "If something on that list is worn, stop by Flint, Grand Rapids, or Traverse City before you hook up. It is faster than a parts run from a campground.",
    ],
  },
  {
    slug: "why-rvs-need-replacement-parts",
    title: "Why RVs and trailers go through parts faster than cars",
    description:
      "Open wheels, heavier tongue weight, and long sits between trips are hard on hubs, brakes, lights, and tires.",
    date: "2025-05-22",
    readingMinutes: 4,
    body: [
      "A passenger car encloses its bearings, runs every week, and rarely sits loaded in a driveway all winter. A trailer does the opposite. Hubs are exposed to road spray. Brakes may only work when you are towing. Tires carry near their maximum load on the two trips a year they move.",
      "Electric brakes corrode when they sit. Magnets and shoes rust to the drum. Lighting grounds fail because the frame paint is the ground path and it is a poor one. Leaf springs flatten. Couplers wear oval from a ball that was the wrong size.",
      "None of that means trailers are poorly made. It means they need a different maintenance rhythm than the tow vehicle. Annual hub service, a lighting check before each season, and honest tire replacement intervals prevent most roadside failures.",
      "When a part does fail, identification is easier if you bring the old piece. Trailer builders mix vendors from year to year. We match hubs, seals, and lamps to what is on the trailer, not to a universal chart that does not exist.",
    ],
  },
  {
    slug: "trailer-lighting-upgrades",
    title: "Four lighting upgrades that actually help at night",
    description:
      "LED tail kits, clearance markers, magnetic tow lights, and a sound ground path — the upgrades that improve visibility without guesswork.",
    date: "2025-06-09",
    readingMinutes: 5,
    body: [
      "Dim, cracked, or water-filled lamps are a safety problem and a ticket risk. Most trailers we see can be brought up to a bright, legal lighting package with a short list of parts.",
      "A sealed LED stop/tail/turn kit (oval or round, depending on the body) is the highest-impact change. Pair it with LED clearance markers on the sides and front so the trailer’s width is obvious. If you sometimes tow a vehicle or equipment that has no lights of its own, a magnetic towing light bar is the right tool — not a pile of zip ties.",
      "None of those lamps will stay bright if the ground is dirty. Clean the connector, dielectric-grease the pins, and run a dedicated ground if the frame is rusty. Grommets, pigtails, and guards are cheap compared with replacing a lamp that was pinched or left hanging by one wire.",
      "We stock kits, individual lamps, and the small hardware that makes the install last. If you are unsure whether you need a 6.5 in oval or a 4 in round, bring a photo of the cutout.",
    ],
  },
  {
    slug: "trailer-upgrades-and-rv-accessories",
    title: "Practical upgrades after you buy a trailer or RV",
    description:
      "Start with safety hardware — chains, coupler, jack, E-track — then add lighting and towing comfort. Skip the novelty parts until the basics are right.",
    date: "2025-06-28",
    readingMinutes: 4,
    body: [
      "A new trailer is rarely finished. Manufacturers ship a legal, functional unit. The parts that make it pleasant to use are often sold at the counter afterward.",
      "Start with safety: a coupler that matches the ball, safety chains with latching hooks rated for the trailer, and a jack you can operate without crawling. Add E-track or cargo straps if you haul mixed loads. Then lighting — LED tails and markers — and a brake controller that matches how you actually tow.",
      "Tow mirrors, an adjustable ball mount, and a locking hitch pin are the upgrades that reduce stress on long trips. Porch lights and interior LEDs matter if you camp. Novelty accessories can wait until the trailer tracks straight and stops straight.",
      "If you tell us how you use the trailer (boat, landscape, enclosed cargo, fifth-wheel), we will point you at the short list instead of the whole wall.",
    ],
  },
  {
    slug: "when-to-replace-trailer-wheels",
    title: "How to tell if trailer wheels need replacing",
    description:
      "Cracked rims, elongated lug holes, and heavy rust are safety issues. Load rating and bolt pattern have to match the new wheel.",
    date: "2025-07-14",
    readingMinutes: 4,
    body: [
      "Wheels get less attention than tires and more than they deserve. A bent or cracked rim will take a new tire out with it. Elongated lug holes mean the wheel has been loose. Heavy scale on a steel wheel can hide thinning metal at the drop center.",
      "Inspect the inner barrel, the weld at the center, and the bolt circle. If lug nuts keep backing off, stop and check studs and the wheel before you add more torque. Galvanized boat-trailer wheels earn their keep in salt water; painted steel does not.",
      "When you replace a wheel, match diameter, width, bolt pattern, offset, and load rating. A handsome aluminum wheel that is unrated for the axle is the wrong part. If you want a mounted assembly, we can match a tire and wheel so the balance and load range are already done.",
      "Bring the old wheel or a rubbing of the bolt pattern if the trailer is not with you. Guessing 5-on-4.5 versus 5-on-5 is how people make two trips.",
    ],
  },
  {
    slug: "replacing-trailer-tires",
    title: "What to know before you replace trailer tires",
    description:
      "ST sizes, load range, speed rating, and whether to buy a mounted assembly — a practical guide before you unbolt the old wheels.",
    date: "2025-08-01",
    readingMinutes: 5,
    body: [
      "Trailer tires are specified as ST sizes (for example ST205/75R15) with a load range letter. That letter is not optional. Dropping a load range C onto an axle that was spec’d for D is how heat builds and sidewalls fail on the highway.",
      "Replace tires in pairs on an axle, and keep construction consistent — all radial or all bias. Check the wheel for cracks while the tire is off. If the wheel is ugly but sound, a mounted tire-and-wheel from the shelf may still be cheaper than a roadside change later.",
      "Inflate to the pressure on the tire sidewall when cold, not to the tow vehicle’s door sticker. Recheck after the first loaded trip. Store the trailer so tires are not parked in a rut or against a hot wall for months.",
      "We stock common ST sizes as tires only and as mounted assemblies. Call Flint, Grand Rapids, or Traverse City with the size and lug pattern, and we will tell you what is on the rack.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
