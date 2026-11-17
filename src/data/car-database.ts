export interface CarModel {
  name: string;
  baseValue: number;
  category: string;
}

export interface CarBrand {
  brand: string;
  models: CarModel[];
}

export const INDIAN_CAR_DATABASE: CarBrand[] = [
  {
    brand: "Maruti Suzuki",
    models: [
      { name: "Swift", baseValue: 700000, category: "Hatchback" },
      { name: "Dzire", baseValue: 800000, category: "Sedan" },
      { name: "Baleno", baseValue: 850000, category: "Premium Hatchback" },
      { name: "Brezza", baseValue: 1100000, category: "Compact SUV" },
      { name: "Ertiga", baseValue: 1150000, category: "MPV" },
      { name: "Grand Vitara", baseValue: 1550000, category: "Mid SUV" },
    ],
  },
  {
    brand: "Hyundai",
    models: [
      { name: "i20", baseValue: 900000, category: "Premium Hatchback" },
      { name: "Venue", baseValue: 1050000, category: "Compact SUV" },
      { name: "Creta", baseValue: 1600000, category: "Mid SUV" },
      { name: "Verna", baseValue: 1450000, category: "Sedan" },
      { name: "Alcazar", baseValue: 1850000, category: "7-Seater SUV" },
    ],
  },
  {
    brand: "Tata Motors",
    models: [
      { name: "Nexon", baseValue: 1200000, category: "Compact SUV" },
      { name: "Punch", baseValue: 800000, category: "Micro SUV" },
      { name: "Altroz", baseValue: 850000, category: "Hatchback" },
      { name: "Harrier", baseValue: 2000000, category: "Premium SUV" },
      { name: "Safari", baseValue: 2200000, category: "Flagship SUV" },
    ],
  },
  {
    brand: "Mahindra",
    models: [
      { name: "Scorpio-N", baseValue: 1750000, category: "Rugged SUV" },
      { name: "Scorpio Classic", baseValue: 1500000, category: "Rugged SUV" },
      { name: "XUV700", baseValue: 2100000, category: "Premium SUV" },
      { name: "Thar", baseValue: 1550000, category: "Lifestyle 4x4" },
      { name: "XUV300 / 3XO", baseValue: 1050000, category: "Compact SUV" },
    ],
  },
  {
    brand: "Toyota",
    models: [
      { name: "Innova Crysta / Hycross", baseValue: 2400000, category: "Premium MPV" },
      { name: "Fortuner", baseValue: 3600000, category: "Full SUV" },
      { name: "Urban Cruiser Hyryder", baseValue: 1500000, category: "Mid SUV" },
      { name: "Glanza", baseValue: 850000, category: "Hatchback" },
    ],
  },
  {
    brand: "Kia",
    models: [
      { name: "Seltos", baseValue: 1550000, category: "Mid SUV" },
      { name: "Sonet", baseValue: 1050000, category: "Compact SUV" },
      { name: "Carens", baseValue: 1400000, category: "MPV" },
    ],
  },
  {
    brand: "Honda",
    models: [
      { name: "City", baseValue: 1400000, category: "Executive Sedan" },
      { name: "Elevate", baseValue: 1350000, category: "Mid SUV" },
      { name: "Amaze", baseValue: 800000, category: "Compact Sedan" },
    ],
  },
];

export function calculateCarValuation(basePrice: number, manufacturingYear: number) {
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - manufacturingYear);

  let retention = 1.0;
  if (age === 0) retention = 0.90;
  else if (age === 1) retention = 0.82;
  else if (age === 2) retention = 0.72;
  else if (age === 3) retention = 0.63;
  else if (age === 4) retention = 0.55;
  else if (age === 5) retention = 0.48;
  else if (age === 6) retention = 0.42;
  else if (age === 7) retention = 0.36;
  else if (age === 8) retention = 0.31;
  else if (age === 9) retention = 0.27;
  else retention = Math.max(0.20, 0.25 - (age - 10) * 0.02);

  const estimatedValue = Math.round(basePrice * retention);
  const maxEligibleLoan = Math.round(estimatedValue * 2.0); // Up to 200% LTV

  return {
    estimatedMarketValue: estimatedValue,
    maxEligibleLoan,
    minRecommendedLoan: Math.round(estimatedValue * 0.5),
    vehicleAge: age,
  };
}

export function formatIndianCurrency(num: number, showSymbol = true): string {
  if (isNaN(num)) return showSymbol ? "₹0" : "0";
  const prefix = showSymbol ? "₹" : "";
  return prefix + Math.round(num).toLocaleString("en-IN");
}

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number) {
  if (principal <= 0 || tenureMonths <= 0) return { emi: 0, totalInterest: 0, totalPayment: 0, principal };

  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) {
    const emi = principal / tenureMonths;
    return { emi: Math.round(emi), totalInterest: 0, totalPayment: principal, principal };
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
    principal,
  };
}
