export const equipment = [
  {
    capacity: "9,000 BTU",
    price: 460,
    room: "Small bedrooms, nurseries, or private studies up to 18m².",
    features: ["Eco Inverter Saver", "Sleep Mode Quiet"],
  },
  {
    capacity: "12,000 BTU",
    price: 480,
    room: "Master bedrooms, living rooms, and suites up to 25m².",
    features: ["Fast Cooling Boost", "Solar Friendly Inverter"],
    popular: true,
  },
  {
    capacity: "18,000 BTU",
    price: 680,
    room: "Open-plan living areas and offices up to 38m².",
    features: ["High Airflow Throw", "Heavy Duty Compressor"],
  },
  {
    capacity: "24,000 BTU",
    price: 790,
    room: "Larger shops, boardrooms, and open spaces up to 55m².",
    features: ["Maximum Thermal Pull", "Commercial Durability"],
  },
] as const;

export const popularCapacity = "12,000 BTU";
export type EquipmentCapacity = (typeof equipment)[number]["capacity"];

export const standardInstallationPrice = 90;

export const contacts = {
  primaryPhone: "+263 783 081 068",
  secondaryPhone: "+263 718 242 482",
  primaryWhatsApp: "263783081068",
  serviceArea:
    "Borrowdale, Glen Lorne, Avondale, Highlands, Eastlea, Mount Pleasant, Westgate, Greendale, Newlands and greater Harare.",
} as const;

export type NavigationPath =
  "/" | "/services" | "/brands" | "/pricing" | "/why-us" | "/gallery" | "/contact";

export const navigation: { label: string; to: NavigationPath }[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Brands", to: "/brands" },
  { label: "Pricing", to: "/pricing" },
  { label: "Why PureCharge", to: "/why-us" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
