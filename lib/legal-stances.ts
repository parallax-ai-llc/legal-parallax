import stancesData from "@/lib/json/legal-stances.json";

export interface StanceLevel {
  value: number;
  label: string;
  color: string;
}

export interface CountryStance {
  stance: number;
  note: string;
}

export interface LegalTopic {
  id: string;
  name: string;
  description: string;
  caseId: string;
  scale: StanceLevel[];
  countries: Record<string, CountryStance>;
}

export interface LegalStancesData {
  topics: LegalTopic[];
}

const data = stancesData as unknown as LegalStancesData;

export function getAllTopics(): LegalTopic[] {
  return data.topics;
}

export function getTopic(topicId: string): LegalTopic | undefined {
  return data.topics.find((t) => t.id === topicId);
}

export function getCountryStance(
  topicId: string,
  countryCode: string
): CountryStance | undefined {
  const topic = getTopic(topicId);
  if (!topic) return undefined;
  return topic.countries[countryCode];
}

export function getStanceColor(topic: LegalTopic, stanceValue: number): string {
  const level = topic.scale.find((s) => s.value === stanceValue);
  return level?.color ?? "#6b7280";
}

export function getStanceLabel(topic: LegalTopic, stanceValue: number): string {
  const level = topic.scale.find((s) => s.value === stanceValue);
  return level?.label ?? "Unknown";
}

// ISO 3166-1 numeric to alpha-3 mapping (for matching TopoJSON geo.id)
const NUMERIC_TO_ALPHA3: Record<string, string> = {
  "004": "AFG", "008": "ALB", "012": "DZA", "024": "AGO", "032": "ARG",
  "036": "AUS", "040": "AUT", "050": "BGD", "056": "BEL", "068": "BOL",
  "076": "BRA", "100": "BGR", "104": "MMR", "116": "KHM", "120": "CMR",
  "124": "CAN", "144": "LKA", "152": "CHL", "156": "CHN", "170": "COL",
  "178": "COG", "180": "COD", "188": "CRI", "191": "HRV", "192": "CUB",
  "196": "CYP", "203": "CZE", "208": "DNK", "214": "DOM", "218": "ECU",
  "818": "EGY", "222": "SLV", "231": "ETH", "233": "EST", "246": "FIN",
  "250": "FRA", "266": "GAB", "276": "DEU", "288": "GHA", "300": "GRC",
  "320": "GTM", "328": "GUY", "332": "HTI", "340": "HND", "348": "HUN",
  "352": "ISL", "356": "IND", "360": "IDN", "364": "IRN", "368": "IRQ",
  "372": "IRL", "376": "ISR", "380": "ITA", "384": "CIV", "388": "JAM",
  "392": "JPN", "400": "JOR", "398": "KAZ", "404": "KEN", "408": "PRK",
  "410": "KOR", "414": "KWT", "418": "LAO", "422": "LBN", "426": "LSO",
  "430": "LBR", "434": "LBY", "440": "LTU", "442": "LUX", "450": "MDG",
  "454": "MWI", "458": "MYS", "466": "MLI", "478": "MRT", "484": "MEX",
  "496": "MNG", "504": "MAR", "508": "MOZ", "516": "NAM", "524": "NPL",
  "528": "NLD", "540": "NCL", "554": "NZL", "558": "NIC", "562": "NER",
  "566": "NGA", "578": "NOR", "512": "OMN", "586": "PAK", "591": "PAN",
  "598": "PNG", "600": "PRY", "604": "PER", "608": "PHL", "616": "POL",
  "620": "PRT", "634": "QAT", "642": "ROU", "643": "RUS", "646": "RWA",
  "682": "SAU", "686": "SEN", "688": "SRB", "694": "SLE", "702": "SGP",
  "703": "SVK", "704": "VNM", "705": "SVN", "706": "SOM", "710": "ZAF",
  "716": "ZWE", "724": "ESP", "728": "SSD", "736": "SDN", "740": "SUR",
  "752": "SWE", "756": "CHE", "760": "SYR", "764": "THA", "768": "TGO",
  "780": "TTO", "784": "ARE", "788": "TUN", "792": "TUR", "800": "UGA",
  "804": "UKR", "807": "MKD", "826": "GBR", "834": "TZA", "840": "USA",
  "854": "BFA", "858": "URY", "860": "UZB", "862": "VEN", "887": "YEM",
  "894": "ZMB",
};

