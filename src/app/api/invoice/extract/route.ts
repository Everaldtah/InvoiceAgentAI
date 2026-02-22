import { NextRequest, NextResponse } from 'next/server'
import { extractInvoiceData } from '@/lib/invoice-agent'

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json()

    if (!text) {
      return NextResponse.json({ error: 'text is required' }, { status: 400 })
    }

    const extracted = await extractInvoiceData(text)
    return NextResponse.json({ extracted })
  } catch (error) {
    console.error('Invoice extraction error:', error)
    return NextResponse.json({ error: 'Failed to extract invoice data' }, { status: 500 })
  }
}
