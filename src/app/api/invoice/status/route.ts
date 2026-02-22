import { NextRequest, NextResponse } from 'next/server'

// Stub endpoint — connects to your payment/DB layer in production
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const invoiceId = searchParams.get('id')

  if (!invoiceId) {
    return NextResponse.json({ error: 'Invoice id is required' }, { status: 400 })
  }

  // Example response — replace with real DB lookup
  return NextResponse.json({
    invoiceId,
    status: 'pending',
    message: 'Connect this endpoint to your database to return real payment status.',
  })
}
