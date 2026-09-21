import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

console.error(
  "catalog:generate still uses the old six-category catalog. Edit JSON under data/products/ and run npm run catalog:sync instead.",
);
process.exit(1);

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function uniqueSlug(sku, name, used) {
  let slug = slugify(`${sku}-${name}`);
  if (!slug) slug = slugify(sku) || "part";
  let candidate = slug;
  let n = 2;
  while (used.has(candidate)) {
    candidate = `${slug}-${n}`;
    n += 1;
  }
  used.add(candidate);
  return candidate;
}

/** @type {Record<string, Record<string, [string, string, string?][]>>} */
const raw = {
  "axle-suspension": {
    equalizers: [
      ["EQ4541", "Equalizer 12 x 4", "Cast equalizer for tandem axle leaf-spring suspensions."],
      ["EQ-LONG", "Equalizer Long Cast", "Long-body cast equalizer for wider hanger spreads."],
      ["EQ-STD", "Equalizer", "Standard replacement equalizer. Bring the old part for exact match."],
      ["EQ3510", "Equalizer 10 in", "Shorter equalizer for compact tandem setups."],
      ["EQ4812", "Equalizer 12 in Forged", "Heavy-duty forged equalizer for 7K-class axles."],
      ["EQ-TRI", "Triple Axle Equalizer", "Center equalizer for triple-axle leaf spring systems."],
      ["EQ4525", "Equalizer 7K Tandem", "Replacement equalizer used on many 7,000 lb tandem trailers."],
    ],
    "hangers-and-axle-seats": [
      ["176500", "3 X 9/16 U Bolt", "U-bolt for 3 in round axles with 9/16 in threads."],
      ["1121", "U-Bolt 2 3/8 In Tube X 5 1/2", "U-bolt for 2-3/8 in axle tubes, 5-1/2 in legs."],
      ["1118", "U-Bolt 3 In Tube X 7", "U-bolt for 3 in axle tubes with 7 in legs."],
      ["TP238175", "Tie Plate 2.38 X 1.75", "Tie plate for 2.38 in axle tubes."],
      ["00718700", "Wet Bolt 3", "3 in wet bolt for spring and hanger connections."],
      ["2007T", "9/16-18 2 Way Rev Lock Nut Zinc", "Lock nut for 9/16-18 hanger and shackle hardware."],
      ["HGR-FRONT", "Front Spring Hanger", "Weld-on front hanger for double-eye leaf springs."],
      ["HGR-REAR", "Rear Spring Hanger", "Weld-on rear hanger for slipper or double-eye springs."],
      ["SEAT-238", "Axle Seat 2-3/8 in", "Axle seat for 2-3/8 in round axles."],
      ["SEAT-3", "Axle Seat 3 in", "Axle seat for 3 in round axles."],
      ["UB-SQUARE", "Square U-Bolt Kit", "U-bolt kit for square-tube axles. Confirm tube size before ordering."],
      ["HGR-CTR", "Center Hanger Tandem", "Center hanger used with tandem equalizers."],
    ],
    "shackle-links": [
      ["1311", "Shackle Bolt 9/16-18 X 3", "Grade hardware shackle bolt, 9/16-18 x 3 in."],
      ["1811", "2.25 Link", "2.25 in shackle link for light-duty double-eye springs."],
      ["18115", "Shackle Link Medium 2-5/8", "Medium shackle link, 2-5/8 in center-to-center."],
      ["BUSH-BRZ", "Bushing Bronze", "Bronze spring bushing for shackle and hanger eyes."],
      ["SHK-3", "Shackle Link 3 in", "3 in shackle link for heavier double-eye springs."],
      ["SHK-BOLT58", "Shackle Bolt 5/8", "5/8 in shackle bolt with greaseable option on many kits."],
      ["NUT-REV", "Reverse Lock Nut 9/16", "Two-way reverse lock nut for shackle bolts."],
      ["SHK-KIT35", "Shackle Kit 3,500 lb", "Link, bolt, nut, and bushing kit for 3,500 lb axles."],
    ],
    spindles: [
      ["389", "1750# Wet Spindle", "Wet (greaseable) spindle for 1,750 lb trailer axles."],
      ["276", "3500# Wet Spindle", "Wet spindle for 3,500 lb trailer axles."],
      ["SPD-52K", "5,200 lb Wet Spindle", "Replacement spindle for 5,200 lb axles."],
      ["SPD-7K", "7,000 lb Wet Spindle", "Heavy-duty wet spindle for 7K axles."],
      ["SPD-IDLER35", "3,500 lb Idler Spindle", "Idler (non-brake) spindle, 3,500 lb class."],
      ["SPD-EZ", "Easy Lube Spindle 3.5K", "Easy-lube style spindle for common 3,500 lb axles."],
    ],
    springs: [
      ["SW4B", "Spring 25.25/1750#", "Double-eye leaf spring, 25.25 in, 1,750 lb."],
      ["DE7224", "Spring 25-1/4 2000# Dbl Eye", "Double-eye spring, 25-1/4 in, 2,000 lb."],
      ["SW6", "25.25 DBL Eye Spring 3500#", "Double-eye spring for 3,500 lb axles, 25.25 in."],
      ["DE7225", "Spring 25-1/4 2500# Dbl Eye", "Double-eye spring, 25-1/4 in, 2,500 lb."],
      ["SW5", "25.25 DBL Eye Spring 2950#", "Double-eye spring, 25.25 in, 2,950 lb."],
      ["SH7232", "Spring 26.5 x 2 3500# Slipper", "Slipper spring, 26.5 x 2 in, 3,500 lb."],
      ["E5115", "Spring 29.5/4300#", "Longer leaf spring, 29.5 in, 4,300 lb."],
      ["SH7233", "Spring 4K 26.50 Long Slipper", "4,000 lb slipper spring, 26.50 in long."],
      ["SHE5226", "Spring 26.5X2 3400# Slipper", "Slipper spring 26.5 x 2 in, 3,400 lb."],
      ["SP-5K-DE", "Double Eye Spring 5,200#", "Double-eye spring for 5,200 lb axles."],
      ["SP-7K-SL", "Slipper Spring 7,000#", "Heavy-duty slipper spring for 7K axles."],
      ["SP-1750-26", "Spring 26 in 1750#", "Light-duty double-eye spring, 26 in."],
    ],
    "suspension-kits": [
      ["SUS-35-DE", "3,500 lb Double-Eye Suspension Kit", "Hangers, equalizer, links, and hardware for 3,500 lb tandem conversion."],
      ["SUS-52-SL", "5,200 lb Slipper Suspension Kit", "Slipper hanger kit for 5,200 lb axles."],
      ["SUS-7K", "7,000 lb Tandem Suspension Kit", "Heavy-duty tandem kit with equalizer and hangers."],
      ["SUS-SINGLE35", "Single Axle Hanger Kit 3.5K", "Front and rear hangers plus U-bolts for a single 3,500 lb axle."],
      ["SUS-TRI7", "Triple Axle 7K Kit", "Hanger and equalizer package for triple 7K axles."],
    ],
  },
  "brakes-hubs": {
    "bearing-and-race": [
      ["25580", "Bearing 1-3/4 Inner", "Inner bearing, 1-3/4 in. Match with the correct race."],
      ["L44649", "Bearing L44649", "Common inner/outer bearing for 1,750–2,000 lb spindles."],
      ["L68149", "Bearing L68149", "Bearing used on many 3,500 lb trailer hubs."],
      ["15123", "Bearing 15123", "Inner bearing for popular 3,500–5,200 lb hubs."],
      ["25580-R", "Race for 1-3/4 Inner", "Matching race for 25580-style inner bearings."],
      ["L44610", "Race L44610", "Race for L44649 bearings."],
      ["LM67048", "Bearing LM67048", "Outer bearing found on several 5–7K hubs."],
      ["14125A", "Bearing 14125A", "Heavy-duty inner bearing for 6–8K applications."],
    ],
    "brake-parts": [
      ["K7137800", "Mag Kit Ovl 12-1/4 X 5 (15K)", "Magnet kit for 12-1/4 x 5 in 15K brakes."],
      ["21026", "8K-15K Brake Magnet", "Replacement magnet for 8K–15K electric brakes."],
      ["K7112500", "12 X 2 Magnet 7K", "Magnet for 12 x 2 in 7K electric brakes."],
      ["K7132400", "Adjusting Spring & Screw 10 & 12", "Adjuster spring and screw for 10 and 12 in brakes."],
      ["K7110400", "Magnet Kit 10 X 2-1/4 Brake", "Magnet kit for 10 x 2-1/4 in electric brakes."],
      ["K7112700", "12 X 2 Shoe 7K Electric", "Brake shoe for 12 x 2 in 7K electric brakes."],
      ["K7107705", "UFP Wheel End Kit", "UFP wheel-end service kit."],
      ["03305201", "Clamping Ring", "Brake clamping ring."],
      ["K7177302", "UFP RH Caliper", "UFP right-hand hydraulic caliper."],
      ["K7177301", "UFP LH Caliper", "UFP left-hand hydraulic caliper."],
      ["21025", "12 Brake Magnet", "Magnet for 12 in electric trailer brakes."],
      ["21024", "10 Brake Magnet", "Magnet for 10 in electric trailer brakes."],
      ["05406500", "Brake Cylinder RH", "Right-hand hydraulic brake cylinder."],
      ["05406400", "Brake Cylinder LH", "Left-hand hydraulic brake cylinder."],
      ["K7104600", "Brake Shoe & Lining 10 X 1-1/2", "Shoe and lining for 10 x 1-1/2 in brakes."],
      ["K7126700", "Shoe & Lining 10 Hydraulic", "Hydraulic brake shoe and lining, 10 in."],
      ["K7149800", "Shoe & Lining 3-3/8 New RH", "Right-hand shoe and lining, 3-3/8 in."],
      ["K7149900", "Shoe & Lining 3 3/8 New LH", "Left-hand shoe and lining, 3-3/8 in."],
      ["9505", "Hydro Line Kit Tandem", "Hydraulic brake line kit for tandem axles."],
      ["9504", "Hyd Line Kit Single", "Hydraulic brake line kit for a single axle."],
      ["K568261", "Armature Plate", "Armature plate for electric brake magnets."],
      ["K7139300", "Shoe & Line Free Backing", "Free-backing shoe and lining set."],
      ["K7136300", "Brake Spring Kit 10 X 12 Dex", "Spring kit for 10 and 12 in Dexter-style brakes."],
      ["K7104700", "Shoe & Lining Kit 10 X 2-1/4", "Complete shoe kit for 10 x 2-1/4 in brakes."],
    ],
    brakes: [
      ["12X2-RH", "12 X 2 Ele Brake RH", "12 x 2 in electric brake, right hand."],
      ["12X2-LH", "12 X 2 Ele Brake LH", "12 x 2 in electric brake, left hand."],
      ["35R", "10 X 2.25 Ele Brake R", "10 x 2.25 in electric brake, right."],
      ["35L", "10 X 2.25 Ele Brake L", "10 x 2.25 in electric brake, left."],
      ["02318000", "12 X 2 7000# LH", "12 x 2 in 7,000 lb electric brake, left."],
      ["02318100", "12 X 2 7000# RH", "12 x 2 in 7,000 lb electric brake, right."],
      ["K2346400", "7K Nev-R-Adjust Brakes LH", "7K Nev-R-Adjust electric brake, left."],
      ["K2346500", "7K Nev-R-Adjust Brakes RH", "7K Nev-R-Adjust electric brake, right."],
      ["70LSA", "12 Self Adjusting LH", "12 in self-adjusting electric brake, left."],
      ["70RSA", "12 Self Adjusting RH", "12 in self-adjusting electric brake, right."],
      ["BK10L", "Brake 3 3/8 10K LH", "10K electric brake, 3-3/8 in, left."],
      ["BK10R", "Brake 3 3/8 10K RH", "10K electric brake, 3-3/8 in, right."],
      ["02343500", "Brake 8K 3 3/8 4 Bolt RH", "8K brake, 3-3/8 in, 4-bolt, right."],
      ["02343400", "Brake 8K 3 3/8 4 Bolt LH", "8K brake, 3-3/8 in, 4-bolt, left."],
      ["21004R", "12 3-3/8 RH Ele Brake 4bolt", "12 in 3-3/8 electric brake, 4-bolt, right."],
      ["21004L", "12 3-3/8 LH Ele Brake 4bolt", "12 in 3-3/8 electric brake, 4-bolt, left."],
      ["02345100", "Brake 12.25X3.375 RH Aftermarket", "12.25 x 3.375 in aftermarket brake, right."],
      ["02345000", "Brake 12.25X3.375 LH Aftermarket", "12.25 x 3.375 in aftermarket brake, left."],
      ["21015R", "5 Brake RH", "5 in electric brake, right hand."],
      ["21015L", "5 Brake LH", "5 in electric brake, left hand."],
      ["02302600", "Brake 10 X 2-1/4 LH Elec", "10 x 2-1/4 in electric brake, left."],
      ["02302700", "Brake 10 X 2-1/4 RH Electric", "10 x 2-1/4 in electric brake, right."],
      ["K23429", "12 1/4 x 2 1/2 7.2K", "7.2K brake, 12-1/4 x 2-1/2 in."],
      ["K2352800", "LH 10/12K Electric Brake", "10K/12K electric brake, left hand."],
    ],
    "hdb-mounting-hardware": [
      ["00601000", "Nut 3/8 X 24 For Stud", "3/8-24 nut for brake and hub studs."],
      ["HDB-BOLT38", "Brake Mounting Bolt 3/8", "Mounting bolt for electric brake backing plates."],
      ["HDB-STUD", "Hub Stud Replacement", "Replacement hub stud. Confirm thread and knurl."],
      ["HDB-WASHER", "Spindle Washer", "Spindle washer for castle-nut wheel ends."],
      ["HDB-PIN", "Cotter Pin Assortment", "Cotter pins for spindle castle nuts."],
      ["HDB-FLANGE", "Brake Flange Hardware Kit", "Hardware kit for welding or bolting brake flanges."],
    ],
    "hub-cover": [
      ["CAP-1750", "Dust Cap 1,750 lb", "Grease dust cap for 1,750 lb hubs."],
      ["CAP-3500", "Dust Cap 3,500 lb", "Dust cap for common 5-lug 3,500 lb hubs."],
      ["CAP-OIL8K", "Oil Cap 8K", "Oil bath cap for 8K hub-and-drum assemblies."],
      ["CAP-EZ", "Easy Lube Cap", "Cap for easy-lube / wet spindles."],
      ["HC-DOME", "Chrome Dome Hub Cover", "Decorative chrome hub cover. Confirm diameter."],
      ["HC-OILWIN", "Oil Cap with Window", "Oil cap with sight window for oil-bath hubs."],
    ],
    "hubs-and-drums": [
      ["10KIT", "10 in Drum Kit", "10 in hub-and-drum kit for common 3,500 lb electric-brake axles."],
      ["865KIT", "8 Bolt Hub Kit", "8-bolt hub kit. Confirm stud size and brake diameter."],
      ["865916KIT", "8 Bolt Hub Kit 9/16", "8-bolt hub kit with 9/16 in studs."],
      ["655KIT", "H&D 6 Bolt Kit", "6-bolt hub-and-drum kit."],
      ["17-110", "Trailer Hub 1750#", "Idler hub for 1,750 lb axles."],
      ["00828510", "Hub & Drum Oil 5/8 8K", "8K oil-bath hub and drum, 5/8 in studs."],
      ["843005", "H&D 9K-10K 865 Oil Pilot 4.75", "9K–10K hub and drum, 865 pattern, oil, 4.75 in pilot."],
      ["00821904", "Hub & Drum 8 Bolt", "8-bolt hub-and-drum assembly."],
      ["655", "Brake Drum 12 6 Bolt", "12 in brake drum, 6-bolt."],
      ["DRUM12-8", "Brake Drum 12 8 Bolt", "12 in brake drum, 8-bolt."],
      ["865916", "Drum 7K 8 Bolt 9/16 Stud", "7K drum, 8-bolt, 9/16 in studs."],
      ["511655", "Hub Kit 1 1/16 5 Lug", "5-lug hub kit, 1-1/16 in inner bearing."],
      ["5450", "Brake Drum 10 5/45", "10 in drum, 5 on 4.5 in bolt circle."],
      ["8K1225", "8K 12 1/4 x 2 1/2 5/8 Stud", "8K hub and drum, 12-1/4 x 2-1/2, 5/8 in studs."],
      ["9281", "12-15K Drum 12 1/4 x 5", "12K–15K drum, 12-1/4 x 5 in."],
      ["821913", "Hub & Drum 8 Bolt 9/16", "8-bolt hub and drum, 9/16 in studs."],
      ["00824705", "Hub & Drum 3500# 545", "3,500 lb hub and drum, 5 on 4.5."],
      ["D8K58P", "8K H&D 5/8 Stud", "8K hub and drum, 5/8 in studs."],
      ["91231", "10K GD Drum Only 12 1/4 x 3 3/8", "10K drum only, 12-1/4 x 3-3/8."],
      ["00902701", "Brake Drum 10K HD", "Heavy-duty 10K brake drum."],
      ["D8K580", "8K H&D 5/8 Stud Oil", "8K oil-style hub and drum, 5/8 stud."],
      ["821918", "H-D 7K 865 5/8 Stud", "7K hub and drum, 865 pattern, 5/8 in studs."],
      ["00902801", "Brake Drum 5X12", "Brake drum, 5-lug x 12 in."],
      ["9441", "10K GD Drum 12 1/4 x 3 3/8", "10K drum, 12-1/4 x 3-3/8 in."],
    ],
    "seals-and-caps": [
      ["K7138700", "Oil Seal 8 9 10K 2.25 X 3.88", "Oil seal for 8K–10K hubs, 2.25 x 3.88 in."],
      ["SEAL-3500", "Grease Seal 3,500 lb", "Standard grease seal for many 3,500 lb hubs."],
      ["SEAL-1750", "Grease Seal 1,750 lb", "Grease seal for 1,750 lb hubs."],
      ["SEAL-7K", "Grease Seal 7K", "Seal for 7,000 lb hub-and-drum assemblies."],
      ["SEAL-DOUBLE", "Double Lip Grease Seal", "Double-lip seal for wet and dusty service."],
      ["CAP-SEALKIT", "Seal and Cap Service Kit", "Grease seal plus matching dust cap."],
    ],
    "grease-guns-grease": [
      ["GR-TUBE", "Trailer Wheel Bearing Grease", "High-temperature grease formulated for trailer wheel bearings."],
      ["GR-GUN", "Lever Grease Gun", "Standard lever grease gun for zerk fittings and packing."],
      ["GR-PACKER", "Bearing Packer", "Hand bearing packer for cleaning and repacking hubs."],
      ["GR-EZ", "Easy Lube Grease", "Grease suitable for easy-lube / wet spindles."],
      ["GR-MARINE", "Marine Trailer Grease", "Water-resistant grease for boat trailers."],
    ],
  },
  lighting: {
    "interior-lights": [
      ["36618", "Square Work Light", "Square interior/work light for cargo and enclosed trailers."],
      ["INT-DOME", "12V Dome Light", "Interior dome light for enclosed trailers and campers."],
      ["INT-LED-STRIP", "LED Interior Strip Light", "Low-profile LED strip for cargo interiors."],
      ["INT-SWITCH", "Interior Light with Switch", "Dome light with built-in switch."],
      ["INT-PORCH-INT", "Utility Interior Lamp", "Utility lamp for porches or cargo areas."],
    ],
    "license-plate-lights": [
      ["LP-LED", "LED License Plate Light", "LED license lamp, 12V."],
      ["LP-INC", "License Plate Light Assembly", "Standard license plate light assembly."],
      ["LP-BRACKET", "License Light with Bracket", "Plate light and bracket combination."],
      ["LP-FLUSH", "Flush Mount License Light", "Flush-mount LED license lamp."],
    ],
    "lighting-accessories": [
      ["34216", "3 Wire Plug Right Angle", "Right-angle 3-wire pigtail for oval and round lamps."],
      ["442470", "Light Guard Oval", "Protective guard for 6.5 in oval lamps."],
      ["ACC-GROMMET65", "Grommet 6.5 Oval", "Mounting grommet for 6.5 in oval lights."],
      ["ACC-GROMMET4", "Grommet 4 in Round", "Grommet for 4 in round stop/tail/turn lamps."],
      ["ACC-PIGTAIL", "3-Wire Pigtail", "Standard 3-wire lamp pigtail."],
      ["ACC-2WIRE", "2-Wire Marker Pigtail", "Pigtail for single-function marker lights."],
      ["ACC-GROMMET25", "Grommet 2.5 in", "Grommet for 2.5 in marker lamps."],
      ["ACC-PLUG3", "3-Pin Plug", "Replacement 3-pin lamp plug."],
    ],
    "lighting-kits": [
      ["5626510", "6.5 Oval S.T.T. Kit", "6.5 in oval stop/tail/turn lighting kit."],
      ["751024KR", "LED 6.5 Oval Kit", "LED 6.5 in oval trailer light kit."],
      ["38309BK", "LED Submersible Light Kit", "Submersible LED kit for boat trailers."],
      ["TLL90RK", "LED Tail Light Kit", "Complete LED tail light kit for utility trailers."],
      ["5624110", "4 in Round 10 LED Kit", "4 in round 10-LED stop/tail/turn kit."],
      ["KIT-UTIL", "Utility Trailer Light Kit", "Over-the-road kit with tails, markers, and license lamp."],
      ["KIT-ENC", "Enclosed Trailer LED Kit", "LED kit sized for enclosed cargo trailers."],
    ],
    "porch-lights": [
      ["PORCH-LED", "LED RV Porch Light", "Porch light for RV and camper entries."],
      ["PORCH-SWITCH", "Porch Light with Switch", "Porch lamp with integral switch."],
      ["PORCH-AMBER", "Amber Porch Light", "Amber lens porch light."],
      ["PORCH-CLEAR", "Clear Porch Light", "Clear-lens LED porch light."],
    ],
    "tail-lights": [
      ["5625111", "LED 5 Box Style RH", "LED 5 in box-style tail light, right hand."],
      ["5625117", "LED 5 Box Style LH", "LED 5 in box-style tail light, left hand."],
      ["5626550", "6.5 Oval S.T.T. 10 LED", "6.5 in oval stop/tail/turn, 10 LED."],
      ["38469B", "11 LED Light Bar S/T/T", "11-LED stop/tail/turn light bar."],
      ["5626156", "6 Oval STT 6 LED", "6 in oval stop/tail/turn, 6 LED."],
      ["STL26RB", "LED Low Profile Light", "Low-profile LED stop/tail/turn."],
      ["5624150", "4 in LED Round 10 LED", "4 in round 10-LED stop/tail/turn."],
      ["STL78RB", "LED Oval 6.5 Surface Mount", "Surface-mount 6.5 in oval LED lamp."],
      ["STL27RB", "LED Low Profile Light Oval", "Low-profile oval LED lamp."],
      ["64RB", "LED Stop/Tail/Turn", "Combination LED stop/tail/turn lamp."],
      ["TL-ROUND", "Round Combination Tail Light", "Stud-mount combination tail light for utility trailers."],
      ["TL-OVAL-INC", "6.5 Oval Incandescent STT", "Incandescent 6.5 in oval stop/tail/turn."],
    ],
    "towing-lights": [
      ["8891040", "Magnetic Light Bar", "Magnetic towing light bar for vehicles without permanent trailer lighting."],
      ["TOW-KIT", "Magnetic Tow Light Kit", "Magnetic kit with 4-flat connector."],
      ["TOW-WIRELESS", "Wireless Magnetic Tow Lights", "Wireless magnetic towing lights. Call to confirm stock."],
      ["TOW-SUCTION", "Suction Tow Light Set", "Temporary towing lights with suction mounts."],
    ],
    "markers-clearance-lights": [
      ["22550", "2.5 LED Red", "2.5 in red LED clearance/marker lamp."],
      ["522A", "Amber LED 3/4", "3/4 in amber LED marker."],
      ["512R", "Red LED 3/4", "3/4 in red LED marker."],
      ["8892240", "Amber Strobe Thin Lite", "Thin amber strobe/marker light."],
      ["751031KR", "2 LED Round Red", "2 in round red LED marker."],
      ["MKR-AMBER25", "2.5 LED Amber", "2.5 in amber LED clearance lamp."],
      ["MKR-SIDE", "Sidemarker LED", "Sidemarker LED, red or amber by lens."],
      ["MKR-THIN", "Thin Line Clearance LED", "Low-profile clearance LED for enclosed trailers."],
    ],
  },
  "wheel-tire": {
    "inner-tubes": [
      ["TUBE-20575", "Inner Tube ST205/75", "Inner tube for ST205/75 trailer tires."],
      ["TUBE-17580", "Inner Tube ST175/80", "Inner tube for ST175/80-13 tires."],
      ["TUBE-22575", "Inner Tube ST225/75", "Inner tube for ST225/75 trailer tires."],
      ["TUBE-4808", "Inner Tube 4.80-8", "Tube for 4.80-8 trailer tires."],
      ["TUBE-5708", "Inner Tube 5.70-8", "Tube for 5.70-8 trailer tires."],
    ],
    "mounted-tire-and-wheel": [
      ["1388449", "ST205/75R Load Range D Assembly", "Mounted ST205/75R load range D tire and wheel."],
      ["1388456", "ST225/75R 15 D 6H Spoke White Stripe", "ST225/75R15 D on 6-hole spoke wheel, white stripe."],
      ["A16R80G8", "235-80R16 TW Grey #4080", "235/80R16 tire and grey wheel assembly."],
      ["A16RTK8SMM", "ST235 80R16E 8 Lug Tire & Wheel", "ST235/80R16E on 8-lug wheel."],
      ["32068", "ST 205/75 R 14 C 5H Spoke White", "ST205/75R14 C on 5-hole white spoke."],
      ["33422", "205 75R15 Aluminum Tire & Wheel", "ST205/75R15 mounted on aluminum wheel."],
      ["34903", "Tire/Wheel 235/80/16 8 Lug White", "235/80R16 on 8-lug white wheel."],
      ["ND4400", "Tire & Wheel 235-85-R16 8 Lug", "235/85R16 tire and 8-lug wheel, 4,400 lb class."],
      ["1388206", "215/60-8C 5H White K399 Tire/Wheel", "215/60-8C on 5-hole white wheel."],
      ["32409", "ST205/75R15 5on5 Tire and Wheel", "ST205/75R15 on 5-on-5 wheel."],
      ["3H490", "20.5/65-10E 5 Hole Gal Tire & Wheel", "20.5/65-10E on 5-hole galvanized wheel."],
      ["1388444", "ST 175/80 R 13 C 5H Spoke White T/W", "ST175/80R13 C on 5-hole white spoke."],
      ["1388248", "20.5/65-10C 5H White K399 Tire/Wheel", "20.5/65-10C mounted assembly."],
      ["21575R175TW", "215/75R17.5 Tire and Wheel", "215/75R17.5 commercial trailer assembly."],
      ["1388437", "ST205/75D15 5H Spoke Tire/Wheel", "ST205/75D15 bias on 5-hole spoke."],
      ["1388454", "ST225/75R 15 D 5H Spoke White Stripe", "ST225/75R15 D on 5-hole spoke, white stripe."],
      ["1388433", "ST175/80D13 5H Spoke Tire/Wheel", "ST175/80D13 on 5-hole spoke."],
      ["ALUM235", "235 85R16 Aluminum T&W 4400 lb", "235/85R16 aluminum tire-and-wheel, 4,400 lb."],
      ["31218", "ST145/R12 E Range Tire & Wheel", "ST145R12 E-range mounted assembly."],
    ],
    "tire-only": [
      ["PRG235R16", "235-85R16 Tire 4400", "ST235/85R16 tire only, 4,400 lb rated."],
      ["80235", "235-80R16 Tire", "ST235/80R16 tire only."],
      ["TR225LRE", "ST225 75R15 Tire Only", "ST225/75R15 tire, unmounted."],
      ["TR20515D", "ST205 75R15 Tire Only", "ST205/75R15 tire, unmounted."],
      ["33150", "8-14.5 LTG", "8-14.5 LTG trailer tire."],
      ["TR20514", "ST205/75R14 Tire Only", "ST205/75R14 special trailer tire."],
      ["TR17513", "ST175/80R13 Tire Only", "ST175/80R13 tire for lighter trailers."],
      ["TR22516", "ST225/75R16 Tire Only", "ST225/75R16 tire only."],
    ],
    "wheel-accessories": [
      ["LUG-12MM", "Lug Nut 12 mm", "12 mm lug nut for many trailer wheels."],
      ["LUG-12-CONE", "Cone Lug Nut 1/2", "1/2 in cone lug nut."],
      ["LUG-916", "Lug Nut 9/16", "9/16 in lug nut for 8-lug wheels."],
      ["CAP-CENTER", "Wheel Center Cap", "Center cap. Confirm diameter and retention style."],
      ["WRENCH-LUG", "Trailer Lug Wrench", "Lug wrench sized for common trailer nuts."],
      ["WASHER-LUG", "Lug Nut Washer", "Washer used on some mag / aluminum wheels."],
    ],
    "wheel-only": [
      ["WH-15-5-WHITE", "15 in 5-Lug White Spoke Wheel", "15 in white spoke trailer wheel, 5-lug."],
      ["WH-15-6", "15 in 6-Lug Trailer Wheel", "15 in 6-lug steel trailer wheel."],
      ["WH-16-8", "16 in 8-Lug White Wheel", "16 in 8-lug white steel wheel."],
      ["WH-14-5", "14 in 5-Lug White Spoke", "14 in 5-lug white spoke wheel."],
      ["WH-13-5", "13 in 5-Lug Trailer Wheel", "13 in 5-lug wheel for lighter trailers."],
      ["WH-ALUM15", "15 in Aluminum Trailer Wheel", "15 in aluminum trailer wheel. Confirm offset and load."],
      ["WH-GAL10", "10 in Galvanized Wheel", "Galvanized 10 in wheel for boat trailers."],
    ],
  },
  towing: {
    "brake-controllers": [
      ["BC-PROP", "Proportional Brake Controller", "Proportional electric brake controller for 1–4 axle trailers."],
      ["BC-TIME", "Time-Based Brake Controller", "Time-delayed brake controller. Straightforward install."],
      ["BC-COMPACT", "Compact Dash Brake Controller", "Low-profile controller for limited dash space."],
      ["BC-HARNESS", "Brake Controller Harness", "Plug-in harness. Vehicle-specific — call with year/make/model."],
      ["BC-HEAVY", "Heavy-Duty Brake Controller", "Controller suited to heavier multi-axle trailers."],
    ],
    "breakaway-kits-and-parts": [
      ["BA-KIT", "Breakaway Kit with Battery", "Complete breakaway switch, battery, and box."],
      ["BA-SWITCH", "Breakaway Switch", "Replacement breakaway switch with lanyard."],
      ["BA-BATT", "Breakaway Battery", "Rechargeable breakaway battery."],
      ["BA-BOX", "Breakaway Battery Box", "Weather-resistant box for the breakaway battery."],
      ["BA-LANYARD", "Breakaway Lanyard", "Replacement lanyard/cable."],
    ],
    "harnesses-and-extensions": [
      ["HAR-7WAY", "7-Way Trailer Harness", "7-way blade harness for brake-equipped trailers."],
      ["HAR-4FLAT", "4-Flat Harness", "4-flat lighting harness for utility trailers."],
      ["HAR-5WAY", "5-Way Harness", "5-way harness for trailers with reverse or aux functions."],
      ["EXT-7-4", "7-Way Extension 4 ft", "4 ft 7-way extension."],
      ["EXT-7-8", "7-Way Extension 8 ft", "8 ft 7-way extension."],
      ["EXT-4-4", "4-Flat Extension 4 ft", "4 ft 4-flat extension."],
      ["ADP-7TO4", "7-Way to 4-Flat Adapter", "Adapter from 7-way vehicle to 4-flat trailer."],
    ],
    "vehicle-and-trailer-ends": [
      ["END-7VEH", "7-Way Vehicle End", "Vehicle-side 7-way socket."],
      ["END-7TRL", "7-Way Trailer Plug", "Trailer-side 7-way plug."],
      ["END-4VEH", "4-Flat Vehicle End", "Vehicle-side 4-flat socket."],
      ["END-4TRL", "4-Flat Trailer Plug", "Trailer-side 4-flat plug."],
      ["END-6RND", "6-Round Connector", "6-round towing connector. Call to confirm pinout."],
      ["END-COVER", "7-Way Socket Cover", "Replacement cover for 7-way vehicle sockets."],
    ],
    "ball-mounts": [
      ["GH-623", "2.5 Class V 21K 6 Drop", "Class V 2.5 in shank, 21,000 lb, 6 in drop."],
      ["20040B", "B&W 2.5 Shank 7 in Drop", "B&W 2.5 in shank, 7 in drop."],
      ["CTB6-2.5", "6 in Weigh Safe 2.5 Hitch", "Weigh Safe adjustable hitch, 6 in, 2.5 in shank."],
      ["3410-25", "2.5 Shank 6 Rapid Hitch", "Rapid Hitch, 6 in, 2.5 in shank."],
      ["20037B", "B&W 2.5 Shank 5 in Drop", "B&W 2.5 in shank, 5 in drop."],
      ["GH-624", "2.5 Class V 21K 9 Drop", "Class V 2.5 in shank, 21,000 lb, 9 in drop."],
      ["3410", "6 Rapid Hitch 2 & 2 5/16 Chrome", "Rapid Hitch for 2 in and 2-5/16 in balls, chrome."],
      ["CTB8-2.5", "8 in Weigh Safe 2.5 Hitch", "Weigh Safe adjustable hitch, 8 in, 2.5 in shank."],
      ["GH-524", "2 Class V 16K 7.5 Drop", "Class V 2 in shank, 16,000 lb, 7.5 in drop."],
      ["10037", "Tow & Stow 5 Drop", "Tow & Stow adjustable ball mount, 5 in drop."],
      ["10048", "Tow & Stow Tri Ball", "Tow & Stow tri-ball mount."],
      ["TS20066BMP", "B&W MultiPro 2.5 7 in", "B&W MultiPro, 2.5 in shank, 7 in."],
      ["GH-523", "2 Class V 16K 5 Drop", "Class V 2 in shank, 16,000 lb, 5 in drop."],
      ["CTB6-2", "6 in Weigh Safe 2 Hitch", "Weigh Safe hitch, 6 in, 2 in shank."],
      ["10040", "Tow & Stow 7 Drop", "Tow & Stow adjustable mount, 7 in drop."],
      ["GH-525", "2 Class V 16K 10 Drop", "Class V 2 in shank, 16,000 lb, 10 in drop."],
      ["344525", "8 Rapid Hitch 2.5", "Rapid Hitch 8 in, 2.5 in shank."],
    ],
    "hitch-pins-and-locks": [
      ["PIN-58", "Hitch Pin 5/8", "Standard 5/8 in receiver hitch pin and clip."],
      ["PIN-LOCK", "Locking Hitch Pin", "Receiver lock pin. Keyed. Call for 2 in vs 2.5 in."],
      ["LOCK-CPL", "Coupler Lock", "Lock for 2 in and 2-5/16 in couplers."],
      ["1481DAT", "Receiver & Coupler Lock", "Combination receiver and coupler lock set."],
      ["377DAT", "Lock For Coupler", "Dedicated coupler lock."],
      ["378DAT", "Lock Coupler 2 5/16 Ball", "Lock sized for 2-5/16 in ball couplers."],
      ["4338600", "2 Lever Lock", "Lever-style coupler/hitch lock."],
    ],
    "pintle-mounts-and-hardware": [
      ["10053", "Tow & Stow Pintle/Ball", "Tow & Stow combination pintle and ball."],
      ["BH82516", "Combo 2 5/16 And Pintle", "Combination 2-5/16 in ball and pintle."],
      ["BH152516", "15 Ton Pintle Combination", "15-ton pintle combination mount."],
      ["RM122516", "2.5 Rec 2 5/16 Combo", "2.5 in receiver, 2-5/16 combo ball/pintle."],
      ["PH-20T", "Pintle Hook 20 Ton", "20-ton pintle hook."],
      ["B16145", "12.5 Ton Tow Eye 3 in ID", "12.5-ton tow eye, 3 in inside diameter."],
      ["PINTLE-MOUNT", "Pintle Mount Plate", "Bolt-on pintle mount plate. Confirm hole pattern."],
      ["LUNETTE", "Lunette Ring 3 in", "3 in lunette ring for pintle towing."],
    ],
    "receiver-tubes-and-extensions": [
      ["RED-SLEEVE", "Reducer Sleeve 2-1/2 to 2 in Shank", "Sleeve to run a 2 in shank in a 2.5 in receiver."],
      ["EXT-2-6", "Receiver Extension 6 in", "6 in 2 in receiver extension."],
      ["EXT-2-12", "Receiver Extension 12 in", "12 in 2 in receiver extension. Mind tongue-weight ratings."],
      ["TUBE-2", "Receiver Tube 2 in", "Weld-on 2 in receiver tube."],
      ["TUBE-25", "Receiver Tube 2.5 in", "Weld-on 2.5 in receiver tube."],
      ["EXT-25-8", "2.5 in Receiver Extension", "Extension for 2.5 in receivers."],
    ],
    "tow-mirrors": [
      ["MIR-CLIP", "Clip-On Tow Mirror Pair", "Clip-on tow mirrors for wider trailers and RVs."],
      ["MIR-EXT", "Extendable Tow Mirror", "Manual-extend tow mirror. Vehicle-specific applications."],
      ["MIR-UNIVERSAL", "Universal Tow Mirror", "Universal add-on tow mirror."],
      ["MIR-CONVEX", "Convex Spotter Mirror", "Convex spotter for trailer-side visibility."],
    ],
  },
  "trailer-equipment": {
    "cargo-management": [
      ["EA2000", "A Frame Jack 2K", "A-frame jack, 2,000 lb."],
      ["JACK-5K", "Side-Wind Jack 5,000 lb", "Side-wind trailer jack, 5,000 lb."],
      ["JACK-DLX", "Drop-Leg Jack", "Drop-leg jack for heavier tongues. Confirm lift capacity."],
      ["WINCH-2K", "Utility Winch 2,000 lb", "2,000 lb utility winch with strap."],
      ["RATCHET", "Ratchet Strap 2 in", "2 in ratchet strap. Working load posted on the label."],
      ["WHEEL-CHOCK", "Wheel Chock Pair", "Rubber wheel chocks for trailers and RVs."],
    ],
    chains: [
      ["7020", "G70 3/8 x 20", "Grade 70 transport chain, 3/8 in x 20 ft."],
      ["SC3835", "3/8 X 35 Chain 26400#", "3/8 in safety/transport chain, 35 in, 26,400 lb."],
      ["SC51635", "5/16 X 35 Safety Chain 11700#", "5/16 in safety chain, 35 in, 11,700 lb."],
      ["1436", "1/4 X 36 Chain 12600#", "1/4 in chain, 36 in, 12,600 lb."],
      ["HOOK-18K", "3/8 Safety Latch Clevis Hook 18,000 lb", "3/8 in safety latch clevis hook, 18,000 lb, 7/16 in pin."],
      ["HOOK-24K", "3/8 Safety Latch Clevis Hook 24,000 lb", "3/8 in safety latch clevis hook, 24,000 lb, 7/16 in pin."],
      ["HOOK-14K", "5/16 Safety Latch Clevis Hook 14,000 lb", "5/16 in safety latch clevis hook, 14,000 lb, 3/8 in pin."],
      ["CHAIN-BINDER", "Ratchet Binder 3/8-1/2", "Ratchet load binder for 3/8–1/2 in chain."],
    ],
    couplers: [
      ["CTA-14", "Adjustable Coupler 2 5/16", "Adjustable 2-5/16 in coupler."],
      ["25008", "Gooseneck Coupler w/Pin", "Gooseneck coupler with pin."],
      ["CA5400", "A-Frame 2 5/16 14K", "A-frame coupler, 2-5/16 in, 14,000 lb."],
      ["CPL-UNILOCK", "Universal Trailer Coupler Lock", "Universal coupler lock."],
      ["80PL", "20000# Flat Mount Coupler 2 5/16", "Flat-mount coupler, 2-5/16 in, 20,000 lb."],
      ["CA5100", "A-Frame 2 in Coupler", "A-frame coupler for 2 in balls."],
      ["CPL-2X2", "2 X 2 Coupler", "2 x 2 in channel coupler."],
      ["3003", "2 X 3 Coupler", "2 x 3 in channel coupler."],
      ["CA5210-B", "2 A Frame 8K", "A-frame 2 in coupler, 8,000 lb."],
      ["CPL-STR2", "Straight Coupler 2 in", "Straight coupler for 2 in balls."],
      ["CPL-LATCH", "Coupler Latch Repair Kit", "Latch, spring, and handle kit. Confirm coupler model."],
    ],
    "e-track-fittings": [
      ["43002", "10 ft E-Track", "10 ft E-track rail for cargo control."],
      ["19148", "5 ft E-Track", "5 ft E-track section."],
      ["ESCDR", "E Track Fitting D Ring", "E-track D-ring fitting."],
      ["ET-STRAP", "E-Track Ratchet Strap", "Ratchet strap with E-track end fittings."],
      ["ET-SHORING", "E-Track Shoring Beam", "Shoring/load beam for E-track."],
      ["ET-O", "E-Track O-Ring Fitting", "O-ring style E-track fitting."],
      ["ET-2FT", "2 ft E-Track", "Short E-track section for custom installs."],
    ],
  },
};

function main() {
  const all = [];
  const used = new Set();

  for (const [category, subs] of Object.entries(raw)) {
    for (const [subcategory, rows] of Object.entries(subs)) {
      const products = rows.map(([sku, name, summary]) => {
        const product = {
          sku,
          name,
          slug: uniqueSlug(sku, name, used),
          category,
          subcategory,
          summary,
        };
        all.push(product);
        return product;
      });
      const file = join(root, "data", "products", category, `${subcategory}.json`);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, `${JSON.stringify(products, null, 2)}\n`);
    }
  }

  const combined = join(root, "src", "data", "catalog.json");
  mkdirSync(dirname(combined), { recursive: true });
  writeFileSync(combined, `${JSON.stringify(all, null, 2)}\n`);
  console.log(`Wrote ${all.length} products across ${Object.keys(raw).length} categories.`);
}

main();
