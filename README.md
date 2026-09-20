# Aarushi Gramin Sansthan (आरुषि ग्रामीण संस्थान)

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-1.47.0-F56565?logo=lucide&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-stone.svg)](#)

> Official web portal and Corporate Social Responsibility (CSR) compliance verification platform for **Aarushi Gramin Sansthan** (Society Reg. No. 39/2003), a grassroots non-governmental organization working across Rajgarh, Distt. Sirmour and Solan in Himachal Pradesh.

---

## 📌 Table of Contents

- [About the Organization](#-about-the-organization)
- [Key Initiatives & Programs](#-key-initiatives--programs)
- [Features of the Web Application](#-features-of-the-web-application)
- [CSR Document Verification Portal](#-csr-document-verification-portal)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
  - [Linting](#linting)
- [Statutory & Contact Information](#-statutory--contact-information)

---

## 🏛 About the Organization

**Aarushi Gramin Sansthan (आरुषि ग्रामीण संस्थान)** is a registered grassroots society established in 2003 (**Reg. No. 39/2003**), operating from its office near BDO Office, Habban Road, Rajgarh, Distt. Sirmour, Himachal Pradesh. 

The organization is dedicated to uplifting rural and semi-urban communities through:
- Free preventative and diagnostic health camps.
- Government school infrastructure restoration under CSR partnerships.
- Community facility repairs including all-weather shelters at Samshan Ghats.
- Vocational livelihood training (cutting and tailoring) for rural women.
- Environmental conservation, tree plantation, and water preservation drives.
- Cultural advocacy and public welfare awareness through folk theater (*Aarushi Kala Manch*).

### Institutional Partnerships & CSR Collaborators
- **Sun Pharma Laboratories Ltd.** (CSR Project Implementation)
- **Toppan Speciality Films Private Limited** (CSR Project Implementation)
- **HP State AIDS Control Society**
- **National AIDS Control Organisation (NACO)**
- **Department of Health & Family Welfare, Himachal Pradesh**
- **Department of Information & Public Relations, Himachal Pradesh**

---

## 🌿 Key Initiatives & Programs

1. **Rural Government School Infrastructure Renovation (CSR)**
   - Complete revitalization of rural government schools.
   - Masonry restoration, wall patching, ceiling repairs, and protective whitewashing/painting.
   - JCB earthmoving machinery deployed for ground leveling, clearing overgrown vegetation, and establishing safe playgrounds for school children.
   - Dedicated CSR recognition plaques installed on site.

2. **Samshan Ghat & Community Facility Renovation**
   - Erection of heavy-duty steel truss framework with curved blue industrial sheet roofing for all-weather protection.
   - Laying durable interlocking paver courtyards and brick boundary seating.
   - Organizing afforestation drives with volunteer tree planting and drip irrigation lines.

3. **Free Community Health & Diagnostic Camps**
   - Health checkups providing diagnostic screening for Hepatitis A, B, and C, blood glucose, and blood pressure.
   - Free doctor consultations and preventative healthcare counseling for rural residents.

4. **Vocational Skill Training for Women**
   - Hands-on cutting, stitching, and garment tailoring workshops for women in rural Himachal.
   - Formal certificate distribution ceremonies recognizing successful trainees and promoting financial self-reliance.

5. **Aarushi Kala Manch (Folk Media & Awareness)**
   - Street theater (*Nukkad Natak*) and traditional Himachali musical performances.
   - Educational awareness campaigns on disaster management, water conservation (*"Giryo Ra Paani"*), HIV/AIDS stigma elimination, and government welfare programs.

---

## 💻 Features of the Web Application

- **Modern Editorial Aesthetic**: Curated color palette (earthy greens `#16422e`, warm amber accents `#731320`, and stone paper backgrounds `#FDFBF7`) paired with Google Fonts (*Plus Jakarta Sans* and *Merriweather*).
- **Interactive Lightbox Viewer**: Built-in full-screen modal with image navigation (previous/next), captions, and category badges for high-resolution project photos and press clippings.
- **Dedicated CSR Verification Route (`/csr-verification`)**: A specialized, transparent portal listing the 16-point statutory compliance checklist for institutional donors, CSR directors, and auditors.
- **Responsive Architecture**: Fully mobile-friendly navigation with smooth scroll anchors, mobile drawer menu, and dynamic SEO document title/meta description management.
- **Interactive Contact & Inquiry Form**: Client-validated message form along with verified contact details, email links, phone dialers, and registration references.

---

## 📋 CSR Document Verification Portal

The application includes a specialized route (`/csr-verification` or `/#csr-verification`) implementing the **16-Point Statutory CSR Due-Diligence Checklist**:

| # | Document Title | Status | Format |
|---|---|:---:|:---:|
| **01** | 12AA & 80G Certificate Copy | Verified | PDF |
| **02** | Registration Certificate (NITI Aayog / NGO Darpan) | Verified | PDF |
| **03** | 5 Black Letter Heads | Verified | PDF |
| **04** | Bye-laws of the Trust & Rubber Stamp Specimen | Verified | PDF |
| **05** | 3 Years' ITR Copies | Available on Request | PDF |
| **06** | 3 Years' CA Audited Balance Sheet & Income/Expenditure Account | Available on Request | PDF |
| **07** | Trust Profile & Documented Track Record of Work | Available on Request | PDF |
| **08** | Trustees' Profiles, Photographs, PAN & KYC IDs | Available on Request | PDF |
| **09** | Last 6 Months' Bank Statements & Cancelled Cheques | Available on Request | PDF |
| **10** | Cheque Book Validation Protocol with Designated Signatory | Available on Request | PDF |
| **11** | Latest Board Resolution Letter (BRL) | Available on Request | PDF |
| **12** | Unanimous Board Resolution & NOC to Receive Donation | Available on Request | PDF |
| **13** | CA-Certified Project Report & Utilization Estimates | Available on Request | PDF |
| **14** | Requisition Letter in Favor of Trust on Letterhead | Available on Request | PDF |
| **15** | Legal Entity Identifier, India Limited (LEIL) | Available on Request | PDF |
| **16** | Society PAN Card Copy | Available on Request | PDF |

Verified documents can be previewed directly in a responsive in-browser PDF modal or downloaded for offline audit review.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) (`react` & `react-dom` `^19.2.8`)
- **Build System**: [Vite 8](https://vite.dev/) (`vite` `^8.3.0`) with `@vitejs/plugin-react` `^6.1.1`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` `^4.3.3`
- **Icons**: [Lucide React](https://lucide.dev/) `^1.47.0`
- **Fonts**:
  - *Plus Jakarta Sans* (Clean, modern interface typography)
  - *Merriweather* (Warm editorial serif for headings)
- **Linting**: [ESLint](https://eslint.org/) `^10.10.0` with React hooks & refresh plugins

---

## 📂 Project Directory Structure

```text
ngo-himachal/
├── public/
│   ├── csr/                      # Statutory PDF documents (12A, 80G, NITI Aayog, etc.)
│   ├── images/
│   │   ├── awareness/            # Folk media, nukkad natak, and awareness drives
│   │   ├── health/               # Medical camp consultations and testing photos
│   │   ├── hero/                 # Hero banners and youth rally imagery
│   │   ├── premises/             # NGO office premises and signboard
│   │   ├── press/                # Newspaper clippings (Solan Kesari, Amar Ujala, Divya Himachal)
│   │   ├── samshanghat/          # Samshan Ghat shed, paver flooring, and tree planting
│   │   ├── schoolrenovation/     # Sun Pharma & Toppan CSR plaques, painting, JCB leveling
│   │   └── training/             # Cutting & tailoring training and certificate distribution
│   └── favicon.svg               # Application favicon
├── src/
│   ├── assets/                   # Static imported assets
│   ├── components/
│   │   ├── About.jsx             # Organization history, legal registration, and mission
│   │   ├── AreasOfWork.jsx       # Grid of core focus domains
│   │   ├── Awareness.jsx         # Aarushi Kala Manch street theater & awareness section
│   │   ├── CommunityPresence.jsx # Grassroots reach across Solan & Sirmour
│   │   ├── Contact.jsx           # Office details, interactive contact form & inquiry
│   │   ├── FeaturedActivities.jsx# Highlights of CSR school work & community projects
│   │   ├── Footer.jsx            # Navigation links, address, copyright & attribution
│   │   ├── Gallery.jsx           # Filterable photo gallery with category tabs
│   │   ├── HealthCamp.jsx        # Free diagnostic camp showcase
│   │   ├── Hero.jsx              # Hero banner with call-to-action buttons
│   │   ├── Lightbox.jsx          # Full-screen accessible image modal viewer
│   │   ├── Navbar.jsx            # Sticky navigation bar with mobile drawer & CSR link
│   │   ├── PressCoverage.jsx     # Documented newspaper coverage archive
│   │   ├── RenovationProjects.jsx# Before/after CSR school & community facility repairs
│   │   ├── SectionHeading.jsx    # Reusable section heading with badges & typography
│   │   └── Training.jsx          # Women's tailoring and skill training spotlight
│   ├── data/
│   │   ├── csrDocuments.js       # 16-point CSR checklist configuration & metadata
│   │   └── ngoData.js            # Centralized NGO information, initiatives, gallery & press items
│   ├── pages/
│   │   └── CSRVerification.jsx   # Dedicated CSR compliance checklist & PDF preview page
│   ├── App.jsx                   # Root application component with routing & state
│   ├── index.css                 # Global CSS and Tailwind CSS v4 styling rules
│   └── main.jsx                  # React application entry point
├── index.html                    # HTML template with SEO meta tags & Google Fonts
├── package.json                  # Dependencies and build scripts
├── vite.config.js                # Vite build and Tailwind CSS plugin configuration
└── README.md                     # Comprehensive project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher recommended) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/ankit-gupta-git/sql-agent-yt-.git
cd ngo-himachal
npm install
```

### Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build

Create an optimized, minified production bundle in the `dist/` directory:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality and adherence to React best practices:

```bash
npm run lint
```

---

## 📞 Statutory & Contact Information

| Parameter | Details |
|---|---|
| **Organization Name** | **Aarushi Gramin Sansthan (आरुषि ग्रामीण संस्थान)** |
| **Registration Number** | **39/2003** (Registered under the Societies Registration Act) |
| **Office Address** | Near BDO Office, Habban Road, Rajgarh, Distt. Sirmour, Himachal Pradesh – 173101 |
| **Primary Contact** | [+91 98057 36066](tel:9805736066) |
| **Official Email** | [arushirajgarh333@gmail.com](mailto:arushirajgarh333@gmail.com) |
| **Operational Area** | Rajgarh, Solan, Dadahu, Nohradhar, and surrounding rural Himachal Pradesh |