const ALPHA3_TO_NAME: Record<string, string> = {
  AFG: "Afghanistan", ALB: "Albania", DZA: "Algeria", AGO: "Angola",
  ARG: "Argentina", AUS: "Australia", AUT: "Austria", BGD: "Bangladesh",
  BEL: "Belgium", BOL: "Bolivia", BRA: "Brazil", BGR: "Bulgaria",
  MMR: "Myanmar", KHM: "Cambodia", CMR: "Cameroon", CAN: "Canada",
  LKA: "Sri Lanka", CHL: "Chile", CHN: "China", COL: "Colombia",
  COG: "Congo", COD: "DR Congo", CRI: "Costa Rica", HRV: "Croatia",
  CUB: "Cuba", CYP: "Cyprus", CZE: "Czech Republic", DNK: "Denmark",
  DOM: "Dominican Republic", ECU: "Ecuador", EGY: "Egypt", SLV: "El Salvador",
  ETH: "Ethiopia", EST: "Estonia", FIN: "Finland", FRA: "France",
  GAB: "Gabon", DEU: "Germany", GHA: "Ghana", GRC: "Greece",
  GTM: "Guatemala", GUY: "Guyana", HTI: "Haiti", HND: "Honduras",
  HUN: "Hungary", ISL: "Iceland", IND: "India", IDN: "Indonesia",
  IRN: "Iran", IRQ: "Iraq", IRL: "Ireland", ISR: "Israel",
  ITA: "Italy", CIV: "Ivory Coast", JAM: "Jamaica", JPN: "Japan",
  JOR: "Jordan", KAZ: "Kazakhstan", KEN: "Kenya", PRK: "North Korea",
  KOR: "South Korea", KWT: "Kuwait", LAO: "Laos", LBN: "Lebanon",
  LSO: "Lesotho", LBR: "Liberia", LBY: "Libya", LTU: "Lithuania",
  LUX: "Luxembourg", MDG: "Madagascar", MWI: "Malawi", MYS: "Malaysia",
  MLI: "Mali", MRT: "Mauritania", MEX: "Mexico", MNG: "Mongolia",
  MAR: "Morocco", MOZ: "Mozambique", NAM: "Namibia", NPL: "Nepal",
  NLD: "Netherlands", NZL: "New Zealand", NIC: "Nicaragua", NER: "Niger",
  NGA: "Nigeria", NOR: "Norway", OMN: "Oman", PAK: "Pakistan",
  PAN: "Panama", PNG: "Papua New Guinea", PRY: "Paraguay", PER: "Peru",
  PHL: "Philippines", POL: "Poland", PRT: "Portugal", QAT: "Qatar",
  ROU: "Romania", RUS: "Russia", RWA: "Rwanda", SAU: "Saudi Arabia",
  SEN: "Senegal", SRB: "Serbia", SLE: "Sierra Leone", SGP: "Singapore",
  SVK: "Slovakia", VNM: "Vietnam", SVN: "Slovenia", SOM: "Somalia",
  ZAF: "South Africa", ZWE: "Zimbabwe", ESP: "Spain", SSD: "South Sudan",
  SDN: "Sudan", SUR: "Suriname", SWE: "Sweden", CHE: "Switzerland",
  SYR: "Syria", THA: "Thailand", TGO: "Togo", TTO: "Trinidad and Tobago",
  ARE: "UAE", TUN: "Tunisia", TUR: "Turkey", UGA: "Uganda",
  UKR: "Ukraine", MKD: "North Macedonia", GBR: "United Kingdom",
  TZA: "Tanzania", USA: "United States", BFA: "Burkina Faso",
  URY: "Uruguay", UZB: "Uzbekistan", VEN: "Venezuela", YEM: "Yemen",
  ZMB: "Zambia",
};

export function numericToAlpha3(numericCode: string): string | undefined {
  return NUMERIC_TO_ALPHA3[numericCode];
}

export function getCountryName(alpha3: string): string {
  return ALPHA3_TO_NAME[alpha3] ?? alpha3;
}
