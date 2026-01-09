/**
 * Topic Discovery Service
 * Returns official syllabus topics for supported courses.
 * MVP approach: static lists for clean, demo-ready UX.
 */

const IFIC_TOPICS = [
  "Role of the mutual fund representative",
  "Regulation, SROs, and ethics",
  "Client discovery and risk profiling",
  "Time value of money and inflation",
  "Investment products overview",
  "Mutual fund structure, pricing, and fees",
  "Types of mutual funds",
  "Portfolio construction with mutual funds",
  "Taxation of mutual funds",
  "Registered plans using mutual funds",
  "Suitability, disclosure, and complaints"
];

const CSC_TOPICS = [
  "Canadian financial system and regulators",
  "Securities markets and trading mechanics",
  "Debt securities and money markets",
  "Equities and equity strategies",
  "Derivatives and structured products",
  "Pooled investments and managed products",
  "Financial statements and corporate analysis",
  "Portfolio theory and asset allocation",
  "Taxation of investments in Canada",
  "Registered plans and retirement planning",
  "KYC, suitability, and ethics",
  "Compliance and client management"
];

const CAPM_TOPICS = [
  "Project management environment and terminology",
  "Project roles and stakeholders",
  "Project life cycle and integration",
  "Scope and requirements management",
  "Schedule management and critical path",
  "Cost management and earned value",
  "Quality management concepts",
  "Resource and team management",
  "Communication and stakeholder engagement",
  "Risk management",
  "Procurement basics",
  "Agile and hybrid approaches"
];

const PMP_TOPICS = [
  "Project management principles",
  "Performance domains",
  "Business value and benefits management",
  "Project planning across scope, schedule, and cost",
  "Resource and stakeholder engagement",
  "Risk, procurement, and change control",
  "Project execution and leadership",
  "Monitoring and controlling performance",
  "Project closing and knowledge transfer",
  "Agile and hybrid delivery approaches",
  "Governance and PMOs"
];

async function getTopics(course) {
  if (!['IFIC', 'CSC', 'CAPM', 'PMP'].includes(course)) {
    throw new Error('INVALID_COURSE');
  }

  if (course === 'IFIC') return IFIC_TOPICS;
  if (course === 'CSC') return CSC_TOPICS;
  if (course === 'CAPM') return CAPM_TOPICS;
  if (course === 'PMP') return PMP_TOPICS;

  return [];
}

module.exports = { getTopics };
