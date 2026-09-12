# Markow Studios — Portfolio

Freelance portfolio for Markow Studios (Chennai) — web design & development, brand/poster design, CRM/ERP systems, and WhatsApp/email automation (n8n).

Built with Next.js, Tailwind CSS, Framer Motion, and GSAP. Originally based on the [Folio template](https://github.com/rutaganda-salim/foliotemplate) by Salim Rutaganda / Jasmine Maduafokwa.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in EMAIL_PASSWORD with a Gmail App Password
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- Case studies: `src/utils/works.ts`
- Services: `src/utils/services.ts`
- Pricing: `src/utils/offers.ts`
- Resume: `src/utils/resume.ts`
- Site-wide SEO: `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`

## Deploy

Deployed on [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL`, `EMAIL_USER`, `EMAIL_PASSWORD`, and `EMAIL_CC` as environment variables in the Vercel project settings.
