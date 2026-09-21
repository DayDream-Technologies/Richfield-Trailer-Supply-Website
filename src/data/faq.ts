export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "The lights on my trailer aren’t working. What should I check first?",
    answer:
      "Most trailer lighting problems start with a bad ground. Confirm every lamp and the connector are properly grounded, then inspect the trailer plug and the vehicle socket for corrosion, bent pins, or broken wires.",
  },
  {
    question: "What are the black streaks on my RV, and how do I remove them?",
    answer:
      "Black streaks form when UV dries a rubber roof and rain washes residue down the sidewalls. Prevent them with a rubber-roof cleaner and UV protectant two to four times a year. Existing streaks usually come off with a dedicated black-streak remover such as Bio-Kleen.",
  },
  {
    question: "What sanitation chemical should I use?",
    answer:
      "We recommend holding-tank treatments that use live enzymes. Formulas vary by climate and tank size, so call or stop in and we will match a product to how you use the camper.",
  },
  {
    question: "How often should I inspect my hubs, and what should I look for?",
    answer:
      "Inspect hubs and brakes at least once a year, even if the trailer only moves a few times. Clean the bearings, check for pitting or corrosion, and repack or replace them. Races should be smooth. Replace the grease seal at every inspection. If you hear rumbling or feel heat after a trip, do not wait until next season.",
  },
  {
    question: "How can I convert hydraulic brakes to electric brakes?",
    answer:
      "The trailer needs an electric-brake wiring run and a compatible electric brake controller in the tow vehicle. Electric brakes are generally simpler to service. Bring the axle rating and drum size and we can package the brakes, magnets, and controller.",
  },
  {
    question: "What type of grease seal do I need?",
    answer:
      "There is no single industry standard. Trailer builders mix vendors based on cost and availability. The surest method is to bring the hub or the old seal. We will measure it and match inner diameter, outer diameter, and width so the new seal seats correctly.",
  },
  {
    question: "Can I mix radial tires with bias-ply (D-rated) tires?",
    answer:
      "We do not recommend mixing constructions. Bias-ply tires have a different sidewall and ride. If a radial is used only as a spare on a bias-ply trailer, keep that trip short (under about 50 miles) and replace it with a matching bias tire. Mixing for long hauls can cause uneven wear and an inaccurate load rating.",
  },
  {
    question: "Is there one handbook that covers every trailer make and model?",
    answer:
      "No. Manufacturers change vendors, spindles, and lighting packages from year to year. A book that covered every combination would be larger than the store. Bring the part, a photo of the tag, or the axle capacity and we will identify what you need.",
  },
];
