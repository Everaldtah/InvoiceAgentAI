import { NextRequest, NextResponse } from 'next/server'
import { generateReminderEmail } from '@/lib/invoice-agent'

export async function POST(req: NextRequest) {
  try {
    const { clientName, invoiceNumber, amount, dueDate, daysUntilDue } = await req.json()

    if (!clientName || !invoiceNumber || !amount || !dueDate) {
      return NextResponse.json(
        { error: 'clientName, invoiceNumber, amount, and dueDate are required' },
        { status: 400 }
      )
    }

    const email = await generateReminderEmail(
      clientName,
      invoiceNumber,
      amount,
      dueDate,
      daysUntilDue ?? 7
    )

    return NextResponse.json({ email })
  } catch (error) {
    console.error('Reminder generation error:', error)
    return NextResponse.json({ error: 'Failed to generate reminder' }, { status: 500 })
  }
}
