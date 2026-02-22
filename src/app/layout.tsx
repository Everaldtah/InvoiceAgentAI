import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceAgent AI - Smart Invoice Automation',
  description: 'AI-powered invoice generation, data extraction, and payment tracking',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
