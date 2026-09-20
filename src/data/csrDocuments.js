/**
 * CSR Document Verification Checklist Configuration
 * Official 16-point CSR & Donation documentation for Arushi Gramin Sansthan.
 *
 * Each item contains:
 * - id: unique numeric ID
 * - serial: formatted serial number (01..16)
 * - title: official document title
 * - description: clear explanation of the document's verification role
 * - available: boolean flag indicating if the document is present in public/csr/
 * - file: path to the PDF document inside public/csr/
 */

export const csrDocuments = [
  {
    id: 1,
    serial: "01",
    title: "12AA, 80G Certificate Copy",
    description: "Tax exemption certificate under Section 12AA & 80G of the Income Tax Act for CSR and donor tax exemption benefits.",
    fileName: "01-12a-80g.pdf",
    file: "/csr/01-12a-80g.pdf",
    available: true
  },
  {
    id: 2,
    serial: "02",
    title: "Registration Certificate (NITI Aayog Registration Certificate)",
    description: "Official NGO Darpan / NITI Aayog portal registration and state society incorporation certificate.",
    fileName: "02-registration-certificate.pdf",
    file: "/csr/02-registration-certificate.pdf",
    available: true
  },
  {
    id: 3,
    serial: "03",
    title: "5 Black Letter Heads",
    description: "Official organization blank letterheads bearing the society registration details and header.",
    fileName: "03-black-letter-heads.pdf",
    file: "/csr/03-black-letter-heads.pdf",
    available: true
  },
  {
    id: 4,
    serial: "04",
    title: "Bye-laws of the Trust & Rubber Stamp",
    description: "Constitution, aims, governing bye-laws and specimen imprint of the official rubber stamp.",
    fileName: "04-bye-laws.pdf",
    file: "/csr/04-bye-laws.pdf",
    available: true
  },
  {
    id: 5,
    serial: "05",
    title: "3 Years' ITR Copies",
    description: "Income Tax Return filings and official acknowledgment receipts for the last 3 assessment years.",
    fileName: "05-itr-3-years.pdf",
    file: "/csr/05-itr-3-years.pdf",
    available: false
  },
  {
    id: 6,
    serial: "06",
    title: "3 Years' Balance Sheet & Income-Expenditure Account, CA Audited",
    description: "CA-certified and audited financial balance sheets, income and expenditure accounts, and audit notes.",
    fileName: "06-balance-sheet-income-expenditure.pdf",
    file: "/csr/06-balance-sheet-income-expenditure.pdf",
    available: false
  },
  {
    id: 7,
    serial: "07",
    title: "Trust Profile & Activity in which the Trust is Involved, Along with Proof of Work Done So Far",
    description: "Comprehensive institutional track record, documented grassroots interventions, and project completion proof.",
    fileName: "07-trust-profile-activities.pdf",
    file: "/csr/07-trust-profile-activities.pdf",
    available: false
  },
  {
    id: 8,
    serial: "08",
    title: "All Trustees' Profiles, Trust Profile with Photograph, PAN Copy & ID Copy of All Members of the Trust",
    description: "Governing body member dossiers, photographs, KYC identity cards, and PAN documentation of trustees.",
    fileName: "08-trustees-profiles-pan-id.pdf",
    file: "/csr/08-trustees-profiles-pan-id.pdf",
    available: false
  },
  {
    id: 9,
    serial: "09",
    title: "Last 6 Months' Bank Statement & Cancelled Cheques (Active & Healthy Account)",
    description: "Official institutional bank statement covering the preceding 6 months along with cancelled cheque leaf.",
    fileName: "09-bank-statements-cancelled-cheques.pdf",
    file: "/csr/09-bank-statements-cancelled-cheques.pdf",
    available: false
  },
  {
    id: 10,
    serial: "10",
    title: "Blank Cheque Book to be Carried During the Performance, Along with the Signatory",
    description: "Institutional cheque book validation with designated signing authority protocols.",
    fileName: "10-blank-cheque-book.pdf",
    file: "/csr/10-blank-cheque-book.pdf",
    available: false
  },
  {
    id: 11,
    serial: "11",
    title: "Latest BRL Original, as Mentioned in Point #4 of the Sec. Note",
    description: "Original Board Resolution Letter conforming to section note compliance requirements.",
    fileName: "11-latest-brl.pdf",
    file: "/csr/11-latest-brl.pdf",
    available: false
  },
  {
    id: 12,
    serial: "12",
    title: "Resolution Letter and No-Objection from All the Trustees to Receive the Donation",
    description: "Formal board resolution and unanimous No Objection Certificate (NOC) executed by all governing trustees.",
    fileName: "12-resolution-noc.pdf",
    file: "/csr/12-resolution-noc.pdf",
    available: false
  },
  {
    id: 13,
    serial: "13",
    title: "CA-Certified Project Report, in Original",
    description: "Chartered Accountant certified project proposal, utilization schedule, and financial estimates.",
    fileName: "13-project-report.pdf",
    file: "/csr/13-project-report.pdf",
    available: false
  },
  {
    id: 14,
    serial: "14",
    title: "Requisition Letter in Favour of the Trust, Seeking Donation, on Old Dated Trust Letter Head",
    description: "Official formal donation requisition letter submitted on dated organizational stationery.",
    fileName: "14-requisition-letter.pdf",
    file: "/csr/14-requisition-letter.pdf",
    available: false
  },
  {
    id: 15,
    serial: "15",
    title: "Legal Entity Identifier, India Limited (LEIL)",
    description: "LEIL registration validation and global legal entity identification documentation.",
    fileName: "15-leil.pdf",
    file: "/csr/15-leil.pdf",
    available: false
  },
  {
    id: 16,
    serial: "16",
    title: "Society PAN Card",
    description: "Permanent Account Number card issued by the Income Tax Department to Aarushi Gramin Sansthan.",
    fileName: "16-society-pan-card.pdf",
    file: "/csr/16-society-pan-card.pdf",
    available: false
  }
];

export const additionalRequirements = {
  title: "Additional Requirement",
  text: "Self-attested copy of Aadhaar Card of the B-Party authorised person needs to be shared one day before the performance."
};

export const csrOrganizationInfo = {
  name: "Arushi Gramin Sansthan",
  location: "Rajgarh, Distt. Sirmour (H.P.)",
  registration: "Regd. No. 39/2003",
  address: "Near BDO Office, Habban road, Rajgarh, Distt. Sirmour, HP 173101",
  email: "arushirajgarh333@gmail.com",
  phone: "9805736066"
};
