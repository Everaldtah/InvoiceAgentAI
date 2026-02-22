# InvoiceAgent AI

AI-powered invoice generation, data extraction, and payment tracking built with Next.js 14.

## Features

- **AI Invoice Generation** — Describe your services and get a formatted invoice instantly
- **Data Extraction** — Parse line items, totals, and client info from PDF/image invoices
- **Payment Reminders** — Automated follow-up emails at 7, 3, and 1 day before due dates
- **Revenue Dashboard** — Track outstanding, paid, and overdue invoices in real time

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **AI**: OpenAI GPT-4

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Add your keys to `.env.local`:

```env
OPENAI_API_KEY=your_openai_api_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/invoice/generate` | Generate a new invoice from description |
| `POST` | `/api/invoice/extract` | Extract data from uploaded invoice file |
| `POST` | `/api/invoice/remind` | Trigger payment reminder email |
| `GET` | `/api/invoice/status` | Get payment status for an invoice |

### Example: Generate Invoice

```bash
curl -X POST http://localhost:3000/api/invoice/generate \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Acme Corp",
    "services": [
      { "description": "Web development - 40 hours", "rate": 150, "quantity": 40 },
      { "description": "UI/UX design", "rate": 120, "quantity": 10 }
    ],
    "dueDate": "2026-03-15"
  }'
```

### Example: Extract Invoice Data

```bash
curl -X POST http://localhost:3000/api/invoice/extract \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Invoice #1042 from Supplier Ltd. Items: Hosting $99/mo, Support $49/mo. Due: March 1 2026."
  }'
```

## Project Structure

```
invoice-agent-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   └── api/
│   │       └── invoice/
│   │           ├── generate/route.ts   # Invoice generation
│   │           ├── extract/route.ts    # Data extraction
│   │           ├── remind/route.ts     # Payment reminders
│   │           └── status/route.ts     # Status check
│   └── lib/
│       └── invoice-agent.ts      # Core AI logic
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Pricing Plans

| Plan | Price | Invoices/mo |
|------|-------|-------------|
| Starter | $29/mo | 25 |
| Pro | $79/mo | 200 |
| Enterprise | $199/mo | Unlimited |

## Part of TheClawVault

This project is part of the [TheClawVault](https://theclawvault.com) AI skills marketplace.

---

Built with ❤️ for freelancers and small businesses.
