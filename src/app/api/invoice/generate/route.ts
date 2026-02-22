import { NextRequest, NextResponse } from 'next/server'
import { generateInvoice } from '@/lib/invoice-agent'

export async function POST(req: NextRequest) {
  try {
    const { clientName, services, dueDate } = await req.json()

    if (!clientName || !services || !dueDate) {
      return NextResponse.json(
        { error: 'clientName, services, and dueDate are required' },
        { status: 400 }
      )
    }

    const invoice = await generateInvoice(clientName, services, dueDate)
    return NextResponse.json({ invoice })
  } catch (error) {
    console.error('Invoice generation error:', error)
    return NextResponse.json({ error: 'Failed to generate invoice' }, { status: 500 })
  }
}
