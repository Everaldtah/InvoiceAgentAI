import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export interface LineItem {
  description: string
  quantity: number
  rate: number
  total: number
}

export interface GeneratedInvoice {
  invoiceNumber: string
  clientName: string
  issueDate: string
  dueDate: string
  lineItems: LineItem[]
  subtotal: number
  tax: number
  total: number
  notes: string
}

export interface ExtractedInvoice {
  vendor?: string
  client?: string
  invoiceNumber?: string
  date?: string
  dueDate?: string
  lineItems: LineItem[]
  total?: number
  currency: string
}

export async function generateInvoice(
  clientName: string,
  services: { description: string; rate: number; quantity: number }[],
  dueDate: string
): Promise<GeneratedInvoice> {
  const lineItems: LineItem[] = services.map(s => ({
    description: s.description,
    quantity: s.quantity,
    rate: s.rate,
    total: s.quantity * s.rate,
  }))

  const subtotal = lineItems.reduce((sum, item) => sum + item.total, 0)
  const tax = Math.round(subtotal * 0.1 * 100) / 100
  const total = subtotal + tax

  const prompt = `Generate a professional invoice note/summary for:
Client: ${clientName}
Services: ${services.map(s => `${s.description} (${s.quantity} x $${s.rate})`).join(', ')}
Due: ${dueDate}
Total: $${total}

Write a brief professional thank-you note (2 sentences max) to include on the invoice.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 100,
  })

  const notes = completion.choices[0]?.message?.content ?? 'Thank you for your business.'

  return {
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    clientName,
    issueDate: new Date().toISOString().split('T')[0],
    dueDate,
    lineItems,
    subtotal,
    tax,
    total,
    notes,
  }
}

export async function extractInvoiceData(text: string): Promise<ExtractedInvoice> {
  const prompt = `Extract structured invoice data from the following text. Return valid JSON only.

Text: "${text}"

Return this exact JSON structure:
{
  "vendor": "string or null",
  "client": "string or null",
  "invoiceNumber": "string or null",
  "date": "YYYY-MM-DD or null",
  "dueDate": "YYYY-MM-DD or null",
  "lineItems": [{ "description": "string", "quantity": number, "rate": number, "total": number }],
  "total": number or null,
  "currency": "USD"
}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 500,
    response_format: { type: 'json_object' },
  })

  const raw = completion.choices[0]?.message?.content ?? '{}'
  return JSON.parse(raw) as ExtractedInvoice
}

export async function generateReminderEmail(
  clientName: string,
  invoiceNumber: string,
  amount: number,
  dueDate: string,
  daysUntilDue: number
): Promise<{ subject: string; body: string }> {
  const prompt = `Write a professional payment reminder email.

Client: ${clientName}
Invoice: ${invoiceNumber}
Amount: $${amount}
Due Date: ${dueDate}
Days until due: ${daysUntilDue}

Return valid JSON: { "subject": "...", "body": "..." }
Keep the body under 100 words, professional and friendly.`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 300,
    response_format: { type: 'json_object' },
  })

  const raw = completion.choices[0]?.message?.content ?? '{}'
  return JSON.parse(raw) as { subject: string; body: string }
}
