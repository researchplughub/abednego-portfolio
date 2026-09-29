# Abenego Nyabicha — Engineering Portfolio

A modern, high-performance personal engineering portfolio positioning **Abenego Nyabicha** at the intersection of **Cybersecurity, Software/Cloud Engineering, and Data/AI**.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, optimized for zero-downtime deployment on **Vercel**.

---

## 🚀 Key Highlights & Architectural Features

- **Evidence-Based Case Studies**: Deep technical write-ups highlighting architecture, empirical findings, and operational delivery across cybersecurity, platforms, and data.
  - *Software Supply Chain Security & SBOM Visibility Analysis*
  - *ResearchPlugHub — Cloud Platform & Research Workflow System*
  - *MSc Fraud Detection & Imbalanced Data ML Pipeline*
  - *Automated Cloud Infrastructure & DevSecOps Hardening*
- **Aesthetic**: Premium dark engineering theme (`#080c14` near-black background, crisp slate cards, restrained cyan accents, and subtle technical grid).
- **Strict Data-UI Separation**: Content managed cleanly via structured TypeScript data files in `src/data/`.
- **Zero-TODO UI Guarantee**: Automated scripts and runtime filters ensure unverified placeholder fields never render in the UI.
- **Production Audit Verified**:
  - **100/100** SEO (Person JSON-LD, sitemap, robots, Open Graph)
  - **100/100** Best Practices
  - **100/100** Accessibility (WCAG AA compliant contrast & keyboard navigation)
  - **Dynamic Open Graph Images** generated on edge via `next/og`

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Structured Data**: Schema.org Person JSON-LD, dynamic `sitemap.ts`, dynamic `robots.ts`
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/researchplughub/abednego-portfolio.git
   cd abednego-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Set `NEXT_PUBLIC_SITE_URL=http://localhost:3000` for local testing.

4. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Audit outstanding content checklist**:
   ```bash
   npm run todos
   ```

6. **Production build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Import `researchplughub/abednego-portfolio`.
3. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-portfolio-domain.vercel.app` (or custom domain)
4. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link and deploy to your Vercel account.
